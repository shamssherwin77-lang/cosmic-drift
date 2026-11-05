import {test,expect} from '@playwright/test';

test('rendered planet and black-hole silhouettes shrink as physical distance doubles',async({page})=>{
 await page.route('**/perspective-harness',r=>r.fulfill({contentType:'text/html',body:'<html><body style="margin:0;background:#050a15;color:white;font:14px sans-serif"></body></html>'}));await page.goto('/perspective-harness');
 const result=await page.evaluate(async()=>{
  const T=await import('/node_modules/three/build/three.module.js'),{createLandingPlanet}=await import('/src/graphics/landing-planet.ts'),{createBlackHole}=await import('/src/graphics/black-hole.ts');
  const renderer=new T.WebGLRenderer({antialias:false,preserveDrawingBuffer:true});renderer.setSize(384,384);renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;
  const target=new T.WebGLRenderTarget(384,384),camera=new T.PerspectiveCamera(68,1,.1,50000);camera.updateMatrixWorld();const pixels=new Uint8Array(384*384*4),rows=[];
  for(const kind of ['planet','black hole']){
   const scene=new T.Scene();scene.background=new T.Color('#050a15');const sun=new T.DirectionalLight('#ffe1b6',3);sun.position.set(0,1,1);scene.add(sun,new T.HemisphereLight('#b3bbd0','#312019',1.5));const object=kind==='planet'?createLandingPlanet(scene):createBlackHole(scene);object.configure('Low',384,384);const center=new T.Vector3(),world={key:'1/0/0',name:'Avaris',region:2,center},samples=[];
   for(const distance of [6000,12000,24000]){
    const observer=new T.Vector3(0,0,distance);kind==='planet'?object.update(world,observer,distance):object.update(center,observer,0,0);if(kind==='black hole')object.capture(renderer,camera);
    renderer.setRenderTarget(target);renderer.render(scene,camera);renderer.readRenderTargetPixels(target,0,0,384,384,pixels);let min=384,max=-1;
    for(let y=0;y<384;y++)for(let x=0;x<384;x++){const i=(y*384+x)*4;if(Math.abs(pixels[i]-pixels[0])+Math.abs(pixels[i+1]-pixels[1])+Math.abs(pixels[i+2]-pixels[2])>18){min=Math.min(min,x);max=Math.max(max,x);}}
    samples.push({distance,width:max-min+1});renderer.setRenderTarget(null);renderer.render(scene,camera);const figure=document.createElement('figure');figure.style.cssText='display:inline-block;margin:4px';const caption=document.createElement('figcaption');caption.textContent=`${kind} · ${distance.toLocaleString()} u`;const canvas=document.createElement('canvas');canvas.width=canvas.height=384;canvas.getContext('2d').drawImage(renderer.domElement,0,0);figure.append(caption,canvas);document.body.append(figure);
   }
   object.dispose();rows.push({kind,samples});document.body.append(document.createElement('br'));
  }
  target.dispose();renderer.dispose();return rows;
 });
 console.log('Rendered landmark widths:',JSON.stringify(result));await page.screenshot({path:'test-results/landmark-perspective.png',fullPage:true});
 for(const row of result){expect(row.samples[0].width).toBeGreaterThan(30);expect(row.samples[1].width).toBeLessThan(row.samples[0].width*.7);expect(row.samples[2].width).toBeLessThan(row.samples[1].width*.7);}
});
