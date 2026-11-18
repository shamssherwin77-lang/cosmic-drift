import {PhoneAttitude} from './phone-attitude.ts';
import type {ControlSettings,FlightController} from './controls';
export type PhoneState='off'|'requesting'|'waiting'|'active'|'denied'|'unavailable'|'unsupported'|'insecure';
export type PhoneStatus={state:PhoneState;message:string};
export const PHONE_OFF:PhoneStatus={state:'off',message:'Hold your phone comfortably, then enable phone steering. Swipe space to steer without sensors.'};
export type PhoneActions={enable:()=>void;disable:()=>void;recenter:()=>void};
/** No sensor listeners until a user gesture; no persistent orientation or background catch-up. */
export function bindPhoneFlight(controller:FlightController,get:()=>ControlSettings,onStatus?:(s:PhoneStatus)=>void){
 const attitude=new PhoneAttitude();let enabled=false,listening=false,generation=0,disposed=false,live=false,focused=document.hasFocus(),state:PhoneState='off',timeout:ReturnType<typeof setTimeout>|undefined;
 const status=(next:PhoneState,message:string)=>{state=next;if(!disposed)onStatus?.({state:next,message});};
 const allowed=()=>{const s=get();return !!s.mobileDescent&&!!s.freeFlight&&s.started&&!s.paused&&!s.blocked&&!document.hidden&&focused;};
 const angle=()=>screen.orientation?.angle??(window as Window&{orientation?:number}).orientation??0;
 const recenter=()=>{attitude.reset();controller.recenterSteering();};
 const changed=()=>{attitude.reset();live=false;};
 const blur=()=>{focused=false;changed();};
 const focus=()=>{focused=true;changed();};
 const visibility=()=>{focused=!document.hidden&&document.hasFocus();changed();};
 const sensor=(e:DeviceOrientationEvent)=>{
  if(!enabled||![e.alpha,e.beta,e.gamma].every(v=>typeof v==='number'&&Number.isFinite(v)))return;
  clearTimeout(timeout);if(state!=='active')status('active','Phone steering ready. Turn your body to turn the ship. Center resets your comfortable holding position.');
  if(!allowed()){attitude.reset();return;}
  const delta=attitude.sample(e.alpha,e.beta,e.gamma,angle(),performance.now(),get().gyroSensitivity??1);
  if(delta)controller.gyro(delta,get());
 };
 const detach=()=>{if(!listening)return;listening=false;window.removeEventListener('deviceorientation',sensor);window.removeEventListener('orientationchange',changed);window.removeEventListener('blur',blur);window.removeEventListener('focus',focus);document.removeEventListener('visibilitychange',visibility);screen.orientation?.removeEventListener('change',changed);};
 const stop=(report=true)=>{generation++;enabled=false;live=false;clearTimeout(timeout);detach();attitude.reset();controller.recenterSteering();if(report)status('off',PHONE_OFF.message);};
 async function start(){
  stop(false);focused=document.hasFocus();const request=++generation;
  if(!window.isSecureContext){status('insecure','Phone steering needs HTTPS. Touch steering remains available.');return;}
  const Orientation=window.DeviceOrientationEvent as typeof DeviceOrientationEvent&{requestPermission?:()=>Promise<string>};
  if(!Orientation){status('unsupported','This browser has no orientation sensor access. Swipe space to steer and use the movement stick.');return;}
  status('requesting','Allow motion and orientation access when your browser asks.');
  try{
   // Called directly from the Enable button, preserving Safari's user-gesture requirement.
   const permission=Orientation.requestPermission?await Orientation.requestPermission():'granted';
   if(disposed||request!==generation)return;
   if(permission!=='granted'){status('denied','Sensor access was denied. Allow Motion sensors in browser site settings and retry, or swipe space to steer.');return;}
   enabled=true;listening=true;attitude.reset();window.addEventListener('deviceorientation',sensor);window.addEventListener('orientationchange',changed);window.addEventListener('blur',blur);window.addEventListener('focus',focus);document.addEventListener('visibilitychange',visibility);screen.orientation?.addEventListener('change',changed);
   status('waiting','Waiting for motion sensors… Hold the phone in a comfortable position.');
   timeout=setTimeout(()=>{if(!enabled||state!=='waiting')return;stop(false);status('unavailable','No sensor data. Allow Motion sensors in browser site settings, then retry. Touch steering still works.');},4500);
  }catch{
   if(disposed||request!==generation)return;stop(false);status('denied','Motion access could not start. Check browser sensor permissions or use touch steering.');
  }
 }
 return{
  enable:()=>{void start();},disable:()=>stop(),recenter,
  sync(){const s=get();if(!s.mobileDescent&&(enabled||state==='requesting'||state==='waiting')){stop();return;}const active=allowed();if(active!==live){attitude.reset();live=active;}},
  dispose(){disposed=true;stop(false);},
 };
}
