import {test,expect} from '@playwright/test';
import {skipIntro} from './skip-intro.mjs';
async function mockPermission(page,grant='granted'){
 await page.addInitScript(grant=>{window.phoneGrant=grant;Object.defineProperty(DeviceOrientationEvent,'requestPermission',{configurable:true,value:()=>window.phoneGrant==='pending'?new Promise(resolve=>window.resolvePhonePermission=resolve):Promise.resolve(window.phoneGrant)});},grant);
}
async function harness(page,grant='granted'){
 await mockPermission(page,grant);
 await page.route('**/phone-harness',r=>r.fulfill({contentType:'text/html',body:'<html><head><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0"><canvas style="display:block;width:100vw;height:100vh;touch-action:none"></canvas><div id="stick" style="position:fixed;left:20px;bottom:20px;width:100px;height:100px;touch-action:none"></div><button id="enable" style="position:fixed;top:10px;left:10px">Enable</button><button id="stop" style="position:fixed;top:10px;left:100px">Stop</button></body></html>'}));await page.goto('/phone-harness');
 await page.evaluate(async()=>{
  const {FlightController,bindFlightInput}=await import('/src/controls.ts'),{bindPhoneFlight}=await import('/src/phone-flight.ts');
  const c=new FlightController(),s={freeFlight:true,mobileDescent:true,gyroSensitivity:1,mode:'Manual Flight',started:true,paused:false,blocked:false,speed:100,reduced:false,motion:0,sensitivity:1,touchSensitivity:.7,invertMouseX:false,invertMouseY:false};
  const add=window.addEventListener.bind(window),remove=window.removeEventListener.bind(window),listeners=new Set();window.addEventListener=(type,fn,...rest)=>{if(type==='deviceorientation')listeners.add(fn);return add(type,fn,...rest);};window.removeEventListener=(type,fn,...rest)=>{if(type==='deviceorientation')listeners.delete(fn);return remove(type,fn,...rest);};
  const statuses=[],input=bindFlightInput(document.querySelector('canvas'),document.querySelector('#stick'),c,()=>s),phone=bindPhoneFlight(c,()=>s,status=>statuses.push(status));c.step(0,s);input.sync();phone.sync();window.phoneHarness={c,s,phone,input,statuses,listeners};document.querySelector('#enable').onclick=phone.enable;document.querySelector('#stop').onclick=phone.disable;
 });
}
const sensor=(page,alpha,beta=90,gamma=0)=>page.evaluate(({alpha,beta,gamma})=>window.dispatchEvent(new DeviceOrientationEvent('deviceorientation',{alpha,beta,gamma})),{alpha,beta,gamma});
const physicalYaw=async(page,yaw)=>{const angle=await page.evaluate(()=>screen.orientation.angle);return sensor(page,yaw+(angle===90?90:angle===270||angle===-90?-90:0),angle%180===0?90:0,angle===90?-90:angle===270||angle===-90?90:0);};
const step=page=>page.evaluate(()=>{const h=window.phoneHarness;h.input.sync();h.phone.sync();for(let i=0;i<120;i++)h.c.step(1/60,h.s);return{q:h.c.shipQuaternion.toArray(),look:h.c.lookQuaternion.toArray(),position:h.c.position.toArray()};});
const sameAttitude=(a,b)=>expect(Math.abs(a.reduce((n,x,i)=>n+x*b[i],0))).toBeGreaterThan(.99999999);
const status=page=>page.evaluate(()=>window.phoneHarness.statuses.at(-1)?.state);
test('permission is explicit, denial is recoverable and sensor listeners are cleaned up',async({page})=>{
 await harness(page,'denied');expect(await page.evaluate(()=>window.phoneHarness.listeners.size)).toBe(0);await page.getByText('Enable',{exact:true}).click();await expect.poll(()=>status(page)).toBe('denied');expect(await page.evaluate(()=>window.phoneHarness.listeners.size)).toBe(0);
 await page.evaluate(()=>window.phoneGrant='granted');await page.getByText('Enable',{exact:true}).click();await expect.poll(()=>status(page)).toBe('waiting');await sensor(page,null);expect(await status(page)).toBe('waiting');await sensor(page,0);await sensor(page,180);await expect.poll(()=>status(page)).toBe('active');const r=await step(page);expect(Math.abs(r.q[1])).toBeGreaterThan(.99);expect(r.look).toEqual([0,0,0,1]);expect(r.position).toEqual([0,0,0]);
 await page.getByText('Enable',{exact:true}).click();expect(await page.evaluate(()=>window.phoneHarness.listeners.size)).toBe(1);await page.getByText('Stop',{exact:true}).click();expect(await page.evaluate(()=>window.phoneHarness.listeners.size)).toBe(0);await page.evaluate(()=>window.phoneHarness.phone.dispose());expect(await page.evaluate(()=>window.phoneHarness.listeners.size)).toBe(0);
});
test('paused/menu and screen changes re-anchor without a heading jump, and centering preserves the ship',async({page})=>{
 await harness(page);await page.getByText('Enable',{exact:true}).click();await sensor(page,0);await sensor(page,30);const start=await step(page);
 await page.evaluate(()=>{const h=window.phoneHarness;h.s.paused=true;h.phone.sync();});await sensor(page,150);expect((await step(page)).q).toEqual(start.q);
 await page.evaluate(()=>{const h=window.phoneHarness;h.s.paused=false;h.phone.sync();});await sensor(page,180);const resumed=await step(page);sameAttitude(resumed.q,start.q);await sensor(page,190);const moved=await step(page);expect(moved.q).not.toEqual(start.q);
 await page.evaluate(()=>window.phoneHarness.phone.recenter());await sensor(page,300);sameAttitude((await step(page)).q,moved.q);await page.evaluate(()=>window.dispatchEvent(new Event('orientationchange')));await sensor(page,90,0,-90);sameAttitude((await step(page)).q,moved.q);
 await page.evaluate(()=>window.dispatchEvent(new Event('blur')));await sensor(page,200);sameAttitude((await step(page)).q,moved.q);await page.evaluate(()=>window.dispatchEvent(new Event('focus')));await sensor(page,280);sameAttitude((await step(page)).q,moved.q);
 await page.evaluate(()=>{window.phoneHarness.s.blocked=true;window.phoneHarness.phone.sync();});await sensor(page,270);sameAttitude((await step(page)).q,moved.q);
});
test('cancelling a pending permission request cannot attach a late sensor listener',async({page})=>{
 await harness(page,'pending');await page.getByText('Enable',{exact:true}).click();await expect.poll(()=>status(page)).toBe('requesting');await page.getByText('Stop',{exact:true}).click();await page.evaluate(()=>window.resolvePhonePermission('granted'));await expect.poll(()=>status(page)).toBe('off');expect(await page.evaluate(()=>window.phoneHarness.listeners.size)).toBe(0);
});
test('sensor timeout releases listeners and swipe-to-steer remains available',async({page})=>{
 await harness(page);await page.clock.install();await page.getByText('Enable',{exact:true}).click();await page.clock.runFor(4600);await expect.poll(()=>status(page)).toBe('unavailable');expect(await page.evaluate(()=>window.phoneHarness.listeners.size)).toBe(0);
 const cdp=await page.context().newCDPSession(page);await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{id:1,x:300,y:160}]});await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{id:1,x:420,y:130}]});await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});const r=await step(page);expect(Math.abs(r.q[1])+Math.abs(r.q[0])).toBeGreaterThan(.05);expect(r.look).toEqual([0,0,0,1]);
});
async function app(page,challenge=false,grant='granted'){
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await mockPermission(page,grant);
 await page.route('**/src/main.tsx*',async route=>{const response=await route.fetch(),source=await response.text();const body=source.replace('new FlightController()','(window.mobilePilot??=new FlightController())').replaceAll('combatInput: combatInput.current','combatInput: (window.mobileFire=combatInput.current)');await route.fulfill({response,body});});
 await page.goto('/');await skipIntro(page);await page.getByRole('button',{name:challenge?'Challenge flight':'Start journey',exact:!challenge}).click();await page.getByRole('button',{name:'Settings',exact:true}).click();await page.getByLabel('Performance mode',{exact:true}).check();await page.getByRole('button',{name:'Close settings',exact:true}).click();return errors;
}
test.describe('Android phone controls',()=>{
 test.use({viewport:{width:640,height:400},isMobile:true,hasTouch:true,deviceScaleFactor:1});
 test('real mobile checkbox works, gyro turns the ship and disabling Descent restores cruise controls',async({page})=>{
  test.setTimeout(100000);const errors=await app(page);await expect(page.locator('main')).toHaveClass(/mobile-descent/);await page.getByRole('button',{name:'Settings',exact:true}).click();const box=page.getByRole('checkbox',{name:'Descent free flight',exact:true});await expect(box).toBeEnabled();await expect(box).toBeChecked();await box.uncheck();await expect(page.locator('main')).not.toHaveClass(/mobile-descent/);await box.check();await page.getByRole('slider',{name:'Phone steering sensitivity',exact:true}).fill('1.15');await page.getByRole('slider',{name:'Phone steering sensitivity',exact:true}).fill('1');await page.getByRole('button',{name:'Close settings',exact:true}).click();
  await page.getByRole('button',{name:'Enable phone steering',exact:true}).click();await physicalYaw(page,0);for(let a=10;a<=180;a+=10)await physicalYaw(page,a);await expect(page.locator('.phone-steering')).toHaveAttribute('data-state','active');await expect.poll(()=>page.evaluate(()=>Math.abs(window.mobilePilot.shipQuaternion.y)),{timeout:15000}).toBeGreaterThan(.97);expect(await page.evaluate(()=>window.mobilePilot.lookQuaternion.toArray())).toEqual([0,0,0,1]);
  await page.getByRole('button',{name:'Center phone steering',exact:true}).click();const q=await page.evaluate(()=>window.mobilePilot.shipQuaternion.toArray());await physicalYaw(page,280);expect(await page.evaluate(()=>window.mobilePilot.shipQuaternion.toArray())).toEqual(q);
  await page.getByRole('button',{name:'Disable phone steering',exact:true}).click();await expect(page.locator('.phone-steering')).toHaveAttribute('data-state','off');await expect(page.getByRole('group',{name:'Ship roll controls'})).toBeVisible();expect(errors).toEqual([]);
 });
 test('movement, roll and FIRE own different fingers; pause and cancellation clear held actions',async({page,context})=>{
  test.setTimeout(100000);const errors=await app(page,true),cdp=await context.newCDPSession(page);await expect.poll(()=>page.evaluate(()=>!!window.mobileFire)).toBe(true);
  const r=await page.getByRole('group',{name:'Touch flight joystick'}).boundingBox(),roll=await page.getByRole('button',{name:'Roll left',exact:true}).boundingBox(),fire=await page.getByRole('button',{name:'Fire weapon',exact:true}).boundingBox();
  const a={id:1,x:r.x+r.width*.8,y:r.y+r.height*.3},b={id:2,x:roll.x+roll.width/2,y:roll.y+roll.height/2},c={id:3,x:fire.x+fire.width/2,y:fire.y+fire.height/2};const send=(type,touchPoints)=>cdp.send('Input.dispatchTouchEvent',{type,touchPoints});
  await send('touchStart',[a]);await send('touchStart',[a,b]);await send('touchStart',[a,b,c]);await expect.poll(()=>page.evaluate(()=>({move:window.mobilePilot.touchMotion.active,roll:window.mobilePilot.touchRollLeft,fire:window.mobileFire.firing}))).toEqual({move:true,roll:true,fire:true});
  await send('touchEnd',[b]);expect(await page.evaluate(()=>window.mobilePilot.touchRollLeft)).toBe(false);expect(await page.evaluate(()=>window.mobileFire.firing)).toBe(true);await send('touchEnd',[a]);expect(await page.evaluate(()=>window.mobilePilot.touchMotion.active)).toBe(false);expect(await page.evaluate(()=>window.mobileFire.firing)).toBe(true);await send('touchCancel',[]);expect(await page.evaluate(()=>window.mobileFire.firing)).toBe(false);
  await send('touchStart',[a,b]);await page.getByRole('button',{name:'Pause',exact:true}).dispatchEvent('click');await expect.poll(()=>page.evaluate(()=>[window.mobilePilot.touchMotion.active,window.mobilePilot.touchRollLeft,window.mobileFire.firing])).toEqual([false,false,false]);await send('touchCancel',[]);expect(errors).toEqual([]);
 });
 for(const viewport of [{width:390,height:844},{width:915,height:412}])test(`phone layout and denied-sensor fallback ${viewport.width}x${viewport.height}`,async({page})=>{
  test.setTimeout(100000);await page.setViewportSize(viewport);const errors=await app(page,false,'denied');await page.getByRole('button',{name:'Enable phone steering',exact:true}).click();await expect(page.locator('.phone-steering')).toHaveAttribute('data-state','denied');await expect(page.locator('.phone-sensor-note')).toContainText('Motion sensors');
  for(const name of ['Roll left','Roll right']){const b=page.getByRole('button',{name,exact:true}),r=await b.boundingBox();expect(r.width).toBeGreaterThanOrEqual(44);expect(r.y+r.height).toBeLessThanOrEqual(viewport.height);expect(await b.evaluate(el=>{const r=el.getBoundingClientRect();return document.elementFromPoint(r.x+r.width/2,r.y+r.height/2)?.closest('button')===el;})).toBe(true);}
  await expect(page.getByRole('slider',{name:'Cruise speed',exact:true})).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollHeight<=innerHeight)).toBe(true);
  await page.screenshot({path:`/workspace/artifacts/gyro-descent/Phone-${viewport.width}x${viewport.height}.jpg`,type:'jpeg',quality:90});expect(errors).toEqual([]);
 });
});
