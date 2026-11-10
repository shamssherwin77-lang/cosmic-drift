import {test,expect} from '@playwright/test';

async function worldData(page){
 await page.route('**/planet-data',r=>r.fulfill({contentType:'text/html',body:'<html></html>'}));await page.goto('/planet-data');return page.evaluate(async()=>{const {describeSector}=await import('/src/graphics/universe.ts'),{LANDING_SECTOR,LANDING_NORMAL,PLANET_RADIUS,terrainHeight}=await import('/src/planet.ts');const center=describeSector(...LANDING_SECTOR).starWorld.clone();center.y-=500;center.z+=7500;return{center:center.toArray(),normal:LANDING_NORMAL.toArray(),radius:PLANET_RADIUS,height:terrainHeight(LANDING_NORMAL)};});
}

test('the second Jump announces a unique landable world and the recurring black-hole route remains intact',async({page})=>{
 test.setTimeout(120000);await page.route('**/src/main.tsx*',async route=>{const response=await route.fetch(),source=await response.text();await route.fulfill({response,body:source.replace('new FlightController()','(()=>{window.planetTraveler??=new FlightController();return window.planetTraveler;})()')});});await page.goto('/');await page.getByRole('button',{name:'Start journey',exact:true}).click();await page.getByRole('button',{name:'Settings',exact:true}).click();await page.getByRole('combobox',{name:'Graphics quality'}).selectOption('Low');await page.getByRole('button',{name:'Close settings',exact:true}).click();
 for(let i=0;i<2;i++){await page.getByRole('button',{name:'Light Jump',exact:true}).click();if(i===1){const advisory=page.getByRole('alertdialog');await expect(advisory).toContainText('You will arrive far from the planet');await expect(page.locator('main')).toHaveAttribute('data-jump-phase','idle');await page.getByRole('button',{name:'Cancel jump',exact:true}).click();await expect(advisory).toHaveCount(0);await page.getByRole('button',{name:'Light Jump',exact:true}).click();await page.getByRole('button',{name:'Enter nebula',exact:false}).click();}await expect(page.locator('main')).toHaveAttribute('data-jump-phase','charging');await expect(page.locator('main')).toHaveAttribute('data-jump-phase','idle',{timeout:45000});}
 const panel=page.getByRole('region',{name:'Planet approach',exact:true});await expect(panel).toBeVisible();await expect(panel).toContainText('AVARIS',{ignoreCase:true});await expect(panel).toContainText('You can descend');await expect(panel).toContainText('DISTANCE TO SURFACE');await page.screenshot({path:'test-results/avaris-orbit.png'});await expect(page.getByRole('button',{name:'Dismiss planet notice',exact:true})).toBeVisible();await page.evaluate(()=>{window.planetTraveler.position.y+=60000;});await expect(panel).toHaveCount(0);
 await page.getByRole('button',{name:'Light Jump',exact:true}).click();await expect(page.getByRole('alertdialog')).toContainText('supermassive black hole');
});

test('terrain LOD renders from orbit and within valleys at every tier with bounded resources',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});await page.route('**/terrain-harness',r=>r.fulfill({contentType:'text/html',body:'<html><body style="margin:0"></body></html>'}));await page.goto('/terrain-harness');
 const result=await page.evaluate(async()=>{
  const T=await import('/node_modules/three/build/three.module.js'),{createLandingPlanet}=await import('/src/graphics/landing-planet.ts'),{PLANET_RADIUS,LANDING_NORMAL,terrainHeight}=await import('/src/planet.ts');const renderer=new T.WebGLRenderer({logarithmicDepthBuffer:true,antialias:true});renderer.setSize(640,400);renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;document.body.appendChild(renderer.domElement);const scene=new T.Scene();scene.background=new T.Color('#050a15');const sun=new T.DirectionalLight('#ffe1b6',3);sun.position.set(0,1,-1);scene.add(sun,new T.HemisphereLight('#b3bbd0','#312019',1.5));const camera=new T.PerspectiveCamera(68,1.6,.1,50000),terrain=createLandingPlanet(scene),world={key:'1/0/0',name:'Avaris',region:2,center:new T.Vector3()},samples=[];let time=0;
  for(const quality of ['Low','Medium','High'])for(const altitude of [3600,400,35]){terrain.configure(quality);const observer=LANDING_NORMAL.clone().multiplyScalar(PLANET_RADIUS+terrainHeight(LANDING_NORMAL)+altitude);terrain.update(world,observer,time+=1);camera.up.copy(LANDING_NORMAL);camera.lookAt(altitude>1000?observer.clone().negate():new T.Vector3(0,-1,0).projectOnPlane(LANDING_NORMAL));renderer.render(scene,camera);samples.push({quality,altitude,tiles:terrain.tileCount,error:renderer.getContext().getError()});}
  window.terrainCapture={renderer,scene,camera,terrain};const before={...renderer.info.memory};return{samples,before};
 });
 await page.screenshot({path:'test-results/avaris-surface.png'});const after=await page.evaluate(()=>{const h=window.terrainCapture;h.terrain.dispose();h.renderer.render(h.scene,h.camera);const memory={...h.renderer.info.memory};h.renderer.dispose();return memory;});
 result.samples.forEach(s=>{expect(s.error).toBe(0);expect(s.tiles).toBeLessThanOrEqual(320);});expect(after.geometries).toBe(0);expect(errors).toEqual([]);
});

