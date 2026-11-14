export const PILOT_HEIGHT_KEY='cosmic-drift-pilot-height';
/** Metres relative to the authored pilot eye; bounded inside the canopy. */
export function clampPilotHeight(value:number){return Number.isFinite(value)?Math.max(-.12,Math.min(.38,value)):0;}
export function readPilotHeight(){try{return clampPilotHeight(Number(localStorage.getItem(PILOT_HEIGHT_KEY)));}catch{return 0;}}
