import type {CombatReading} from './simulation';
import {ENEMY_TYPES,WEAPONS} from './simulation';
import type {CombatTarget} from '../scene';
export function CombatHUD({reading:r,targets,input,onRetry,onLeave,blocked}:{reading:CombatReading;targets:CombatTarget[];input:{weapon:number;firing:boolean};onRetry:()=>void;onLeave:()=>void;blocked:boolean}){
 const release=()=>{input.firing=false;};
 return <div className={`combat-hud ${r.hit>.1?'under-fire':''}`} aria-label="Combat status" data-hull={Math.ceil(r.hull)} data-shield={Math.ceil(r.shield)} data-kills={r.kills} data-weapon={r.weapon+1}>
  <div className="combat-vitals"><span>CHALLENGE · WAVE {r.wave} <b>{r.kills} KILLS</b></span><label>SHIELD <meter min="0" max="100" value={r.shield}/><output>{Math.ceil(r.shield)}</output></label><label>HULL <meter min="0" max="100" value={r.hull}/><output>{Math.ceil(r.hull)}</output></label></div>
  {!r.dead&&<><div className={`combat-reticle ${r.locked?'locked':''}`}><span/><small>{r.weapon===3?(r.locked?'SEEKER LOCK':'AIM TO LOCK'):r.overheated?'COOLING':WEAPONS[r.weapon].name.toUpperCase()}</small></div>
  {!blocked&&targets.map(t=><div key={t.id} className={`combat-target ${t.warning?'attack-warning':''} ${t.cloak?'phased':''}`} style={{left:`${(t.x+1)*50}%`,top:`${(1-t.y)*50}%`,color:ENEMY_TYPES[t.kind].color}}><span className="target-bracket"/><small>{ENEMY_TYPES[t.kind].name} · {t.cloak?'PHASE':ENEMY_TYPES[t.kind].weakness}</small><meter min="0" max="1" value={t.hull}/>{t.shield>0&&<i style={{width:`${t.shield*100}%`}}/>}{t.warning&&<b>INCOMING</b>}</div>)}
  {!r.enemies&&!blocked&&<p className="combat-incoming" role="status">HOSTILE SIGNATURES · {Math.max(0,Math.ceil(r.incoming))}s<small>Mouse + WASD · 1–4 weapons · Left click fires · Esc pauses<br/>Touch: joystick + FIRE</small></p>}
  <div className="combat-weapons" role="group" aria-label="Select weapon">{WEAPONS.map((w,i)=><button key={w.name} aria-label={`${i+1} ${w.name}`} aria-pressed={r.weapon===i} disabled={blocked} title={w.role} onClick={()=>{input.weapon=i;}} style={{'--weapon-color':w.color} as React.CSSProperties}><kbd>{i+1}</kbd>{w.name}</button>)}<label className={r.overheated?'hot':''}>{r.overheated?'OVERHEATED':'WEAPON HEAT'}<meter min="0" max="1" value={r.heat}/></label></div>
  <button className="combat-trigger" aria-label="Fire weapon" disabled={blocked} onPointerDown={e=>{if(e.pointerType==='mouse'&&e.button!==0)return;e.preventDefault();e.currentTarget.setPointerCapture(e.pointerId);input.firing=true;}} onPointerUp={release} onPointerCancel={release} onLostPointerCapture={release}>FIRE</button>
  </>}
  {r.dead&&<section className="combat-defeat" role="dialog" aria-label="Ship destroyed"><small>SIGNAL LOST</small><h2>Hull breached.</h2><p>{r.kills} hostiles destroyed · Wave {r.wave}</p><button onClick={onRetry}>Retry challenge</button><button onClick={onLeave}>Return to peaceful flight</button></section>}
 </div>;
}
