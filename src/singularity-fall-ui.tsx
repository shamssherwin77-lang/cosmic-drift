import React,{useEffect,useRef} from 'react';
import type {FallReading} from './singularity-fall';
export function SingularityFallOverlay({reading,paused,sound,onPause,onMute,onRecover,onRestart}:{reading:FallReading;paused:boolean;sound:boolean;onPause:()=>void;onMute:()=>void;onRecover:()=>void;onRestart:()=>void}){
 const recover=useRef<HTMLButtonElement>(null);
 useEffect(()=>{if(reading.phase==='lost')recover.current?.focus();},[reading.phase]);
 if(reading.phase==='idle')return null;
 const lost=reading.phase==='lost';
 return <div className="singularity-descent" data-phase={reading.phase}>
  <div className="descent-blackout" style={{opacity:reading.blackout}}/>
  {lost?<section className="descent-ending" role="alertdialog" aria-modal="true" aria-labelledby="descent-title" onKeyDown={e=>{if(e.key==='Tab'){e.preventDefault();const buttons=Array.from(e.currentTarget.querySelectorAll('button'));buttons[(buttons.indexOf(document.activeElement as HTMLButtonElement)+(e.shiftKey?-1:1)+buttons.length)%buttons.length]?.focus();}}}>
   <small>MERIDIAN · FINAL TRANSMISSION</small><h1 id="descent-title">Beyond return.</h1><p>The event horizon has claimed your ship.<br/>Your journey can continue from safe space.</p>
   <button ref={recover} onClick={onRecover}>Return to safe flight</button><button className="descent-secondary" onClick={onRestart}>Start a new journey</button>
  </section>:<>
   <div className="descent-status" role="status"><small>{paused?'DESCENT PAUSED':reading.phase==='captured'?'EVENT HORIZON CROSSED':reading.phase==='stretch'?'TIDAL FORCES EXCEED HULL TOLERANCE':'TELEMETRY LOST'}</small><p>{reading.phase==='captured'?'Escape trajectory lost.':reading.phase==='stretch'?'Structural integrity failing.':'No signal.'}</p><div className="descent-rule"><i style={{width:`${reading.progress*100}%`}}/></div></div>
   <div className="descent-actions"><button onClick={onPause}>{paused?'Resume descent':'Pause descent'}</button><button onClick={onMute}>{sound?'Mute audio':'Enable audio'}</button></div>
  </>}
 </div>;
}
