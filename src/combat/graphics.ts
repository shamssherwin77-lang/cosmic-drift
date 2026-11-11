import {energyMaterial,fireballMaterial} from './energy';
import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {CombatSimulation,ENEMY_TYPES,WEAPONS} from './simulation';

/** Shared alien hulls and fixed-size projectile/effect pools. No geometry is built during battle. */
export function createCombatGraphics(scene:T.Scene){
 const group=new T.Group();group.name='challenge-hostiles';group.visible=false;scene.add(group);
 const hullMaterials=['#687c87','#586881','#777166','#4c7774'].map(color=>{
  const m=new T.MeshStandardMaterial({color,metalness:.65,roughness:.48,vertexColors:true,emissive:color,emissiveIntensity:.6});
  m.onBeforeCompile=shader=>{shader.vertexShader='varying vec3 armourPoint;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\narmourPoint=position;');shader.fragmentShader='varying vec3 armourPoint;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
   vec3 plate=floor(armourPoint*vec3(.48,.72,.28));float grain=fract(sin(dot(plate,vec3(12.98,78.23,37.72)))*43758.54);
   float seam=smoothstep(.035,.07,abs(fract(armourPoint.z*.22)-.5));
   diffuseColor.rgb*=mix(.64,1.12,grain)*mix(.45,1.,seam);
  `);shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>','#include <emissivemap_fragment>\ntotalEmissiveRadiance*=mix(.72,1.05,grain)*(.3+.7*max(0.,dot(normal,normalize(vec3(-.35,.7,.5)))));');};m.customProgramCacheKey=()=> 'hostile-armour-v2';return m;
 });
 // Lofted armour has actual taper, chines and thickness rather than primitive capsules.
 const loft=(profile:number[][],sides=8)=>{const positions:number[]=[],uv:number[]=[],indices:number[]=[];for(let i=0;i<profile.length;i++){const [z,w,h]=profile[i];for(let j=0;j<=sides;j++){const a=j/sides*Math.PI*2+Math.PI/8;positions.push(Math.cos(a)*w,Math.sin(a)*h,z);uv.push(j/sides,i/(profile.length-1));}}for(let i=0;i<profile.length-1;i++)for(let j=0;j<sides;j++){const a=i*(sides+1)+j,b=a+sides+1;indices.push(a,a+1,b,a+1,b+1,b);}const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();return g;};
 const engineMaterials=ENEMY_TYPES.map(s=>new T.MeshBasicMaterial({color:new T.Color(s.color).multiplyScalar(2.4),toneMapped:false}));
 const hulls=ENEMY_TYPES.map((_,kind)=>{
  const parts:T.BufferGeometry[]=[];
  const part=(g:T.BufferGeometry,x=0,y=0,z=0,rx=0,ry=0,rz=0)=>{g.rotateX(rx);g.rotateY(ry);g.rotateZ(rz);g.translate(x,y,z);parts.push(g.index?g.toNonIndexed():g);if(g.index)g.dispose();};
  if(kind===0){part(loft([[-29,4,3],[-18,10,6],[3,11,5],[25,3,2],[35,.1,.1]]));for(const side of [-1,1]){part(loft([[-27,2,1],[-17,17,2.5],[4,11,2],[19,.1,.1]]),side*17,-2,-3,0,side*.45,side*.12);part(loft([[-13,.1,.1],[-4,3,9],[9,1,2]]),side*10,7,-11,0,0,side*.2);part(new T.CylinderGeometry(3,5,24,8),side*12,-3,-13,Math.PI/2);}}
  if(kind===1){part(loft([[-25,4,3],[-15,15,12],[7,12,9],[32,.1,.1]]));for(let i=0;i<6;i++){const a=i*Math.PI/3;part(loft([[-15,1,1],[-6,7,5],[13,4,3],[24,.1,.1]]),Math.cos(a)*26,Math.sin(a)*26,0,0,.2,a);}for(const side of [-1,1]){part(new T.TorusGeometry(27,4,6,24,Math.PI*1.35),side*9,0,0,0,side*.55,side*.2);part(new T.ConeGeometry(6,42,6),side*23,0,1,Math.PI/2);}part(new T.OctahedronGeometry(9,0),0,0,19);}
  if(kind===2){part(loft([[-51,12,11],[-34,25,18],[10,27,17],[36,15,12],[49,1,1]]));for(let z=-24;z<=20;z+=11)part(loft([[-7,18,3],[0,20,5],[6,16,2]]),0,17,z);for(const side of [-1,1]){part(loft([[-48,6,8],[-34,13,13],[11,12,10],[30,3,3],[33,.1,.1]]),side*38,0,-7);part(loft([[-18,26,3],[0,25,5],[14,16,3]]),side*22,0,0,0,0,side*.12);for(let z=-25;z<15;z+=12)part(loft([[-5,11,2],[0,12,3],[5,8,1]]),side*38,12,z);for(let i=0;i<3;i++)part(new T.CylinderGeometry(3.5,3.5,28,6),side*(28+i*8),-12,12,Math.PI/2);}}
  if(kind===3){part(new T.TorusKnotGeometry(13,2.2,64,6,2,3),0,0,-3,Math.PI/2);for(const side of [-1,1]){const shape=new T.Shape();shape.moveTo(0,-28);shape.bezierCurveTo(side*38,-38,side*50,-6,side*24,32);shape.bezierCurveTo(side*35,2,side*22,-12,0,-18);shape.closePath();const blade=new T.ExtrudeGeometry(shape,{depth:2.8,bevelEnabled:true,bevelSegments:1,steps:1,bevelSize:1,bevelThickness:.8});part(blade,0,0,0,Math.PI/2);}part(new T.ConeGeometry(8,67,5),0,0,10,Math.PI/2);for(const side of [-1,1]){part(new T.TorusGeometry(26,3,5,24,Math.PI*1.3),side*16,0,-4,0,side*.7,side*.4);}}
  for(const [i,g] of parts.entries()){const count=g.getAttribute('position').count,colors=new Float32Array(count*3),shade=.72+(i%5)*.07;for(let j=0;j<count;j++){colors[j*3]=shade;colors[j*3+1]=shade;colors[j*3+2]=shade;}g.setAttribute('color',new T.BufferAttribute(colors,3));}const geometry=mergeGeometries(parts)!;parts.forEach(p=>p.dispose());geometry.computeBoundingSphere();return geometry;
 });
 const navGeo=new T.CylinderGeometry(.65,.65,25,5);navGeo.rotateX(Math.PI/2);const navParts=[navGeo.clone().translate(-9,7,0),navGeo.clone().translate(9,7,0)];const navRail=mergeGeometries(navParts)!;navParts.forEach(g=>g.dispose());navGeo.dispose();
 const engineGeo=new T.SphereGeometry(1,8,6),bubbleGeo=new T.SphereGeometry(1,16,10);
 const enemies=Array.from({length:8},(_,i)=>{const root=new T.Group(),kind=i%4,body=new T.Mesh(hulls[kind],hullMaterials[kind]),engines=new T.Group();root.name=`hostile-${ENEMY_TYPES[kind].name}`;
  const count=3;for(let j=0;j<count;j++){const engine=new T.Mesh(engineGeo,engineMaterials[kind]);engine.position.set((j-(count-1)/2)*(kind===2?30:12),0,kind===2?-45:-22);engine.scale.set(3,3,8);engines.add(engine);}
  const shieldMaterial=new T.MeshBasicMaterial({color:ENEMY_TYPES[kind].color,wireframe:true,transparent:true,opacity:0,depthWrite:false}),shield=new T.Mesh(bubbleGeo,shieldMaterial);shield.scale.setScalar(ENEMY_TYPES[kind].radius*1.25);const nav=new T.Mesh(navRail,engineMaterials[kind]);root.add(body,engines,shield,nav);group.add(root);return{root,body,engines,shield,shieldMaterial,nav};});
 const plane=new T.PlaneGeometry(1,1),beamMaterial=energyMaterial(),orbMaterial=energyMaterial(true);
 const beams=new T.InstancedMesh(plane,beamMaterial,128),plasma=new T.InstancedMesh(plane,orbMaterial,128),halos=new T.InstancedMesh(plane,orbMaterial,24);
 beams.name='combat-energy-trails';plasma.name='combat-ion-plasma';halos.name='hostile-engine-halos';
 const body=new T.CylinderGeometry(1.8,2.7,14,6);body.rotateX(Math.PI/2);const nose=new T.ConeGeometry(1.8,7,6);nose.rotateX(-Math.PI/2);nose.translate(0,0,10.5);const shotGeo=mergeGeometries([body,nose])!;body.dispose();nose.dispose();
 const shots=new T.InstancedMesh(shotGeo,new T.MeshBasicMaterial({toneMapped:false}),128);shots.name='combat-missile-pool';
 for(const mesh of [shots,beams,plasma,halos]){mesh.frustumCulled=false;mesh.instanceMatrix.setUsage(T.DynamicDrawUsage);mesh.setColorAt(0,new T.Color('#ffffff'));mesh.count=0;group.add(mesh);}
 const flameMaterial=fireballMaterial(),fx=new T.InstancedMesh(plane,flameMaterial,20);fx.setColorAt(0,new T.Color());fx.name='combat-impact-pool';fx.frustumCulled=false;fx.instanceMatrix.setUsage(T.DynamicDrawUsage);group.add(fx);
 const dummy=new T.Object3D(),view=new T.Vector3(),across=new T.Vector3(),normal=new T.Vector3(),basis=new T.Matrix4(),cameraQ=new T.Quaternion(),cameraPosition=new T.Vector3(),direction=new T.Vector3(),z=new T.Vector3(0,0,1),color=new T.Color();
 return{
  group,
  update(sim:CombatSimulation,observer:T.Vector3,visible:boolean,camera?:T.Camera){group.visible=visible;if(!visible)return;
   if(camera){camera.getWorldQuaternion(cameraQ);camera.getWorldPosition(cameraPosition);}else{cameraQ.identity();cameraPosition.set(0,0,0);}beamMaterial.uniforms.clock.value=orbMaterial.uniforms.clock.value=flameMaterial.uniforms.clock.value=sim.elapsed;
   let glowCount=0;
   enemies.forEach((m,i)=>{const e=sim.enemies[i];m.root.visible=e.active;if(!e.active)return;m.body.geometry=hulls[e.kind];m.body.material=hullMaterials[e.kind];m.nav.material=engineMaterials[e.kind];m.shieldMaterial.color.set(ENEMY_TYPES[e.kind].color);m.shield.scale.setScalar(ENEMY_TYPES[e.kind].radius*1.25);const count=e.kind===2?3:2;m.engines.children.forEach((engine,j)=>{engine.visible=j<count;engine.position.set((j-(count-1)/2)*(e.kind===2?30:12),0,e.kind===2?-45:-22);(engine as T.Mesh).material=engineMaterials[e.kind];});m.root.position.copy(e.position).sub(observer);m.root.quaternion.copy(e.rotation);m.body.visible=!e.cloak||e.hit>0;m.engines.visible=m.nav.visible=!e.cloak;m.shield.visible=e.hit>0||e.kind===1&&e.shield>0||e.cloak;m.shieldMaterial.opacity=e.cloak?.12:Math.min(.42,e.hit*.45+(e.shield>0?.07:0));if(!e.cloak){for(const engine of m.engines.children){if(!engine.visible)continue;dummy.position.copy(engine.position).applyQuaternion(e.rotation).add(e.position).sub(observer);dummy.quaternion.copy(cameraQ);dummy.scale.set(24,24,1);dummy.updateMatrix();halos.setMatrixAt(glowCount,dummy.matrix);halos.setColorAt(glowCount,color.set(ENEMY_TYPES[e.kind].color));glowCount++;}}});
   let n=0,beamCount=0,orbCount=0;
   for(const s of sim.shots){if(!s.active)continue;direction.copy(s.velocity).normalize();color.set(s.friendly?WEAPONS[s.weapon].color:'#ff5849');
    const rail=s.friendly&&s.weapon===2,ion=s.friendly&&s.weapon===1,missile=s.weapon===3;
    const length=Math.min(s.distance??s.previous.distanceTo(s.position),rail?90:missile?100:ion?90:120);
    dummy.position.copy(s.position).sub(observer).addScaledVector(direction,-length*.5);view.copy(cameraPosition).sub(dummy.position).normalize();across.crossVectors(direction,view);if(across.lengthSq()<1e-6){across.set(1,0,0).applyQuaternion(cameraQ);across.addScaledVector(direction,-across.dot(direction));if(across.lengthSq()<1e-6)across.set(0,1,0).applyQuaternion(cameraQ);}across.normalize();normal.crossVectors(across,direction).normalize();basis.makeBasis(across,direction,normal);dummy.quaternion.setFromRotationMatrix(basis);dummy.scale.set(rail?7:ion?20:missile?12:15,Math.max(1,length),1);dummy.updateMatrix();beams.setMatrixAt(beamCount,dummy.matrix);beams.setColorAt(beamCount,color);beamCount++;
    if(ion){dummy.position.copy(s.position).sub(observer);dummy.quaternion.copy(cameraQ);dummy.scale.set(30,30,1);dummy.updateMatrix();plasma.setMatrixAt(orbCount,dummy.matrix);plasma.setColorAt(orbCount,color);orbCount++;}
    if(missile){dummy.position.copy(s.position).sub(observer);dummy.quaternion.setFromUnitVectors(z,direction);dummy.scale.set(1,1,1);dummy.updateMatrix();shots.setMatrixAt(n,dummy.matrix);shots.setColorAt(n,color);n++;}
   }
   for(const [mesh,count] of [[shots,n],[beams,beamCount],[plasma,orbCount],[halos,glowCount]] as const){mesh.count=count;mesh.instanceMatrix.needsUpdate=true;if(mesh.instanceColor)mesh.instanceColor.needsUpdate=true;}

   n=0;for(const b of sim.bursts){if(!b.active)continue;const life=b.kill?.48:.16,t=Math.min(1,b.age/life),size=b.size*(.3+Math.sin(Math.PI*Math.min(1,t*1.7))*.9)*(1-t*.5);dummy.position.copy(b.position).sub(observer);dummy.quaternion.copy(cameraQ);dummy.scale.set(size*2,size*2,1);dummy.updateMatrix();fx.setMatrixAt(n,dummy.matrix);fx.setColorAt(n,color.set('#ffffff').multiplyScalar(Math.pow(1-t,1.8)));n++;}fx.count=n;fx.instanceMatrix.needsUpdate=true;if(fx.instanceColor)fx.instanceColor.needsUpdate=true;
  },
  dispose(){group.removeFromParent();hulls.forEach(g=>g.dispose());hullMaterials.forEach(m=>m.dispose());engineMaterials.forEach(m=>m.dispose());enemies.forEach(e=>e.shieldMaterial.dispose());engineGeo.dispose();bubbleGeo.dispose();navRail.dispose();for(const mesh of [beams,plasma,halos])mesh.dispose();plane.dispose();beamMaterial.dispose();orbMaterial.dispose();shots.dispose();shotGeo.dispose();(shots.material as T.Material).dispose();fx.dispose();flameMaterial.dispose();},
 };
}
