import {Euler,Quaternion,Vector3} from 'three';
const upright=new Quaternion().setFromAxisAngle(new Vector3(1,0,0),-Math.PI/2),screenAxis=new Vector3(0,0,1);
const radians=Math.PI/180;
/** Browser device axes -> the camera facing out through the back of the screen. */
export function deviceAttitude(alpha:number,beta:number,gamma:number,screenAngle:number,out=new Quaternion()){
 return out.setFromEuler(new Euler(beta*radians,alpha*radians,-gamma*radians,'YXZ')).multiply(upright).multiply(new Quaternion().setFromAxisAngle(screenAxis,-screenAngle*radians)).normalize();
}
/** Incremental local rotations preserve the ship heading, including separately commanded roll. */
export class PhoneAttitude{
 private previous=new Quaternion();private current=new Quaternion();private delta=new Quaternion();
 private anchored=false;private lastTime=0;private screenAngle=0;
 readonly deadzone=.12*radians;
 reset(){this.anchored=false;this.lastTime=0;}
 sample(alpha:number|null,beta:number|null,gamma:number|null,screenAngle:number,time:number,gain=1):Quaternion|null{
  if(![alpha,beta,gamma,screenAngle,time,gain].every(v=>typeof v==='number'&&Number.isFinite(v)))return null;
  deviceAttitude(alpha!,beta!,gamma!,screenAngle,this.current);
  if(!this.anchored||screenAngle!==this.screenAngle||time-this.lastTime>1000||time<this.lastTime){this.previous.copy(this.current);this.anchored=true;this.screenAngle=screenAngle;this.lastTime=time;return null;}
  this.lastTime=time;this.delta.copy(this.previous).invert().multiply(this.current).normalize();
  // q and -q describe the same attitude. Take the short arc, including across 359° -> 0°.
  if(this.delta.w<0)this.delta.set(-this.delta.x,-this.delta.y,-this.delta.z,-this.delta.w);
  const half=Math.acos(Math.min(1,Math.max(-1,this.delta.w)));
  if(half*2<this.deadzone)return null; // accumulate sub-threshold movement instead of losing slow turns
  this.previous.copy(this.current);
  const scale=Math.sin(half*Math.min(1.5,Math.max(.5,gain)))/Math.sin(half);
  return this.delta.set(this.delta.x*scale,this.delta.y*scale,this.delta.z*scale,Math.cos(half*Math.min(1.5,Math.max(.5,gain)))).normalize();
 }
}
