import {test,expect} from '@playwright/test';

test('cinematic materials compile at every tier, shadows switch off on Low and GPU resources are released',async({page})=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  await page.route('**/cinema-harness',r=>r.fulfill({contentType:'text/html',body:'<html><body></body></html>'}));await page.goto('/cinema-harness');
  const result=await page.evaluate(async()=>{
    const T=await import('/node_modules/three/build/three.module.js'),{createCinema}=await import('/src/graphics/cinema.ts'),{createCockpit}=await import('/src/graphics/cockpit.ts'),{createHull}=await import('/src/graphics/hull.ts'),{createSpace}=await import('/src/graphics/space.ts');
    const renderer=new T.WebGLRenderer();renderer.setSize(320,220);renderer.toneMapping=T.ACESFilmicToneMapping;
    const scene=new T.Scene(),ship=new T.Group(),camera=new T.PerspectiveCamera(68,320/220,.1,50000);ship.position.z=5;ship.add(camera);scene.add(ship);
    const cinema=createCinema(renderer,scene,ship),space=createSpace(scene),cabin=createCockpit(ship),hull=createHull(ship),samples=[];
    for(const quality of ['Low','Medium','High','Low','High']){
      cinema.configure(quality==='High');space.configure(quality,1,320,220,.2,true);cabin.configureEnvironment(cinema.panorama,quality==='High');cinema.update(true,false);
      space.update(.1,5,0,new T.Vector3(),.9);cabin.update(space.tint,1,false,true,5);hull.update(true,500);camera.rotation.y=.9;
      space.renderAtmosphere(renderer,camera,true);renderer.render(scene,camera);
      samples.push({quality,shadows:renderer.shadowMap.enabled,error:renderer.getContext().getError(),textures:renderer.info.memory.textures});
    }
    const material=scene.getObjectByName('wing-and-hull-armor').material;
    const reflective=material.isMeshStandardMaterial&&material.metalness>.5&&!!scene.environment;
    hull.dispose();cabin.dispose();space.dispose();cinema.dispose();
    const geometries=new Set(),materials=new Set();scene.traverse(o=>{if(o.isMesh||o.isPoints){geometries.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material])materials.add(m);}});
    geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());
    const remaining={...renderer.info.memory};renderer.dispose();
    return{samples,reflective,remaining};
  });
  result.samples.forEach(s=>{expect(s.error).toBe(0);expect(s.shadows).toBe(s.quality==='High');});
  expect(result.samples[4].textures).toBe(result.samples[2].textures);expect(result.reflective).toBe(true);
  expect(result.remaining).toEqual({geometries:0,textures:0});expect(errors).toEqual([]);
});
