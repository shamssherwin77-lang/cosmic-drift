import {test,expect} from '@playwright/test';

test('an unmodified desktop journey reaches Avaris on the second Jump',async({page})=>{
 test.setTimeout(150000);
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('./');
 await page.getByRole('button',{name:'Start journey',exact:true}).click();
 await page.getByRole('button',{name:'Light Jump',exact:true}).click();
 await expect(page.locator('main')).toHaveAttribute('data-jump-phase','idle',{timeout:60000});
 await page.keyboard.press('j');
 await expect(page.locator('main')).toHaveAttribute('data-jump-phase','charging');
 await expect(page.locator('main')).toHaveAttribute('data-jump-phase','idle',{timeout:60000});
 const panel=page.getByRole('region',{name:'Planet approach',exact:true});
 await expect(panel).toBeVisible();await expect(panel).toContainText('You can descend');
 await expect(panel.locator('.planet-range b')).toContainText(/^[0-9,]+ u$/);
 await expect(page.locator('.navigation-caption')).toContainText('Golden Core');
 await page.screenshot({path:'test-results/avaris-published-desktop.png'});
 await page.getByRole('button',{name:'Light Jump',exact:true}).click();
 await expect(page.getByRole('alertdialog')).toContainText('supermassive black hole');
 expect(errors).toEqual([]);
});
