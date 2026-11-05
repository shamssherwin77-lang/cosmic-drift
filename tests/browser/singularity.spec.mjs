import {test,expect} from '@playwright/test';

async function hazardousCourse(page){
 await page.route('**/course-harness',r=>r.fulfill({contentType:'text/html',body:'<html></html>'}));await page.goto('/course-harness');
 return page.evaluate(async()=>{
  const T=await import('/node_modules/three/build/three.module.js'),{createUniverse,describeSector}=await import('/src/graphics/universe.ts');
  const world=createUniverse(new T.Scene()),origin=new T.Vector3();world.update(.1,0,0,origin);world.recordJump('0/0/0');world.recordJump('0/0/0');
  for(let x=-1;x<=1;x++)for(let y=-1;y<=1;y++)for(let z=-1;z<=1;z++){
   const sector=describeSector(x,y,z);if(sector.region!==4)continue;
   const d=sector.starWorld.clone().normalize(),yaw=Math.atan2(-d.x,-d.z),pitch=Math.asin(d.y),q=new T.Quaternion().setFromEuler(new T.Euler(pitch,yaw,0,'YXZ')),target=world.jumpTarget(origin,q);
   if(target.blackHole){const result={yaw,pitch,center:describeSector(...target.key.split('/').map(Number)).starWorld.toArray(),target:{key:target.key,name:target.name,position:target.position.toArray(),direction:target.direction.toArray()}};world.dispose();return result;}
  }throw Error('No reachable hazard');
 });
}
async function injectPilot(page,course){
 // Start this isolated hazard fixture at its scheduled third Jump.
 await page.route('**/src/graphics/universe.ts*',async route=>{const response=await route.fetch(),source=await response.text();expect(source).toMatch(/completedJumps\s*=\s*0/);await route.fulfill({response,body:source.replace(/completedJumps\s*=\s*0/,'completedJumps = 2')});});
 await page.route('**/src/main.tsx*',async route=>{
  const response=await route.fetch(),source=await response.text();
  expect(source).toContain('new FlightController()');
  const body=source.replace('new FlightController()',`(()=>{const pilot=new FlightController();pilot.yaw=${course.yaw};pilot.pitch=${course.pitch};window.testPilot??=pilot;return window.testPilot;})()`);
  await route.fulfill({response,body});
 });
 await page.goto('/');await page.getByRole('button',{name:'Start journey',exact:true}).click();
 await page.getByRole('button',{name:'Settings',exact:true}).click();await page.getByRole('combobox',{name:'Graphics quality'}).selectOption('Low');await page.getByRole('button',{name:'Close settings',exact:true}).click();
 await expect.poll(()=>page.evaluate(()=>!!window.testPilot)).toBe(true);
 await page.waitForTimeout(250);
}

