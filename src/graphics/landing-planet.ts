import {WorldShaderMaterial} from './world-material';
import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import { LANDING_NORMAL, PLANET_RADIUS, PLANET_FADE_START, PLANET_FADE_END, terrainHeight,groundNormal, type LandingWorld } from '../planet';
import type { Quality } from './config';
const faces=[[[1,0,0],[0,0,-1],[0,1,0]],[[-1,0,0],[0,0,1],[0,1,0]],[[0,1,0],[1,0,0],[0,0,-1]],[[0,-1,0],[1,0,0],[0,0,1]],[[0,0,1],[1,0,0],[0,1,0]],[[0,0,-1],[-1,0,0],[0,1,0]]].map(f=>f.map(v=>new T.Vector3(...v)));
type Tile={mesh:T.Mesh;last:number};
/** Cube-sphere terrain with bounded cached quadtree tiles and skirts at LOD seams. */
export function createLandingPlanet(scene:T.Scene){
 const group=new T.Group();group.name='avaris-landable-world';group.visible=false;scene.add(group);
 const atmosphereDensity={value:0},presence={value:1};
 const material=new T.MeshStandardMaterial({vertexColors:true,roughness:.96,metalness:.025,transparent:true});
 material.onBeforeCompile=shader=>{shader.uniforms.atmosphereDensity=atmosphereDensity;shader.uniforms.presence=presence;shader.vertexShader='varying vec3 terrainPoint;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nterrainPoint=position;');shader.fragmentShader='varying vec3 terrainPoint;uniform float atmosphereDensity,presence;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
 float grain=fract(sin(dot(floor(terrainPoint*2.),vec3(12.9898,78.233,37.719)))*43758.5453);float strata=.94+.06*sin(length(terrainPoint)*.7+sin(terrainPoint.x*.017)*4.);diffuseColor.rgb*=strata*(.92+grain*.16);diffuseColor.a*=presence;`);shader.fragmentShader=shader.fragmentShader.replace('#include <tonemapping_fragment>',`float dust=1.-exp(-length(vViewPosition)*.00035*atmosphereDensity);gl_FragColor.rgb=mix(gl_FragColor.rgb,vec3(.34,.19,.105),clamp(dust,0.,.86));\n#include <tonemapping_fragment>`);};
 const batch=new T.Mesh(new T.BufferGeometry(),material);batch.name='avaris-terrain-surface';batch.castShadow=batch.receiveShadow=true;batch.renderOrder=4;group.add(batch);
 const atmo=new T.Mesh(new T.SphereGeometry(PLANET_RADIUS+1600,48,32),new WorldShaderMaterial({uniforms:{center:{value:new T.Vector3()},amount:atmosphereDensity,presence},transparent:true,side:T.BackSide,depthWrite:false,
 vertexShader:'varying vec3 worldPoint;void main(){vec4 p=modelMatrix*vec4(position,1.);worldPoint=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}',
 fragmentShader:`varying vec3 worldPoint;uniform vec3 center;uniform float amount,presence;void main(){vec3 view=normalize(worldPoint-cameraPosition),up=normalize(cameraPosition-center);float mu=dot(view,up),horizon=pow(1.-abs(mu),2.);vec3 color=mix(vec3(.075,.105,.14),vec3(.62,.32,.15),horizon);vec3 origin=cameraPosition-center;float b=dot(origin,view),disc=b*b-dot(origin,origin)+${(PLANET_RADIUS+1600).toFixed(1)}*${(PLANET_RADIUS+1600).toFixed(1)};if(disc<0.)discard;float entry=max(0.,-b-sqrt(disc)),end=-b+sqrt(disc),stepSize=(end-entry)/8.,density=0.;for(int i=0;i<8;i++){float height=max(0.,length(origin+view*(entry+(float(i)+.5)*stepSize))-${PLANET_RADIUS.toFixed(1)});density+=exp(-height/150.)*stepSize/180.;}float alpha=(1.-exp(-density))*presence;color=mix(vec3(.075,.105,.14),vec3(.62,.32,.15),max(horizon,1.-amount));gl_FragColor=vec4(color,alpha);\n#include <tonemapping_fragment>\n#include <colorspace_fragment>}` }));atmo.name='avaris-thin-atmosphere';atmo.renderOrder=6;group.add(atmo);
 const tiles=new Map<string,Tile>(),wanted=new Set<string>(),center=new T.Vector3(),observerLocal=new T.Vector3(),normal=new T.Vector3(),p=new T.Vector3();let quality:Quality='Medium',serial=0,lastRebuild=-100,lastObserver=new T.Vector3(Infinity,0,0);
 const make=(face:number,level:number,x:number,y:number)=>{
  const grid=quality==='High'?20:quality==='Medium'?16:12,size=2/(2**level),u0=-1+x*size,v0=-1+y*size,[n,u,v]=faces[face],vertices:number[]=[],colors:number[]=[],normals:number[]=[],indices:number[]=[],surfaceNormal=new T.Vector3();
  const add=(i:number,j:number,skirt=false)=>{normal.copy(n).addScaledVector(u,u0+size*i/grid).addScaledVector(v,v0+size*j/grid).normalize();const height=terrainHeight(normal);p.copy(normal).multiplyScalar(PLANET_RADIUS+height-(skirt?Math.max(3,size*PLANET_RADIUS*.035):0));vertices.push(p.x,p.y,p.z);groundNormal(normal,surfaceNormal);normals.push(surfaceNormal.x,surfaceNormal.y,surfaceNormal.z);const shade=.85+.15*Math.sin(height*.06),high=T.MathUtils.smoothstep(height,95,330),color=new T.Color('#b3663f').lerp(new T.Color('#403940'),Math.max(high*.85,T.MathUtils.smoothstep(1-normal.dot(surfaceNormal),.04,.28)*.8)).multiplyScalar(shade);colors.push(color.r,color.g,color.b);return vertices.length/3-1;};
  for(let j=0;j<=grid;j++)for(let i=0;i<=grid;i++)add(i,j);
  for(let j=0;j<grid;j++)for(let i=0;i<grid;i++){const a=j*(grid+1)+i,b=a+1,c=a+grid+1,d=c+1;indices.push(a,b,c,b,d,c);}
  for(let side=0;side<4;side++)for(let i=0;i<grid;i++){const a=side===0?[i,0]:side===1?[grid,i]:side===2?[grid-i,grid]:[0,grid-i],b=side===0?[i+1,0]:side===1?[grid,i+1]:side===2?[grid-i-1,grid]:[0,grid-i-1];const ai=a[1]*(grid+1)+a[0],bi=b[1]*(grid+1)+b[0],si=add(a[0],a[1],true),sj=add(b[0],b[1],true);indices.push(ai,si,bi,bi,si,sj);}
  const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(vertices,3));geometry.setAttribute('color',new T.Float32BufferAttribute(colors,3));geometry.setAttribute('normal',new T.Float32BufferAttribute(normals,3));geometry.setIndex(indices);geometry.computeBoundingSphere();const mesh=new T.Mesh(geometry,material);mesh.name='avaris-terrain-tile';mesh.renderOrder=4;mesh.castShadow=mesh.receiveShadow=true;return mesh;
 };
 const visit=(face:number,level:number,x:number,y:number)=>{
  const size=2/(2**level),[n,u,v]=faces[face];p.copy(n).addScaledVector(u,-1+(x+.5)*size).addScaledVector(v,-1+(y+.5)*size).normalize().multiplyScalar(PLANET_RADIUS);
  const max=quality==='High'?8:7,factor=quality==='High'?1.65:1.35;
  if(level<max&&observerLocal.distanceTo(p)<size*PLANET_RADIUS*factor){for(let dy=0;dy<2;dy++)for(let dx=0;dx<2;dx++)visit(face,level+1,x*2+dx,y*2+dy);return;}
  const key=`${face}/${level}/${x}/${y}`;wanted.add(key);let tile=tiles.get(key);if(!tile){tile={mesh:make(face,level,x,y),last:serial};tiles.set(key,tile);}tile.last=serial;tile.mesh.visible=false;
 };
 const clear=()=>{for(const tile of tiles.values()){tile.mesh.removeFromParent();tile.mesh.geometry.dispose();}tiles.clear();lastRebuild=-100;};
 // A finite boulder field gives the first basin a human-scale ground reference.
 const rocks=new T.InstancedMesh(new T.DodecahedronGeometry(1,0),new T.MeshStandardMaterial({color:'#65463d',roughness:1}),140);rocks.name='avaris-basin-boulders';const dummy=new T.Object3D(),east=new T.Vector3(1,0,0),north=new T.Vector3().crossVectors(LANDING_NORMAL,east).normalize();
 let seed=53421;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 for(let i=0;i<140;i++){const angle=random()*Math.PI*2,r=45+random()*850;normal.copy(LANDING_NORMAL).addScaledVector(east,Math.cos(angle)*r/PLANET_RADIUS).addScaledVector(north,Math.sin(angle)*r/PLANET_RADIUS).normalize();dummy.position.copy(normal).multiplyScalar(PLANET_RADIUS+terrainHeight(normal)+.6);dummy.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),normal);const size=.6+random()*2;dummy.scale.set(size*1.3,size*.65,size);dummy.rotateY(random()*6);dummy.updateMatrix();rocks.setMatrixAt(i,dummy.matrix);}rocks.computeBoundingSphere();group.add(rocks);
 return{
  group,
  configure(value:Quality){if(value!==quality){quality=value;clear();}},
  update(world:LandingWorld|null,observer:T.Vector3,time:number,veil=0){
   group.visible=!!world;if(!world)return;center.copy(world.center).sub(observer);group.position.copy(center);observerLocal.copy(observer).sub(world.center);const altitude=observerLocal.length()-PLANET_RADIUS;
   atmosphereDensity.value=1-T.MathUtils.smoothstep(altitude,150,1600);presence.value=(world.visibility??(1-T.MathUtils.smoothstep(observerLocal.length(),PLANET_FADE_START,PLANET_FADE_END)))*(1-veil);atmo.material.uniforms.center.value.copy(center);rocks.visible=altitude<700;
   if(time-lastRebuild>.2&&(observerLocal.distanceTo(lastObserver)>5||tiles.size===0)){
    serial++;wanted.clear();for(let f=0;f<6;f++)visit(f,0,0,0);const geometry=mergeGeometries([...wanted].map(key=>tiles.get(key)!.mesh.geometry))!;batch.geometry.dispose();batch.geometry=geometry;for(const [key,tile] of tiles)if(!wanted.has(key))tile.mesh.visible=false;
    const unused=[...tiles].filter(([key])=>!wanted.has(key)).sort((a,b)=>a[1].last-b[1].last);while(tiles.size>320&&unused.length){const [key,tile]=unused.shift()!;tile.mesh.removeFromParent();tile.mesh.geometry.dispose();tiles.delete(key);}lastObserver.copy(observerLocal);lastRebuild=time;
   }
  },
  get tileCount(){return tiles.size;},
  dispose(){clear();batch.geometry.dispose();group.removeFromParent();material.dispose();atmo.geometry.dispose();atmo.material.dispose();rocks.dispose();rocks.geometry.dispose();(rocks.material as T.Material).dispose();},
 };
}
