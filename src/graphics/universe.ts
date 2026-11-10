import {WorldShaderMaterial} from './world-material';
import * as T from 'three';
import {RELIC_SECTOR,RELIC_KEY,RELIC_NAME,RELIC_REGION,RELIC_RADIUS,RELIC_FADE_START,RELIC_FADE_END,type RelicWorld} from '../relic';
import { createBodies } from './bodies';
import { LANDING_KEY,LANDING_SECTOR,LANDING_NORMAL,PLANET_NAME,PLANET_RADIUS,PLANET_FADE_START,PLANET_FADE_END,type LandingWorld } from '../planet';
import { systemLayout } from './system-layout';
import { SINGULARITY_KEY, SINGULARITY_DOMAIN, SINGULARITY_EXIT, SINGULARITY_FADE_START, SINGULARITY_FADE_END, SINGULARITY_SECTOR, ARRIVAL_DISTANCE } from '../singularity';
export type NavigationInfo = { current: string; next: string; distance: number; region: number; nextHazard?: boolean };
export type JumpTarget = { position: T.Vector3; direction: T.Vector3; region: number; name: string; key: string; blackHole: boolean; landable:boolean; relic?:boolean };

export const SECTOR_SIZE = 14000;
/** Coordinates, rather than visitation order, determine every landmark. */
export function sectorAt(position: T.Vector3) {
  return [position.x, position.y, position.z].map(n => Math.floor((n + SECTOR_SIZE / 2) / SECTOR_SIZE));
}
export function describeSector(x: number, y: number, z: number) {
  let seed = (Math.imul(x, 73856093) ^ Math.imul(y, 19349663) ^ Math.imul(z, 83492791) ^ 7123) >>> 0;
  const identity = seed;
  const random = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
  const home = x === 0 && y === 0 && z === 0;
  const region = home ? 0 : identity % 5;
  const heading = new T.Quaternion().setFromEuler(new T.Euler(random() * Math.PI * 2, random() * Math.PI * 2, random() * Math.PI * 2));
  if (home) heading.identity();
  const anchor = new T.Vector3(x, y, z).multiplyScalar(SECTOR_SIZE), system = systemLayout(identity, region, false);
  const starWorld = system.center.clone().applyQuaternion(heading).add(anchor);
  return { key: `${x}/${y}/${z}`, blackHole: `${x}/${y}/${z}`===SINGULARITY_KEY, relic:`${x}/${y}/${z}`===RELIC_KEY, landable:`${x}/${y}/${z}`===LANDING_KEY, seed: identity, region, heading, anchor, starWorld, starColor: system.starColor, starRadius: system.starRadius, name: system.name };
}