test('hazardous Jump waits for informed confirmation, cancels safely and arrives looking away',async({page})=>{
 test.setTimeout(90000);const errors=[];page.on('pageerror',e=>errors.push(e.message));const course=await hazardousCourse(page);await injectPilot(page,course);
 await page.getByRole('button',{name:'Light Jump',exact:true}).click();const dialog=page.getByRole('alertdialog');await expect(dialog).toBeVisible();await expect(dialog).toContainText('supermassive black hole');await expect(page.locator('main')).toHaveAttribute('data-jump-phase','idle');
 const before=await page.evaluate(()=>window.testPilot.position.toArray());await page.waitForTimeout(350);expect(await page.evaluate(()=>window.testPilot.position.toArray())).toEqual(before);
 await page.getByRole('button',{name:'Cancel jump',exact:true}).click();await expect(dialog).toHaveCount(0);await expect(page.locator('main')).toHaveAttribute('data-jump-phase','idle');
 await page.getByRole('button',{name:'Light Jump',exact:true}).click();await page.getByRole('button',{name:'I understand. Continue jump',exact:false}).click();
 await expect(page.locator('main')).toHaveAttribute('data-jump-phase','charging');await expect(dialog).toHaveCount(0);
 await expect(page.locator('main')).toHaveAttribute('data-jump-phase','idle',{timeout:45000});
 const result=await page.evaluate(center=>{const c=window.testPilot,p=c.position.toArray(),d=center.map((n,i)=>n-p[i]),q=c.shipQuaternion;const f={x:0,y:0,z:-1};const ix=q.w*f.x+q.y*f.z-q.z*f.y,iy=q.w*f.y+q.z*f.x-q.x*f.z,iz=q.w*f.z+q.x*f.y-q.y*f.x,iw=-q.x*f.x-q.y*f.y-q.z*f.z;const out=[ix*q.w+iw*-q.x+iy*-q.z-iz*-q.y,iy*q.w+iw*-q.y+iz*-q.x-ix*-q.z,iz*q.w+iw*-q.z+ix*-q.y-iy*-q.x];return{distance:Math.hypot(...d),alignment:d.reduce((s,n,i)=>s+n*out[i],0)/Math.hypot(...d)};},course.center);
 expect(result.distance).toBeGreaterThan(5400);expect(result.alignment).toBeLessThan(-.95);await expect(page.locator('main')).toHaveAttribute('data-hazard','clear');
 const safe=await page.evaluate(async()=>{const T=await import('/node_modules/three/build/three.module.js'),{createUniverse}=await import('/src/graphics/universe.ts');const world=createUniverse(new T.Scene()),pilot=window.testPilot;world.recordJump('0/0/0');for(let a=0;a<12;a++){const yaw=a*Math.PI/6,q=new T.Quaternion().setFromEuler(new T.Euler(0,yaw,0)),target=world.jumpTarget(pilot.position,q);if(!target.blackHole&&!world.singularityAt(target.position)){world.dispose();return{yaw,pitch:0};}}throw Error('No safe departure');});
 await page.evaluate(s=>{window.testPilot.yaw=s.yaw;window.testPilot.pitch=s.pitch;},safe);await page.waitForTimeout(350);await page.getByRole('button',{name:'Light Jump',exact:true}).click();await expect(dialog).toHaveCount(0);await expect(page.locator('main')).toHaveAttribute('data-jump-phase','charging');await expect(page.locator('main')).toHaveAttribute('data-jump-phase','idle',{timeout:45000});await expect(page.locator('main')).toHaveAttribute('data-hazard','clear');expect(errors).toEqual([]);
});

test.describe('mobile proximity and transit control',()=>{
 test.use({viewport:{width:915,height:412},hasTouch:true,isMobile:true,deviceScaleFactor:1});
 test('distance warnings escalate, assist preserves manual steering, escape clears the warning',async({page})=>{
  const course=await hazardousCourse(page);await injectPilot(page,course);await page.locator('#speed').fill('0');
  const move=distance=>page.evaluate(({center,distance})=>{window.testPilot.position.set(center[0],center[1],center[2]+distance);window.testPilot.speed=0;}, {center:course.center,distance});
  await move(5000);await expect(page.locator('main')).toHaveAttribute('data-hazard','caution');await expect(page.getByRole('region',{name:'Singularity proximity'})).toHaveAttribute('data-level','caution');
  await move(2600);await expect(page.locator('main')).toHaveAttribute('data-hazard','critical');await page.screenshot({path:'test-results/singularity-mobile-critical.png'});
  await page.getByRole('button',{name:'Enable transit control',exact:true}).tap();await expect(page.locator('main')).toHaveAttribute('data-transit-assist','true');await expect(page.getByText('You retain the helm',{exact:false})).toBeVisible();
  const r=await page.getByRole('group',{name:'Touch flight joystick'}).boundingBox();const yaw=await page.evaluate(()=>window.testPilot.yaw);await page.mouse.move(r.x+r.width*.8,r.y+r.height*.5);await page.mouse.down();await page.waitForTimeout(350);await page.mouse.up();expect(await page.evaluate(()=>window.testPilot.yaw)).not.toBe(yaw);
  await page.screenshot({path:'test-results/singularity-mobile-assisted.png'});await move(6500);await expect(page.locator('main')).toHaveAttribute('data-hazard','clear');await expect(page.getByRole('region',{name:'Singularity proximity'})).toHaveCount(0);
 });
});

