import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {RELIC_ROTATION,RELIC_FADE_START,RELIC_FADE_END,KEEL_STATIONS,CROWN_STATIONS,BUTTRESS_ANGLES,type RelicWorld} from '../relic';
import type {Quality} from './config';

/** An ancient cathedral-scale carrier. World-anchored geometry, shared materials and bounded instance pools. */
export function createRelic(scene:T.Scene){
 const group=new T.Group();group.name='ancient-mothership';group.quaternion.copy(RELIC_ROTATION);group.visible=false;scene.add(group);
 const presence={value:1},clock={value:0},relative=new T.Vector3();
 function metal(color:string,metalness:number,roughness:number){
  const material=new T.MeshStandardMaterial({color,metalness,roughness,envMapIntensity:1.1,transparent:true});
  material.onBeforeCompile=shader=>{shader.uniforms.relicPresence=presence;shader.uniforms.relicClock=clock;shader.vertexShader='varying vec3 ancientPoint,ancientNormal;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nancientPoint=transformed;ancientNormal=normal;');shader.fragmentShader=`varying vec3 ancientPoint,ancientNormal;uniform float relicPresence,relicClock;
 float ancientHash(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);}
 float ancientNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(ancientHash(i),ancientHash(i+vec3(1,0,0)),f.x),mix(ancientHash(i+vec3(0,1,0)),ancientHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(ancientHash(i+vec3(0,0,1)),ancientHash(i+vec3(1,0,1)),f.x),mix(ancientHash(i+vec3(0,1,1)),ancientHash(i+vec3(1,1,1)),f.x),f.y),f.z);}
 `+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
   vec3 n=abs(normalize(ancientNormal)),p=ancientPoint;vec2 uv=n.y>n.x&&n.y>n.z?p.xz:n.x>n.z?p.zy:p.xy;
   vec2 cell=abs(fract(uv/vec2(280.,740.))-.5);float seam=smoothstep(.478,.495,max(cell.x,cell.y));
   float erosion=ancientNoise(p*.0013)*.65+ancientNoise(p*.0081)*.35;
   float grain=fract(sin(dot(floor(p*.27),vec3(12.9898,78.233,37.719)))*43758.5453);
   diffuseColor.rgb*=mix(.5,1.2,erosion)*(1.-seam*.48)*(.94+grain*.12);
   diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.075,.14,.135),smoothstep(.68,.95,erosion)*.48);
   diffuseColor.a*=relicPresence;
  `);shader.fragmentShader=shader.fragmentShader.replace('#include <roughnessmap_fragment>','#include <roughnessmap_fragment>\nroughnessFactor=clamp(roughnessFactor+erosion*.22-seam*.12,.25,.98);');};material.customProgramCacheKey=()=> 'meridian-weathered-v1';return material;
 }
 const armor=metal('#48565b',.76,.45),rib=metal('#81725a',.83,.36),abyss=metal('#111e26',.35,.75);
 const light=new T.MeshBasicMaterial({color:new T.Color('#98ded0').multiplyScalar(2.1),transparent:true}),ember=new T.MeshBasicMaterial({color:new T.Color('#ecc087').multiplyScalar(1.8),transparent:true});
 const batches=new Map<T.Material,T.BufferGeometry[]>();const add=(geometry:T.BufferGeometry,material:T.Material)=>{const list=batches.get(material)??[];list.push(geometry);batches.set(material,list);};
 const box=(m:T.Material,x:number,y:number,z:number,w:number,h:number,d:number,rx=0,ry=0,rz=0)=>{const g=Math.min(w,h,d)>100?new RoundedBoxGeometry(w,h,d,1,Math.min(w,h,d)*.08):new T.BoxGeometry(w,h,d);g.rotateX(rx);g.rotateY(ry);g.rotateZ(rz);g.translate(x,y,z);add(g,m);};
 function arc(r:number,width:number,z:number,depth:number,start:number,end:number,m:T.Material){const shape=new T.Shape();const segments=Math.max(2,Math.ceil((end-start)*24));for(let i=0;i<=segments;i++){const a=start+(end-start)*i/segments,x=Math.cos(a)*(r+width/2),y=Math.sin(a)*(r+width/2);i?shape.lineTo(x,y):shape.moveTo(x,y);}for(let i=segments;i>=0;i--){const a=start+(end-start)*i/segments;shape.lineTo(Math.cos(a)*(r-width/2),Math.sin(a)*(r-width/2));}shape.closePath();const g=new T.ExtrudeGeometry(shape,{depth,bevelEnabled:true,bevelSize:Math.min(width,depth)*.08,bevelThickness:Math.min(width,depth)*.06,bevelSegments:1,steps:1});g.translate(0,0,z-depth/2);add(g,m);}
 // Three fractured concentric hulls surround a deep, entirely open aperture.
 arc(5600,740,0,1140,.25,5.35,armor);arc(6080,180,40,820,.29,5.25,rib);arc(5100,230,-35,760,.32,5.31,abyss);arc(4820,110,880,740,.6,2.5,rib);arc(4780,130,700,860,3.3,4.85,abyss);
 for(let i=0;i<92;i++){
  const a=.27+i/91*5.03,c=Math.cos(a),s=Math.sin(a);
  box(rib,c*5610,s*5610,-620,835,58,155,0,0,a);
  box(abyss,c*5600,s*5600,592,650,84,90,0,0,a);
  if(i%3!==0)box(i%7===0?ember:light,c*5090,s*5090,-435,11,55,65,0,0,a);
  if(i%4===0){arc(5600,510,-690,110,a-.014,a+.014,rib);box(armor,c*6200,s*6200,30,200,130,650,0,0,a);}
 }
 // An asymmetric stepped keel, larger than a city, with cathedral towers and recessed hangars.
 function loft(stations:number[][],y:number,m:T.Material){const positions:number[]=[],indices:number[]=[];
 for(const [z,w,h] of stations)for(let i=0;i<16;i++){const a=i/16*Math.PI*2;positions.push(Math.cos(a)*w,Math.sin(a)*h+y,z);}
 for(let j=0;j<stations.length-1;j++)for(let i=0;i<16;i++){const a=j*16+i,b=j*16+(i+1)%16,c=a+16,d=b+16;indices.push(a,b,c,b,d,c);}
 for(let i=1;i<15;i++){indices.push(0,i+1,i);const o=(stations.length-1)*16;indices.push(o,o+i,o+i+1);}
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setAttribute('uv',new T.Float32BufferAttribute(new Float32Array(positions.length/3*2),2));g.setIndex(indices);g.computeVertexNormals();add(g,m);}
 loft(KEEL_STATIONS,-240,armor);
 box(abyss,0,-745,800,970,110,11500);
 loft(CROWN_STATIONS,900,armor);
 for(const side of [-1,1]){
  box(rib,side*700,-160,1000,110,720,10800);
  for(let i=0;i<14;i++){
   const z=-4700+i*790,height=320+Math.pow(Math.sin(i*1.7)*.5+.5,2)*1100;
   box(armor,side*(740+(i%3)*95),height/2-100,z,260,height,420,0,0,side*-.13);
   box(rib,side*650,-120,z,75,900,90,0,0,side*-.13);
   box(abyss,side*655,-180,z,32,430,520);
   box(i%4===0?ember:light,side*680,-90,z,12,250,370);
   for(let k=0;k<4;k++)box(armor,side*(980+k*145),-380-k*70,z,180,100,390,0,0,side*-.12);
  }
  for(let i=0;i<6;i++){
   // Dark open-mouth bays, framed by three nested ribs. The far wall glows weakly.
   const z=-2600+i*1250;box(abyss,side*664,250,z,24,330,650);
   for(let k=0;k<3;k++){box(rib,side*(690+k*60),440,z,60,70,760-k*80);box(rib,side*(690+k*60),85,z,60,70,760-k*80);}
   box(ember,side*690,270,z,13,170,420);
  }
 }
 // Great buttresses tie the keel to the ring; gaps between them are real flight paths.
 for(const a of BUTTRESS_ANGLES){
  const c=Math.cos(a),s=Math.sin(a),length=4400;
  box(armor,c*3300,s*3300,120, length,330,680,0,0,a);
  box(rib,c*3300,s*3300,-245,length,68,100,0,0,a);
  for(let i=0;i<8;i++){const r=1400+i*470;box(abyss,c*r,s*r,-300,190,420,140,0,0,a);box(light,c*r,s*r,-380,8,170,18,0,0,a);}
 }
 // Exposed fracture teeth, bent spars and hanging conduits at both torn ring ends.
 for(const a of [.25,5.35])for(let i=0;i<18;i++){
  const r=5230+(i%6)*140,depth=180+(i*137%780),offset=(i%2?1:-1)*.018;
  box(i%3===0?rib:abyss,Math.cos(a+offset)*r,Math.sin(a+offset)*r,-350+(i%3)*310,65,depth,75,.12*i,.15,a-.2);
 }
 // Sparse immense glyphs: incomplete, unfamiliar vertical marks, never human text.
 for(let i=0;i<17;i++){const z=-4200+i*510;box(i%6===0?ember:light,0,1340,z,190-(i%3)*45,8,12);box(light,-85,1340,z+55,9,8,80-(i%4)*12);}
 for(const [material,parts] of batches){const expanded=parts.map(g=>g.index?g.toNonIndexed():g),geometry=mergeGeometries(expanded)!;for(const g of new Set([...parts,...expanded]))g.dispose();const mesh=new T.Mesh(geometry,material);mesh.name=material===armor?'relic-primary-hull':material===light||material===ember?'relic-lit-apertures':'relic-structural-layers';group.add(mesh);}
 // Thousands of deep surface fixtures, distributed around the full structure at every LOD.
 let seed=74821;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 const fixtures=new T.InstancedMesh(new T.BoxGeometry(1,1,1),armor,2400),dummy=new T.Object3D();fixtures.name='relic-surface-city';
 for(let i=0;i<2400;i++){
  const a=.3+random()*4.98,r=5150+random()*900;dummy.position.set(Math.cos(a)*r,Math.sin(a)*r,(random()>.5?1:-1)*(580+random()*190));dummy.rotation.set(0,0,a);dummy.scale.set(20+random()*150,8+random()*45,15+Math.pow(random(),5)*320);dummy.updateMatrix();fixtures.setMatrixAt(i,dummy.matrix);fixtures.setColorAt(i,new T.Color('#bdc4b5').multiplyScalar(.5+random()*.5));
 }fixtures.computeBoundingSphere();group.add(fixtures);
 const debris=new T.InstancedMesh(new T.DodecahedronGeometry(1,0),abyss,150);debris.name='relic-fracture-debris';
 for(let i=0;i<150;i++){const a=5.35+random()*1.05,r=5200+random()*2200;dummy.position.set(Math.cos(a)*r,Math.sin(a)*r,(random()-.5)*1900);dummy.rotation.set(random()*6,random()*6,random()*6);const size=14+Math.pow(random(),3)*170;dummy.scale.set(size,size*.45,size*.8);dummy.updateMatrix();debris.setMatrixAt(i,dummy.matrix);}debris.computeBoundingSphere();group.add(debris);
 const beaconGeometry=new T.BufferGeometry(),beaconPositions:number[]=[],beaconColors:number[]=[];
 for(let i=0;i<42;i++){const a=.3+i/41*4.98;for(const side of [-1,1]){beaconPositions.push(Math.cos(a)*5070,Math.sin(a)*5070,side*570);beaconColors.push(...new T.Color(i%7===0?'#e4b87e':'#7cdaca').toArray());}}
 beaconGeometry.setAttribute('position',new T.Float32BufferAttribute(beaconPositions,3));beaconGeometry.setAttribute('color',new T.Float32BufferAttribute(beaconColors,3));
 const beaconPixels={value:900},beaconMaterial=new T.ShaderMaterial({uniforms:{presence,time:clock,pixels:beaconPixels},vertexColors:true,transparent:true,depthWrite:false,blending:T.AdditiveBlending,vertexShader:'varying vec3 beaconColor;uniform float pixels,time;void main(){beaconColor=color*(.85+.15*sin(time*.15+position.x*.001));vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(125.*pixels/max(1.,-p.z),0.,40.);}',fragmentShader:`varying vec3 beaconColor;uniform float presence;void main(){float r=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(beaconColor*2.,exp(-r*r*9.)*presence*.65);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`});
 const beacons=new T.Points(beaconGeometry,beaconMaterial);beacons.name='relic-powered-beacons';beacons.renderOrder=5;group.add(beacons);
 // A local dust veil gives depth and self-occlusion without becoming a camera-attached skybox.
 const fogUniforms={center:{value:new T.Vector3()},presence,time:clock,steps:{value:10},viewProjection:{value:new T.Matrix4()}};
 const fogMaterial=new T.ShaderMaterial({uniforms:fogUniforms,side:T.BackSide,transparent:true,depthWrite:false,vertexShader:'varying vec3 relicPoint;void main(){vec4 p=modelMatrix*vec4(position,1.);relicPoint=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}',fragmentShader:`varying vec3 relicPoint;uniform vec3 center;uniform float presence,time;uniform int steps;uniform mat4 viewProjection;
 float h(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);}
 float n(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(h(i),h(i+vec3(1,0,0)),f.x),mix(h(i+vec3(0,1,0)),h(i+vec3(1,1,0)),f.x),f.y),mix(mix(h(i+vec3(0,0,1)),h(i+vec3(1,0,1)),f.x),mix(h(i+vec3(0,1,1)),h(i+vec3(1,1,1)),f.x),f.y),f.z);}
 void main(){vec3 ray=normalize(relicPoint-cameraPosition),origin=(cameraPosition-center)/8500.;float b=dot(origin,ray),d=b*b-dot(origin,origin)+1.;if(d<0.)discard;float lo=max(0.,-b-sqrt(d)),hi=-b+sqrt(d),stepSize=(hi-lo)/float(steps),density=0.;for(int i=0;i<12;i++){if(i>=steps)break;vec3 p=origin+ray*(lo+(float(i)+.5)*stepSize);float clouds=n(p*5.+vec3(0.,time*.002,0.))*.7+n(p*12.)*.3;density+=smoothstep(.4,.78,clouds)*(1.-smoothstep(.65,1.,length(p)))*stepSize;}
 vec4 frontDepth=viewProjection*vec4(cameraPosition+ray*max(100.,lo*8500.),1.);gl_FragDepth=clamp(frontDepth.z/max(.0001,frontDepth.w)*.5+.5,0.,1.);float alpha=(1.-exp(-density*.85))*presence;gl_FragColor=vec4(mix(vec3(.07,.15,.17),vec3(.35,.44,.4),clamp(density*2.,0.,1.)),alpha);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`});const mist=new T.Mesh(new T.SphereGeometry(8500,24,16),fogMaterial);mist.name='relic-local-dust';mist.renderOrder=7;mist.onBeforeRender=(_r,_s,camera)=>{fogUniforms.viewProjection.value.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);};scene.add(mist);
 return{
  group,
  configure(quality:Quality,height=900){beaconPixels.value=height;fixtures.count=quality==='High'?2400:quality==='Medium'?1400:650;debris.count=quality==='High'?150:quality==='Medium'?100:55;fogUniforms.steps.value=quality==='High'?12:quality==='Medium'?8:5;},
  update(world:RelicWorld|null,observer:T.Vector3,time:number,veil=0){group.visible=mist.visible=!!world;if(!world)return;relative.copy(world.center).sub(observer);group.position.copy(relative);mist.position.copy(relative);fogUniforms.center.value.copy(relative);presence.value=(1-T.MathUtils.smoothstep(relative.length(),RELIC_FADE_START,RELIC_FADE_END))*(1-veil);clock.value=time;light.opacity=presence.value;ember.opacity=presence.value;const pulse=.86+.14*Math.sin(time*.17);light.color.set('#98ded0').multiplyScalar(1.9*pulse);ember.color.set('#ecc087').multiplyScalar(1.5+Math.sin(time*.11)*.1);},
  dispose(){group.removeFromParent();mist.removeFromParent();const geometries=new Set<T.BufferGeometry>(),materials=new Set<T.Material>();group.traverse(o=>{if(o instanceof T.Mesh||o instanceof T.Points){geometries.add(o.geometry);materials.add(o.material as T.Material);if(o instanceof T.InstancedMesh)o.dispose();}});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());mist.geometry.dispose();fogMaterial.dispose();},
 };
}
