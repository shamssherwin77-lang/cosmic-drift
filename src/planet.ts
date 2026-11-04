import { Euler, Matrix4, Quaternion, Vector3 } from 'three';
import type { FlightController } from './controls';
export const LANDING_SECTOR=[1,0,0] as const;
export const LANDING_KEY=LANDING_SECTOR.join('/');
export const PLANET_NAME='Avaris';
export const PLANET_RADIUS=2600;
export const MAX_TERRAIN_HEIGHT=500;
export const HULL_CLEARANCE=9;
export const LANDING_NORMAL=new Vector3(0,.18,-1).normalize();
export type LandingWorld={key:string;name:string;region:number;center:Vector3};
export type SurfaceStatus='flight'|'landing'|'landed'|'launching';
export type PlanetReading={visible:boolean;name:string;surfaceDistance:number;altitude:number;datumAltitude:number;closingSpeed:number;surfaceBlend:number;atmosphere:number;danger:boolean;slope:number;canLand:boolean;status:SurfaceStatus;speedLimit:number};
export const NO_PLANET:PlanetReading={visible:false,name:PLANET_NAME,surfaceDistance:Infinity,altitude:Infinity,datumAltitude:Infinity,closingSpeed:0,surfaceBlend:0,atmosphere:0,danger:false,slope:0,canLand:false,status:'flight',speedLimit:1200};
const smooth=(a:number,b:number,n:number)=>{const x=Math.max(0,Math.min(1,(n-a)/(b-a)));return x*x*(3-2*x);};
function hash(x:number,y:number,z:number){let n=Math.imul(x,374761393)^Math.imul(y,668265263)^Math.imul(z,2147483647);n=Math.imul(n^(n>>>13),1274126177);return((n^(n>>>16))>>>0)/4294967295;}
function noise(x:number,y:number,z:number){const ix=Math.floor(x),iy=Math.floor(y),iz=Math.floor(z),fx=x-ix,fy=y-iy,fz=z-iz,u=fx*fx*(3-2*fx),v=fy*fy*(3-2*fy),w=fz*fz*(3-2*fz);const mix=(a:number,b:number,t:number)=>a+(b-a)*t;return mix(mix(mix(hash(ix,iy,iz),hash(ix+1,iy,iz),u),mix(hash(ix,iy+1,iz),hash(ix+1,iy+1,iz),u),v),mix(mix(hash(ix,iy,iz+1),hash(ix+1,iy,iz+1),u),mix(hash(ix,iy+1,iz+1),hash(ix+1,iy+1,iz+1),u),v),w);}
/** Seamless world-space elevation; rendering, radar and contact use this exact function. */
export function terrainHeight(direction:Vector3){
 const x=direction.x*PLANET_RADIUS,y=direction.y*PLANET_RADIUS,z=direction.z*PLANET_RADIUS;
 let height=24+noise(x/700+17,y/700,z/700)*95;
 height+=Math.pow(1-Math.abs(noise(x/250,y/250+41,z/250)*2-1),4)*105;
 height+=noise(x/80,y/80,z/80+13)*16+noise(x/22,y/22,z/22)*3;
 const north=y*LANDING_NORMAL.z-z*LANDING_NORMAL.y,curve=Math.sin(north/360)*70;
 const ridge=(smooth(.1,.85,Math.exp(-(((x-520-curve)/135)**2)))+smooth(.1,.85,Math.exp(-(((x+540-curve)/155)**2))))*(150+noise(north/180,11,5)*70);
 const corridor=22+noise(x/230,north/230,9)*14+ridge;
 const facing=direction.dot(LANDING_NORMAL);height=height*(1-smooth(.55,.82,facing))+corridor*smooth(.55,.82,facing);
 const arc=PLANET_RADIUS*Math.acos(Math.max(-1,Math.min(1,facing))),basin=1-smooth(180,340,arc);
 return Math.max(3,Math.min(MAX_TERRAIN_HEIGHT,height*(1-basin)+(22+noise(x/35,y/35,z/35)*.8)*basin));
}
const radial=new Vector3(),east=new Vector3(),north=new Vector3(),a=new Vector3(),b=new Vector3();
export function groundNormal(direction:Vector3,out=new Vector3()){
 east.crossVectors(direction,Math.abs(direction.y)>.9?new Vector3(1,0,0):new Vector3(0,1,0)).normalize();north.crossVectors(east,direction).normalize();
 a.copy(direction).addScaledVector(east,2/PLANET_RADIUS).normalize();const eh=terrainHeight(a);a.copy(direction).addScaledVector(east,-2/PLANET_RADIUS).normalize();const el=terrainHeight(a);
 b.copy(direction).addScaledVector(north,2/PLANET_RADIUS).normalize();const nh=terrainHeight(b);b.copy(direction).addScaledVector(north,-2/PLANET_RADIUS).normalize();const nl=terrainHeight(b);
 return out.copy(direction).addScaledVector(east,-(eh-el)/4).addScaledVector(north,-(nh-nl)/4).normalize();
}
export function altitudeAt(position:Vector3,center:Vector3){radial.copy(position).sub(center);const r=radial.length();if(r<1e-6)return -PLANET_RADIUS;radial.divideScalar(r);return r-PLANET_RADIUS-terrainHeight(radial);}
export function surfaceSpeedLimit(altitude:number){return 45+1155*smooth(180,3200,altitude);}
/** Sample a swept hull path rather than testing only its end; fast frames cannot tunnel. */
export function protectSurface(start:Vector3,end:Vector3,center:Vector3,out:Vector3){
 const delta=end.clone().sub(start),length=delta.length();const closest=Math.max(0,Math.min(1,center.clone().sub(start).dot(delta)/Math.max(1e-12,length*length)));
 if(start.clone().addScaledVector(delta,closest).distanceTo(center)>PLANET_RADIUS+MAX_TERRAIN_HEIGHT+HULL_CLEARANCE){out.copy(end);return false;}
 const count=Math.max(1,Math.min(4096,Math.ceil(length/4))),p=new Vector3(),n=new Vector3();
 for(let i=0;i<=count;i++){p.copy(start).addScaledVector(delta,i/count);const height=altitudeAt(p,center);if(height<HULL_CLEARANCE-1e-5){n.copy(p).sub(center).normalize();if(n.lengthSq()<.5)n.copy(LANDING_NORMAL);out.copy(center).addScaledVector(n,PLANET_RADIUS+terrainHeight(n)+HULL_CLEARANCE);return true;}}
 out.copy(end);return false;
}
export class PlanetFlight {
 status:SurfaceStatus='flight';reading:PlanetReading=NO_PLANET;
 private elapsed=0;private startAltitude=0;private normal=new Vector3();private contact=new Vector3();private forward=new Vector3();private lastAltitude=Infinity;private closing=0;
 reset(){this.status='flight';this.reading=NO_PLANET;this.elapsed=0;this.lastAltitude=Infinity;this.closing=0;}
 get busy(){return this.status!=='flight';}
 land(){if(!this.reading.canLand)return false;this.status='landing';this.elapsed=0;this.startAltitude=this.reading.altitude+HULL_CLEARANCE;return true;}
 takeoff(){if(this.status!=='landed'&&this.status!=='landing')return false;this.status='launching';this.elapsed=0;return true;}
 level(controller:FlightController,center:Vector3){
  this.normal.copy(controller.position).sub(center).normalize();this.forward.set(0,0,-1).applyQuaternion(controller.shipQuaternion).projectOnPlane(this.normal);
  if(this.forward.length()<.1)this.forward.set(0,-1,0).projectOnPlane(this.normal);this.forward.normalize();
  const q=new Quaternion().setFromRotationMatrix(new Matrix4().lookAt(new Vector3(),this.forward,this.normal));controller.shipQuaternion.copy(q);
  const angles=new Euler().setFromQuaternion(q,'YXZ');controller.yaw=angles.y;controller.pitch=angles.x;controller.roll=angles.z;
  controller.syncAttitude();controller.speed=0;controller.lookQuaternion.identity();controller.lookYaw=controller.lookPitch=controller.lookTargetYaw=controller.lookTargetPitch=0;
 }
 update(dt:number,controller:FlightController,world:LandingWorld|null,previous:Vector3,active:boolean):PlanetReading{
  if(!world){this.reset();return this.reading;}
  const center=world.center;this.normal.copy(controller.position).sub(center).normalize();let altitude=altitudeAt(controller.position,center);
  if(active&&dt>0&&dt<=.25){
   if(this.busy){
    this.elapsed+=dt;
    if(this.status==='landing'){
     const t=smooth(0,Math.max(2,Math.min(6,(this.startAltitude-HULL_CLEARANCE)/20)),this.elapsed);altitude=this.startAltitude+(HULL_CLEARANCE-this.startAltitude)*t;
     controller.position.copy(center).addScaledVector(this.normal,PLANET_RADIUS+terrainHeight(this.normal)+altitude);this.level(controller,center);
     if(t>=1)this.status='landed';
    }else if(this.status==='launching'){
     altitude=HULL_CLEARANCE+75*smooth(0,2.5,this.elapsed);controller.position.copy(center).addScaledVector(this.normal,PLANET_RADIUS+terrainHeight(this.normal)+altitude);this.level(controller,center);if(this.elapsed>=2.5)this.status='flight';
    }else{controller.velocity.set(0,0,0);controller.speed=0;}
   }else if(protectSurface(previous,controller.position,center,this.contact)){
    controller.position.copy(this.contact);this.normal.copy(controller.position).sub(center).normalize();const inward=controller.velocity.dot(this.normal);if(inward<0)controller.velocity.addScaledVector(this.normal,-inward);controller.speed=controller.velocity.length();
   }
   altitude=altitudeAt(controller.position,center);
   const rate=Number.isFinite(this.lastAltitude)?(this.lastAltitude-altitude)/Math.max(dt,.001):0;this.closing+=(Math.max(-1200,Math.min(1200,rate))-this.closing)*(1-Math.exp(-dt*3));this.lastAltitude=altitude;if(this.status==='landed')this.closing=0;
  }
  const normal=groundNormal(this.normal),slope=Math.acos(Math.max(-1,Math.min(1,normal.dot(this.normal))));
  let danger=false;const direction=controller.velocity.length()>2?controller.velocity.clone().normalize():new Vector3(0,0,-1).applyQuaternion(controller.shipQuaternion);
  for(let i=1;i<=12;i++){const p=controller.position.clone().addScaledVector(direction,Math.max(60,controller.speed*3)*i/12);if(altitudeAt(p,center)<HULL_CLEARANCE+8){danger=true;break;}}
  this.reading={visible:true,name:world.name,surfaceDistance:Math.max(0,altitude-HULL_CLEARANCE),altitude:Math.max(0,altitude-HULL_CLEARANCE),datumAltitude:controller.position.distanceTo(center)-PLANET_RADIUS,closingSpeed:this.closing,surfaceBlend:1-smooth(700,2400,altitude),atmosphere:1-smooth(150,1600,altitude),danger,slope,canLand:this.status==='flight'&&altitude<140&&altitude>=HULL_CLEARANCE-1&&controller.speed<55&&slope<.23,status:this.status,speedLimit:surfaceSpeedLimit(altitude)};
  return this.reading;
 }
}
