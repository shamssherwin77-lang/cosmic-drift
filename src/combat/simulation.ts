import {Quaternion,Vector3} from 'three';

export const WEAPONS=[
 {name:'Pulse',role:'Rapid fire · light fighters',color:'#82e9ff',interval:.13,speed:2400,damage:17,heat:.065,life:1.1},
 {name:'Ion',role:'Break interceptor shields',color:'#ad9aff',interval:.3,speed:1800,damage:12,heat:.1,life:1.4},
 {name:'Rail',role:'Pierce bomber armour',color:'#ffda91',interval:.85,speed:12000,damage:86,heat:.32,life:.25},
 {name:'Seeker',role:'Track phase hunters · aim to lock',color:'#a5ffc4',interval:1.2,speed:1050,damage:66,heat:.24,life:3.5},
] as const;
export const ENEMY_TYPES=[
 {name:'Viper',role:'Evasive light fighter',weakness:'1 · Pulse',color:'#ff9b63',hull:70,shield:0,radius:24,speed:320,damage:12,interval:1.35},
 {name:'Aegis',role:'Shielded interceptor',weakness:'2 · Ion',color:'#b99cff',hull:95,shield:150,radius:34,speed:245,damage:18,interval:1.8},
 {name:'Bastion',role:'Armoured missile bomber',weakness:'3 · Rail',color:'#f4cf81',hull:275,shield:0,radius:58,speed:145,damage:30,interval:3.4},
 {name:'Wraith',role:'Phase ambush hunter',weakness:'4 · Seeker',color:'#84eac6',hull:125,shield:30,radius:29,speed:375,damage:22,interval:2.1},
] as const;
export type CombatEvent={kind:'shot'|'hit'|'kill'|'damage'|'wave';weapon?:number;position?:Vector3};
export type Enemy={id:number;active:boolean;kind:number;position:Vector3;velocity:Vector3;rotation:Quaternion;hull:number;shield:number;cooldown:number;age:number;hit:number;cloak:boolean;phase:number};
export type Shot={active:boolean;friendly:boolean;weapon:number;position:Vector3;previous:Vector3;velocity:Vector3;life:number;damage:number;target:number;homing:boolean};
export type Burst={active:boolean;position:Vector3;age:number;size:number;kill:boolean};
export type CombatReading={active:boolean;shield:number;hull:number;heat:number;overheated:boolean;kills:number;wave:number;incoming:number;enemies:number;dead:boolean;hit:number;locked:boolean;weapon:number};
export const EMPTY_COMBAT:CombatReading={active:false,shield:100,hull:100,heat:0,overheated:false,kills:0,wave:1,incoming:7,enemies:0,dead:false,hit:0,locked:false,weapon:0};
export type Pilot={position:Vector3;velocity:Vector3;rotation:Quaternion;weapon:number;firing:boolean};
export type Obstruction=(a:Vector3,b:Vector3)=>boolean;
const clamp=(v:number,a:number,b:number)=>Math.max(a,Math.min(b,v));
/** Swept hits: fast rail rounds cannot tunnel through a moving fighter. */
export function segmentEntry(a:Vector3,b:Vector3,center:Vector3,radius:number){const dx=b.x-a.x,dy=b.y-a.y,dz=b.z-a.z,x=a.x-center.x,y=a.y-center.y,z=a.z-center.z,length=dx*dx+dy*dy+dz*dz,c=x*x+y*y+z*z-radius*radius;if(c<=0)return 0;if(length<1e-12)return Infinity;const dot=x*dx+y*dy+z*dz,disc=dot*dot-length*c;if(disc<0)return Infinity;const t=(-dot-Math.sqrt(disc))/length;return t>=0&&t<=1?t:Infinity;}
export function segmentHit(a:Vector3,b:Vector3,center:Vector3,radius:number){return Number.isFinite(segmentEntry(a,b,center,radius));}

