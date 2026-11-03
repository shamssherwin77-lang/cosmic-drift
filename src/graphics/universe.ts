import * as T from 'three';
import { createBodies } from './bodies';
import { systemLayout } from './system-layout';
import { SINGULARITY_KEY, SINGULARITY_DOMAIN, SINGULARITY_SECTOR, ARRIVAL_DISTANCE } from '../singularity';
export type NavigationInfo = { current: string; next: string; distance: number; region: number; nextHazard?: boolean };
export type JumpTarget = { position: T.Vector3; direction: T.Vector3; region: number; name: string; key: string; blackHole: boolean };

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
  return { key: `${x}/${y}/${z}`, blackHole: `${x}/${y}/${z}`===SINGULARITY_KEY, seed: identity, region, heading, anchor, starWorld, starColor: system.starColor, starRadius: system.starRadius, name: system.name };
}

/** A fixed pool bounds GPU memory. Evicted sectors are recreated identically. */
export function createUniverse(scene: T.Scene) {
  const slots = Array.from({ length: 27 }, () => ({ bodies: createBodies(scene), sector: null as ReturnType<typeof describeSector> | null }));
  const markers = new T.Group(); markers.name = 'distant-system-markers'; scene.add(markers);
  const markerCount = 343, positions = new Float32Array(markerCount * 3), colors = new Float32Array(markerCount * 3), sizes = new Float32Array(markerCount);
  const markerGeometry = new T.BufferGeometry();
  markerGeometry.setAttribute('position', new T.BufferAttribute(positions, 3)); markerGeometry.setAttribute('color', new T.BufferAttribute(colors, 3)); markerGeometry.setAttribute('size', new T.BufferAttribute(sizes, 1)); markerGeometry.setDrawRange(0, markerCount);
  const markerOrigin = new T.Vector3(), offset = new T.Vector3(), direction = new T.Vector3(), forward = new T.Vector3();
  const markerMaterial = new T.ShaderMaterial({
    uniforms: { offset: { value: offset }, jump: { value: 1 } }, vertexColors: true, transparent: true, depthWrite: false, blending: T.AdditiveBlending,
    vertexShader: `attribute float size;uniform vec3 offset;uniform float jump;varying vec3 vColor;varying float visibility;void main(){vec3 p=position-offset;float d=length(p);visibility=smoothstep(10000.,14000.,d)*(1.-smoothstep(32000.,40000.,d))*jump;vColor=color;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(size*85000./max(100.,d),1.8,12.);}`,
    fragmentShader: `varying vec3 vColor;varying float visibility;void main(){float d=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(vColor*1.6,exp(-d*d*5.)*visibility);}`,
  });
  const beacons = new T.Points(markerGeometry, markerMaterial); beacons.frustumCulled = false; beacons.renderOrder = 3; markers.add(beacons);
  const illumination={direction:new T.Vector3(-.5,.7,-.3),color:new T.Color('#d9e6ff'),intensity:2};
  let cell = '', quality = 'Medium',completedJumps=0;
  const singularityHost=describeSector(...SINGULARITY_SECTOR);
  const assign = (position: T.Vector3) => {
    const [x, y, z] = sectorAt(position), key = `${x}/${y}/${z}`;
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
    for(const slot of slots){const d=slot.sector!.starWorld.distanceTo(position);if(d<nearestDistance){nearest=slot.sector!;nearestDistance=d;}}
    const host=slots.find(s=>s.sector?.blackHole)?.sector;
    if(host&&host.starWorld.distanceTo(position)<SINGULARITY_DOMAIN){nearest=host;nearestDistance=host.starWorld.distanceTo(position);}
    return{nearest,nearestDistance};
  };
  const destination=(position:T.Vector3,heading:T.Quaternion)=>{
    const {nearest,nearestDistance}=location(position);forward.set(0,0,-1).applyQuaternion(heading);
    if(completedJumps%5===2&&nearest.key!==SINGULARITY_KEY)return{nearest,nearestDistance,target:singularityHost};
    let target=nearest,best=-Infinity;
    for(const slot of slots){const sector=slot.sector!;if(sector.key===nearest.key)continue;direction.copy(sector.starWorld).sub(position);const distance=direction.length();const score=direction.normalize().dot(forward)-distance/100000;if(score>best){best=score;target=sector;}}
    return{nearest,nearestDistance,target};
  };
  return {
    recordJump(_key:string){completedJumps++;},
    setJump(energy: number) { markerMaterial.uniforms.jump.value = 1 - T.MathUtils.smoothstep(energy,.12,.65); for (const slot of slots) slot.bodies.setJump(energy); },
    configure(value: string) { quality = value; for (const slot of slots) slot.bodies.configure(value); },
    update(dt: number, time: number, _region: number, position: T.Vector3) {
      assign(position); offset.copy(position).sub(markerOrigin);
      for (const slot of slots) {
        const sector = slot.sector!;
        slot.bodies.update(dt, time, sector.region, position);
        // Entire systems are invisible before entering/leaving the pool.
        // Individual bodies keep their own world coordinates and close-up fade.
        for (const object of slot.bodies.group.children) {
          const distance = object.position.length();
          const fade = 1 - T.MathUtils.smoothstep(distance, 10000, 13000);
          if (object instanceof T.Mesh) {
            const material = object.material as T.ShaderMaterial;
            if (material.uniforms?.alpha) material.uniforms.alpha.value *= fade;
            else if ('opacity' in material) material.opacity *= fade;
          }
          object.visible = object.visible && fade > 0;
          if(sector.blackHole&&(object.userData.kind==='star'||object.name==='stellar-corona'))object.visible=false;
        }
      }
    },
    singularityAt(position:T.Vector3){
      const {nearest,nearestDistance}=location(position);
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
      const blackHole=target.blackHole,arrival=target.starWorld.clone().addScaledVector(approach,blackHole?-ARRIVAL_DISTANCE:-4300);
      // Safe destinations must also land outside the unique host's domain.
      const host=singularityHost;
      if(!blackHole&&arrival.distanceTo(host.starWorld)<SINGULARITY_DOMAIN+500){
        arrival.copy(target.starWorld).addScaledVector(target.starWorld.clone().sub(host.starWorld).normalize(),4300);
        approach.copy(target.starWorld).sub(arrival).normalize();
      }
      return{position:arrival,direction:blackHole?approach.negate():approach,region:target.region,name:target.name,key:target.key,blackHole};
    },
    navigation(position:T.Vector3,heading:T.Quaternion): NavigationInfo {
      const {nearest,nearestDistance,target}=destination(position,heading);
      return {current:nearestDistance<(nearest.blackHole?SINGULARITY_DOMAIN:5200)?nearest.name:'Interstellar passage',next:target.name,distance:Math.round(target.starWorld.distanceTo(position)),region:nearest.region,nextHazard:target.blackHole};
    },
    dispose() { for (const slot of slots) slot.bodies.dispose(); markers.removeFromParent();markerGeometry.dispose();markerMaterial.dispose(); },
  };
}
