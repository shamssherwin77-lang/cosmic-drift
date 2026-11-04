import {test,expect} from '@playwright/test';
async function harness(page){
 await page.route('**/descent-harness',r=>r.fulfill({contentType:'text/html',body:'<html><body style="margin:0"><canvas style="width:100vw;height:100vh;display:block"></canvas><div id="stick"></div><input aria-label="Menu slider" type="range" style="position:fixed;top:10px;right:10px"></body></html>'}));await page.goto('/descent-harness');
 await page.evaluate(async()=>{const {FlightController,bindFlightInput}=await import('/src/controls.ts');const controller=new FlightController(),settings={freeFlight:true,mode:'Manual Flight',started:true,paused:false,blocked:false,speed:100,reduced:false,motion:.6,sensitivity:1,touchSensitivity:.7,invertMouseX:false,invertMouseY:false};const input=bindFlightInput(document.querySelector('canvas'),document.querySelector('#stick'),controller,()=>settings);controller.step(0,settings);input.sync();window.descent={controller,settings,input};});
}
const step=page=>page.evaluate(()=>{const {controller,settings,input}=window.descent;input.sync();for(let i=0;i<60;i++)controller.step(1/60,settings);return{position:controller.position.toArray(),yaw:controller.yaw,pitch:controller.pitch,roll:controller.roll,keys:[...controller.keys]};});

test('pointer lock steers the vessel, local thrust/roll work and release clears held input',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await harness(page);await page.locator('canvas').click({position:{x:350,y:200}});await expect.poll(()=>page.evaluate(()=>document.pointerLockElement?.tagName)).toBe('CANVAS');
 await page.mouse.move(570,160,{steps:8});const aimed=await step(page);expect(Math.abs(aimed.yaw)+Math.abs(aimed.pitch)).toBeGreaterThan(.02);
 await page.keyboard.down('d');const strafed=await step(page);await page.keyboard.up('d');expect(Math.hypot(...strafed.position)).toBeGreaterThan(50);expect(strafed.yaw).toBeCloseTo(aimed.yaw,2);
 await page.keyboard.down('q');const rolled=await step(page);await page.keyboard.up('q');expect(Math.abs(rolled.roll)).toBeGreaterThan(.3);
 await page.keyboard.down('Control');await page.keyboard.down('w');expect(await page.evaluate(()=>[...window.descent.controller.keys])).toContain('KeyW');await page.keyboard.up('w');await page.keyboard.up('Control');
 await page.keyboard.down('w');await page.keyboard.press('Escape');await expect.poll(()=>page.evaluate(()=>document.pointerLockElement===null)).toBe(true);await expect.poll(()=>page.evaluate(()=>window.descent.controller.keys.size)).toBe(0);await page.keyboard.up('w');expect(errors).toEqual([]);
});

test('blocked menus release lock, slider keyboard input is isolated and disposal removes listeners',async({page})=>{
 await harness(page);await page.locator('canvas').click({position:{x:350,y:200}});await expect.poll(()=>page.evaluate(()=>!!document.pointerLockElement)).toBe(true);await page.keyboard.down('w');await step(page);
 await page.evaluate(()=>{window.descent.settings.blocked=true;window.descent.input.sync();});await expect.poll(()=>page.evaluate(()=>!!document.pointerLockElement)).toBe(false);const stopped=await step(page);await step(page);expect((await step(page)).position).toEqual(stopped.position);await page.keyboard.up('w');
 await page.evaluate(()=>{window.descent.settings.blocked=false;window.descent.input.sync();});await page.getByRole('slider').focus();await page.keyboard.press('ArrowRight');expect(await page.evaluate(()=>window.descent.controller.keys.size)).toBe(0);
 await page.evaluate(()=>window.descent.input.dispose());await page.keyboard.press('w');expect(await page.evaluate(()=>window.descent.controller.keys.size)).toBe(0);
});

test('existing app opts in through settings, Space ascends instead of pausing, and disabling restores cruise controls',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/');await page.getByRole('button',{name:'Start journey',exact:true}).click();await page.getByRole('button',{name:'Settings',exact:true}).click();await page.getByRole('combobox',{name:'Graphics quality'}).selectOption('Low');const option=page.getByRole('checkbox',{name:'Descent free flight',exact:true});await expect(option).not.toBeChecked();await option.check();await page.getByRole('button',{name:'Close settings',exact:true}).click();await page.locator('canvas').click({position:{x:450,y:200}});await expect.poll(()=>page.evaluate(()=>!!document.pointerLockElement)).toBe(true);
 await page.keyboard.down('Space');await page.waitForTimeout(150);await expect(page.getByRole('button',{name:'Pause',exact:true})).toBeVisible();await page.keyboard.up('Space');await page.evaluate(()=>document.exitPointerLock());await expect.poll(()=>page.evaluate(()=>!!document.pointerLockElement)).toBe(false);
 await page.getByRole('button',{name:'Settings',exact:true}).click();await option.uncheck();await page.getByRole('button',{name:'Close settings',exact:true}).click();await page.locator('canvas').click({position:{x:450,y:200}});await expect.poll(()=>page.evaluate(()=>!!document.pointerLockElement)).toBe(false);await page.keyboard.press('Space');await expect(page.getByRole('button',{name:'Resume',exact:true})).toBeVisible();expect(errors).toEqual([]);
});

