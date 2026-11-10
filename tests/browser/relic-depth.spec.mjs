import {test,expect} from '@playwright/test';
test('high-precision hull depth agrees with nearest-triangle ray intersections during approach',async({page})=>{
 test.setTimeout(120000);await page.route('**/depth-harness',r=>r.fulfill({contentType:'text/html',body:'<html></html>'}));await page.goto('/depth-harness');
 const result=await page.evaluate(async()=>{
  const T=await import('/node_modules/three/build/three.module.js'),{createRelic}=await import('/src/graphics/relic.ts'),{RELIC_ROTATION}=await import('/src/relic.ts');
  const scene=new T.Scene(),relic=createRelic(scene),world={center:new T.Vector3()};relic.configure('Medium');relic.update(world,new T.Vector3(0,0,20000),0);
  const meshes=[];relic.group.traverse(o=>{if(!o.isMesh)return;if(o.isInstancedMesh||o.name==='relic-residual-filaments'){o.visible=false;return;}const g=o.geometry.clone(),n=g.getAttribute('position').count,colors=new Float32Array(n*3);for(let i=0;i<n;i++){const id=Math.floor(i/3)*1103515245+12345;colors[i*3]=((id>>>4)%7+1)/8;colors[i*3+1]=((id>>>10)%7+1)/8;colors[i*3+2]=((id>>>16)%7+1)/8;}g.setAttribute('color',new T.BufferAttribute(colors,3));o.geometry=g;o.material=new T.MeshBasicMaterial({vertexColors:true});meshes.push(o);});
  const width=160,height=100,camera=new T.PerspectiveCamera(68,width/height,.1,120000),target=new T.WebGLRenderTarget(width,height),bytes=new Uint8Array(width*height*4),ray=new T.Raycaster(),samples=[];
  for(const log of [false,true]){const renderer=new T.WebGLRenderer({logarithmicDepthBuffer:log});for(const mesh of meshes){mesh.material.transparent=true;mesh.material.needsUpdate=true;}renderer.outputColorSpace=T.LinearSRGBColorSpace;renderer.setSize(width,height);renderer.setRenderTarget(target);let wrong=0,compared=0;
   for(const p of [[0,1800,40000],[0,1800,39995],[0,1800,30000],[0,1800,20000],[0,1800,19995],[6500,1200,16000],[6495,1200,16000],[2000,3900,4500]]){
    const observer=new T.Vector3(...p).applyQuaternion(RELIC_ROTATION);relic.update(world,observer,0);camera.position.set(0,0,0);camera.up.set(0,1,0).applyQuaternion(RELIC_ROTATION);camera.lookAt(observer.clone().negate());camera.updateMatrixWorld();scene.updateMatrixWorld(true);renderer.render(scene,camera);renderer.readRenderTargetPixels(target,0,0,width,height,bytes);
    for(let y=5;y<height;y+=7)for(let x=5;x<width;x+=7){ray.setFromCamera(new T.Vector2((x+.5)/width*2-1,(y+.5)/height*2-1),camera);const hit=ray.intersectObjects(meshes,false)[0];if(!hit)continue;const c=hit.object.geometry.getAttribute('color'),offset=(y*width+x)*4;const expected=[c.getX(hit.face.a),c.getY(hit.face.a),c.getZ(hit.face.a)];compared++;if(expected.some((v,k)=>Math.abs(v*255-bytes[offset+k])>3))wrong++;}
   }samples.push({log,wrong,compared,fraction:wrong/compared});renderer.dispose();
  }return samples;
 });console.log(JSON.stringify(result));expect(result[1].fraction).toBeLessThan(.05);expect(result[0].wrong).toBeGreaterThan(result[1].wrong);
});

test('overlapping world layers stay in front throughout a far-distance flight, including custom shaders',async({page})=>{
 page.on('console',m=>{if(m.type()==='error')console.log(m.text().slice(0,4500));});
 await page.route('**/layer-harness',r=>r.fulfill({contentType:'text/html',body:'<html></html>'}));await page.goto('/layer-harness');
 const samples=await page.evaluate(async()=>{
  const T=await import('/node_modules/three/build/three.module.js'),{WorldShaderMaterial}=await import('/src/graphics/world-material.ts');const results=[];
  for(const log of [false,true]){
   const renderer=new T.WebGLRenderer({logarithmicDepthBuffer:log});renderer.setSize(32,32);renderer.outputColorSpace=T.LinearSRGBColorSpace;const scene=new T.Scene(),camera=new T.PerspectiveCamera(68,1,.1,120000),target=new T.WebGLRenderTarget(32,32),pixel=new Uint8Array(4);renderer.setRenderTarget(target);
   const near=new T.Mesh(new T.PlaneGeometry(12000,12000),new WorldShaderMaterial({vertexShader:'void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'void main(){gl_FragColor=vec4(0.,1.,0.,1.);return;}'}));near.position.z=-39830;scene.add(near);
   const far=new T.Mesh(new T.PlaneGeometry(12000,12000),new T.MeshBasicMaterial({color:0xff0000}));far.position.z=-40000;scene.add(far);let wrong=0;
   for(let step=0;step<41;step++){camera.position.z=-step*50;renderer.render(scene,camera);renderer.readRenderTargetPixels(target,16,16,1,1,pixel);if(pixel[1]<240||pixel[0]>10)wrong++;}results.push({log,wrong,error:renderer.getContext().getError()});for(const o of [near,far]){o.geometry.dispose();o.material.dispose();}target.dispose();renderer.dispose();
  }return results;
 });console.log('Layer flight',samples);expect(samples[0].wrong).toBeGreaterThan(0);expect(samples[1].wrong).toBe(0);expect(samples[1].error).toBe(0);
});
