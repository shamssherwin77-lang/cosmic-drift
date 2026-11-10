import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {RELIC_ROTATION,RELIC_FADE_START,RELIC_FADE_END,type RelicWorld} from '../relic';
import {HULL_PATCHES,DETACHED_PATCHES,RELIC_SITES,hullAxis,hullSection,shellPoint,tornRange,toFragment,relicNoise,type ShellPatch} from '../relic-shape';
import type {Quality} from './config';

/** A dead, laminated alien hull. No box greebles, lamp rows or enclosing fog shell. */
export function createRelic(scene:T.Scene){
 const group=new T.Group();group.name='ancient-mothership';group.quaternion.copy(RELIC_ROTATION);group.visible=false;scene.add(group);
 const presence={value:1},clock={value:0},relative=new T.Vector3();
 const noiseGLSL=`
 float relicHash(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);}
 float relicNoise3(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(relicHash(i),relicHash(i+vec3(1,0,0)),f.x),mix(relicHash(i+vec3(0,1,0)),relicHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(relicHash(i+vec3(0,0,1)),relicHash(i+vec3(1,0,1)),f.x),mix(relicHash(i+vec3(0,1,1)),relicHash(i+vec3(1,1,1)),f.x),f.y),f.z);}
 vec3 relicBump(vec3 eye,vec3 base,float height){vec3 q0=dFdx(eye),q1=dFdy(eye),r1=cross(q1,base),r2=cross(base,q0);float det=dot(q0,r1);vec3 grad=sign(det)*(dFdx(height)*r1+dFdy(height)*r2);return normalize(abs(det)*base-grad*.3);}
 `;
 function alloy(color:string,roughness:number,metalness:number,iridescence:number){
  const m=new T.MeshPhysicalMaterial({color,roughness,metalness,iridescence,iridescenceIOR:1.6,iridescenceThicknessRange:[180,640],vertexColors:true,transparent:false,envMapIntensity:1.25});
  m.onBeforeCompile=shader=>{
   shader.uniforms.relicPresence=presence;
   shader.vertexShader='varying vec3 relicSurface;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
    relicSurface=transformed;
    #ifdef USE_INSTANCING
     relicSurface=(instanceMatrix*vec4(transformed,1.)).xyz;
    #endif
   `);
   shader.fragmentShader='varying vec3 relicSurface;uniform float relicPresence;\n'+noiseGLSL+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
    vec3 fossilP=relicSurface;float age=relicNoise3(fossilP*.0006)*.58+relicNoise3(fossilP*.0037)*.29+relicNoise3(fossilP*.018)*.13;
    float mineral=relicNoise3(fossilP*.0019+vec3(12.,3.,9.));
    float lamina=.5+.5*sin(fossilP.z*.035+relicNoise3(fossilP*.0008)*28.+fossilP.x*.004);
    float etched=relicNoise3(fossilP*.065)*1.7+lamina*.3;
    diffuseColor.rgb*=mix(.53,1.15,age);
    diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.13,.155,.145),smoothstep(.64,.9,mineral)*.32);
    // Stable coverage fade keeps structural metal in the opaque depth pass.
    float coverage=fract(52.9829189*fract(dot(floor(gl_FragCoord.xy),vec2(.06711056,.00583715))));
    if(relicPresence<=coverage)discard;
   `);
   shader.fragmentShader=shader.fragmentShader.replace('#include <roughnessmap_fragment>','#include <roughnessmap_fragment>\nroughnessFactor=clamp(roughnessFactor+age*.24-lamina*.035,.25,.97);');
   shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_maps>','#include <normal_fragment_maps>\nnormal=relicBump(-vViewPosition,normal,etched);');
  };
  m.customProgramCacheKey=()=> 'meridian-stratified-alloy-v3';return m;
 }
 const skin=alloy('#657379',.46,.78,.25),fracture=alloy('#484c4b',.72,.48,.12),inner=alloy('#303d45',.5,.82,.38);
 const energy=new T.MeshBasicMaterial({color:'#476c69',transparent:true});
 const lowParts=new Map<T.Material,T.BufferGeometry[]>(),highParts=new Map<T.Material,T.BufferGeometry[]>();
 const add=(g:T.BufferGeometry,m:T.Material,high=false)=>{const map=high?highParts:lowParts,list=map.get(m)??[];list.push(g);map.set(m,list);};
 function colorize(g:T.BufferGeometry,shade=1){const positions=g.getAttribute('position'),colors:number[]=[];for(let i=0;i<positions.count;i++){const p=new T.Vector3().fromBufferAttribute(positions,i),v=.76+relicNoise(p.x*.00045+7,p.y*.00045,p.z*.00045)*.35;colors.push(v*shade,v*shade,v*shade);}g.setAttribute('color',new T.Float32BufferAttribute(colors,3));if(!g.getAttribute('uv'))g.setAttribute('uv',new T.Float32BufferAttribute(new Float32Array(positions.count*2),2));return g;}
 function shell(patch:ShellPatch,detail:number){
  const nt=Math.max(8,Math.ceil((patch.t1-patch.t0)*detail)),na=Math.max(10,Math.ceil((patch.a1-patch.a0)*detail*.58));
  const positions:number[]=[],uvs:number[]=[],indices:number[]=[],normal=new T.Vector3(),axis=new T.Vector3(),point=new T.Vector3();
  for(const side of [1,-1])for(let i=0;i<=nt;i++)for(let j=0;j<=na;j++){
   const a=patch.a0+(patch.a1-patch.a0)*j/na,[lo,hi]=tornRange(patch,a),t=lo+(hi-lo)*i/nt;
   shellPoint(t,a,patch.layer,point);hullAxis(t,axis);const [w,h]=hullSection(t,patch.layer);normal.set(Math.cos(a)/w,Math.sin(a)/h,0).normalize();point.addScaledVector(normal,side*patch.thickness/2);toFragment(point,patch);positions.push(point.x,point.y,point.z);uvs.push(i/nt,j/na);
  }
  const count=(nt+1)*(na+1);
  for(let i=0;i<nt;i++)for(let j=0;j<na;j++){const a=i*(na+1)+j,b=a+na+1,c=a+1,d=b+1;indices.push(a,c,b,c,d,b);indices.push(a+count,b+count,c+count,c+count,b+count,d+count);}
  const join=(a:number,b:number)=>indices.push(a,a+count,b,b,a+count,b+count);
  for(let i=0;i<nt;i++){join(i*(na+1),(i+1)*(na+1));join((i+1)*(na+1)+na,i*(na+1)+na);}
  for(let j=0;j<na;j++){join(j+1,j);join(nt*(na+1)+j,nt*(na+1)+j+1);}
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setAttribute('uv',new T.Float32BufferAttribute(uvs,2));g.setIndex(indices);g.computeVertexNormals();return colorize(g);
 }
 for(const [i,patch] of [...HULL_PATCHES,...DETACHED_PATCHES].entries()){
  const material=patch.layer<0?inner:i%4===2?fracture:skin;
  add(shell(patch,23),material);add(shell(patch,54),material,true);
 }
 function both(g:T.BufferGeometry,m:T.Material){const c=colorize(g);add(c,m);add(c.clone(),m,true);}
 // Long non-repeating ribs follow the grown hull; they are not a grid of manufactured panels.
 for(let i=0;i<19;i++){
  const a=2.4+(i%10)*.24,t0=-.82+(i%3)*.05,t1=.64-(i%4)*.035,layer=i<10?.04:-.12;
  const points=Array.from({length:46},(_,k)=>shellPoint(t0+(t1-t0)*k/45,a+Math.sin(k*.12+i)*.045,layer));
  both(new T.TubeGeometry(new T.CatmullRomCurve3(points),74,18+(i%4)*8,6,false),i%4===0?fracture:inner);
 }
 // The chamber is opaque and unlit: folded loops surround a dark sealed core.
 const chamber=RELIC_SITES[0].point;
 for(let i=0;i<3;i++){const g=new T.TorusKnotGeometry(470+i*65,22+i*6,136,7,3,5);g.rotateX(i*.71);g.rotateY(i*.46);g.translate(chamber.x,chamber.y,chamber.z);both(g,inner);}
 const core=new T.SphereGeometry(235,40,24);const corePositions=core.getAttribute('position');
 for(let i=0;i<corePositions.count;i++){const p=new T.Vector3().fromBufferAttribute(corePositions,i);p.multiplyScalar(1+(relicNoise(p.x*.009,p.y*.009,p.z*.009)-.5)*.19);corePositions.setXYZ(i,p.x,p.y,p.z);}core.computeVertexNormals();core.translate(chamber.x,chamber.y,chamber.z);both(core,skin);
 // A blind, bending throat sits in the gap between the inner and outer strata.
 const throat=RELIC_SITES[2].point;
 for(let i=0;i<11;i++){const a=i*.17,points=Array.from({length:29},(_,k)=>{const angle=.22+k/28*Math.PI*1.67;return new T.Vector3(throat.x+Math.cos(angle)*(310+i*7),throat.y+Math.sin(angle)*(430+i*9),throat.z-1100+i*205+Math.sin(angle*2+a)*65);});both(new T.TubeGeometry(new T.CatmullRomCurve3(points),38,20+i%3*7,6,false),inner);}
 // Only three nearly exhausted filaments carry any light. Most of the ruin is completely dead.
 for(const [t,a,length] of [[-.34,1.08,.11],[.22,2.45,.09],[.63,.75,.05]]){
  const points=Array.from({length:15},(_,i)=>shellPoint(t+i/14*length,a+Math.sin(i*.37)*.025,.009));
  both(new T.TubeGeometry(new T.CatmullRomCurve3(points),24,3.8,4,false),energy);
 }
 const variants:{mesh:T.Mesh;low:T.BufferGeometry;high:T.BufferGeometry}[]=[];
 for(const [m,parts] of lowParts){
  const merge=(list:T.BufferGeometry[])=>{const expanded=list.map(g=>g.index?g.toNonIndexed():g),geometry=mergeGeometries(expanded)!;for(const g of new Set([...list,...expanded]))g.dispose();return geometry;};
  const low=merge(parts),high=merge(highParts.get(m)!);const mesh=new T.Mesh(low,m);mesh.renderOrder=4;mesh.name=m===skin?'relic-primary-hull':m===energy?'relic-residual-filaments':'relic-stratified-interior';group.add(mesh);variants.push({mesh,low,high});
 }
 function shard(){
  const positions:number[]=[],indices:number[]=[];
  for(let i=0;i<=12;i++){const t=i/12,width=Math.pow(Math.sin(Math.PI*t),.7);for(const side of [-1,1])positions.push(side*width*.48,Math.sin(t*3.9)*.13+side*Math.sin(t*4.2)*.07,t-.5);}
  for(let i=0;i<12;i++){const a=i*2;indices.push(a,a+2,a+1,a+1,a+2,a+3);}
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setIndex(indices);g.computeVertexNormals();return colorize(g);
 }
 // Shed metallic lamellae sit flush with the skin instead of thousands of block towers.
 let seed=37489;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 const foil=shard(),fixtureMaterial=inner.clone();fixtureMaterial.side=T.DoubleSide;fixtureMaterial.onBeforeCompile=inner.onBeforeCompile;fixtureMaterial.customProgramCacheKey=inner.customProgramCacheKey;
 const fixtures=new T.InstancedMesh(foil,fixtureMaterial,1700),dummy=new T.Object3D(),p=new T.Vector3(),n=new T.Vector3();fixtures.name='relic-surface-city';
 for(let i=0;i<1700;i++){
  const patch=HULL_PATCHES[i%HULL_PATCHES.length],a=patch.a0+random()*(patch.a1-patch.a0),[lo,hi]=tornRange(patch,a),t=lo+random()*(hi-lo);shellPoint(t,a,patch.layer,p);const [w,h]=hullSection(t,patch.layer);n.set(Math.cos(a)/w,Math.sin(a)/h,0).normalize();p.addScaledVector(n,patch.thickness/2+8);dummy.position.copy(p);dummy.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),n);dummy.rotateY((random()-.5)*.5);dummy.scale.set(45+random()*180,12+random()*27,100+random()*270);dummy.updateMatrix();fixtures.setMatrixAt(i,dummy.matrix);fixtures.setColorAt(i,new T.Color().setRGB(.63+random()*.3,.66+random()*.3,.68+random()*.3));
 }fixtures.computeBoundingSphere();fixtures.renderOrder=4;group.add(fixtures);
 // Fragments are thin torn metal from the same alloy, never generic asteroid rocks.
 const debris=new T.InstancedMesh(foil,fixtureMaterial,140);debris.name='relic-fracture-debris';
 for(let i=0;i<140;i++){const patch=DETACHED_PATCHES[i%3],a=patch.a0+random()*(patch.a1-patch.a0),t=patch.t0+random()*(patch.t1-patch.t0);shellPoint(t,a,patch.layer,p);toFragment(p,patch);p.add(new T.Vector3((random()-.5)*2600,(random()-.5)*2000,(random()-.5)*2400));dummy.position.copy(p);dummy.rotation.set(random()*6,random()*6,random()*6);const size=60+Math.pow(random(),2)*520;dummy.scale.set(size*.65,size*.12,size*1.8);dummy.updateMatrix();debris.setMatrixAt(i,dummy.matrix);}debris.computeBoundingSphere();debris.renderOrder=4;group.add(debris);
 const archive=new T.InstancedMesh(foil,fixtureMaterial,31);archive.name='relic-suspended-archive';
 for(let i=0;i<31;i++){const a=i*2.399963,point=RELIC_SITES[1].point;dummy.position.copy(point).add(new T.Vector3(Math.cos(a)*(180+i*12),Math.sin(a*.83)*(160+i*9),(i-15)*39));dummy.rotation.set(i*.34,Math.sin(a)*.9,i*.17);dummy.scale.set(180+i%4*55,28,360+i%5*90);dummy.updateMatrix();archive.setMatrixAt(i,dummy.matrix);}archive.computeBoundingSphere();archive.renderOrder=4;group.add(archive);
 return{
  group,
  configure(quality:Quality,_height=900){for(const v of variants)v.mesh.geometry=quality==='High'?v.high:v.low;fixtures.count=quality==='High'?1700:quality==='Medium'?950:440;debris.count=quality==='High'?140:quality==='Medium'?90:45;},
  update(world:RelicWorld|null,observer:T.Vector3,time:number,veil=0){group.visible=!!world;if(!world)return;relative.copy(world.center).sub(observer);group.position.copy(relative);presence.value=(1-T.MathUtils.smoothstep(relative.length(),RELIC_FADE_START,RELIC_FADE_END))*(1-veil);clock.value=time;
   const weak=.006+Math.pow(Math.max(0,Math.sin(time*.071+1.3)),34)*.17;energy.opacity=presence.value;energy.color.set('#557973').multiplyScalar(weak);
  },
  dispose(){group.removeFromParent();const geometries=new Set<T.BufferGeometry>(),materials=new Set<T.Material>();for(const v of variants){geometries.add(v.low);geometries.add(v.high);}group.traverse(o=>{if(o instanceof T.Mesh){geometries.add(o.geometry);materials.add(o.material as T.Material);if(o instanceof T.InstancedMesh)o.dispose();}});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());},
 };
}
