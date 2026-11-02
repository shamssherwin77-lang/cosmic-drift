import {test,expect} from '@playwright/test';

test('desktop keeps its existing mode buttons and full flight deck',async({page})=>{
  await page.goto('/');
  await expect(page.getByRole('button',{name:'Manual Flight',exact:true})).toBeVisible();
  await expect(page.getByRole('button',{name:'Autopilot',exact:true})).toBeVisible();
  await expect(page.getByRole('button',{name:'Open controls',exact:true})).toBeHidden();
  await expect(page.locator('.deck-top')).toBeVisible();
  await expect(page.locator('#speed')).toBeVisible();
});

test.describe('compact touch controls',()=>{
  test.use({viewport:{width:915,height:412},hasTouch:true,isMobile:true,deviceScaleFactor:1});
  test('collapsed slider remains usable, mode selection closes the drawer, and opening it releases steering',async({page,context})=>{
    const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/');
    const dock=page.locator('.flight-deck'),slider=page.locator('#speed');
    expect((await dock.boundingBox()).height).toBeLessThan(92);
    expect((await dock.boundingBox()).y).toBeGreaterThan(290);
    await expect(slider).toHaveCount(1);await expect(slider).toBeVisible();
    await expect(page.getByRole('button',{name:'Manual Flight',exact:true})).toBeHidden();
    await page.getByRole('button',{name:'Start journey',exact:true}).tap();await expect(page.locator('.intro')).toBeHidden();
    await slider.fill('950');await expect(slider).toHaveValue('950');
    await page.getByRole('button',{name:'Pause',exact:true}).tap();await expect(page.locator('main')).toHaveClass(/controls-blocked/);
    await expect(slider).toBeVisible();await page.getByRole('button',{name:'Resume',exact:true}).tap();
    const open=page.getByRole('button',{name:'Open controls',exact:true});await open.tap();
    await expect(page.getByRole('region',{name:'Flight controls',exact:true})).toBeVisible();
    await expect(page.getByRole('button',{name:'Close controls',exact:true})).toHaveAttribute('aria-expanded','true');
    const range=await slider.boundingBox();await page.touchscreen.tap(range.x+range.width*.4,range.y+range.height/2);
    expect(Number(await slider.inputValue())).toBeLessThan(800);await expect(slider).toBeVisible();
    await page.getByRole('button',{name:'Manual Flight',exact:true}).tap();
    await expect(page.locator('#flight-panel')).toHaveCount(0);
    const stick=page.getByRole('group',{name:'Touch flight joystick'});await expect(stick).toBeVisible();
    const cdp=await context.newCDPSession(page),r=await stick.boundingBox();
    await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{id:1,x:r.x+r.width*.8,y:r.y+r.height*.5}]});
    await open.dispatchEvent('click');
    await expect.poll(()=>stick.evaluate(el=>el.style.getPropertyValue('--stick-x'))).toBe('0px');
    await cdp.send('Input.dispatchTouchEvent',{type:'touchCancel',touchPoints:[]});
    await page.getByRole('button',{name:'Close controls',exact:true}).tap();await expect(stick).toBeVisible();
    await page.screenshot({path:'test-results/compact-landscape.png'});
    expect(errors).toEqual([]);
  });

  test('portrait music, back navigation and rotation preserve the same speed control',async({page})=>{
    await page.setViewportSize({width:412,height:915});await page.goto('/');
    await page.getByRole('button',{name:'Open controls',exact:true}).tap();
    await page.getByRole('button',{name:'Meditation mode',exact:true}).tap();
    await expect(page.locator('main')).toHaveClass(/meditation/);await expect(page.locator('.intro')).toBeHidden();
    await page.locator('#speed').fill('520');
    await page.screenshot({path:'test-results/compact-portrait.png'});
    await page.getByRole('button',{name:'Open controls',exact:true}).tap();
    await page.getByRole('button',{name:'Music & sound',exact:true}).tap();
    await expect(page.getByRole('radio')).toHaveCount(4);
    await expect(page.locator('#speed')).toBeVisible();await expect(page.locator('#speed')).toBeEnabled();
    await page.getByRole('radio',{name:'Soaring',exact:true}).check();
    await expect(page.locator('.audio-note')).toHaveAttribute('data-playback-state','playing');
    await page.getByRole('button',{name:'Back to controls',exact:true}).tap();
    await expect(page.getByRole('region',{name:'Flight controls',exact:true})).toBeVisible();
    await page.setViewportSize({width:915,height:412});
    await expect(page.locator('#speed')).toHaveValue('520');await expect(page.locator('#speed')).toHaveCount(1);
    await page.getByRole('button',{name:'Close controls',exact:true}).tap();
    expect((await page.locator('.flight-deck').boundingBox()).height).toBeLessThan(92);
    expect(await page.evaluate(()=>document.documentElement.scrollHeight<=innerHeight)).toBe(true);
  });
});
