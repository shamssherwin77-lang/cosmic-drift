import {test,expect} from '@playwright/test';
async function freezeClock(page){await page.clock.install({time:new Date('2030-01-01T00:00:00Z')});await page.clock.pauseAt(new Date('2030-01-01T00:00:01Z'));}
async function advance(page,ms){for(let t=0;t<ms;t+=100)await page.clock.fastForward(Math.min(100,ms-t));}

test('desktop J jumps once, pauses safely, reseeds the destination and restores manual controls',async({page})=>{
  test.setTimeout(90000);const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  await freezeClock(page);await page.goto('/');
  await page.getByRole('button',{name:'Settings',exact:true}).click();await page.getByRole('combobox',{name:'Graphics quality'}).selectOption('Low');
  await page.getByRole('slider',{name:'Touch sensitivity'}).focus();await page.keyboard.press('j');await expect(page.locator('main')).toHaveAttribute('data-jump-phase','idle');
  await page.getByRole('button',{name:'Close settings'}).click();await page.getByRole('button',{name:'Manual Flight',exact:true}).click();await page.locator('#speed').fill('25');
  await page.getByRole('button',{name:'Enable audio',exact:true}).click();await advance(page,100);
  const seed=await page.locator('main').getAttribute('data-world-seed');
  await page.keyboard.press('j');await expect(page.locator('main')).toHaveAttribute('data-jump-phase','charging');
  await expect(page.getByRole('button',{name:/Light Jump/})).toBeDisabled();await expect(page.locator('#speed')).toBeDisabled();
  await page.keyboard.press('j');await page.getByRole('button',{name:'Pause',exact:true}).click();await advance(page,1500);
  await expect(page.locator('main')).toHaveAttribute('data-jump-phase','charging');await expect(page.getByRole('status')).toHaveText('Jump paused');
  await page.getByRole('button',{name:'Resume',exact:true}).click();await advance(page,1600);await expect(page.locator('main')).toHaveAttribute('data-jump-phase','accelerating');
  await advance(page,3400);await expect(page.locator('main')).not.toHaveAttribute('data-world-seed',seed);await expect(page.locator('.region-label h2')).toHaveText('Golden Core');
  await advance(page,5500);await expect(page.locator('main')).toHaveAttribute('data-jump-phase','idle');
  await expect(page.getByRole('button',{name:'Manual Flight',exact:true})).toHaveClass(/selected/);await expect(page.locator('#speed')).toHaveValue('25');
  await expect(page.locator('#speed')).toBeEnabled();await expect(page.locator('main')).not.toHaveClass(/controls-blocked/);expect(errors).toEqual([]);
});

test.describe('mobile Light Jump',()=>{
  test.use({viewport:{width:915,height:412},hasTouch:true,isMobile:true,deviceScaleFactor:1});
  test('a held joystick is cleared, the button fits landscape, and meditation/reduced motion survive a jump',async({page,context})=>{
    test.setTimeout(90000);const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
    await freezeClock(page);await page.goto('/');await page.getByRole('button',{name:'Manual Flight',exact:true}).tap();await advance(page,100);
    const stick=page.getByRole('group',{name:'Touch flight joystick'}),r=await stick.boundingBox();
    const cdp=await context.newCDPSession(page);await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{id:1,x:r.x+r.width*.8,y:r.y+r.height*.5}]});
    const button=page.getByRole('button',{name:/Light Jump/}),b=await button.boundingBox();expect(b.height).toBeGreaterThanOrEqual(38);expect(b.x+b.width).toBeLessThanOrEqual(915);expect(b.y+b.height).toBeLessThanOrEqual(412);
    // Activate while a real first finger still owns the joystick, then verify capture cancellation.
    await button.dispatchEvent('click');await advance(page,200);
    expect(await stick.evaluate(el=>el.style.getPropertyValue('--stick-x'))).toBe('0px');await expect(page.locator('main')).toHaveClass(/controls-blocked/);
    await cdp.send('Input.dispatchTouchEvent',{type:'touchCancel',touchPoints:[]});await advance(page,10400);
    await expect(page.locator('main')).toHaveAttribute('data-jump-phase','idle');await expect(stick).toBeVisible();
    await page.getByRole('button',{name:'Meditation mode',exact:true}).tap();
    await page.getByRole('button',{name:'Settings',exact:true}).tap();await page.getByLabel('Reduced motion',{exact:true}).check();await page.getByRole('button',{name:'Close settings'}).tap();
    const seed=await page.locator('main').getAttribute('data-world-seed');await button.tap();await advance(page,10400);
    await expect(page.locator('main')).toHaveAttribute('data-jump-phase','idle');await expect(page.locator('main')).not.toHaveAttribute('data-world-seed',seed);
    await expect(page.getByRole('button',{name:'Meditation mode',exact:true})).toHaveClass(/selected/);await expect(page.locator('.region-label h2')).toHaveText('Stellar Ocean');expect(errors).toEqual([]);
  });
});

test('procedural reseeding changes real GPU layout and landmarks without growing resources',async({page})=>{
  const errors=[];page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  await page.route('**/jump-world-harness',r=>r.fulfill({contentType:'text/html',body:'<html><body></body></html>'}));await page.goto('/jump-world-harness');
  const result=await page.evaluate(async()=>{
    const T=await import('/node_modules/three/build/three.module.js'),{createSpace}=await import('/src/graphics/space.ts');
    const renderer=new T.WebGLRenderer();renderer.setSize(320,200);const scene=new T.Scene(),camera=new T.PerspectiveCamera(68,1.6,.1,16000),space=createSpace(scene),position=new T.Vector3();
    space.configure('Low',1,320,200,.28,true);space.update(.1,0,0,position,.9);space.renderAtmosphere(renderer,camera,true);renderer.render(scene,camera);
    const fields=scene.children.filter(o=>o.isPoints),bodies=scene.getObjectByName('regional-celestial-bodies');
    const before=fields[0].material.uniforms.layoutOffset.value.toArray(),bodyBefore=bodies.children[0].position.toArray();const memory={...renderer.info.memory};
    for(let i=0;i<8;i++){space.setJump(1,1);space.reseed(92341+i*7881,(i+2)%5,position);space.update(.1,i,(i+2)%5,position,.9);space.renderAtmosphere(renderer,camera,true);renderer.render(scene,camera);}
    const heading=new T.Quaternion().setFromAxisAngle(new T.Vector3(0,1,0),2.2);
    space.reseed(321,2,position,heading);space.update(.1,0,2,position,.9);camera.quaternion.copy(heading);space.renderAtmosphere(renderer,camera,true);renderer.render(scene,camera);
    const forward=new T.Vector3(0,0,-1).applyQuaternion(heading),alignment=bodies.children[0].position.clone().normalize().dot(forward);
    const after=fields[0].material.uniforms.layoutOffset.value.toArray(),bodyAfter=bodies.children[0].position.toArray(),end={...renderer.info.memory};
    space.dispose();renderer.dispose();return{before,after,bodyBefore,bodyAfter,memory,end,alignment,error:renderer.getContext().getError()};
  });
  expect(result.after).not.toEqual(result.before);expect(result.bodyAfter).not.toEqual(result.bodyBefore);expect(result.end).toEqual(result.memory);expect(result.alignment).toBeGreaterThan(.7);expect(result.error).toBe(0);expect(errors).toEqual([]);
});
