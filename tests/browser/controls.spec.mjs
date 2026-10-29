import { test, expect } from '@playwright/test';

async function harness(page) {
  await page.route('**/control-harness', route => route.fulfill({
    contentType: 'text/html',
    body: `<html><head><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0"><canvas style="display:block;width:100vw;height:100vh;touch-action:none"></canvas><div id="stick" style="position:fixed;left:20px;bottom:20px;width:110px;height:110px;touch-action:none"></div><input aria-label="Menu slider" type="range" style="position:fixed;right:20px;top:20px"></body></html>`,
  }));
  await page.goto('/control-harness');
  await page.evaluate(async () => {
    const { FlightController, bindFlightInput } = await import('/src/controls.ts');
    const controller = new FlightController();
    const settings = {mode:'Manual Flight',started:true,paused:false,blocked:false,speed:18,reduced:false,motion:.6,sensitivity:1,touchSensitivity:.7,invertMouseX:false,invertMouseY:false};
    const input = bindFlightInput(document.querySelector('canvas'), document.querySelector('#stick'), controller, () => settings);
    controller.step(0, settings); input.sync();
    document.querySelector('#stick').addEventListener('pointerdown',e=>window.stickPointerId=e.pointerId);
    window.harness = { controller, settings, input };
  });
}
const state = page => page.evaluate(() => {
  const c = window.harness.controller;
  return {yaw:c.yaw,pitch:c.pitch,yawVelocity:c.yawVelocity,lookYaw:c.lookTargetYaw,lookPitch:c.lookTargetPitch,touchX:c.touchX,touchY:c.touchY,active:c.touchSteering,keys:[...c.keys]};
});
const step = page => page.evaluate(() => {
  const {controller, settings,input} = window.harness;
  input.sync(); for(let i=0;i<60;i++)controller.step(1/60,settings);
});

test('desktop: directions, captured drag, blur, release and menu isolation', async ({page}) => {
  await harness(page);
  await page.keyboard.down('d'); await step(page); expect((await state(page)).yaw).toBeLessThan(0);
  await page.keyboard.up('d'); expect((await state(page)).keys).toEqual([]);
  await page.mouse.move(350,150); await page.mouse.down(); await page.mouse.move(450,100,{steps:8}); await page.mouse.up();
  const looked=await state(page);expect(looked.lookYaw).toBeLessThan(0);expect(looked.lookPitch).toBeGreaterThan(0);
  await page.mouse.move(650,250);expect((await state(page)).lookYaw).toBe(looked.lookYaw);
  await page.keyboard.down('a'); await page.evaluate(()=>window.dispatchEvent(new Event('blur')));
  expect((await state(page)).keys).toEqual([]);expect((await state(page)).yawVelocity).toBe(0);await page.keyboard.up('a');
  await page.getByRole('slider').focus();await page.keyboard.press('ArrowRight');expect((await state(page)).keys).toEqual([]);
  await page.evaluate(()=>{window.harness.settings.blocked=true;window.harness.input.sync();});
  await page.mouse.move(350,150);await page.mouse.down();await page.mouse.move(550,200);await page.mouse.up();
  expect((await state(page)).lookYaw).toBe(0); // blur discarded the pending look target
});

