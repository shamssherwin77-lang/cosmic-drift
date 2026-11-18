/** Distances are deliberately compressed game units, not physical kilometres. */
export const SINGULARITY_REGION = 4;
// One world identity, not every sector sharing the Deep Silence palette.
export const SINGULARITY_SECTOR = [-1,0,1] as const;
export const SINGULARITY_KEY = SINGULARITY_SECTOR.join('/');
export const SINGULARITY_DOMAIN = 30000;
export const SINGULARITY_FADE_START = 48000;
export const SINGULARITY_FADE_END = 64000;
export const SINGULARITY_EXIT = 68000;
export const HORIZON_RADIUS = 1600;
export const ARRIVAL_DISTANCE = 26000;
export const CAUTION_DISTANCE = 14500;
export const CRITICAL_DISTANCE = 7600;
export const EXCLUSION_DISTANCE = HORIZON_RADIUS;
// Local ownership/discovery remains narrow so safe Jumps never inherit this host.
export const SINGULARITY_DISCOVERY_DISTANCE = 7500;
export const LAST_ESCAPE_DISTANCE = 4200;
export const SAFE_RETURN_DISTANCE = 20000;
export type HazardLevel = 'clear' | 'caution' | 'critical';
export type SingularityReading = { id: string; distance: number; level: HazardLevel; intensity: number };
export const CLEAR_READING: SingularityReading = { id: '', distance: Infinity, level: 'clear', intensity: 0 };
/** Hysteresis stops warnings/audio chattering while flying across a boundary. */
export function readSingularity(id: string, distance: number, previous: SingularityReading = CLEAR_READING): SingularityReading {
  if (!id || !Number.isFinite(distance)) return CLEAR_READING;
  const same = id === previous.id;
  const critical = distance < CRITICAL_DISTANCE + (same && previous.level === 'critical' ? 240 : 0);
  const caution = distance < CAUTION_DISTANCE + (same && previous.level !== 'clear' ? 360 : 0);
  return { id, distance: Math.max(0, distance), level: critical ? 'critical' : caution ? 'caution' : 'clear',
    intensity: Math.max(0, Math.min(1, (CAUTION_DISTANCE - distance) / (CAUTION_DISTANCE - EXCLUSION_DISTANCE))) };
}
/** Swept segment protection: a fast frame cannot tunnel through the event horizon. */
export function protectedEndpoint(start: readonly number[], end: readonly number[], center: readonly number[], radius: number): number[] {
  const a = start.map((v,i)=>v-center[i]), v=end.map((n,i)=>n-start[i]);
  const aa=v.reduce((s,n)=>s+n*n,0), b=2*a.reduce((s,n,i)=>s+n*v[i],0), c=a.reduce((s,n)=>s+n*n,0)-radius*radius;
  if(c<=0){const n=end.map((x,i)=>x-center[i]),len=Math.hypot(...n)||1;return n.map((x,i)=>center[i]+(Math.hypot(...n)?x/len:(i===2?1:0))*radius);}
  const discriminant=b*b-4*aa*c;
  if(aa===0||discriminant<0)return [...end];
  const t=(-b-Math.sqrt(discriminant))/(2*aa);
  return t>=0&&t<=1?start.map((n,i)=>n+v[i]*Math.max(0,t-.0001)):[...end];
}
