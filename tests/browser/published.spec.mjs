import {skipIntro} from './skip-intro.mjs';
import {test,expect} from '@playwright/test';

test('an unmodified desktop journey reaches Avaris on the second Jump',async({page})=>{
 test.setTimeout(150000);await page.setViewportSize({width:640,height:360});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
 await page.goto('./');await skipIntro(page);
 await expect(page.getByRole('button',{name:'Start journey',exact:true})).toBeVisible({timeout:15000});
 await page.getByRole('button',{name:'Start journey',exact:true}).click();
 await page.getByRole('button',{name:'Light Jump',exact:true}).click();
 await expect(page.locator('main')).toHaveAttribute('data-jump-phase','idle',{timeout:60000});
 await page.keyboard.press('j');
 await expect(page.getByRole('alertdialog')).toContainText('You will arrive far from the planet');
 await page.screenshot({path:'test-results/avaris-before-jump.png'});
 await page.getByRole('button',{name:'Enter nebula',exact:false}).click();
 await expect(page.locator('main')).toHaveAttribute('data-jump-phase','charging');
 await expect(page.locator('main')).toHaveAttribute('data-jump-phase','idle',{timeout:60000});
 const panel=page.getByRole('region',{name:'Planet approach',exact:true});
 await expect(panel).toBeVisible();await expect(panel).toContainText('You can descend');
 await expect(panel.locator('.planet-range b')).toContainText(/^[0-9,]+ u$/);
 expect(Number((await panel.locator('.planet-range b').innerText()).replace(/[^0-9]/g,''))).toBeGreaterThan(15000);
 await expect(page.locator('.navigation-caption')).toContainText('Golden Core');
 await page.screenshot({path:'test-results/avaris-published-desktop.png'});
 await page.getByRole('button',{name:'Light Jump',exact:true}).click();
 await expect(page.getByRole('alertdialog')).toContainText('supermassive black hole');
 expect(errors).toEqual([]);
});
