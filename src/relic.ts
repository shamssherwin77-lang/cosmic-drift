import {Euler,Quaternion,Vector3} from 'three';
export const RELIC_SECTOR=[5,1,-3] as const;
export const RELIC_KEY=RELIC_SECTOR.join('/');
export const RELIC_NAME='The Last Meridian';
export const RELIC_REGION=3;
export const RELIC_RADIUS=9200;
export const RELIC_FADE_START=38000,RELIC_FADE_END=46000;
export const RELIC_ROTATION=new Quaternion().setFromEuler(new Euler(.24,-.32,-.18));
export type RelicWorld={key:string;name:string;region:number;center:Vector3};
export type RelicReading={visible:boolean;discovered:boolean;distance:number;intensity:number};
export const NO_RELIC:RelicReading={visible:false,discovered:false,distance:Infinity,intensity:0};
function boxDistance(p:Vector3,c:Vector3,h:Vector3){const x=Math.abs(p.x-c.x)-h.x,y=Math.abs(p.y-c.y)-h.y,z=Math.abs(p.z-c.z)-h.z;return Math.hypot(Math.max(0,x),Math.max(0,y),Math.max(0,z))+Math.min(0,Math.max(x,y,z));}
export const BUTTRESS_ANGLES=[1.05,2.5,4.57];
export const KEEL_STATIONS=[[-5550,35,65],[-4050,450,430],[-2000,780,650],[650,1000,760],[3200,780,610],[5200,420,390],[6850,25,45]];
export const CROWN_STATIONS=[[-1100,15,30],[400,280,220],[1800,450,420],[3600,260,290],[4700,20,30]];
export function keelProfile(z:number,stations=KEEL_STATIONS){for(let i=1;i<stations.length;i++){const a=stations[i-1],b=stations[i];if(z<=b[0]){const t=Math.max(0,Math.min(1,(z-a[0])/(b[0]-a[0])));return[a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t];}}return[25,45];}
/** Main structural masses only: the open ring, fracture and hangar channels stay traversable. */
export function relicDistance(local:Vector3){
 const angle=(Math.atan2(local.y,local.x)+Math.PI*2)%(Math.PI*2),r=Math.hypot(local.x,local.y);
 const ring=angle>.25&&angle<5.35?Math.max(Math.abs(r-5600)-370,Math.abs(local.z)-570):Infinity;
 const [w,h]=keelProfile(local.z);const keel=Math.max((Math.hypot(local.x/w,(local.y+240)/h)-1)*Math.min(w,h),Math.abs(local.z-650)-6200);
 const [cw,ch]=keelProfile(local.z,CROWN_STATIONS);const crown=Math.max((Math.hypot(local.x/cw,(local.y-900)/ch)-1)*Math.min(cw,ch),Math.abs(local.z-1800)-2900);
 let distance=Math.min(ring,keel,crown);
 if(angle>.29&&angle<5.25)distance=Math.min(distance,Math.max(Math.abs(r-6080)-90,Math.abs(local.z-40)-410));
 for(const a of BUTTRESS_ANGLES){const c=Math.cos(a),s=Math.sin(a),q=new Vector3(c*local.x+s*local.y-3300,-s*local.x+c*local.y,local.z-120);distance=Math.min(distance,boxDistance(q,new Vector3(),new Vector3(2200,165,340)));}
 return distance;
}
export function protectRelic(start:Vector3,end:Vector3,world:RelicWorld,out:Vector3){
 const inverse=RELIC_ROTATION.clone().invert(),a=start.clone().sub(world.center).applyQuaternion(inverse),b=end.clone().sub(world.center).applyQuaternion(inverse),delta=b.clone().sub(a),p=new Vector3();
 const closest=Math.max(0,Math.min(1,-a.dot(delta)/Math.max(1e-9,delta.lengthSq())));if(a.clone().addScaledVector(delta,closest).length()>RELIC_RADIUS){out.copy(end);return false;}
 const steps=Math.max(1,Math.min(2048,Math.ceil(delta.length()/24)));
 for(let i=0;i<=steps;i++){p.copy(a).addScaledVector(delta,i/steps);const d=relicDistance(p);if(d<9){const gradient=new Vector3(relicDistance(p.clone().add(new Vector3(1,0,0)))-relicDistance(p.clone().add(new Vector3(-1,0,0))),relicDistance(p.clone().add(new Vector3(0,1,0)))-relicDistance(p.clone().add(new Vector3(0,-1,0))),relicDistance(p.clone().add(new Vector3(0,0,1)))-relicDistance(p.clone().add(new Vector3(0,0,-1)))).normalize();if(gradient.lengthSq()<.5)gradient.set(0,1,0);out.copy(p).addScaledVector(gradient,10-d).applyQuaternion(RELIC_ROTATION).add(world.center);return true;}}
 out.copy(end);return false;
}
