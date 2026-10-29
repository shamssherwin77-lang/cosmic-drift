import { test, expect } from '@playwright/test';

test('all quality tiers render outside/inside clouds and release GPU resources', async ({page}) => {
  const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  await page.route('**/graphics-harness',route=>route.fulfill({contentType:'text/html',body:'<html><body style="margin:0"></body></html>'}));
  await page.goto('/graphics-harness');
  const result=await page.evaluate(async()=>{
    const T=await import('/node_modules/three/build/three.module.js');
    const {createSpace}=await import('/src/graphics/space.ts');
    const renderer=new T.WebGLRenderer();renderer.setSize(360,240);renderer.toneMapping=T.ACESFilmicToneMapping;
    document.body.appendChild(renderer.domElement);
    const scene=new T.Scene(),camera=new T.PerspectiveCamera(68,1.5,.1,16000);camera.position.z=5;
    const space=createSpace(scene),position=new T.Vector3();
    const samples=[];
    for(const quality of ['Low','Medium','High','Low','Medium','High']) {
      space.configure(quality,1,360,240,.28,renderer.extensions.has('EXT_color_buffer_float'));
      for(let region=0;region<5;region++) {
        for(let i=0;i<30;i++)space.update(.2,i*.2,region,position,.9);
        space.renderAtmosphere(renderer,camera);renderer.render(scene,camera);
      }
      position.set(0,0,-900);space.update(.1,7,0,position,.9);
      space.renderAtmosphere(renderer,camera);renderer.render(scene,camera);
      samples.push({quality,geometry:renderer.info.memory.geometries,textures:renderer.info.memory.textures,
        stars:scene.children.filter(o=>o.isPoints).map(o=>o.geometry.drawRange.count),error:renderer.getContext().getError()});
      position.set(0,0,0);
    }
    space.dispose();
    const geometries=new Set(),materials=new Set();
    scene.traverse(o=>{if(o.isMesh||o.isPoints){geometries.add(o.geometry);materials.add(o.material);}});
    geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());
    const remaining={...renderer.info.memory};renderer.dispose();renderer.domElement.remove();
    return {samples,remaining};
  });
  for(const sample of result.samples)expect(sample.error).toBe(0);
  expect(result.samples[0].stars.reduce((a,b)=>a+b)).toBeLessThan(result.samples[1].stars.reduce((a,b)=>a+b));
  expect(result.samples[1].stars.reduce((a,b)=>a+b)).toBeLessThan(result.samples[2].stars.reduce((a,b)=>a+b));
  expect(result.samples[5].geometry).toBe(result.samples[2].geometry);
  expect(result.samples[5].textures).toBe(result.samples[2].textures);
  expect(result.remaining).toEqual({geometries:0,textures:0});
  expect(errors).toEqual([]);
});

test('lighting defaults to Balanced and brightness/bloom can be changed without losing controls', async ({page}) => {
  const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  // Touch hardware starts on the lightest tier; this test exercises the real app.
  await page.goto('/');
  await page.getByRole('button',{name:'Settings',exact:true}).click();
  await expect(page.getByRole('combobox',{name:'Environment lighting'})).toHaveValue('Balanced');
  await page.getByRole('combobox',{name:'Graphics quality'}).selectOption('Low');
  await page.getByRole('combobox',{name:'Environment lighting'}).selectOption('Dark');
  await page.getByRole('slider',{name:'Soft bloom'}).fill('0');
  await page.getByRole('combobox',{name:'Graphics quality'}).selectOption('Medium');
  await page.getByRole('slider',{name:'Soft bloom'}).fill('0.3');
  await page.getByRole('combobox',{name:'Environment lighting'}).selectOption('Cinematic');
  await page.getByRole('combobox',{name:'Graphics quality'}).selectOption('High');
  await page.getByRole('slider',{name:'Soft bloom'}).fill('0');
  await page.getByRole('combobox',{name:'Graphics quality'}).selectOption('Low');
  await page.getByLabel('Show cockpit',{exact:true}).uncheck();
  await page.getByLabel('Show cockpit',{exact:true}).check();
  await page.getByRole('button',{name:'Close settings'}).click();
  const measureWindow = async () => {
    const png = await page.screenshot({clip:{x:300,y:100,width:600,height:400}});
    return page.evaluate(async base64 => {
      const image=new Image();image.src='data:image/png;base64,'+base64;await image.decode();
      const canvas=document.createElement('canvas');canvas.width=image.width;canvas.height=image.height;
      const context=canvas.getContext('2d');context.drawImage(image,0,0);
      const data=context.getImageData(0,0,canvas.width,canvas.height).data;
      let sum=0;for(let i=0;i<data.length;i+=4)sum+=.2126*data[i]+.7152*data[i+1]+.0722*data[i+2];
      return sum/(data.length/4);
    },png.toString('base64'));
  };
  await page.getByRole('button',{name:'Settings',exact:true}).click();
  await page.getByRole('combobox',{name:'Environment lighting'}).selectOption('Dark');
  await page.getByRole('button',{name:'Close settings'}).click();await page.keyboard.press('h');
  await page.waitForTimeout(3000);const dark=await measureWindow();
  await page.keyboard.press('h');await page.getByRole('button',{name:'Settings',exact:true}).click();
  await page.getByRole('combobox',{name:'Environment lighting'}).selectOption('Cinematic');
  await page.getByRole('button',{name:'Close settings'}).click();await page.keyboard.press('h');
  await page.waitForTimeout(3000);const cinematic=await measureWindow();
  expect(cinematic).toBeGreaterThan(dark*1.15);await page.keyboard.press('h');
  await page.getByRole('button',{name:'Manual Flight',exact:true}).click();
  await page.locator('canvas').click({position:{x:300,y:150}});
  await page.keyboard.press('d');await page.keyboard.press('w');
  await page.getByRole('button',{name:'Pause',exact:true}).click();
  await page.getByRole('button',{name:'Resume',exact:true}).click();
  await expect(page.locator('canvas')).toBeVisible();
  expect(errors).toEqual([]);
});
