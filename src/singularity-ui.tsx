import React,{useEffect,useRef} from 'react';
import { AlertTriangle,ShieldCheck,Orbit } from 'lucide-react';
import type { SingularityReading } from './singularity';
export function JumpBriefing({destination,landable=false,relic=false,onConfirm,onCancel}:{destination:string;landable?:boolean;relic?:boolean;onConfirm:()=>void;onCancel:()=>void}){
 const confirm=useRef<HTMLButtonElement>(null);
 useEffect(()=>{const previous=document.activeElement as HTMLElement|null;confirm.current?.focus();return()=>previous?.focus();},[]);
 return <div className="hazard-backdrop" onKeyDown={e=>{if(e.key==='Escape'){e.preventDefault();e.stopPropagation();onCancel();}if(e.key==='Tab'){e.preventDefault();const buttons=Array.from(e.currentTarget.querySelectorAll('button'));buttons[(buttons.indexOf(document.activeElement as HTMLButtonElement)+(e.shiftKey?-1:1)+buttons.length)%buttons.length]?.focus();}}}>
  <section className="jump-briefing" role="alertdialog" aria-modal="true" aria-labelledby="briefing-title" aria-describedby="briefing-description">
   <div className="briefing-symbol"><Orbit size={42} strokeWidth={1}/></div><small>{relic?'COSMIC CLOUDS · ARCHAEOLOGICAL RECORD':landable?'GOLDEN CORE · EXPLORATION ADVISORY':'DEEP SILENCE · NAVIGATION ADVISORY'}</small>
   <h1 id="briefing-title">{relic?<>An ancient civilization<br/>once lived here.</>:landable?<>A landable world<br/>awaits discovery.</>:<>Beyond this jump,<br/>a supermassive black hole.</>}</h1>
   <p id="briefing-description">{relic?`Your course enters ${destination}, within the Cosmic Clouds nebula. Traces of an ancient extraterrestrial civilization remain here. An immense derelict vessel still carries power. You will arrive far from it; follow its faint lights through the nebula.`:landable?`Your course enters ${destination}, inside the Golden Core nebula. An important world named Avaris is hidden in this region. You can fly between its mountains and land on its plains. You will arrive far from the planet. Explore the nebula to find it.`: `Your course enters ${destination}, inside the Deep Silence nebula. An active singularity lies within this region. Approach with care.`}</p>
   <div className="briefing-data"><span>CLASS <b>{relic?'ANCIENT CIVILIZATION':landable?'LANDABLE WORLD':'SUPERMASSIVE'}</b></span><span>FLIGHT <b>MANUAL CONTROL</b></span></div>
   <button ref={confirm} className="briefing-confirm" onClick={onConfirm}>{landable||relic?'Enter nebula':'I understand. Continue jump'} <span>↗</span></button>
   <button className="briefing-cancel" onClick={onCancel}>Cancel jump</button>
  </section>
 </div>;
}
export function SingularityWarning({reading,assist,onActivate}:{reading:SingularityReading;assist:boolean;onActivate:()=>void}){
 if(reading.level==='clear')return null;
 return <section className={`singularity-warning ${reading.level} ${assist?'assisted':''}`} role="region" aria-label="Singularity proximity" data-level={reading.level}>
  <div className="hazard-heading">{assist?<ShieldCheck size={16}/>:<AlertTriangle size={16}/>}<span>{assist?'TRANSIT CONTROL ACTIVE':reading.level==='critical'?'EXTREME GRAVITATIONAL FIELD':'GRAVITATIONAL ANOMALY'}</span></div>
  <p role="status" aria-live="polite">{reading.level==='critical'?'Approaching the black hole.': 'A massive gravitational source is nearby.'}</p>
  <div className="hazard-distance"><span>{Math.round(reading.distance).toLocaleString()} <small>u from singularity</small></span><i style={{'--danger':`${Math.round(reading.intensity*100)}%`} as React.CSSProperties}/></div>
  {!assist?<button onClick={onActivate}><ShieldCheck size={15}/> Enable transit control</button>:<small className="assist-note">Stabilization engaged · You retain the helm</small>}
 </section>;
}