test('surface radar supports a real gentle landing and takeoff without changing the cockpit',async({page})=>{
 test.setTimeout(90000);const errors=[];page.on('pageerror',e=>errors.push(e.message));const data=await worldData(page),position=data.center.map((v,i)=>v+data.normal[i]*(data.radius+data.height+75));
 await page.route('**/src/main.tsx*',async route=>{const response=await route.fetch(),source=await response.text();const body=source.replace('new FlightController()',`(()=>{const c=new FlightController();c.position.set(${position.join(',')});window.planetPilot??=c;return window.planetPilot;})()`);await route.fulfill({response,body});});await page.goto('/');await page.getByRole('button',{name:'Start journey',exact:true}).click();await page.getByRole('button',{name:'Settings',exact:true}).click();await page.getByRole('combobox',{name:'Graphics quality'}).selectOption('Low');await page.getByRole('button',{name:'Close settings',exact:true}).click();
 const panel=page.getByRole('region',{name:'Planet approach',exact:true});await expect(panel).toBeVisible();await expect(panel).toContainText('HEIGHT ABOVE GROUND');await page.getByRole('button',{name:'Surface flight',exact:true}).click();await expect(page.getByRole('button',{name:'Land gently',exact:true})).toBeEnabled();await page.getByRole('button',{name:'Land gently',exact:true}).click();await expect(panel).toHaveAttribute('data-surface-status','landed',{timeout:25000});await expect(panel).toContainText('Landed');await expect(panel.locator('.planet-range b')).toHaveText('0 u');await page.screenshot({path:'test-results/avaris-landed.png'});
 const clearance=await page.evaluate(async center=>{const {altitudeAt}=await import('/src/planet.ts');return altitudeAt(window.planetPilot.position,window.planetPilot.position.clone().set(...center));},data.center);expect(clearance).toBeCloseTo(9,1);
 await page.getByRole('button',{name:'Take off',exact:true}).click();await expect(panel).toHaveAttribute('data-surface-status','flight',{timeout:20000});const altitude=await page.evaluate(async center=>{const {altitudeAt}=await import('/src/planet.ts');return altitudeAt(window.planetPilot.position,window.planetPilot.position.clone().set(...center));},data.center);expect(altitude).toBeGreaterThan(70);expect(errors).toEqual([]);
});

test('Avaris stays on Jump two even after steering toward or passing its host, and returns every five Jumps',async({page})=>{
 await page.route('**/planet-route-harness',r=>r.fulfill({contentType:'text/html',body:'<html></html>'}));await page.goto('/planet-route-harness');
 const result=await page.evaluate(async()=>{
  const T=await import('/node_modules/three/build/three.module.js'),{createUniverse,describeSector}=await import('/src/graphics/universe.ts'),{LANDING_SECTOR,LANDING_KEY}=await import('/src/planet.ts');
  const world=createUniverse(new T.Scene()),host=describeSector(...LANDING_SECTOR),p=new T.Vector3(),q=new T.Quaternion().setFromUnitVectors(new T.Vector3(0,0,-1),host.starWorld.clone().normalize());world.configure('Low');world.update(.1,0,0,p);
  const first=world.jumpTarget(p,q);world.recordJump(first.key);p.copy(host.starWorld);world.update(.1,1,host.region,p);const second=world.jumpTarget(p,q);const center=host.starWorld.clone().add(new T.Vector3(0,-500,7500));const arrivalRange=second.position.distanceTo(center)- (await import('/src/planet.ts')).PLANET_RADIUS,arrivalFacing=second.direction.dot(center.clone().sub(second.position).normalize());
  world.recordJump(second.key);p.copy(second.position);world.update(.1,1,second.region,p);const entryRegion=world.navigation(p,q).region,entryHazard=world.singularityAt(p);const targets=[first,second];
  for(let n=2;n<12;n++){world.update(.1,n,0,p);const target=world.jumpTarget(p,q);if(world.jumpTarget(p,q).key!==target.key)throw Error('Planning advanced the route');targets.push(target);world.recordJump(target.key);p.copy(target.position);}
  world.dispose();return{landingKey:LANDING_KEY,arrivalRange,arrivalFacing,entryRegion,entryHazard:!!entryHazard,targets:targets.map(t=>({key:t.key,landable:t.landable,hazard:t.blackHole}))};
 });
 expect(result.targets[0].landable).toBe(false);expect(result.arrivalRange).toBeGreaterThan(15000);expect(result.arrivalFacing).toBeLessThan(0);expect(result.entryRegion).toBe(2);expect(result.entryHazard).toBe(false);
 for(const n of [1,6,11])expect(result.targets[n].key).toBe(result.landingKey);
 for(const n of [2,7])expect(result.targets[n].hazard).toBe(true);
 expect(result.targets.filter(t=>t.landable)).toHaveLength(3);
});