/** A fixed pool bounds GPU memory. Evicted sectors are recreated identically. */
export function createUniverse(scene: T.Scene) {
  const slots = Array.from({ length: 27 }, () => ({ bodies: createBodies(scene), sector: null as ReturnType<typeof describeSector> | null }));
  const markers = new T.Group(); markers.name = 'distant-system-markers'; scene.add(markers);
  const markerCount = 343, positions = new Float32Array(markerCount * 3), colors = new Float32Array(markerCount * 3), sizes = new Float32Array(markerCount);
  const markerGeometry = new T.BufferGeometry();
  markerGeometry.setAttribute('position', new T.BufferAttribute(positions, 3)); markerGeometry.setAttribute('color', new T.BufferAttribute(colors, 3)); markerGeometry.setAttribute('size', new T.BufferAttribute(sizes, 1)); markerGeometry.setDrawRange(0, markerCount);
  const relicRelative=new T.Vector3();
  const markerOrigin = new T.Vector3(), offset = new T.Vector3(), direction = new T.Vector3(), forward = new T.Vector3();
  const markerMaterial = new WorldShaderMaterial({
    uniforms: { offset: { value: offset }, jump: { value: 1 } }, vertexColors: true, transparent: true, depthWrite: false, blending: T.AdditiveBlending,
    vertexShader: `attribute float size;uniform vec3 offset;uniform float jump;varying vec3 vColor;varying float visibility;void main(){vec3 p=position-offset;float d=length(p);visibility=smoothstep(10000.,14000.,d)*(1.-smoothstep(32000.,40000.,d))*jump;vColor=color;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(size*85000./max(100.,d),1.8,12.);}`,
    fragmentShader: `varying vec3 vColor;varying float visibility;void main(){float d=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(vColor*1.6,exp(-d*d*5.)*visibility);}`,
  });
  const beacons = new T.Points(markerGeometry, markerMaterial); beacons.frustumCulled = false; beacons.renderOrder = 3; markers.add(beacons);
  const illumination={direction:new T.Vector3(-.5,.7,-.3),color:new T.Color('#d9e6ff'),intensity:2};
  let cell = '', quality = 'Medium',completedJumps=0,hostVisit=false,planetVisit=false,relicVisit=false;
  const singularityHost=describeSector(...SINGULARITY_SECTOR),planetHost=describeSector(...LANDING_SECTOR),relicHost=describeSector(...RELIC_SECTOR);
  const relicWorld:RelicWorld={key:RELIC_KEY,name:RELIC_NAME,region:RELIC_REGION,center:relicHost.starWorld.clone().add(new T.Vector3(8000,1000,9000))};
  const landingWorld:LandingWorld={key:LANDING_KEY,name:PLANET_NAME,region:planetHost.region,center:planetHost.starWorld.clone().add(new T.Vector3(0,-500,7500))};
  // Find a deterministic quiet entry point instead of entering another system's
  // immediate vicinity (or the singularity domain) on the far exploration shell.
  const explorationNormal=LANDING_NORMAL.clone();let bestEntry=-Infinity;
  for(let i=-1;i<48;i++){
    const y=i<0?LANDING_NORMAL.y:1-2*(i+.5)/48,angle=i*2.399963229728653;
    const n=i<0?LANDING_NORMAL.clone():new T.Vector3(Math.cos(angle)*Math.sqrt(1-y*y),y,Math.sin(angle)*Math.sqrt(1-y*y));
    const entry=landingWorld.center.clone().addScaledVector(n,PLANET_RADIUS+18000),[x,yc,z]=sectorAt(entry);let clearance=Infinity;
    for(let dx=-1;dx<=1;dx++)for(let dy=-1;dy<=1;dy++)for(let dz=-1;dz<=1;dz++){const sector=describeSector(x+dx,yc+dy,z+dz);if(!sector.landable)clearance=Math.min(clearance,entry.distanceTo(sector.starWorld));}
    if(entry.distanceTo(singularityHost.starWorld)<SINGULARITY_DOMAIN+1500)continue;
    if(clearance>bestEntry){bestEntry=clearance;explorationNormal.copy(n);}
  }
  const relicEntry=new T.Vector3();let relicEntryClearance=-Infinity;
  for(let i=0;i<32;i++){const y=1-2*(i+.5)/32,a=i*2.399963229728653,n=new T.Vector3(Math.cos(a)*Math.sqrt(1-y*y),y,Math.sin(a)*Math.sqrt(1-y*y));const p=relicWorld.center.clone().addScaledVector(n,60000),[x,yc,z]=sectorAt(p);let clearance=Infinity;for(let dx=-1;dx<=1;dx++)for(let dy=-1;dy<=1;dy++)for(let dz=-1;dz<=1;dz++){const sector=describeSector(x+dx,yc+dy,z+dz);clearance=Math.min(clearance,p.distanceTo(sector.starWorld));}if(clearance>relicEntryClearance){relicEntryClearance=clearance;relicEntry.copy(p);}}
  const assign = (position: T.Vector3) => {
    const [x, y, z] = sectorAt(position);
    const retained=[...(relicVisit&&position.distanceTo(relicWorld.center)<RELIC_FADE_END?[relicHost]:[]),...(planetVisit&&position.distanceTo(planetHost.starWorld)<PLANET_FADE_END?[planetHost]:[]),...(hostVisit&&position.distanceTo(singularityHost.starWorld)<SINGULARITY_FADE_END?[singularityHost]:[])];
    const key = `${x}/${y}/${z}:${retained.map(s=>s.key).join(',')}`;
    if (key === cell) return;
    cell = key; markerOrigin.set(x,y,z).multiplyScalar(SECTOR_SIZE);
    let index = 0;
    for (let dx=-3;dx<=3;dx++) for (let dy=-3;dy<=3;dy++) for (let dz=-3;dz<=3;dz++) {
      const sector=describeSector(x+dx,y+dy,z+dz);
      sector.starWorld.clone().sub(markerOrigin).toArray(positions,index*3);sector.starColor.toArray(colors,index*3);sizes[index]=sector.starRadius/400;index++;
    }
    markerGeometry.attributes.position.needsUpdate=true;markerGeometry.attributes.color.needsUpdate=true;markerGeometry.attributes.size.needsUpdate=true;
    const needed = new Map<string, ReturnType<typeof describeSector>>();
    for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) for (let dz = -1; dz <= 1; dz++) {
      const sector = describeSector(x + dx, y + dy, z + dz); needed.set(sector.key, sector);
    }
    // Keep the visited host in the same bounded pool until its landmark also fades.
    // Evict a distant unvisited neighbour instead of dropping the host at a cell edge.
    for(const sector of retained)needed.set(sector.key,sector);
    while(needed.size>slots.length){const farthest=[...needed.values()].filter(s=>!retained.some(r=>r.key===s.key)).sort((a,b)=>b.starWorld.distanceToSquared(position)-a.starWorld.distanceToSquared(position))[0];needed.delete(farthest.key);}
    for (const slot of slots) if (slot.sector && needed.has(slot.sector.key)) needed.delete(slot.sector.key); else slot.sector = null;
    for (const sector of needed.values()) {
      const slot = slots.find(s => !s.sector)!; slot.sector = sector;
      slot.bodies.reseed(sector.seed, sector.region, sector.anchor, sector.heading);
      // Settle layout and palette before the sector first becomes visible.
      slot.bodies.update(1000, 0, sector.region, position);
      slot.bodies.configure(quality);
    }
  };
  const location=(position:T.Vector3)=>{
    assign(position);
    let nearest=slots[0].sector!,nearestDistance=Infinity;
    for(const slot of slots){if(relicVisit&&!slot.sector!.relic&&slot.sector!.starWorld.distanceTo(relicWorld.center)<RELIC_RADIUS+1200)continue;const d=slot.sector!.starWorld.distanceTo(position);if(d<nearestDistance){nearest=slot.sector!;nearestDistance=d;}}
    const host=hostVisit?singularityHost:slots.find(s=>s.sector?.blackHole)?.sector;
    if(host&&host.starWorld.distanceTo(position)<SINGULARITY_DOMAIN){nearest=host;nearestDistance=host.starWorld.distanceTo(position);}
    if(planetVisit&&position.distanceTo(landingWorld.center)<PLANET_RADIUS+1600){nearest=planetHost;nearestDistance=position.distanceTo(landingWorld.center);}
    return{nearest,nearestDistance};
  };
  const destination=(position:T.Vector3,heading:T.Quaternion)=>{
    const {nearest,nearestDistance}=location(position);forward.set(0,0,-1).applyQuaternion(heading);
    if(completedJumps%5===1)return{nearest,nearestDistance,target:planetHost};
    if(completedJumps%5===2)return{nearest,nearestDistance,target:singularityHost};
    if(completedJumps%5===3)return{nearest,nearestDistance,target:relicHost};
    let target=nearest,best=-Infinity;
    for(const slot of slots){const sector=slot.sector!;if(sector.key===nearest.key||sector.landable||sector.blackHole||sector.relic)continue;direction.copy(sector.starWorld).sub(position);const distance=direction.length();const score=direction.normalize().dot(forward)-distance/100000;if(score>best){best=score;target=sector;}}
    return{nearest,nearestDistance,target};
  };
  return {
    recordJump(key:string){completedJumps++;hostVisit=key===SINGULARITY_KEY;planetVisit=key===LANDING_KEY;relicVisit=key===RELIC_KEY;},
    setJump(energy: number) { markerMaterial.uniforms.jump.value = 1 - T.MathUtils.smoothstep(energy,.12,.65); for (const slot of slots) slot.bodies.setJump(energy); },
    configure(value: string) { quality = value; for (const slot of slots) slot.bodies.configure(value); },
    update(dt: number, time: number, _region: number, position: T.Vector3) {
      assign(position); offset.copy(position).sub(markerOrigin);relicRelative.copy(relicWorld.center).sub(position);
      const hostDistance=position.distanceTo(singularityHost.starWorld);
      if(hostDistance<SINGULARITY_DOMAIN)hostVisit=true;else if(hostDistance>=SINGULARITY_EXIT)hostVisit=false;
      for (const slot of slots) {
        const sector = slot.sector!;
        slot.bodies.update(dt, time, sector.region, position);
        // Landmark hosts and all their bodies share one world-space fade envelope.
        const trackedPlanet=sector.landable&&planetVisit,trackedHole=sector.blackHole&&hostVisit,trackedRelic=sector.relic&&relicVisit;
        const hostDistance=trackedRelic?relicWorld.center.distanceTo(position):sector.starWorld.distanceTo(position);
        const hostFade=1-T.MathUtils.smoothstep(hostDistance,trackedRelic?RELIC_FADE_START:trackedPlanet?PLANET_FADE_START:SINGULARITY_FADE_START,trackedRelic?RELIC_FADE_END:trackedPlanet?PLANET_FADE_END:SINGULARITY_FADE_END);
        for (const object of slot.bodies.group.children) {
          const distance = object.position.length();
          const fade = trackedPlanet||trackedHole||trackedRelic?hostFade:1-T.MathUtils.smoothstep(distance,10000,13000);
          if (object instanceof T.Mesh) {
            const material = object.material as T.ShaderMaterial;
            if (material.uniforms?.alpha) material.uniforms.alpha.value *= fade;
            else if ('opacity' in material) material.opacity *= fade;
          }
          object.visible = object.visible && fade > 0;
          if(relicVisit&&object.position.distanceTo(relicRelative)<RELIC_RADIUS+1200)object.visible=false;
          if(sector.blackHole&&(object.userData.kind==='star'||object.name==='stellar-corona'))object.visible=false;
        }
      }
    },
    relicAt(position:T.Vector3){const distance=position.distanceTo(relicWorld.center);return relicVisit&&distance<RELIC_FADE_END||distance<RELIC_RADIUS+3000?relicWorld:null;},
    planetAt(position:T.Vector3){const distance=position.distanceTo(landingWorld.center),hostDistance=position.distanceTo(planetHost.starWorld);landingWorld.visibility=1-T.MathUtils.smoothstep(hostDistance,PLANET_FADE_START,PLANET_FADE_END);return (planetVisit&&hostDistance<PLANET_FADE_END||distance<PLANET_RADIUS+1200)?landingWorld:null;},
    singularityAt(position:T.Vector3){
      const {nearest,nearestDistance}=location(position),distance=position.distanceTo(singularityHost.starWorld);
      if(hostVisit&&distance<SINGULARITY_EXIT)return{id:singularityHost.key,position:singularityHost.starWorld,distance};
      return nearest.blackHole&&nearestDistance<SINGULARITY_DOMAIN?{id:nearest.key,position:nearest.starWorld,distance:nearestDistance}:null;
    },
    lightAt(position:T.Vector3){
      let nearest=slots[0].sector!,distance=Infinity;
      for(const slot of slots){if(!slot.sector)continue;const d=slot.sector.starWorld.distanceToSquared(position);if(d<distance){nearest=slot.sector;distance=d;}}
      if(nearest){illumination.direction.copy(nearest.starWorld).sub(position).normalize();illumination.color.copy(nearest.starColor);illumination.intensity=1.2+2.4/(1+distance/25000000);}
      return illumination;
    },
    jumpTarget(position:T.Vector3,heading:T.Quaternion):JumpTarget{
      const {target}=destination(position,heading),approach=target.starWorld.clone().sub(position).normalize();
      const blackHole=target.blackHole,landable=target.landable,relic=target.relic,arrival=target.starWorld.clone().addScaledVector(approach,blackHole?-ARRIVAL_DISTANCE:-4300);
      // Safe destinations must also land outside the unique host's domain.
      const host=singularityHost;
      if(!blackHole&&arrival.distanceTo(host.starWorld)<SINGULARITY_DOMAIN+500){
        arrival.copy(target.starWorld).addScaledVector(target.starWorld.clone().sub(host.starWorld).normalize(),4300);
        approach.copy(target.starWorld).sub(arrival).normalize();
      }
      if(landable){
        // Enter the nebula at exploration range; discovery requires turning and flying.
        arrival.copy(landingWorld.center).addScaledVector(explorationNormal,PLANET_RADIUS+18000);
        const tangent=new T.Vector3().crossVectors(explorationNormal,Math.abs(explorationNormal.y)>.9?new T.Vector3(1,0,0):new T.Vector3(0,1,0)).normalize();
        approach.copy(explorationNormal).multiplyScalar(-Math.cos(T.MathUtils.degToRad(110))).addScaledVector(tangent,Math.sin(T.MathUtils.degToRad(110))).normalize();
      }
      else if(arrival.distanceTo(landingWorld.center)<PLANET_RADIUS+4200){arrival.copy(target.starWorld).addScaledVector(target.starWorld.clone().sub(landingWorld.center).normalize(),4300);approach.copy(target.starWorld).sub(arrival).normalize();}
      if(!relic&&arrival.distanceTo(relicWorld.center)<RELIC_RADIUS+6000){arrival.copy(relicWorld.center).addScaledVector(target.starWorld.clone().sub(relicWorld.center).normalize(),RELIC_RADIUS+6500);approach.copy(target.starWorld).sub(arrival).normalize();}
      if(relic){arrival.copy(relicEntry);const normal=arrival.clone().sub(relicWorld.center).normalize(),tangent=new T.Vector3().crossVectors(normal,Math.abs(normal.y)>.9?new T.Vector3(1,0,0):new T.Vector3(0,1,0)).normalize();approach.copy(normal).multiplyScalar(-Math.cos(T.MathUtils.degToRad(55))).addScaledVector(tangent,Math.sin(T.MathUtils.degToRad(55))).normalize();}
      return{relic,position:arrival,direction:blackHole?approach.negate():approach,region:target.region,name:target.name,key:target.key,blackHole,landable};
    },
    navigation(position:T.Vector3,heading:T.Quaternion): NavigationInfo {
      const {nearest,nearestDistance,target}=destination(position,heading);
      return {current:nearestDistance<(nearest.blackHole?SINGULARITY_DOMAIN:nearest.landable&&planetVisit?PLANET_RADIUS+1600:5200)?nearest.name:'Interstellar passage',next:target.name,distance:Math.round(target.starWorld.distanceTo(position)),region:relicVisit&&nearestDistance>5200&&position.distanceTo(relicWorld.center)<RELIC_FADE_END?RELIC_REGION:planetVisit&&nearestDistance>5200&&position.distanceTo(planetHost.starWorld)<PLANET_FADE_END?planetHost.region:nearest.region,nextHazard:target.blackHole};
    },
    dispose() { for (const slot of slots) slot.bodies.dispose(); markers.removeFromParent();markerGeometry.dispose();markerMaterial.dispose(); },
  };
}