test('Jump retains free-flight selection, releases mouse capture and resumes at rest without held thrust',async({page})=>{
 test.setTimeout(90000);const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/');await page.getByRole('button',{name:'Start journey',exact:true}).click();await page.getByRole('button',{name:'Settings',exact:true}).click();await page.getByRole('combobox',{name:'Graphics quality'}).selectOption('Low');await page.getByRole('checkbox',{name:'Descent free flight',exact:true}).check();await page.getByRole('button',{name:'Close settings',exact:true}).click();await page.locator('canvas').click({position:{x:450,y:200}});await expect.poll(()=>page.evaluate(()=>!!document.pointerLockElement)).toBe(true);
 const seed=await page.locator('main').getAttribute('data-world-seed');await page.keyboard.down('w');await page.keyboard.press('j');await expect(page.locator('main')).toHaveAttribute('data-jump-phase','charging');await expect.poll(()=>page.evaluate(()=>!!document.pointerLockElement)).toBe(false);await page.keyboard.up('w');await expect(page.locator('main')).toHaveAttribute('data-jump-phase','idle',{timeout:45000});await expect(page.locator('main')).not.toHaveAttribute('data-world-seed',seed);await expect(page.locator('.cruise-strip label>span')).toHaveText('0 u/s');
 await page.getByRole('button',{name:'Settings',exact:true}).click();await expect(page.getByRole('checkbox',{name:'Descent free flight',exact:true})).toBeChecked();expect(errors).toEqual([]);
});

test('idle float moves the real vessel rig together while navigation rests, and Reduced motion stops it',async({page})=>{
 await page.route('**/src/scene.ts*',async route=>{const response=await route.fetch(),source=await response.text();expect(source).toContain('const ship = new T.Group();');await route.fulfill({response,body:source.replace('const ship = new T.Group();','const ship = new T.Group();window.floatRig=ship;')});});
 await page.route('**/float-rig-harness',r=>r.fulfill({contentType:'text/html',body:'<html><body style="margin:0"><div id="host" style="width:640px;height:400px"></div><div id="stick"></div></body></html>'}));await page.goto('/float-rig-harness');
 await page.evaluate(async()=>{
  const {createScene}=await import('/src/scene.ts'),{FlightController}=await import('/src/controls.ts');
  const controller=new FlightController(),settings={freeFlight:true,mode:'Manual Flight',started:true,paused:false,blocked:false,speed:18,reduced:false,motion:.6,sensitivity:1,touchSensitivity:.7,invertMouseX:false,invertMouseY:false,region:0,cockpit:true,quality:'Low',lighting:'Balanced',bloom:0,performanceMode:false,adaptive:false};
  const dispose=createScene(document.querySelector('#host'),()=>settings,controller,document.querySelector('#stick'));window.floatHarness={controller,settings,dispose};
 });
 await expect.poll(()=>page.evaluate(()=>!!window.floatRig)).toBe(true);await page.waitForTimeout(500);
 const read=()=>page.evaluate(()=>{const rig=window.floatRig,c=rig.children.find(o=>o.isCamera);return{p:rig.position.toArray(),q:rig.quaternion.toArray(),cameraLocal:c.position.toArray(),navigation:window.floatHarness.controller.position.toArray(),children:rig.children.map(c=>c.uuid)};});
 const first=await read();await page.waitForTimeout(900);const second=await read();expect(second.p).not.toEqual(first.p);expect(second.q).not.toEqual(first.q);expect(second.navigation).toEqual([0,0,0]);expect(second.cameraLocal).toEqual(first.cameraLocal);expect(second.children).toEqual(first.children);
 await page.evaluate(()=>{window.floatHarness.settings.paused=true;});await page.waitForTimeout(250);const frozen=await read();await page.waitForTimeout(350);expect((await read()).p).toEqual(frozen.p);expect((await read()).q).toEqual(frozen.q);
 await page.evaluate(()=>{window.floatHarness.settings.paused=false;window.floatHarness.settings.reduced=true;});await expect.poll(async()=>Math.max(...(await read()).q.slice(0,3).map(Math.abs))).toBeLessThan(1e-8);expect((await read()).p).toEqual([0,0,5]);
 await page.evaluate(()=>{window.floatHarness.dispose();});
});
