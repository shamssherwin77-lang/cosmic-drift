import {test,expect} from '@playwright/test';

test('exterior wings are visible through side windows, follow the ship and leave the forward horizon clear',async({page})=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  await page.route('**/vessel-harness',r=>r.fulfill({contentType:'text/html',body:'<html><body style="margin:0"></body></html>'}));await page.goto('/vessel-harness');
  const result=await page.evaluate(async()=>{
    const T=await import('/node_modules/three/build/three.module.js'),{createHull}=await import('/src/graphics/hull.ts'),{createCockpit}=await import('/src/graphics/cockpit.ts');
    const ship=new T.Group(),camera=new T.PerspectiveCamera(68,1.5,.1,50000);ship.add(camera);
    const hull=createHull(ship),cabin=createCockpit(ship);ship.updateMatrixWorld(true);
    const opaque=cabin.group.children.filter(o=>o.isMesh&&!o.material.transparent),ray=new T.Raycaster();
    const sideHits=[-1,1].map(side=>{ray.set(new T.Vector3(),new T.Vector3(side*8,-2.15,4).normalize());const hullHits=ray.intersectObject(hull.group,true);const cabinHits=ray.intersectObjects(opaque);return{hull:hullHits.length,clear:!cabinHits.length||cabinHits[0].distance>hullHits[0]?.distance};});
    ray.set(new T.Vector3(),new T.Vector3(0,0,-1));const forward=ray.intersectObject(hull.group,true).length;
    const before=hull.group.matrixWorld.clone();camera.rotation.y=2;ship.updateMatrixWorld(true);const gazeMovedHull=!before.equals(hull.group.matrixWorld);
    ship.rotation.y=1;ship.updateMatrixWorld(true);const followsShip=hull.group.matrixWorld.equals(ship.matrixWorld);
    const bounds=new T.Box3().setFromObject(hull.group),batches=hull.group.children.length;
    hull.update(false,0);const hidden=!hull.group.visible;hull.update(true,1200);
    const renderer=new T.WebGLRenderer();renderer.setSize(320,220);const scene=new T.Scene();scene.add(ship);scene.add(new T.HemisphereLight('#dbefff','#111725',2));renderer.render(scene,camera);const error=renderer.getContext().getError();
    hull.dispose();cabin.dispose();renderer.dispose();
    return{sideHits,forward,gazeMovedHull,followsShip,batches,hidden,size:bounds.getSize(new T.Vector3()).length(),error};
  });
  result.sideHits.forEach(side=>{expect(side.hull).toBeGreaterThan(0);expect(side.clear).toBe(true);});
  expect(result.forward).toBe(0);expect(result.gazeMovedHull).toBe(false);expect(result.followsShip).toBe(true);
  expect(result.batches).toBeLessThanOrEqual(5);expect(result.hidden).toBe(true);expect(result.size).toBeGreaterThan(20);expect(result.error).toBe(0);expect(errors).toEqual([]);
});
