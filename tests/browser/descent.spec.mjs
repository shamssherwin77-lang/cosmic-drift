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
