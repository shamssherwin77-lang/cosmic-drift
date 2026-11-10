import {test,expect} from '@playwright/test';

test('searchlight illuminates a distant wall, follows ship attitude and switches off cleanly',async({page})=>{
 await page.route('**/lamp-harness',r=>r.fulfill({contentType:'text/html',body:'<html></html>'}));await page.goto('/lamp-harness');
 const result=await page.evaluate(async()=>{
  const T=await import('/node_modules/three/build/three.module.js'),{createSearchlight}=await import('/src/graphics/searchlight.ts');
  const renderer=new T.WebGLRenderer({logarithmicDepthBuffer:true}),scene=new T.Scene(),ship=new T.Group(),camera=new T.PerspectiveCamera(60,1,.1,10000);renderer.setSize(64,64);scene.add(ship);const lamp=createSearchlight(ship);
  const wall=new T.Mesh(new T.PlaneGeometry(4000,4000),new T.MeshStandardMaterial({color:'#657379',metalness:.78,roughness:.46}));wall.position.z=-2000;scene.add(wall);
  const target=new T.WebGLRenderTarget(64,64),pixels=new Uint8Array(4);
  const sample=()=>{renderer.setRenderTarget(target);renderer.render(scene,camera);renderer.readRenderTargetPixels(target,32,32,1,1,pixels);return pixels[0]+pixels[1]+pixels[2];};
  lamp.update(false);const off=sample();lamp.update(true);const on=sample();ship.rotation.y=Math.PI;const turned=sample();ship.rotation.y=0;lamp.update(false);const offAgain=sample();const error=renderer.getContext().getError();lamp.dispose();wall.geometry.dispose();wall.material.dispose();target.dispose();renderer.dispose();return{off,on,turned,offAgain,error,remaining:ship.children.length};
 });expect(result.on).toBeGreaterThan(result.off+30);expect(result.turned).toBe(result.off);expect(result.offAgain).toBe(result.off);expect(result.error).toBe(0);expect(result.remaining).toBe(0);
});

test('desktop L and mobile button share the lamp toggle',async({page})=>{
 await page.goto('/');await page.getByRole('button',{name:'Start journey'}).click();const lamp=page.getByRole('button',{name:'Searchlight',exact:true});await expect(lamp).toHaveAttribute('aria-pressed','false');await page.keyboard.press('l');await expect(lamp).toHaveAttribute('aria-pressed','true');await page.keyboard.press('l');await expect(lamp).toHaveAttribute('aria-pressed','false');await page.setViewportSize({width:844,height:390});await lamp.click();await expect(lamp).toHaveAttribute('aria-pressed','true');await lamp.click();await expect(lamp).toHaveAttribute('aria-pressed','false');
});
