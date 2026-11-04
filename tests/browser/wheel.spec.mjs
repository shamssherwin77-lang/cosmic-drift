import {test,expect} from '@playwright/test';

test('wheel and slider share the throttle, enforce bounds and ignore paused or blocked flight',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/');const slider=page.locator('#speed');await page.mouse.move(400,200);await page.mouse.wheel(0,-100);await expect(slider).toHaveValue('18');
 await page.getByRole('button',{name:'Start journey',exact:true}).click();await page.mouse.move(400,200);await page.mouse.wheel(0,-100);await expect(slider).toHaveValue('38');await page.mouse.wheel(0,100);await expect(slider).toHaveValue('18');
 await slider.fill('70');await page.mouse.move(400,200);await page.mouse.wheel(0,-100);await expect(slider).toHaveValue('90');
 await slider.fill('1199');await page.mouse.move(400,200);await page.mouse.wheel(0,-100);await expect(slider).toHaveValue('1200');await slider.fill('1');await page.mouse.move(400,200);await page.mouse.wheel(0,100);await expect(slider).toHaveValue('0');
 await slider.fill('100');await page.getByRole('button',{name:'Pause',exact:true}).click();await page.mouse.move(400,200);await page.mouse.wheel(0,-100);await expect(slider).toHaveValue('100');await page.getByRole('button',{name:'Resume',exact:true}).click();
 await page.getByRole('button',{name:'Settings',exact:true}).click();await page.getByRole('combobox',{name:'Graphics quality'}).selectOption('Low');const panel=page.locator('.panel');await panel.hover();await page.mouse.wheel(0,300);await expect.poll(()=>panel.evaluate(p=>p.scrollTop)).toBeGreaterThan(0);await expect(slider).toHaveValue('100');await page.locator('canvas').dispatchEvent('wheel',{deltaY:-100});await expect(slider).toHaveValue('100');
 await page.getByRole('button',{name:'Close settings',exact:true}).click();await page.locator('canvas').dispatchEvent('wheel',{deltaY:-100,ctrlKey:true});await expect(slider).toHaveValue('100');await page.getByRole('button',{name:'Light Jump',exact:true}).click();await page.locator('canvas').dispatchEvent('wheel',{deltaY:-100});await expect(slider).toHaveValue('100');expect(errors).toEqual([]);
});

test('wheel works while mouse is captured for Descent and accumulates tiny trackpad deltas',async({page})=>{
 await page.goto('/');await page.getByRole('button',{name:'Start journey',exact:true}).click();await page.getByRole('button',{name:'Settings',exact:true}).click();await page.getByRole('combobox',{name:'Graphics quality'}).selectOption('Low');await page.getByRole('checkbox',{name:'Descent free flight',exact:true}).check();await page.getByRole('button',{name:'Close settings',exact:true}).click();await page.locator('canvas').click({position:{x:400,y:200}});await expect.poll(()=>page.evaluate(()=>!!document.pointerLockElement)).toBe(true);
 const slider=page.locator('#speed');await page.mouse.wheel(0,-100);await expect(slider).toHaveValue('38');
 await page.evaluate(()=>{const canvas=document.querySelector('canvas');for(let i=0;i<10;i++)canvas.dispatchEvent(new WheelEvent('wheel',{deltaY:-.5,cancelable:true}));});await expect(slider).toHaveValue('39');await page.keyboard.press('Escape');
});
