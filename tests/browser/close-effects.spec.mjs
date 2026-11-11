import {test,expect} from '@playwright/test';
test('close overlapping effects keep most of the pilot view clear',async({page})=>{
 await page.goto('/');
 const samples=await page.evaluate(async()=>{
 const T=await import('/node_modules/three/build/three.module.js'),{createCombatGraphics}=await import('/src/combat/graphics.ts'),{CombatSimulation}=await import('/src/combat/simulation.ts');
 const renderer=new T.WebGLRenderer({logarithmicDepthBuffer:true,preserveDrawingBuffer:true});renderer.setSize(320,180);const scene=new T.Scene();scene.background=new T.Color('#040710');const camera=new T.PerspectiveCamera(68,320/180,.1,120000),sim=new CombatSimulation(),graphics=createCombatGraphics(scene),samples=[];
 for(const distance of [2,8,20,60,200]){for(const b of sim.bursts){b.active=true;b.kill=true;b.size=70;b.age=.1;b.position.set(0,0,-distance);}graphics.update(sim,new T.Vector3(),true,camera);renderer.render(scene,camera);const gl=renderer.getContext(),pixels=new Uint8Array(320*180*4);gl.readPixels(0,0,320,180,gl.RGBA,gl.UNSIGNED_BYTE,pixels);let bright=0;for(let i=0;i<pixels.length;i+=4)if(pixels[i]>200&&pixels[i+1]>180&&pixels[i+2]>150)bright++;const matrix=new T.Matrix4(),pos=new T.Vector3(),rot=new T.Quaternion(),scale=new T.Vector3();scene.getObjectByName('combat-impact-pool').getMatrixAt(0,matrix);matrix.decompose(pos,rot,scale);samples.push({ratio:scale.x/distance,white:bright/(320*180),error:gl.getError()});}graphics.dispose();renderer.dispose();return samples;
 });for(const s of samples){expect(s.ratio).toBeLessThan(.551);expect(s.white).toBeLessThan(.15);expect(s.error).toBe(0);}
});
