/** Existing gameplay checks enter through the same visible Skip intro control. */
export async function skipIntro(page){await page.getByRole('button',{name:'Skip intro',exact:true}).click();}
