import {test,expect} from '@playwright/test';

test('flight deck renders crisp cinematic forward, wing and rear views and a lightweight mobile view',async({page})=>{
 test.setTimeout(120000);const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
 await page.setViewportSize({width:1440,height:900});await page.route('**/ship-design',r=>r.fulfill({contentType:'text/html',body:'<html><body style="margin:0;background:#040710"></body></html>'}));await page.goto('/ship-design');
 const setup=await page.evaluate(async()=>{
  const T=await import('/node_modules/three/build/three.module.js'),{createCinema}=await import('/src/graphics/cinema.ts'),{createSpace}=await import('/src/graphics/space.ts'),{createCockpit}=await import('/src/graphics/cockpit.ts'),{createHull}=await import('/src/graphics/hull.ts');
  const renderer=new T.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});renderer.setSize(1440,900);renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.18;document.body.appendChild(renderer.domElement);
  const scene=new T.Scene(),ship=new T.Group(),camera=new T.PerspectiveCamera(68,1.6,.1,50000);ship.position.z=5;ship.add(camera);scene.add(ship);
  const cinema=createCinema(renderer,scene,ship),space=createSpace(scene),cabin=createCockpit(ship),hull=createHull(ship);cinema.configure(true);cinema.update(true,false);space.configure('High',1,1440,900,.2,true);cabin.configureEnvironment(cinema.panorama,true);space.update(.1,15,0,new T.Vector3(),.9);cabin.update(space.tint,1.05,false,true,15);hull.update(true,400);
  window.shipDesign={renderer,scene,ship,camera,cinema,space,cabin,hull,T};space.renderAtmosphere(renderer,camera,true);renderer.render(scene,camera);
  return{batches:cabin.group.children.length,atlas:cabin.group.getObjectByName('instrument-displays').material.map.image.width};
 });
 expect(setup.batches).toBe(6);expect(setup.atlas).toBe(2048);await page.screenshot({path:'test-results/cabin-cinematic-forward.png'});
 for(const [name,yaw,pitch] of [['wing',-1.85,-.24],['rear',Math.PI,-.04]]){await page.evaluate(({yaw,pitch})=>{const h=window.shipDesign;h.camera.rotation.set(pitch,yaw,0,'YXZ');h.space.renderAtmosphere(h.renderer,h.camera,true);h.renderer.render(h.scene,h.camera);},{yaw,pitch});await page.screenshot({path:`test-results/cabin-cinematic-${name}.png`});}
 await page.setViewportSize({width:915,height:412});const error=await page.evaluate(()=>{const h=window.shipDesign;h.renderer.setSize(915,412);h.camera.aspect=915/412;h.camera.rotation.set(0,0,0);h.camera.updateProjectionMatrix();h.cinema.configure(false);h.cabin.configureEnvironment(h.cinema.panorama,false);h.space.configure('Low',1,915,412,.2,true);h.space.renderAtmosphere(h.renderer,h.camera,true);h.renderer.render(h.scene,h.camera);return h.renderer.getContext().getError();});await page.screenshot({path:'test-results/cabin-cinematic-mobile.png'});expect(error).toBe(0);expect(errors).toEqual([]);
 await page.evaluate(()=>{const h=window.shipDesign;h.hull.dispose();h.cabin.dispose();h.space.dispose();h.cinema.dispose();h.scene.traverse(o=>{if(o.isMesh||o.isPoints){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});h.renderer.dispose();});
});
