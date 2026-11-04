import { Euler, Object3D, Quaternion, Vector3 } from 'three';

export type FloatSettings = { enabled:boolean; paused:boolean; reduced:boolean; motion:number; activity:number };
/** Bounded vessel suspension. It never changes navigation position or commanded attitude. */
export class ShipFloat {
  readonly offset=new Vector3();
  readonly rotation=new Quaternion();
  private readonly headOffset=new Vector3();
  private readonly headRotation=new Quaternion();
  private readonly inverseRotation=new Quaternion();
  private phase=0;
  private strength=0;
  private readonly angles=new Euler(0,0,0,'YXZ');
  private readonly worldOffset=new Vector3();
  reset(){this.offset.set(0,0,0);this.rotation.identity();this.headOffset.set(0,0,0);this.headRotation.identity();this.strength=0;}
  update(delta:number,s:FloatSettings){
    if(s.reduced){this.reset();return;}
    if(s.paused||!Number.isFinite(delta)||delta<=0||delta>.25)return;
    const steps=Math.ceil(delta/(1/120));
    for(let i=0;i<steps;i++)this.step(delta/steps,s);
  }
  private step(delta:number,s:FloatSettings){
    this.phase+=delta;
    const motion=Math.max(0,Math.min(1,s.motion)),activity=Math.max(0,Math.min(1,s.activity));
    const target=s.enabled?motion*(1-.88*activity):0;
    // Steering settles the suspension quickly; release restores the idle float gently.
    const rate=target<this.strength?5:1.5;
    this.strength=target+(this.strength-target)*Math.exp(-rate*delta);
    if(this.strength<.00001&&!s.enabled){this.reset();return;}
    const t=this.phase,a=this.strength;
    this.offset.set((Math.sin(t*.71+.4)*.65+Math.sin(t*1.13+2)*.35)*.022*a,
      (Math.sin(t*.83)*.7+Math.sin(t*1.37+1.4)*.3)*.15*a,Math.sin(t*.57+2.2)*.01*a);
    this.rotation.setFromEuler(this.angles.set((Math.sin(t*.65+1.1)*.65+Math.sin(t*1.29)*.35)*.004*a,
      Math.sin(t*.47+2.3)*.0015*a,(Math.sin(t*.53)*.75+Math.sin(t*1.11+.7)*.25)*.003*a,'YXZ'));
    const follow=1-Math.exp(-1.4*delta);this.headOffset.lerp(this.offset,follow);this.headRotation.slerp(this.rotation,follow);
  }
  /** A small inertial seat lag makes the vessel's heave visible without delaying helm input. */
  applyCamera(camera:Object3D,look:Quaternion){
    this.inverseRotation.copy(this.rotation).invert();
    camera.position.copy(this.headOffset).sub(this.offset).applyQuaternion(this.inverseRotation);
    camera.quaternion.copy(this.inverseRotation).multiply(this.headRotation).multiply(look);
  }
  /** Cabin, wings and engine housings remain one rigid vessel. */
  apply(vessel:Object3D,attitude:Quaternion,baseline:Vector3){
    vessel.position.copy(baseline).add(this.worldOffset.copy(this.offset).applyQuaternion(attitude));
    vessel.quaternion.copy(attitude).multiply(this.rotation);
  }
}