/** World-space simulation. No rendering, timers, DOM or global random state. */
export class CombatSimulation{
 readonly enemies:Enemy[]=Array.from({length:8},(_,id)=>({id,active:false,kind:id%4,position:new Vector3(),velocity:new Vector3(),rotation:new Quaternion(),hull:0,shield:0,cooldown:0,age:0,hit:0,cloak:false,phase:id*2.399}));
 readonly shots:Shot[]=Array.from({length:128},()=>({active:false,friendly:true,weapon:0,position:new Vector3(),previous:new Vector3(),velocity:new Vector3(),life:0,damage:0,target:-1,homing:false}));
 readonly bursts:Burst[]=Array.from({length:20},()=>({active:false,position:new Vector3(),age:0,size:1,kill:false}));
 active=false;shield=100;hull=100;heat=0;overheated=false;kills=0;wave=1;incoming=7;hit=0;locked=false;weapon=0;limit=6;
 private cooldown=0;private lastHit=0;private time=0;private state=71823;
 private readonly forward=new Vector3();private readonly right=new Vector3();private readonly up=new Vector3();private readonly v=new Vector3();private readonly next=new Vector3();private readonly target=new Vector3();private readonly aim=new Vector3();private readonly q=new Quaternion();private readonly z=new Vector3(0,0,1);
 onEvent?:(event:CombatEvent)=>void;
 get dead(){return this.hull<=0;}
 reset(){this.shield=100;this.hull=100;this.heat=0;this.overheated=false;this.kills=0;this.wave=1;this.incoming=7;this.hit=0;this.time=0;this.cooldown=0;this.lastHit=0;this.clear();}
 clear(){for(const e of this.enemies)e.active=false;for(const s of this.shots)s.active=false;for(const b of this.bursts)b.active=false;this.locked=false;}
 transit(){this.clear();this.incoming=7;}
 reading():CombatReading{return{active:this.active,shield:this.shield,hull:this.hull,heat:this.heat,overheated:this.overheated,kills:this.kills,wave:this.wave,incoming:this.incoming,enemies:this.enemies.filter(e=>e.active).length,dead:this.dead,hit:this.hit,locked:this.locked,weapon:this.weapon};}
 private random(){this.state=(Math.imul(this.state,1664525)+1013904223)>>>0;return this.state/4294967296;}
 private burst(position:Vector3,kill=false){const b=this.bursts.find(b=>!b.active)??this.bursts[0];b.active=true;b.position.copy(position);b.age=0;b.size=kill?70:20;b.kill=kill;}
 private spawn(p:Pilot,blocked:Obstruction){
  const count=Math.min(this.limit,4+Math.floor((this.wave-1)/2));
  for(let i=0;i<count;i++){const e=this.enemies[i],spec=ENEMY_TYPES[i%4];e.kind=i%4;e.hull=spec.hull;e.shield=spec.shield;e.age=0;e.hit=0;e.cloak=false;e.cooldown=2+i*.55;
   let safe=false;for(let attempt=0;attempt<12;attempt++){const angle=(i-(count-1)/2)*.38+(this.random()-.5)*.18,range=900+this.random()*450;this.v.set(Math.sin(angle)*range,(this.random()-.5)*500,-Math.cos(angle)*range).applyQuaternion(p.rotation);e.position.copy(p.position).add(this.v);if(!blocked(e.position,e.position)&&!blocked(p.position,e.position)){safe=true;break;}}
   e.active=safe;e.velocity.copy(p.velocity);e.rotation.copy(p.rotation);
  }this.onEvent?.({kind:'wave'});
 }
 private lock(p:Pilot){let best:Enemy|undefined,alignment=.94;for(const e of this.enemies){if(!e.active||e.position.distanceToSquared(p.position)>3200**2)continue;this.v.copy(e.position).sub(p.position).normalize();const a=this.v.dot(this.forward);if(a>alignment){alignment=a;best=e;}}return best;}
 private launch(position:Vector3,direction:Vector3,speed:number,weapon:number,friendly:boolean,damage:number,target=-1){const s=this.shots.find(s=>!s.active);if(!s)return false;s.active=true;s.friendly=friendly;s.weapon=weapon;s.position.copy(position);s.previous.copy(position);s.velocity.copy(direction).multiplyScalar(speed);s.life=friendly?WEAPONS[weapon].life:4;s.damage=damage;s.target=target;s.homing=weapon===3;s.position.addScaledVector(direction,friendly?16:12);return true;}
 private damage(e:Enemy,s:Shot){
  const spec=ENEMY_TYPES[e.kind];let damage=s.damage;
  if(s.weapon===1&&e.shield>0)damage*=4;
  if(s.weapon===0&&e.kind===0)damage*=1.8;
  if(e.kind===2&&s.weapon!==2)damage*=.38;
  if(e.cloak&&s.weapon!==3)damage*=.35;
  const absorbed=Math.min(e.shield,damage);e.shield-=absorbed;damage-=absorbed;
  if(s.weapon===1)damage*=.6;e.hull=Math.max(0,e.hull-damage);e.hit=1;this.burst(s.position);this.onEvent?.({kind:'hit',position:s.position});
  if(e.hull<=0){e.active=false;this.kills++;this.burst(e.position,true);this.onEvent?.({kind:'kill',position:e.position});}
  else if(spec.speed>250){e.phase+=1.1;} // Surviving light hulls break away under fire.
 }
 /** paused frames do no damage, cooldown, regeneration or catch-up simulation. */
 step(delta:number,p:Pilot,enabled:boolean,paused:boolean,blocked:Obstruction=()=>false){
  if(enabled!==this.active){this.active=enabled;this.reset();}
  if(enabled)this.weapon=clamp(Math.floor(p.weapon),0,3);
  if(!enabled||paused||this.dead||!Number.isFinite(delta)||delta<=0||delta>.25){return;}
  const n=Math.ceil(delta/(1/60));for(let i=0;i<n;i++)this.tick(delta/n,p,blocked);
 }
 private tick(dt:number,p:Pilot,blocked:Obstruction){
  if(this.dead)return;this.time+=dt;this.lastHit+=dt;this.weapon=clamp(Math.floor(p.weapon),0,3);this.heat=Math.max(0,this.heat-dt*.18);if(this.heat<.25)this.overheated=false;this.hit=Math.max(0,this.hit-dt*2.2);this.cooldown=Math.max(0,this.cooldown-dt);
  if(this.lastHit>6)this.shield=Math.min(100,this.shield+dt*7);
  this.forward.set(0,0,-1).applyQuaternion(p.rotation);this.right.set(1,0,0).applyQuaternion(p.rotation);this.up.set(0,1,0).applyQuaternion(p.rotation);
  const lock=this.lock(p);this.locked=!!lock;
  if(p.firing&&this.cooldown<=0&&!this.overheated){const w=WEAPONS[this.weapon];if(this.launch(p.position,this.forward,w.speed,this.weapon,true,w.damage,this.weapon===3&&lock?lock.id:-1)){this.cooldown=w.interval;this.heat=Math.min(1,this.heat+w.heat);if(this.heat>=.99)this.overheated=true;this.onEvent?.({kind:'shot',weapon:this.weapon});}}
  if(!this.enemies.some(e=>e.active)){this.incoming-=dt;if(this.incoming<=0){this.spawn(p,blocked);this.incoming=8;} }
  else this.incoming=8;
  for(const e of this.enemies){if(!e.active)continue;const spec=ENEMY_TYPES[e.kind];e.age+=dt;e.hit=Math.max(0,e.hit-dt*3);e.cooldown-=dt;const distance=e.position.distanceTo(p.position);
   if(distance>14000){e.active=false;continue;}
   const phase=e.age*(e.kind===0?1.35:e.kind===3?1.7:.65)+e.phase;
   e.cloak=e.kind===3&&e.age%9>4.6&&e.age%9<6.5;
   // Predictive flanking: independent offsets keep the squad from flying in a queue.
   const radius=e.kind===2?1100:e.kind===1?650:480;
   this.target.copy(p.position).addScaledVector(p.velocity,.45).addScaledVector(this.right,Math.sin(phase)*radius).addScaledVector(this.up,Math.cos(phase*.73)*(e.kind===3?420:230)).addScaledVector(this.forward,Math.cos(phase*.6)*radius*.8);
   this.aim.copy(this.target).sub(e.position);const desired=Math.min(spec.speed,this.aim.length()*1.2);this.aim.normalize().multiplyScalar(desired).addScaledVector(p.velocity,Math.min(1,Math.max(0,(distance-700)/2200)));
   if(e.kind===0&&p.firing){this.v.copy(e.position).sub(p.position).normalize();if(this.v.dot(this.forward)>.91)this.aim.addScaledVector(this.right,Math.sin(phase*2)>0?350:-350);}
   if(e.kind===3&&e.age%9>3.8&&e.age%9<4.6)this.aim.addScaledVector(this.up,470);
   for(const other of this.enemies)if(other!==e&&other.active){this.v.copy(e.position).sub(other.position);const d=this.v.length();if(d<180&&d>0)this.aim.addScaledVector(this.v,(180-d)/d*2);}
   e.velocity.lerp(this.aim,1-Math.exp(-dt*(e.kind===2?1.3:3.5)));this.next.copy(e.position).addScaledVector(e.velocity,dt);
   if(blocked(e.position,this.next)){e.velocity.multiplyScalar(-.7);e.phase+=dt*3;}else e.position.copy(this.next);
   this.v.copy(p.position).sub(e.position).normalize();this.q.setFromUnitVectors(this.z,this.v);e.rotation.slerp(this.q,1-Math.exp(-dt*5));
   if(e.cooldown<=0&&distance<2400&&!e.cloak){
    // Telegraphs precede launch; finite-speed shots can be dodged or blocked by ruins.
    this.target.copy(p.position).addScaledVector(p.velocity,Math.min(1.1,distance/900));this.target.addScaledVector(this.right,(this.random()-.5)*38).addScaledVector(this.up,(this.random()-.5)*38);this.v.copy(this.target).sub(e.position).normalize();
    if(!blocked(e.position,p.position)){this.launch(e.position,this.v,e.kind===2?520:900,e.kind===2?3:0,false,spec.damage);e.cooldown=spec.interval/(1+Math.min(.5,(this.wave-1)*.04));}else e.cooldown=.35;
   }
  }
  for(const s of this.shots){if(!s.active)continue;s.life-=dt;if(s.life<=0){s.active=false;continue;}s.previous.copy(s.position);
   if(s.homing){const e=s.friendly?this.enemies[s.target]:null;if(!s.friendly||e?.active){this.aim.copy(s.friendly?e!.position:p.position).sub(s.position).normalize().multiplyScalar(s.friendly?WEAPONS[3].speed:520);s.velocity.lerp(this.aim,1-Math.exp(-dt*(s.friendly?3.8:1.25)));}}
   s.position.addScaledVector(s.velocity,dt);
   // Compare the first target with cover only up to its entry point; a wall behind
   // a fighter cannot swallow a rail round that has already hit that fighter.
   let hit:Enemy|undefined,entry=Infinity;
   if(s.friendly){for(const e of this.enemies)if(e.active){const t=segmentEntry(s.previous,s.position,e.position,ENEMY_TYPES[e.kind].radius);if(t<entry){entry=t;hit=e;}}}
   else entry=segmentEntry(s.previous,s.position,p.position,13);
   this.next.copy(s.position);if(Number.isFinite(entry))this.next.copy(s.previous).lerp(s.position,entry);
   if(blocked(s.previous,this.next)){s.active=false;this.burst(this.next);continue;}
   if(hit){s.position.copy(this.next);this.damage(hit,s);s.active=false;}
   else if(!s.friendly&&Number.isFinite(entry)){s.active=false;const absorb=Math.min(this.shield,s.damage);this.shield-=absorb;this.hull=Math.max(0,this.hull-s.damage+absorb);this.lastHit=0;this.hit=1;this.onEvent?.({kind:'damage'});if(this.dead){p.firing=false;for(const shot of this.shots)shot.active=false;}}
  }
  for(const b of this.bursts)if(b.active){b.age+=dt;if(b.age>(b.kill?1.1:.25))b.active=false;}
  if(!this.enemies.some(e=>e.active)&&this.incoming>=7.9&&this.kills>0){this.wave++;this.incoming=7.8;}
 }
}