test('curved-ray black hole renders from front, rear and near orbit at every quality and releases GPU resources',async({page})=>{
 const errors=[];page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});await page.route('**/lens-harness',r=>r.fulfill({contentType:'text/html',body:'<html><body style="margin:0"></body></html>'}));await page.goto('/lens-harness');
 const result=await page.evaluate(async()=>{
  const T=await import('/node_modules/three/build/three.module.js'),{createBlackHole}=await import('/src/graphics/black-hole.ts');
  const renderer=new T.WebGLRenderer({antialias:true});renderer.setSize(480,320);document.body.appendChild(renderer.domElement);renderer.outputColorSpace=T.SRGBColorSpace;const scene=new T.Scene();scene.background=new T.Color('#0a1129');const camera=new T.PerspectiveCamera(68,1.5,.1,50000),bh=createBlackHole(scene),center=new T.Vector3(),observer=new T.Vector3();const samples=[];
  for(const quality of ['Low','Medium','High'])for(const p of [[0,0,4000],[0,0,-4000],[900,180,0]]){observer.set(...p);camera.position.set(0,0,0);camera.lookAt(center.clone().sub(observer));bh.configure(quality,480,320);bh.update(center,observer,30,0);bh.capture(renderer,camera);renderer.render(scene,camera);samples.push({error:renderer.getContext().getError(),visible:bh.mesh.visible});}
  const starGeometry=new T.BufferGeometry().setAttribute('position',new T.Float32BufferAttribute([0,0,-8000],3)),starMaterial=new T.PointsMaterial({color:'#44aaff',size:24,sizeAttenuation:false,depthWrite:false}),star=new T.Points(starGeometry,starMaterial);star.renderOrder=3;scene.add(star);
  observer.set(0,0,4000);camera.lookAt(0,0,-1);bh.configure('High',480,320);bh.update(center,observer,30,0);bh.capture(renderer,camera);renderer.render(scene,camera);const pixel=new Uint8Array(4);renderer.getContext().readPixels(240,160,1,1,renderer.getContext().RGBA,renderer.getContext().UNSIGNED_BYTE,pixel);star.removeFromParent();starGeometry.dispose();starMaterial.dispose();
  const core=Array.from(pixel);const memory={...renderer.info.memory};bh.dispose();renderer.render(scene,camera);const after={...renderer.info.memory};renderer.dispose();return{samples,memory,after,core};
 });
 expect(Math.max(...result.core.slice(0,3))).toBeLessThan(25);expect(result.samples).toHaveLength(9);result.samples.forEach(s=>{expect(s.error).toBe(0);expect(s.visible).toBe(true);});expect(result.after.geometries).toBe(0);expect(result.after.textures).toBe(0);expect(errors).toEqual([]);
});

test('a new ordinary journey reaches the warning on Jump three and high cruise speed cannot skip discovery',async({page})=>{
 test.setTimeout(150000);await page.goto('/');await page.getByRole('button',{name:'Start journey',exact:true}).click();await page.getByRole('button',{name:'Settings',exact:true}).click();await page.getByRole('combobox',{name:'Graphics quality'}).selectOption('Low');await page.getByRole('button',{name:'Close settings',exact:true}).click();
 for(let i=0;i<2;i++){await page.getByRole('button',{name:'Light Jump',exact:true}).click();if(i===1)await page.getByRole('button',{name:'Enter nebula',exact:false}).click();await expect(page.getByRole('alertdialog')).toHaveCount(0);await expect(page.locator('main')).toHaveAttribute('data-jump-phase','charging');await expect(page.locator('main')).toHaveAttribute('data-jump-phase','idle',{timeout:45000});}
 await page.locator('#speed').fill('1200');await page.getByRole('button',{name:'Light Jump',exact:true}).click();await expect(page.getByRole('alertdialog')).toBeVisible();await page.getByRole('button',{name:'I understand. Continue jump',exact:false}).click();await expect(page.locator('main')).toHaveAttribute('data-jump-phase','charging');await expect(page.locator('main')).toHaveAttribute('data-jump-phase','idle',{timeout:45000});
 await expect(page.locator('#speed')).toHaveValue('18');await expect(page.locator('.navigation-caption>span')).toHaveText('Caeli-EFC7');await expect(page.locator('main')).toHaveAttribute('data-region','4');await page.waitForTimeout(1500);await expect(page.locator('.navigation-caption>span')).toHaveText('Caeli-EFC7');
});