test('outbound flight increases physical range, shrinks both landmarks, and returning restores their fixed centers',async({page})=>{
 await page.route('**/departure-harness',r=>r.fulfill({contentType:'text/html',body:'<html></html>'}));await page.goto('/departure-harness');
 const samples=await page.evaluate(async()=>{
  const T=await import('/node_modules/three/build/three.module.js'),{createUniverse,describeSector}=await import('/src/graphics/universe.ts'),{FlightController}=await import('/src/controls.ts'),{createLandingPlanet}=await import('/src/graphics/landing-planet.ts'),{createBlackHole}=await import('/src/graphics/black-hole.ts'),P=await import('/src/planet.ts'),S=await import('/src/singularity.ts');
  const scene=new T.Scene(),world=createUniverse(scene),terrain=createLandingPlanet(scene),hole=createBlackHole(scene),controller=new FlightController(),planetHost=describeSector(...P.LANDING_SECTOR),blackHost=describeSector(...S.SINGULARITY_SECTOR),planetCenter=planetHost.starWorld.clone().add(new T.Vector3(0,-500,7500)),results=[];
  terrain.configure('Low');world.configure('Low');
  for(const kind of ['planet','black-hole']){
   const center=kind==='planet'?planetCenter:blackHost.starWorld,key=kind==='planet'?P.LANDING_KEY:S.SINGULARITY_KEY;world.recordJump(key);controller.position.copy(center).add(new T.Vector3(0,0,7000));controller.shipQuaternion.setFromAxisAngle(new T.Vector3(0,1,0),Math.PI);controller.syncAttitude();controller.keys.add('KeyW');
   const settings={mode:'Manual Flight',freeFlight:true,started:true,paused:false,blocked:false,speed:1200,reduced:false,motion:0,sensitivity:1,touchSensitivity:.7,invertMouseX:false,invertMouseY:false},steps=[];
   for(let i=0;i<=2400;i++){
    controller.step(1/60,settings);
    if(i%600)continue;
    const observer=controller.position,land=world.planetAt(observer),hazard=world.singularityAt(observer);terrain.update(land,observer,i/60);hole.update(hazard?.position??null,observer,i/60,0);
    const mesh=kind==='planet'?terrain.group:hole.mesh;steps.push({distance:observer.distanceTo(center),visible:mesh.visible,worldError:mesh.position.clone().add(observer).distanceTo(center),angle:2*Math.atan((kind==='planet'?P.PLANET_RADIUS:S.HORIZON_RADIUS*6)/observer.distanceTo(center))});
   }
   controller.keys.clear();controller.position.copy(center).add(new T.Vector3(0,0,7000));terrain.update(world.planetAt(controller.position),controller.position,100);hole.update(world.singularityAt(controller.position)?.position??null,controller.position,100,0);results.push({kind,steps,returned:(kind==='planet'?terrain.group:hole.mesh).visible});
  }
  terrain.dispose();hole.dispose();world.dispose();return results;
 });
 for(const sample of samples){for(let i=1;i<sample.steps.length;i++){expect(sample.steps[i].distance).toBeGreaterThan(sample.steps[i-1].distance+10000);expect(sample.steps[i].angle).toBeLessThan(sample.steps[i-1].angle);}for(const step of sample.steps.filter(s=>s.visible))expect(step.worldError).toBeLessThan(.001);expect(sample.returned).toBe(true);}
});
