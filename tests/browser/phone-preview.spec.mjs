import {test,expect} from '@playwright/test';
import {skipIntro} from './skip-intro.mjs';
test.use({viewport:{width:640,height:400},hasTouch:true,isMobile:true,deviceScaleFactor:1});
test('built phone preview loads its own subpath, intro and models, and enables sensor controls',async({page})=>{
 test.skip(!process.env.GYRO_PREVIEW,'Run against the isolated build with GYRO_PREVIEW=1');test.setTimeout(120000);
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.addInitScript(()=>{Object.defineProperty(DeviceOrientationEvent,'requestPermission',{configurable:true,value:()=>Promise.resolve('granted')});});
 await page.goto('./');await expect(page.getByRole('button',{name:'Skip intro',exact:true})).toBeVisible();
 const cockpit=page.waitForResponse(r=>r.url().endsWith('/previews/gyro-descent/models/meridian-cockpit.glb')),hull=page.waitForResponse(r=>r.url().endsWith('/previews/gyro-descent/models/meridian-exterior.glb'));
 await skipIntro(page);const c=await cockpit,h=await hull;expect(c.status()).toBe(200);expect(h.status()).toBe(200);expect((await c.body()).length).toBe(7821760);expect((await h.body()).length).toBe(6037452);
 await page.getByRole('button',{name:'Start journey',exact:true}).click();await expect(page.locator('main')).toHaveClass(/mobile-descent/);await page.getByRole('button',{name:'Enable phone steering',exact:true}).click();
 await page.evaluate(()=>window.dispatchEvent(new DeviceOrientationEvent('deviceorientation',{alpha:0,beta:90,gamma:0})));await expect(page.locator('.phone-steering')).toHaveAttribute('data-state','active');await expect(page.getByRole('button',{name:'Center phone steering',exact:true})).toBeVisible();await expect(page.getByRole('group',{name:'Ship roll controls'})).toBeVisible();await expect(page.locator('#speed')).toHaveCount(1);
 await page.screenshot({path:'/workspace/artifacts/gyro-descent/Preview-ready.jpg',type:'jpeg',quality:90});await page.getByRole('button',{name:'Settings',exact:true}).click();const option=page.getByRole('checkbox',{name:'Descent free flight',exact:true});await expect(option).toBeEnabled();await option.uncheck();await expect(page.locator('main')).not.toHaveClass(/mobile-descent/);expect(errors).toEqual([]);
});
