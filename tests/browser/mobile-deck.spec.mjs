import {skipIntro} from './skip-intro.mjs';
import {test,expect} from '@playwright/test';

test('entry is centered and only the start and fullscreen buttons are exposed',async({page})=>{
 const requests=[];page.on('request',r=>{if(r.url().endsWith('.mp3'))requests.push(r.url());});
 await page.goto('/');await skipIntro(page);const start=page.getByRole('button',{name:'Start journey',exact:true}),r=await start.boundingBox(),v=page.viewportSize();
 expect(Math.abs(r.x+r.width/2-v.width/2)).toBeLessThan(2);expect(Math.abs(r.y+r.height/2-v.height/2)).toBeLessThan(2);
 await expect(page.getByRole('button')).toHaveCount(2);expect(requests).toEqual([]);
 await page.screenshot({path:'test-results/minimal-entry.png'});await start.click();
 await expect(page.getByRole('group',{name:'Touch flight joystick'})).toBeVisible();await expect(page.locator('#speed')).toBeVisible();
 await expect(page.getByRole('button',{name:/Autopilot|Meditation mode|Explore regions|Open controls/})).toHaveCount(0);
});

test.describe('minimal touch flight',()=>{
 test.use({viewport:{width:915,height:412},hasTouch:true,isMobile:true,deviceScaleFactor:1});
 test('slider stays accessible and opening music releases a held joystick',async({page,context})=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/');await skipIntro(page);await page.getByRole('button',{name:'Start journey',exact:true}).tap();
  const slider=page.locator('#speed'),stick=page.getByRole('group',{name:'Touch flight joystick'});
  await slider.fill('950');await expect(slider).toHaveValue('950');expect((await page.locator('.cruise-strip').boundingBox()).height).toBeLessThan(80);
  for(const b of await page.locator('.action-rail button').all()){const r=await b.boundingBox();expect(r.x).toBeGreaterThan(820);expect(r.y+r.height).toBeLessThan(412);}
  await page.getByRole('button',{name:'Pause',exact:true}).tap();await expect(page.locator('main')).toHaveClass(/controls-blocked/);await expect(slider).toBeVisible();await page.getByRole('button',{name:'Resume',exact:true}).tap();
  const cdp=await context.newCDPSession(page),r=await stick.boundingBox();await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{id:1,x:r.x+r.width*.8,y:r.y+r.height*.5}]});
  await page.getByRole('button',{name:'Audio settings',exact:true}).dispatchEvent('click');await expect.poll(()=>stick.evaluate(el=>el.style.getPropertyValue('--stick-x'))).toBe('0px');
  await cdp.send('Input.dispatchTouchEvent',{type:'touchCancel',touchPoints:[]});await expect(page.getByRole('radio')).toHaveCount(4);
  await expect(page.locator('.audio-note')).toHaveAttribute('data-playback-state','playing');await page.getByRole('button',{name:'Close settings',exact:true}).tap();
  await expect(slider).toHaveValue('950');await expect(stick).toBeVisible();await page.screenshot({path:'test-results/minimal-landscape.png'});expect(errors).toEqual([]);
 });
 test('portrait music and rotation preserve the single speed slider',async({page})=>{
  await page.setViewportSize({width:412,height:915});await page.goto('/');await skipIntro(page);await page.getByRole('button',{name:'Start journey',exact:true}).tap();await page.locator('#speed').fill('520');
  await page.screenshot({path:'test-results/minimal-portrait.png'});await page.getByRole('button',{name:'Audio settings',exact:true}).tap();await page.getByRole('radio',{name:'Soaring',exact:true}).check();
  await expect(page.locator('.audio-note')).toHaveAttribute('data-playback-state','playing');await page.getByRole('button',{name:'Close settings',exact:true}).tap();await page.setViewportSize({width:915,height:412});
  await expect(page.locator('#speed')).toHaveValue('520');await expect(page.locator('#speed')).toHaveCount(1);expect(await page.evaluate(()=>document.documentElement.scrollHeight<=innerHeight)).toBe(true);
 });
});