test.describe('Android-style landscape touch input', () => {
  test.use({viewport:{width:915,height:412},hasTouch:true,isMobile:true,deviceScaleFactor:1});
  test('two fingers own independent steering/look roles; extra fingers and cancellation are safe', async ({page,context}) => {
    await harness(page);
    const cdp=await context.newCDPSession(page);
    const send=(type,points)=>cdp.send('Input.dispatchTouchEvent',{type,touchPoints:points.map(([id,x,y])=>({id,x,y}))});
    const rect=await page.locator('#stick').boundingBox();const x=rect.x+rect.width/2,y=rect.y+rect.height/2;
    await send('touchStart',[[1,x,y]]);await send('touchMove',[[1,x+35,y]]);
    expect((await state(page)).touchX).toBeGreaterThan(.5);
    await page.keyboard.down('a');expect((await state(page)).keys).toEqual([]);await page.keyboard.up('a');
    await send('touchStart',[[1,x+35,y],[2,600,140]]);
    await send('touchMove',[[1,x+35,y],[2,650,110]]);
    await expect.poll(async()=>(await state(page)).lookYaw).toBeLessThan(0);
    const two=await state(page);expect(two.lookYaw).toBeLessThan(0);expect(two.lookPitch).toBeGreaterThan(0);expect(two.touchX).toBeGreaterThan(.5);
    await send('touchStart',[[1,x+35,y],[2,650,110],[3,400,120]]);
    await send('touchMove',[[1,x+35,y],[2,650,110],[3,350,160]]);
    await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(resolve)));
    expect((await state(page)).lookYaw).toBe(two.lookYaw);
    await step(page);expect((await state(page)).yaw).toBeLessThan(0);
    await send('touchCancel',[]);
    const end=await state(page);expect(end.active).toBe(false);expect(end.touchX).toBe(0);expect(end.touchY).toBe(0);
    const look=end.lookYaw;await send('touchStart',[[4,450,150]]);await send('touchEnd',[]);
    expect((await state(page)).lookYaw).toBe(look);
    expect(await page.evaluate(()=>scrollY)).toBe(0);
  });
  test('pointer release, lost capture, orientation and mode changes neutralize steering', async ({page,context}) => {
    await harness(page);const cdp=await context.newCDPSession(page);
    const r=await page.locator('#stick').boundingBox(),x=r.x+r.width/2,y=r.y+r.height/2;
    const send=(type,points)=>cdp.send('Input.dispatchTouchEvent',{type,touchPoints:points.map(([id,x,y])=>({id,x,y}))});
    await send('touchStart',[[1,x+30,y]]);await send('touchEnd',[]);expect((await state(page)).active).toBe(false);
    await send('touchStart',[[2,x+30,y]]);
    await page.evaluate(()=>window.dispatchEvent(new Event('orientationchange')));
    expect((await state(page)).active).toBe(false);await send('touchEnd',[]);
    await send('touchStart',[[3,x+30,y]]);
    await page.evaluate(()=>{window.harness.settings.mode='Autopilot';window.harness.input.sync();});
    expect((await state(page)).active).toBe(false);await send('touchEnd',[]);
    await page.evaluate(()=>{window.harness.settings.mode='Manual Flight';window.harness.input.sync();});
    await send('touchStart',[[4,x+30,y]]);
    await page.evaluate(()=>{const stick=document.querySelector('#stick');stick.dispatchEvent(new PointerEvent('lostpointercapture',{pointerId:window.stickPointerId,pointerType:'touch'}));});
    expect((await state(page)).active).toBe(false);
    await send('touchCancel',[]);expect((await state(page)).touchX).toBe(0);
  });
  test('real application: landscape controls, settings scrolling and WebGL startup', async ({page}) => {
    const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
    await page.goto('/');
    await page.getByRole('button',{name:'Settings',exact:true}).tap();
    await page.getByRole('combobox').selectOption('Low');
    await page.getByRole('slider',{name:'Steering and mouse sensitivity'}).fill('0.8');
    await page.getByRole('slider',{name:'Touch sensitivity'}).fill('0.6');
    await page.getByLabel('Invert mouse horizontal axis',{exact:true}).check();
    await page.getByLabel('Invert mouse vertical axis',{exact:true}).check();
    const panel=page.locator('.panel');
    expect(await panel.evaluate(el=>el.scrollHeight>el.clientHeight)).toBe(true);
    await page.getByLabel('Show cockpit',{exact:true}).scrollIntoViewIfNeeded();
    await page.getByRole('button',{name:'Close settings'}).tap();
    await page.getByRole('button',{name:'Manual Flight',exact:true}).tap();
    const stick=page.getByRole('group',{name:'Touch flight joystick'});await expect(stick).toBeVisible();
    const r=await stick.boundingBox();expect(r.y).toBeGreaterThan(45);expect(r.y+r.height).toBeLessThan(300);
    await expect(page.locator('canvas')).toBeVisible();
    expect(await page.evaluate(()=>document.documentElement.scrollHeight<=innerHeight)).toBe(true);
    await page.getByRole('button',{name:'Pause',exact:true}).tap();
    await expect(page.locator('main')).toHaveClass(/controls-blocked/);
    await page.getByRole('button',{name:'Resume',exact:true}).tap();
    await page.screenshot({path:'test-results/landscape.png'});
    await page.getByRole('button',{name:'Autopilot',exact:true}).tap();await expect(stick).not.toBeVisible();
    expect(errors).toEqual([]);
  });
});

 test('disposing and rebinding input does not accumulate listeners', async ({page}) => {
  await harness(page);
  await page.evaluate(async()=>{
    const h=window.harness;
    h.input.dispose();
    const {bindFlightInput}=await import('/src/controls.ts');
    h.input=bindFlightInput(document.querySelector('canvas'),document.querySelector('#stick'),h.controller,()=>h.settings);
    h.input.sync();
  });
  await page.mouse.move(300,200);await page.mouse.down();await page.mouse.move(350,200);await page.mouse.up();
  const expected=-50/720*1.6; // Default desktop viewport is 1280x720.
  expect((await state(page)).lookYaw).toBeCloseTo(expected,6);
  await page.evaluate(()=>window.harness.input.dispose());
  const before=await state(page);
  await page.keyboard.press('d');await page.mouse.move(300,200);await page.mouse.down();await page.mouse.move(400,200);await page.mouse.up();
  expect((await state(page)).lookYaw).toBe(before.lookYaw);expect((await state(page)).keys).toEqual([]);
 });
