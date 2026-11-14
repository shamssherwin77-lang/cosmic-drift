import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {WEAPONS,ENEMY_TYPES} from '../combat/simulation';
import type {CombatReading} from '../combat/simulation';
import type {NavigationInfo} from './universe';

// Model metres are scaled to the existing ship; its pilot anchor maps to camera (0,0,0).
export const COCKPIT_SCALE=1.5;
export type CockpitTelemetry={speed:number;thrust:number;heading:number;navigation:NavigationInfo;combat?:CombatReading;contacts:{x:number;y:number;kind:number}[];target?:{name:string;distance:number};searchlight:boolean;paused:boolean};
type Display={texture:T.CanvasTexture;canvas:HTMLCanvasElement;ctx:CanvasRenderingContext2D;base:HTMLCanvasElement;kind:string};

/** Ship-space cockpit: async self-contained GLB, shared environment, bounded-rate live displays. */
export function createCockpit(ship:T.Group){
 const cabin=new T.Group();cabin.name='meridian-flight-deck';ship.add(cabin);
 const model=new T.Group();model.rotation.y=Math.PI;model.scale.setScalar(COCKPIT_SCALE);model.position.set(0,-1.72*COCKPIT_SCALE,-1.8*COCKPIT_SCALE);cabin.add(model);
 const lightweight=new Map<T.Material,T.MeshBasicMaterial>();
 const meshMaterials:{mesh:T.Mesh;original:T.Material|T.Material[]}[]=[];
 let economical=false;
 const displays:Display[]=[],materials=new Set<T.Material>(),geometries=new Set<T.BufferGeometry>(),textures=new Set<T.Texture>();
 const needles:{mesh:T.Mesh;kind:string;base:T.Quaternion;axis:T.Vector3;baseAngle:number;angle:number;initialized:boolean}[]=[];
 const needleRotation=new T.Quaternion();let lastNeedleFrame=performance.now();
 let paintedTelemetry:CockpitTelemetry|undefined;
 const surfaces:{material:T.MeshStandardMaterial;base:T.Color}[]=[];
 let pendingTelemetry:CockpitTelemetry|undefined;
 let disposed=false,loaded=false,lastDisplay=-Infinity,environment:T.Texture|null=null,high=false;
 let fallback:ReturnType<typeof import('./cockpit-legacy').createCockpit>|undefined;
 const ready=new GLTFLoader().loadAsync(`${import.meta.env.BASE_URL}models/meridian-cockpit.glb`).then(gltf=>{
  gltf.scene.updateMatrixWorld(true);
  gltf.scene.traverse(o=>{if(!(o instanceof T.Mesh))return;geometries.add(o.geometry);o.frustumCulled=false;o.castShadow=false;o.receiveShadow=false;
   if(o.userData.gauge){const inverse=o.getWorldQuaternion(new T.Quaternion()).invert(),axis=new T.Vector3().fromArray(o.userData.gaugeNormal).applyQuaternion(inverse).normalize();needles.push({mesh:o,kind:o.userData.gauge,base:o.quaternion.clone(),axis,baseAngle:o.userData.gaugeBaseAngle,angle:0,initialized:false});}
   for(const material of Array.isArray(o.material)?o.material:[o.material]){
    if(materials.has(material))continue;
    materials.add(material);for(const v of Object.values(material))if(v instanceof T.Texture)textures.add(v);
    if(!(material instanceof T.MeshStandardMaterial))continue;
    if(material.name.startsWith('DISPLAY /')&&material.map){
     const source=material.map.image as CanvasImageSource & {width:number;height:number};
     const canvas=document.createElement('canvas');canvas.width=Math.round(source.width/2);canvas.height=Math.round(source.height/2);const ctx=canvas.getContext('2d')!;
     const base=document.createElement('canvas');base.width=canvas.width;base.height=canvas.height;base.getContext('2d')!.drawImage(source,0,0,base.width,base.height);ctx.drawImage(base,0,0);
     const texture=new T.CanvasTexture(canvas);texture.flipY=false;texture.colorSpace=T.SRGBColorSpace;texture.anisotropy=2;textures.add(texture);material.map=texture;material.emissiveMap=texture;material.emissive.set('#ffffff');material.emissiveIntensity=1;material.color.set('#000000');material.toneMapped=false;
     displays.push({texture,canvas,ctx,base,kind:material.name.slice(10)});
    }else if(!material.transparent)surfaces.push({material,base:material.color.clone()});
    if(material.name.includes('instrument anti-reflection'))material.opacity=.045;
    if(material.transparent){material.depthWrite=false;if(material.name.includes('canopy')){material.side=T.DoubleSide;material.forceSinglePass=true;}material.envMapIntensity=material.name.includes('canopy')?.35:.7;o.renderOrder=material.name.includes('canopy')?9:2;}
    material.envMapIntensity=material.transparent?material.envMapIntensity:1.05;
    const light=new T.MeshBasicMaterial({map:material.map,color:material.name.startsWith('DISPLAY /')?'#ffffff':material.color,transparent:material.transparent,opacity:material.opacity,side:material.side,depthWrite:material.depthWrite,toneMapped:!material.name.startsWith('DISPLAY /')});
    light.forceSinglePass=true;lightweight.set(material,light);materials.add(light);
   }
   meshMaterials.push({mesh:o,original:o.material});
  });
  if(disposed){release();return;}
  model.add(gltf.scene);loaded=true;applyEconomy();cabin.userData.status='ready';cabin.userData.triangles=89900;
 }).catch(async()=>{
  if(disposed)return;cabin.userData.status='fallback';
  // A failed asset request never removes flight controls or prevents exploration.
  const legacy=await import('./cockpit-legacy');if(disposed)return;fallback=legacy.createCockpit(cabin);if(environment)fallback.configureEnvironment(environment,high);
 });
 cabin.userData.status='loading';
 function applyEconomy(){for(const item of meshMaterials)item.mesh.material=economical?(Array.isArray(item.original)?item.original.map(m=>lightweight.get(m)??m):lightweight.get(item.original)??item.original):item.original;}
 function release(){geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>{const image=t.image as {close?:()=>void}|undefined;image?.close?.();t.dispose();});}
 function paint(d:Display,t:CockpitTelemetry,time:number){
  const {ctx:c,canvas,base,kind}=d;c.clearRect(0,0,canvas.width,canvas.height);c.drawImage(base,0,0);c.save();c.scale(.5,.5);
  const blank=(x:number,y:number,w:number,h:number)=>{c.fillStyle='#051114';c.fillRect(x,y,w,h);};
  const text=(s:string,x:number,y:number,size=20,color='#b3d4c7')=>{c.font=`${size}px monospace`;c.fillStyle=color;c.fillText(s,x,y);};
  const bar=(x:number,y:number,w:number,h:number,v:number,color='#7dc7bb')=>{blank(x,y,w,h);c.strokeStyle='#265352';c.strokeRect(x,y,w,h);c.fillStyle=color;c.fillRect(x+3,y+3,(w-6)*T.MathUtils.clamp(v,0,1),h-6);};
  if(kind==='Navigation'){
   blank(45,100,715,580);c.strokeStyle='#0c2326';c.lineWidth=1;for(let x=45;x<760;x+=50){c.beginPath();c.moveTo(x,100);c.lineTo(x,680);c.stroke();}for(let y=100;y<680;y+=50){c.beginPath();c.moveTo(45,y);c.lineTo(760,y);c.stroke();}
   c.strokeStyle='#265352';for(const r of [65,120,180,245]){c.beginPath();c.arc(394,398,r,0,Math.PI*2);c.stroke();}
   c.beginPath();c.moveTo(394,372);c.lineTo(382,415);c.lineTo(394,406);c.lineTo(406,415);c.closePath();c.strokeStyle='#b3d4c7';c.stroke();
   const sweep=time*.5;c.strokeStyle='#487d73';c.beginPath();c.moveTo(394,398);c.lineTo(394+Math.cos(sweep)*245,398+Math.sin(sweep)*245);c.stroke();
   for(const contact of t.contacts){c.fillStyle=ENEMY_TYPES[contact.kind]?.color??'#cf9c56';c.beginPath();c.arc(394+contact.x*235,398+contact.y*235,5,0,Math.PI*2);c.fill();}
   blank(820,200,120,50);text('SET',830,225,22,'#7dc7bb');
   blank(950,105,280,345);[`${t.speed.toFixed(1)} u/s`,`${t.thrust.toFixed(0)} SET`,`${t.heading.toFixed(1)}`,`${Math.round(t.navigation.distance)} u`].forEach((s,i)=>text(s,956,139+i*86,24));
   blank(820,642,410,47);text(`SHLD ${t.combat?.shield.toFixed(0)??'100'}% HULL ${t.combat?.hull.toFixed(0)??'100'}%`,840,675,20);
   blank(40,708,1200,65);text(t.navigation.current.toUpperCase().slice(0,36),43,749,20);text(t.paused?'HOLD':t.combat?'COMBAT':'EXPLORATION',920,749,18);
  }else if(kind==='Engine exploration'){
   blank(25,75,715,166);['THR','SPD','LAMP'].forEach((s,i)=>text(s,33,107+i*55,17));
   [t.thrust/1200,t.speed/1200,t.searchlight?1:0].forEach((v,i)=>bar(135,90+i*55,565,18,v));
   blank(25,382,715,50);text(t.paused?'FLIGHT HOLD':t.searchlight?'SEARCHLIGHT / ACTIVE':'DRIVE / NOMINAL',30,417,18);
  }else if(kind==='Energy target'){
   const b=t.combat;blank(30,84,160,45);text('HULL',35,112,21,'#7dc7bb');[b?b.hull/100:1,b?b.shield/100:1,b?.overheated?0:b?.weapon===3?1-T.MathUtils.clamp(b.missileReload/WEAPONS[3].interval,0,1):1-(b?.heat??0),b?.heat??0].forEach((v,i)=>bar(202,95+i*90,493,23,v,i===3&&v>.75?'#e77a58':i===3?'#cf9c56':'#7dc7bb'));
   blank(30,480,705,330);text(b?WEAPONS[b.weapon].name.toUpperCase():'EXPLORATION',35,513,25);text(t.target?.name.toUpperCase().slice(0,25)??'NO HOSTILE CONTACT',35,571,20);text(t.target?`RNG ${Math.round(t.target.distance)} u`:'SENSORS / PASSIVE',35,619,20);text(b?(b.weapon===3&&b.missileReload>0?`RELOAD ${b.missileReload.toFixed(1)}s`:b.overheated?'COOLING':b.locked?'TARGET LOCK':'TRACKING'):'SYSTEMS NOMINAL',35,667,20,b?.overheated?'#e77a58':'#7dc7bb');text(b?`WAVE ${b.wave} / 3   ${b.remaining} LEFT`:'PEACEFUL FLIGHT',35,735,20);
   blank(30,803,710,70);text(b?`HULL ${Math.round(b.hull)}% / SHIELD ${Math.round(b.shield)}%`:'SENSORS PASSIVE / STANDBY',35,846,18);
  }else if(kind==='Gauge PWR'||kind==='Gauge TEMP'){
   blank(185,290,150,48);text(kind==='Gauge PWR'?'SHLD':'HEAT',200,326,30);
   blank(195,340,125,45);text(String(Math.round(kind==='Gauge PWR'?(t.combat?.shield??100):(t.combat?.heat??0)*100)),222,371,26);
  }
  c.restore();d.texture.needsUpdate=true;
 }
 return{group:cabin,ready,
  configureEnvironment(texture:T.Texture,cinematic:boolean,performance=false){environment=texture;high=cinematic;economical=performance;applyEconomy();fallback?.configureEnvironment(texture,cinematic);},
  update(tint:T.Color,brightness:number,meditation:boolean,visible:boolean,time=0,telemetry?:CockpitTelemetry){
   cabin.visible=visible;fallback?.update(tint,brightness,meditation,visible,time);
   if(telemetry)pendingTelemetry=telemetry;
   if(!loaded||!visible)return;const dim=(meditation?.5:1)*T.MathUtils.clamp(brightness,.6,1.2);
   for(const s of surfaces){s.material.color.copy(s.base).multiplyScalar(dim);lightweight.get(s.material)?.color.copy(s.material.color);}
   const now=performance.now(),dt=Math.min(.1,Math.max(0,(now-lastNeedleFrame)/1000));lastNeedleFrame=now;
   if(pendingTelemetry)for(const needle of needles){const value=T.MathUtils.clamp(needle.kind==='shield'?(pendingTelemetry.combat?.shield??100)/100:pendingTelemetry.combat?.heat??0,0,1),angle=T.MathUtils.degToRad(needle.baseAngle-(-130+260*value));needle.angle=needle.initialized?T.MathUtils.damp(needle.angle,angle,10,dt):angle;needle.initialized=true;needle.mesh.quaternion.copy(needle.base).multiply(needleRotation.setFromAxisAngle(needle.axis,needle.angle));needle.mesh.userData.liveAngle=needle.angle;}
   if(pendingTelemetry&&(pendingTelemetry!==paintedTelemetry||time-lastDisplay>=.25||time<lastDisplay)){paintedTelemetry=pendingTelemetry;const data=pendingTelemetry;lastDisplay=time;for(const d of displays)paint(d,data,time);cabin.userData.telemetry={speed:data.speed,weapon:data.combat?.weapon,contacts:data.contacts.length,shield:data.combat?.shield,heat:data.combat?.heat};}
  },
  dispose(){if(disposed)return;disposed=true;if(fallback){fallback.dispose();fallback.group.traverse(o=>{if(o instanceof T.Mesh){geometries.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material])materials.add(m);}});}release();cabin.removeFromParent();},
 };
}
