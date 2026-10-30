export type JumpPhase = 'idle' | 'charging' | 'accelerating' | 'transit' | 'arriving' | 'stabilized';
const smooth = (x: number) => { x=Math.max(0,Math.min(1,x));return x*x*(3-2*x); };
const routes = [2,4,1,0,3];
export const JUMP_DURATION = 10.2;
/** The clock is active-time only. UI and renderer share one authoritative machine. */
export class LightJump {
  phase: JumpPhase = 'idle';
  elapsed = 0;
  destination = 0;
  seed = 7123;
  committed = false;
  justCommitted = false;
  energy = 0;
  charge = 0;
  veil = 0;
  get busy() { return this.phase !== 'idle'; }
  start(region: number, previousSeed: number, paused = false) {
    if(this.busy || paused)return false;
    this.destination=routes[region] ?? ((region+1)%5);
    this.seed=(Math.imul(previousSeed|0,1664525)+1013904223)>>>0 || 1;
    this.elapsed=0;this.committed=false;this.justCommitted=false;this.energy=0;this.veil=0;this.charge=0;this.phase='charging';return true;
  }
  advance(delta: number, paused = false) {
    this.justCommitted=false;
    if(!this.busy || paused || !Number.isFinite(delta) || delta<=0)return;
    // No hidden-tab catch-up. Slow active frames still advance the cinematic clock.
    this.elapsed+=Math.min(delta,.25);
    const t=this.elapsed;
    if(t<1.4){this.phase='charging';this.charge=smooth(t/1.4);this.energy=this.charge*.035;}
    else if(t<4){this.phase='accelerating';this.charge=1;this.energy=.035+.965*smooth((t-1.4)/2.6);}
    else if(t<5.6){this.phase='transit';this.charge=1;this.energy=1;}
    else if(t<9){this.phase='arriving';this.energy=1-smooth((t-5.6)/3.4);this.charge=this.energy;}
    else if(t<JUMP_DURATION){this.phase='stabilized';this.energy=0;this.charge=0;}
    else{this.phase='idle';this.energy=0;this.charge=0;}
    this.veil=t<4?0:t<4.8?smooth((t-4)/.8):t<5.6?1:1-smooth((t-5.6)/1.7);
    if(!this.committed && t>=4.8){this.committed=true;this.justCommitted=true;}
  }
}
