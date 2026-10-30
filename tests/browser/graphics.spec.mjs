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
        space.renderAtmosphere(renderer,camera,true);renderer.render(scene,camera);
      }
      position.set(0,0,-900);space.update(.1,7,0,position,.9);
      space.renderAtmosphere(renderer,camera,true);renderer.render(scene,camera);
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

test('the cabin is enclosed on five sides, has a clear front window and uses five geometry batches',async({page})=>{
  await page.route('**/cabin-harness',r=>r.fulfill({contentType:'text/html',body:'<html><body></body></html>'}));await page.goto('/cabin-harness');
  const result=await page.evaluate(async()=>{
    const T=await import('/node_modules/three/build/three.module.js'),{createCockpit}=await import('/src/graphics/cockpit.ts');
    const ship=new T.Group(),cabin=createCockpit(ship);ship.updateMatrixWorld(true);
    const shell=cabin.group.getObjectByName('enclosure-shell'),ray=new T.Raycaster();
    const hits=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].map(axis=>{ray.set(new T.Vector3(),new T.Vector3(...axis));return ray.intersectObject(shell).length;});
    const batches=cabin.group.children.filter(o=>o.isMesh).length;cabin.dispose();
    return {hits,batches};
  });
  for(const count of result.hits.slice(0,5))expect(count).toBeGreaterThan(0);
  expect(result.hits[5]).toBe(0);expect(result.batches).toBe(5);
});

test('each region has multiple large landmarks and instanced rocks at Low and High',async({page})=>{
  await page.route('**/bodies-harness',r=>r.fulfill({contentType:'text/html',body:'<html><body></body></html>'}));await page.goto('/bodies-harness');
  const result=await page.evaluate(async()=>{
    const T=await import('/node_modules/three/build/three.module.js'),{createBodies}=await import('/src/graphics/bodies.ts');
    const scene=new T.Scene(),bodies=createBodies(scene),position=new T.Vector3(),samples=[];
    for(const quality of ['Low','High']){
      bodies.configure(quality);
      for(let region=0;region<5;region++){
        for(let i=0;i<60;i++)bodies.update(.1,i*.1,region,position);
        const visible=bodies.group.children.filter(o=>o.visible&&o.userData.kind);
        samples.push({quality,region,planets:visible.filter(o=>o.userData.kind!=='moon').length,moons:visible.filter(o=>o.userData.kind==='moon').length,
          rocks:bodies.group.getObjectByName('distant-rock-cluster').count,position:visible[0].position.toArray()});
      }
    }
    bodies.dispose();return samples;
  });
  for(const sample of result){expect(sample.planets).toBeGreaterThanOrEqual(4);expect(sample.moons).toBeGreaterThanOrEqual(2);expect(sample.rocks).toBeGreaterThanOrEqual(24);}
  expect(result[1].position).not.toEqual(result[0].position);
});

test('performance mode lowers the rendering budget while preserving the selected quality and manual mode',async({page})=>{
  await page.goto('/');await page.getByRole('button',{name:'Settings',exact:true}).click();
  await expect(page.getByRole('combobox',{name:'Graphics quality'})).toHaveValue('Medium');
  await page.getByLabel('Adaptive resolution',{exact:true}).uncheck();
  await page.getByRole('combobox',{name:'Graphics quality'}).selectOption('High');
  const normal=await page.locator('canvas').evaluate(c=>c.width);
  await page.getByLabel('Performance mode',{exact:true}).check();
  await expect.poll(()=>page.locator('canvas').evaluate(c=>c.width)).toBeLessThan(normal);
  await expect(page.getByRole('combobox',{name:'Graphics quality'})).toHaveValue('High');
  await page.getByRole('button',{name:'Close settings'}).click();await page.getByRole('button',{name:'Manual Flight',exact:true}).click();
  await page.getByRole('button',{name:'Pause',exact:true}).click();await page.getByRole('button',{name:'Resume',exact:true}).click();
  await expect(page.getByRole('button',{name:'Manual Flight',exact:true})).toHaveClass(/selected/);
});

test('cached nebula reprojects immediately during free-look and stays close to a fresh render',async({page})=>{
  const errors=[];page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  await page.route('**/cache-harness',r=>r.fulfill({contentType:'text/html',body:'<html><body></body></html>'}));await page.goto('/cache-harness');
  const result=await page.evaluate(async()=>{
    // Freeze the refresh clock, so this checks a real history hit rather than a timed refresh.
    Object.defineProperty(performance,'now',{value:()=>1000});
    const T=await import('/node_modules/three/build/three.module.js'),{createSpace}=await import('/src/graphics/space.ts');
    const renderer=new T.WebGLRenderer();renderer.setSize(320,200);renderer.toneMapping=T.ACESFilmicToneMapping;
    const scene=new T.Scene(),camera=new T.PerspectiveCamera(68,1.6,.1,16000),space=createSpace(scene);camera.position.z=5;
    space.configure('Low',1,320,200,.28,true);space.update(.1,0,0,new T.Vector3(),.9);
    for(const object of scene.children)if(!object.material?.uniforms?.sky)object.visible=false;
    let updates=0;const render=renderer.render.bind(renderer);renderer.render=(s,c)=>{if(s!==scene)updates++;render(s,c);};
    const gl=renderer.getContext();
    const pixels=()=>{renderer.render(scene,camera);const p=new Uint8Array(320*200*4);gl.readPixels(0,0,320,200,gl.RGBA,gl.UNSIGNED_BYTE,p);return p;};
    space.renderAtmosphere(renderer,camera,true);const initial=pixels();
    camera.rotation.y=.04;space.renderAtmosphere(renderer,camera);const cached=pixels(),updatesAfterHit=updates;
    space.renderAtmosphere(renderer,camera,true);const fresh=pixels();
    const diff=(a,b)=>{let sum=0;for(let i=0;i<a.length;i+=4)sum+=Math.abs(a[i]-b[i])+Math.abs(a[i+1]-b[i+1])+Math.abs(a[i+2]-b[i+2]);return sum/(a.length/4*3);};
    const output={updatesAfterHit,updates,shift:diff(initial,cached),error:diff(cached,fresh)};
    space.dispose();renderer.dispose();return output;
  });
  expect(result.updatesAfterHit).toBe(1);expect(result.updates).toBe(2);
  expect(result.shift).toBeGreaterThan(.1);expect(result.error).toBeLessThan(8);expect(errors).toEqual([]);
});
