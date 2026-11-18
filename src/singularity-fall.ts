import {HORIZON_RADIUS,SAFE_RETURN_DISTANCE} from './singularity.ts';
export const FALL_DURATION=10.5;
export type FallPhase='idle'|'captured'|'stretch'|'breakup'|'lost';
export type FallReading={phase:FallPhase;elapsed:number;progress:number;strain:number;blackout:number};
export const NO_FALL:FallReading={phase:'idle',elapsed:0,progress:0,strain:0,blackout:0};
const smooth=(a:number,b:number,v:number)=>{const t=Math.max(0,Math.min(1,(v-a)/(b-a)));return t*t*(3-2*t);};
/** First swept entry, including a complete high-speed crossing between two outside points. */
export function horizonEntry(start:readonly number[],end:readonly number[],center:readonly number[],radius=HORIZON_RADIUS):number|null{
 if(!(radius>0)||![...start,...end,...center,radius].every(Number.isFinite))return null;
 const a=start.map((v,i)=>v-center[i]),v=end.map((x,i)=>x-start[i]),c=a.reduce((n,x)=>n+x*x,0)-radius*radius;
 if(c<=0)return 0;const aa=v.reduce((n,x)=>n+x*x,0);if(!aa)return null;
 const b=a.reduce((n,x,i)=>n+x*v[i],0),disc=b*b-aa*c;if(disc<0)return null;
 const t=(-b-Math.sqrt(disc))/aa;return t>=0&&t<=1?t:null;
}
/** No navigation, DOM, random state or renderer dependencies. */
export class SingularityFall{
 elapsed=0;phase:FallPhase='idle';readonly center=[0,0,0];readonly entry=[0,0,HORIZON_RADIUS];readonly outward=[0,0,1];
 get active(){return this.phase!=='idle';}get ended(){return this.phase==='lost';}
 enter(start:readonly number[],end:readonly number[],center:readonly number[]){
  if(this.active)return false;const at=horizonEntry(start,end,center);if(at===null)return false;
  for(let i=0;i<3;i++){this.center[i]=center[i];this.entry[i]=start[i]+(end[i]-start[i])*at;this.outward[i]=this.entry[i]-center[i];}
  const length=Math.hypot(...this.outward);for(let i=0;i<3;i++)this.outward[i]=length?this.outward[i]/length:i===2?1:0;
  this.elapsed=0;this.phase='captured';return true;
 }
 advance(delta:number,paused=false){
  if(!this.active||this.ended||paused||!Number.isFinite(delta)||delta<=0)return;
  this.elapsed=Math.min(FALL_DURATION,this.elapsed+Math.min(delta,.25));
  this.phase=this.elapsed>=FALL_DURATION?'lost':this.elapsed>=8.1?'breakup':this.elapsed>=2.4?'stretch':'captured';
 }
 reading():FallReading{return this.active?{phase:this.phase,elapsed:this.elapsed,progress:this.elapsed/FALL_DURATION,strain:smooth(2.4,8.5,this.elapsed),blackout:smooth(8.1,9.7,this.elapsed)}:{...NO_FALL};}
 safePosition(){return this.center.map((x,i)=>x+this.outward[i]*SAFE_RETURN_DISTANCE);}
 reset(){this.phase='idle';this.elapsed=0;}
}
