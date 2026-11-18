import React,{useEffect,useRef,useState} from 'react';
import type {FlightController} from './controls';
import type {PhoneActions,PhoneStatus} from './phone-flight';
export function RollButton({direction,controller,blocked}:{direction:'left'|'right';controller:FlightController;blocked:boolean}){
 const pointer=useRef<number|null>(null),element=useRef<HTMLButtonElement>(null);const[held,setHeld]=useState(false);
 const clear=()=>{pointer.current=null;if(direction==='left')controller.touchRollLeft=false;else controller.touchRollRight=false;setHeld(false);};
 useEffect(()=>{if(blocked)clear();},[blocked]);
 useEffect(()=>{const stop=()=>clear();window.addEventListener('blur',stop);window.addEventListener('resize',stop);window.addEventListener('orientationchange',stop);document.addEventListener('visibilitychange',stop);return()=>{window.removeEventListener('blur',stop);window.removeEventListener('resize',stop);window.removeEventListener('orientationchange',stop);document.removeEventListener('visibilitychange',stop);if(direction==='left')controller.touchRollLeft=false;else controller.touchRollRight=false;};},[]);
 const release=(e:React.PointerEvent)=>{if(e.pointerId!==pointer.current)return;clear();if(e.currentTarget.hasPointerCapture(e.pointerId))e.currentTarget.releasePointerCapture(e.pointerId);};
 return <button ref={element} aria-label={`Roll ${direction}`} aria-pressed={held} disabled={blocked} onContextMenu={e=>e.preventDefault()} onPointerDown={e=>{if(blocked||pointer.current!==null||e.pointerType==='mouse'&&e.button!==0)return;e.preventDefault();e.stopPropagation();pointer.current=e.pointerId;e.currentTarget.setPointerCapture(e.pointerId);if(direction==='left')controller.touchRollLeft=true;else controller.touchRollRight=true;setHeld(true);}} onPointerUp={release} onPointerCancel={release} onLostPointerCapture={release}><span aria-hidden="true">{direction==='left'?'↶':'↷'}</span><small>ROLL {direction.toUpperCase()}</small></button>;
}
export function PhoneControls({status,actions,controller,blocked}:{status:PhoneStatus;actions:PhoneActions;controller:FlightController;blocked:boolean}){
 const active=status.state==='active',waiting=status.state==='waiting'||status.state==='requesting',failed=!['off','active','requesting','waiting'].includes(status.state);
 return <>
  <section className={`phone-steering ${active?'ready':''}`} aria-label="Phone steering" data-state={status.state}>
   <span className="phone-state"><i/>{active?'GYRO ON':waiting?'CONNECTING':'TOUCH FLIGHT'}</span>
   {active?<><button aria-label="Center phone steering" onClick={actions.recenter} disabled={blocked}>Center</button><button aria-label="Disable phone steering" title="Use touch steering" onClick={actions.disable}>Off</button></>:waiting?<button onClick={actions.disable}>Cancel</button>:<button aria-label="Enable phone steering" disabled={blocked} onClick={actions.enable}>{failed?'Retry gyro':'Enable gyro'}</button>}
   <span className="phone-announcement" role="status" aria-live="polite">{status.message}</span>
   {failed&&<p className="phone-sensor-note">{status.message}</p>}
  </section>
  <div className="phone-roll" role="group" aria-label="Ship roll controls"><RollButton direction="left" controller={controller} blocked={blocked}/><RollButton direction="right" controller={controller} blocked={blocked}/></div>
 </>;
}
export function PhoneSettings({status,actions,sensitivity,onSensitivity}:{status:PhoneStatus;actions:PhoneActions;sensitivity:number;onSensitivity:(n:number)=>void}){
 const running=['active','waiting','requesting'].includes(status.state);
 return <section className="phone-settings" aria-label="Phone flight settings"><p>Turn your phone to turn the ship. The stick moves forward/back and sideways. Hold ↶ / ↷ to roll. Without sensors, swipe space to steer.</p><button className="sound-toggle" onClick={running?actions.disable:actions.enable}>{running?'Disable phone steering':'Enable phone steering'}</button><p role="status">{status.message}</p><label className="setting">Phone steering sensitivity <output>{sensitivity.toFixed(2)}×</output><input aria-label="Phone steering sensitivity" type="range" min=".5" max="1.5" step=".05" value={sensitivity} onChange={e=>onSensitivity(+e.target.value)}/><small className="setting-note">1.00× follows your physical turn. Center to change your comfortable holding position.</small></label><button className="sound-toggle" disabled={!running} onClick={actions.recenter}>Center phone steering</button></section>;
}
