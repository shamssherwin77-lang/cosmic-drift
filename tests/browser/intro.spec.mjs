import {test,expect} from '@playwright/test';
test.use({viewport:{width:640,height:360}});
const film=page=>page.getByLabel('Cosmic Drift opening film',{exact:true});
test('the real twenty-second film plays before WebGL, enables sound and naturally reaches the menu',async({page})=>{
 test.setTimeout(60000);const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('./');await expect(page.getByRole('main',{name:'Opening cinematic'})).toBeVisible();await expect(page.getByRole('button',{name:'Start journey',exact:true})).toHaveCount(0);await expect(page.locator('canvas')).toHaveCount(0);
 await expect.poll(()=>film(page).evaluate(v=>v.readyState),{timeout:15000}).toBeGreaterThanOrEqual(2);const duration=await film(page).evaluate(v=>v.duration);expect(duration).toBeGreaterThan(19.9);expect(duration).toBeLessThan(20.1);await expect.poll(()=>film(page).evaluate(v=>v.currentTime)).toBeGreaterThan(.1);expect(await film(page).evaluate(v=>v.muted)).toBe(true);
 await page.getByRole('button',{name:'Enable intro sound'}).click();expect(await film(page).evaluate(v=>v.muted)).toBe(false);await page.getByRole('button',{name:'Mute intro sound'}).click();expect(await film(page).evaluate(v=>v.muted)).toBe(true);await page.evaluate(()=>window.finishedFilm=document.querySelector('video'));
 await expect(page.getByRole('button',{name:'Start journey',exact:true})).toBeVisible({timeout:35000});await expect(page.getByRole('button',{name:'Challenge flight',exact:false})).toBeVisible();await expect(page.locator('.universe canvas')).toHaveCount(1);expect(await page.evaluate(()=>window.finishedFilm.paused&&!window.finishedFilm.hasAttribute('src'))).toBe(true);expect(errors).toEqual([]);
});
test('escape skips the film and both game modes remain available',async({page})=>{
 await page.goto('./');await expect(film(page)).toBeVisible();await page.keyboard.press('Escape');await expect(film(page)).toHaveCount(0);await expect(page.getByRole('button',{name:'Start journey',exact:true})).toBeVisible();await page.getByRole('button',{name:'Challenge flight',exact:false}).click();await expect(page.getByLabel('Combat status')).toBeVisible();
});
test('a failed video cannot trap the player outside the game',async({page})=>{
 await page.route('**/video/cosmic-drift-intro.mp4',r=>r.abort());await page.goto('./');await expect(page.getByRole('button',{name:'Start journey',exact:true})).toBeVisible({timeout:20000});await expect(film(page)).toHaveCount(0);
});
test('blocked autoplay has an explicit play action and can always be skipped',async({page})=>{
 await page.addInitScript(()=>{HTMLMediaElement.prototype.play=function(){return Promise.reject(new DOMException('Test autoplay policy','NotAllowedError'));};});await page.goto('./');await expect(page.getByRole('button',{name:'Play intro',exact:false})).toBeVisible();await page.getByRole('button',{name:'Skip intro',exact:true}).click();await expect(page.getByRole('button',{name:'Start journey',exact:true})).toBeVisible();
});
test('touch sound and skip controls work in portrait and landscape',async({browser})=>{
 const context=await browser.newContext({viewport:{width:412,height:915},isMobile:true,hasTouch:true}),page=await context.newPage();await page.goto(new URL('./',test.info().project.use.baseURL).href);await expect(film(page)).toBeVisible();await page.getByRole('button',{name:'Enable intro sound'}).tap();expect(await film(page).evaluate(v=>v.muted)).toBe(false);await page.setViewportSize({width:915,height:412});const skip=page.getByRole('button',{name:'Skip intro',exact:true});await expect(skip).toBeInViewport();await skip.tap();await expect(page.getByRole('button',{name:'Start journey',exact:true})).toBeVisible();await context.close();
});
