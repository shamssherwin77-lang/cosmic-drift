import {test,expect} from '@playwright/test';
import {skipIntro} from './skip-intro.mjs';
test.use({viewport:{width:640,height:400}});
async function setup(page,{reduced=false,quality='Low'}={}){
 const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error'&&/THREE.WebGLProgram|VALIDATE_STATUS|shader error/.test(m.text()))errors.push(m.text());});
 await page.route('**/src/main.tsx*',async route=>{const response=await route.fetch(),source=await response.text();await route.fulfill({response,body:source.replace('new FlightController()','(window.testPilot??=new FlightController())')});});
 await page.route('**/src/scene.ts*',async route=>{const response=await route.fetch(),source=await response.text();await route.fulfill({response,body:source.replace('new SingularityFall()','(window.testFall=new SingularityFall())')});});
 await page.goto('/');await skipIntro(page);await page.getByRole('button',{name:'Start journey',exact:true}).click();
 await page.getByRole('button',{name:'Settings',exact:true}).click();await page.getByRole('combobox',{name:'Graphics quality'}).selectOption(quality);
 if(reduced)await page.getByLabel('Reduced motion',{exact:true}).check();
 await page.getByRole('button',{name:'Close settings',exact:true}).click();await page.locator('#speed').fill('0');
 const center=await page.evaluate(async()=>{const {describeSector}=await import('/src/graphics/universe.ts');return describeSector(-1,0,1).starWorld.toArray();});
 return {errors,center,move:distance=>page.evaluate(({center,distance})=>{const p=window.testPilot;p.position.set(center[0],center[1],center[2]+distance);p.speed=0;p.yaw=p.pitch=0;p.shipQuaternion.identity();p.syncAttitude();}, {center,distance})};
}
test('actual horizon descent pauses, cannot Jump out, ends and recovers outside danger with zero thrust',async({page})=>{
 test.setTimeout(100000);const {errors,center,move}=await setup(page);await move(7000);await expect(page.locator('main')).toHaveAttribute('data-hazard','critical');
 await page.getByRole('button',{name:'Enable transit control',exact:true}).click();await page.locator('#speed').fill('1200');await move(1500);
 await expect(page.locator('main')).toHaveAttribute('data-fall-phase','captured',{timeout:10000});
 await page.getByRole('button',{name:'Pause descent',exact:true}).click();const before=await page.evaluate(()=>window.testFall.elapsed);await page.waitForTimeout(450);expect(await page.evaluate(()=>window.testFall.elapsed)).toBe(before);
 await page.keyboard.press('j');await expect(page.locator('main')).toHaveAttribute('data-jump-phase','idle');await expect(page.getByRole('alertdialog')).toHaveCount(0);
 await page.getByRole('button',{name:'Resume descent',exact:true}).click();await expect(page.locator('main')).toHaveAttribute('data-fall-phase','lost',{timeout:25000});
 await expect(page.getByRole('alertdialog')).toContainText('Beyond return.');await page.getByRole('button',{name:'Return to safe flight',exact:true}).click();
 await expect(page.locator('main')).toHaveAttribute('data-fall-phase','idle');await expect(page.locator('#speed')).toHaveValue('0');const distance=await page.evaluate(c=>Math.hypot(...window.testPilot.position.toArray().map((v,i)=>v-c[i])),center);expect(distance).toBeCloseTo(20000,0);await expect(page.locator('main')).toHaveAttribute('data-hazard','clear');expect(errors).toEqual([]);
});
test('reduced-motion high quality descent renders, new journey returns to menu without replaying intro',async({page})=>{
 test.setTimeout(100000);const {errors,move}=await setup(page,{reduced:true,quality:'High'});await move(1500);await expect(page.locator('main')).toHaveAttribute('data-fall-phase','captured');
 await page.getByRole('button',{name:'Pause descent',exact:true}).click();await page.evaluate(()=>{while(window.testFall.elapsed<6)window.testFall.advance(.25);});await expect(page.locator('main')).toHaveAttribute('data-fall-phase','stretch');await page.waitForTimeout(500);
 await page.evaluate(()=>{for(let i=0;i<20;i++)window.testFall.advance(.25);});await expect(page.locator('main')).toHaveAttribute('data-fall-phase','lost');await page.getByRole('button',{name:'Start a new journey',exact:true}).click();await expect(page.getByRole('button',{name:'Start journey',exact:true})).toBeVisible();await expect(page.locator('main')).toHaveAttribute('data-fall-phase','idle');await expect(page.getByRole('button',{name:'Skip intro',exact:true})).toHaveCount(0);expect(errors).toEqual([]);
});
