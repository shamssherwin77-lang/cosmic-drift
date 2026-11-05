import React from 'react';
import {ArrowDownToLine,ArrowUpFromLine,Mountain,X,Compass} from 'lucide-react';
import {PLANET_NAME,type PlanetReading} from './planet';
export function PlanetPanel({reading,notice,onDismiss,onLand,onTakeoff,onLevel}:{reading:PlanetReading;notice:boolean;onDismiss:()=>void;onLand:()=>void;onTakeoff:()=>void;onLevel:()=>void}){
 if(!reading.visible&&!notice)return null;
 return <section className={`planet-panel ${reading.danger?'terrain-danger':''}`} aria-label="Planet approach" data-surface-status={reading.status}>
  <div className="planet-heading"><Mountain size={15}/><span>{PLANET_NAME} · LANDABLE WORLD</span>{notice&&<button aria-label="Dismiss planet notice" onClick={onDismiss}><X size={14}/></button>}</div>
  {notice&&<p className="planet-notice" role="status">An important world lies in this nebula. Your jump ends far from it; explore to find it. You can descend, fly between its mountains and land on its plains.</p>}
  {reading.visible&&<>
   <div className="planet-range"><small>DISTANCE TO SURFACE</small><b>{Math.round(reading.surfaceDistance).toLocaleString()} <em>u</em></b></div>
   <div className="surface-instruments" style={{opacity:reading.surfaceBlend,maxHeight:reading.surfaceBlend>.02?170:0}} aria-hidden={reading.surfaceBlend<.02}>
    <div><small>HEIGHT ABOVE GROUND</small><b>{Math.round(reading.altitude).toLocaleString()} <em>u AGL</em></b></div>
    <div><small>DESCENT RATE</small><b>{Math.max(0,reading.closingSpeed).toFixed(0)} <em>u/s</em></b></div>
    <p className="terrain-status" role="status">{reading.status==='landed'?'Landed · engines standing by':reading.status==='landing'?'Landing assist · settling onto the ground':reading.status==='launching'?'Taking off · climbing clear':reading.danger?'Terrain ahead · slow down or climb':reading.canLand?'Flat ground · ready to land':reading.slope>.23?'Uneven terrain · seek a flat basin':'Surface approach · slow flight recommended'}</p>
    <small className="surface-limit">Surface assist · {Math.round(reading.speedLimit)} u/s maximum</small>
   </div>
   {reading.surfaceBlend>.05&&<div className="planet-actions">{reading.status==='landed'?<button onClick={onTakeoff}><ArrowUpFromLine size={14}/>Take off</button>:<><button onClick={onLevel} disabled={reading.status!=='flight'}><Compass size={14}/>Surface flight</button><button onClick={onLand} disabled={!reading.canLand}><ArrowDownToLine size={14}/>Land gently</button></>}</div>}
   {reading.surfaceBlend>.1&&reading.status==='flight'&&<small className="surface-hint">Find a flat basin · Space climbs / Ctrl descends in Descent</small>}
  </>}
 </section>;
}
