import {Euler,Quaternion,Vector3} from 'three';
import {HULL_PATCHES,DETACHED_PATCHES,shellDistance,RELIC_SITES} from './relic-shape.ts';
export {RELIC_SITES} from './relic-shape.ts';
export const RELIC_SECTOR=[5,1,-3] as const;
export const RELIC_KEY=RELIC_SECTOR.join('/');
export const RELIC_NAME='The Last Meridian';
export const RELIC_REGION=3;
export const RELIC_RADIUS=28000;
export const RELIC_FADE_START=55000,RELIC_FADE_END=75000;
export const RELIC_ROTATION=new Quaternion().setFromEuler(new Euler(.24,-.32,-.18));
export type RelicWorld={key:string;name:string;region:number;center:Vector3};
export type RelicReading={visible:boolean;discovered:boolean;distance:number;intensity:number;find?:string;finds?:string[]};
export const NO_RELIC:RelicReading={visible:false,discovered:false,distance:Infinity,intensity:0};
/** Physical skins and matching detached plates share the renderer's parametric surface. */
export function relicDistance(local:Vector3){let distance=Infinity;for(const patch of [...HULL_PATCHES,...DETACHED_PATCHES])distance=Math.min(distance,shellDistance(local,patch));
 const site=RELIC_SITES[0].point;distance=Math.min(distance,local.distanceTo(site)-235);return distance;
}
export function protectRelic(start:Vector3,end:Vector3,world:RelicWorld,out:Vector3){
 const inverse=RELIC_ROTATION.clone().invert(),a=start.clone().sub(world.center).applyQuaternion(inverse),b=end.clone().sub(world.center).applyQuaternion(inverse),delta=b.clone().sub(a),p=new Vector3();
 const closest=Math.max(0,Math.min(1,-a.dot(delta)/Math.max(1e-9,delta.lengthSq())));if(a.clone().addScaledVector(delta,closest).length()>RELIC_RADIUS){out.copy(end);return false;}
 const steps=Math.max(1,Math.min(2048,Math.ceil(delta.length()/24)));
 for(let i=0;i<=steps;i++){p.copy(a).addScaledVector(delta,i/steps);const d=relicDistance(p);if(d<9){const gradient=new Vector3(relicDistance(p.clone().add(new Vector3(1,0,0)))-relicDistance(p.clone().add(new Vector3(-1,0,0))),relicDistance(p.clone().add(new Vector3(0,1,0)))-relicDistance(p.clone().add(new Vector3(0,-1,0))),relicDistance(p.clone().add(new Vector3(0,0,1)))-relicDistance(p.clone().add(new Vector3(0,0,-1)))).normalize();if(gradient.lengthSq()<.5)gradient.set(0,1,0);out.copy(p).addScaledVector(gradient,10-d).applyQuaternion(RELIC_ROTATION).add(world.center);return true;}}
 out.copy(end);return false;
}
