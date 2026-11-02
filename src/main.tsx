import React,{useEffect,useRef,useState} from 'react';
import{createRoot}from'react-dom/client';
import{Play,Pause,Volume2,Maximize,Settings2,Eye,Compass,Navigation,Zap,X}from'lucide-react';
import{createScene,regions,type Flight}from'./scene';
import{FlightController}from'./controls';
import{LightJump,type JumpPhase}from'./light-jump';
import type{Quality,Lighting}from'./graphics/config';
import{SpaceAudio,type MusicPlayback}from'./audio';
import{AudioPanel}from'./audio-panel';
import{AUDIO_STORAGE_KEY,DEFAULT_AUDIO,parseAudioPreferences,type AudioPreferences,type MusicTrack}from'./audio-preferences';
import'./style.css';

function App(){
 const mode='Manual Flight';
 const[speed,setSpeed]=useState(18),[actualSpeed,setActualSpeed]=useState(0),[paused,setPaused]=useState(false),[region,setRegion]=useState(0);
 const[quality,setQuality]=useState<Quality>(()=>matchMedia('(any-pointer: coarse)').matches?'Low':'Medium'),[lighting,setLighting]=useState<Lighting>('Balanced');
 const[reduced,setReduced]=useState(matchMedia('(prefers-reduced-motion: reduce)').matches),[motion,setMotion]=useState(.6),[cockpit,setCockpit]=useState(true);
 const[started,setStarted]=useState(false),[hidden,setHidden]=useState(false),[panel,setPanel]=useState<''|'audio'|'settings'>(''),[sound,setSound]=useState(false),[error,setError]=useState(''),[full,setFull]=useState(false);
 const[sensitivity,setSensitivity]=useState(1),[touchSensitivity,setTouchSensitivity]=useState(.7),[invertMouseX,setInvertMouseX]=useState(false),[invertMouseY,setInvertMouseY]=useState(false);
 const[bloom,setBloom]=useState(.28),[performanceMode,setPerformanceMode]=useState(false),[adaptive,setAdaptive]=useState(true),[jumpPhase,setJumpPhase]=useState<JumpPhase>('idle'),[worldSeed,setWorldSeed]=useState(7123);
 const[navigationInfo,setNavigationInfo]=useState({current:'Perseus Anchorage',next:'Deep-space systems',distance:0,region:0});
 const[musicPlayback,setMusicPlayback]=useState<MusicPlayback>({state:'idle',track:null});
 const[audioSettings,setAudioSettings]=useState<AudioPreferences>(()=>{try{return parseAudioPreferences(localStorage.getItem(AUDIO_STORAGE_KEY));}catch{return{...DEFAULT_AUDIO};}});
 const jump=useRef(new LightJump()),jumpRequest=useRef(()=>{}),jumpBusy=jumpPhase!=='idle';
 const joystick=useRef<HTMLDivElement>(null),controller=useRef(new FlightController()),host=useRef<HTMLDivElement>(null),audio=useRef(new SpaceAudio());
 const flight=useRef<Flight>({mode,speed,paused,region,quality,reduced,motion,cockpit,started,blocked:!started||!!panel||jumpBusy,sensitivity,touchSensitivity,invertMouseX,invertMouseY,lighting,bloom,performanceMode,adaptive,worldSeed});
 flight.current={mode,speed,paused,region,quality,reduced,motion,cockpit,started,blocked:!started||!!panel||jumpBusy,sensitivity,touchSensitivity,invertMouseX,invertMouseY,lighting,bloom,performanceMode,adaptive,worldSeed};
 useEffect(()=>{try{return createScene(host.current!,()=>flight.current,controller.current,joystick.current!,{
  onNavigation:info=>{setNavigationInfo(info);setRegion(info.region);},jump:jump.current,onPhase:setJumpPhase,
  onDestination:(r,seed)=>{setRegion(r);setWorldSeed(seed);},onAudio:(drive,charge,pause)=>audio.current.jump(drive,charge,pause),
 });}catch{setError('WebGL could not start. Please enable hardware acceleration and reload.');}},[]);
 useEffect(()=>{audio.current.onMusicState=setMusicPlayback;return()=>audio.current.dispose();},[]);
 useEffect(()=>{const id=setInterval(()=>setActualSpeed(controller.current.speed),200);return()=>clearInterval(id);},[]);
 useEffect(()=>{audio.current.set(sound,audioSettings,paused);},[sound,audioSettings,paused]);
 useEffect(()=>{try{localStorage.setItem(AUDIO_STORAGE_KEY,JSON.stringify(audioSettings));}catch{}},[audioSettings]);
 useEffect(()=>{const listener=()=>setFull(!!document.fullscreenElement);document.addEventListener('fullscreenchange',listener);return()=>document.removeEventListener('fullscreenchange',listener);},[]);
 useEffect(()=>{const key=(e:KeyboardEvent)=>{
  if(!started||e.target instanceof HTMLElement&&e.target.closest('input,select,textarea,[contenteditable="true"]'))return;
  if(e.code==='KeyJ'&&!e.repeat&&!e.ctrlKey&&!e.metaKey&&!e.altKey){e.preventDefault();jumpRequest.current();}
  if(e.code==='KeyR')controller.current.centerLook();
  if(e.key.toLowerCase()==='h'){setPanel('');setHidden(v=>!v);}
  if(e.code==='Space'&&!(e.target instanceof HTMLElement&&e.target.closest('button,a'))){e.preventDefault();setPaused(v=>!v);}
  if(e.key==='Escape'){setHidden(false);setPanel('');}
 };window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key);},[started]);
 const audioError=()=>{setSound(false);setError('Audio could not start. Open music settings to try again.');};
 const beginJourney=()=>{
  setStarted(true);setPaused(false);setAudioSettings(s=>({...s,musicEnabled:true,music:s.music>0?s.music:.5}));
  void audio.current.start(audioSettings.track).catch(audioError);setSound(true);
 };
 const toggleSound=async()=>{try{await audio.current.start();setSound(v=>!v);}catch{audioError();}};
 const chooseTrack=async(track:MusicTrack)=>{try{await audio.current.start(track);setAudioSettings(s=>({...s,track,musicEnabled:true}));setSound(true);}catch{audioError();}};
 const fullscreen=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{setError('Fullscreen is unavailable in this browser.');}};
 const startJump=()=>{if(started&&jump.current.start(region,worldSeed,paused)){setPanel('');setJumpPhase('charging');}};jumpRequest.current=startJump;
 const jumpStatus=paused&&jumpBusy?'Jump paused':jumpPhase==='charging'?'Charging drive…':jumpPhase==='accelerating'?'Accelerating…':jumpPhase==='transit'?'Crossing the light…':jumpPhase==='arriving'?'Entering the next system…':jumpPhase==='stabilized'?`Arrived: ${navigationInfo.current}`:'';
 return <main data-jump-phase={jumpPhase} data-world-seed={worldSeed} data-region={region} className={`manual-flight ${started?'journey-started':'preflight'} ${hidden?'hidden-ui':''} ${panel||paused||jumpBusy?'controls-blocked':''} ${jumpBusy?'jump-active':''}`}>
  <div className="universe" ref={host}/><div className="vignette"/>
  <button className="fullscreen-button ui" title={full?'Exit fullscreen':'Fullscreen'} onClick={fullscreen}><Maximize size={20}/></button>
  {!started&&<section className="entry"><button className="entry-button" onClick={beginJourney}><Navigation size={20}/><span>Start journey</span></button></section>}
  <div className="flight-ui ui" aria-hidden={!started}>
   <div className="navigation-caption"><span>{navigationInfo.current}</span><small>{regions[region].name} · Next: {navigationInfo.next} · {navigationInfo.distance.toLocaleString()} u</small></div>
   <div className="touch-controls"><div ref={joystick} className="touch-joystick" role="group" aria-label="Touch flight joystick"><span className="stick-cross">+</span><span className="stick-thumb"/><small>STEER</small></div></div>
   <aside className="action-rail" aria-label="Flight actions">
    <button className="rail-button rail-jump" title="Light Jump" aria-keyshortcuts="J" disabled={jumpBusy||paused} onClick={startJump}><Zap size={20}/></button>
    <button className={`rail-button ${panel==='audio'?'selected':''}`} title="Audio settings" aria-expanded={panel==='audio'} aria-controls="flight-panel" onClick={()=>setPanel(panel==='audio'?'':'audio')}><Volume2 size={20}/></button>
    <button className={`rail-button ${panel==='settings'?'selected':''}`} title="Settings" aria-expanded={panel==='settings'} aria-controls="flight-panel" onClick={()=>setPanel(panel==='settings'?'':'settings')}><Settings2 size={20}/></button>
    <button className="rail-button" title={paused?'Resume':'Pause'} onClick={()=>setPaused(v=>!v)}>{paused?<Play size={19}/>:<Pause size={19}/>}</button>
   </aside>
   <span className="jump-status" role="status" aria-live="polite">{jumpStatus}</span>
   <div className="cruise-strip"><label htmlFor="speed">CRUISE SPEED <span>{actualSpeed.toFixed(0)} <small title="Game units per second">u/s</small></span></label><input id="speed" aria-label="Cruise speed" disabled={jumpBusy} type="range" min="0" max="1200" value={speed} onChange={e=>setSpeed(+e.target.value)}/></div>
  </div>
  {hidden&&started&&<button className="restore" onClick={()=>setHidden(false)}><Eye size={16}/> Show controls · H</button>}
  {panel&&started&&<>
   <button className="panel-scrim" aria-label="Close settings overlay" onClick={()=>setPanel('')}/>
   <section id="flight-panel" className="panel" aria-label={panel==='audio'?'Sound settings':'Graphics settings'}>
    <div className="panel-head"><span>{panel==='audio'?'The sound of stillness':'Make space your own'}</span><button title="Close settings" onClick={()=>setPanel('')}><X size={19}/></button></div>
    {panel==='audio'?<AudioPanel sound={sound} paused={paused} playback={musicPlayback} settings={audioSettings} onToggle={toggleSound} onTrack={chooseTrack} onChange={patch=>setAudioSettings(s=>({...s,...patch}))}/>:<>
<p className="setting-note">Speed is shown in game units per second. Distances are scaled for relaxed exploration.</p><label className="setting">Graphics quality<select aria-label="Graphics quality" value={quality} onChange={e=>setQuality(e.target.value as Quality)}>{['Low','Medium','High'].map(q=><option key={q}>{q}</option>)}</select></label><label className="check"><input type="checkbox" checked={performanceMode} onChange={e=>setPerformanceMode(e.target.checked)}/> Performance mode</label><label className="check"><input type="checkbox" checked={adaptive} onChange={e=>setAdaptive(e.target.checked)}/> Adaptive resolution</label><small className="setting-note">Performance mode prioritizes smooth flight. Adaptive resolution adjusts image detail when rendering is slow.</small><label className="setting">Environment lighting<select aria-label="Environment lighting" value={lighting} onChange={e=>setLighting(e.target.value as Lighting)}>{['Dark','Balanced','Cinematic'].map(l=><option key={l}>{l}</option>)}</select></label><label className="setting">Soft bloom <output>{Math.round(bloom*100)}%</output><input aria-label="Soft bloom" type="range" min="0" max=".6" step=".02" value={bloom} onChange={e=>setBloom(+e.target.value)}/><small className="setting-note">Low / Medium use lightweight star halos; High can add post-processing bloom.</small></label><label className="setting">Steering / mouse sensitivity <output>{sensitivity.toFixed(2)}×</output><input aria-label="Steering and mouse sensitivity" type="range" min=".25" max="2" step=".05" value={sensitivity} onChange={e=>setSensitivity(+e.target.value)}/></label><label className="setting">Touch sensitivity <output>{touchSensitivity.toFixed(2)}×</output><input aria-label="Touch sensitivity" type="range" min=".25" max="1.5" step=".05" value={touchSensitivity} onChange={e=>setTouchSensitivity(+e.target.value)}/></label><label className="check"><input type="checkbox" checked={invertMouseX} onChange={e=>setInvertMouseX(e.target.checked)}/> Invert mouse horizontal axis</label><label className="check"><input type="checkbox" checked={invertMouseY} onChange={e=>setInvertMouseY(e.target.checked)}/> Invert mouse vertical axis</label><label className="setting">Camera movement<input aria-label="Camera movement" type="range" min="0" max="1" step=".05" value={motion} onChange={e=>setMotion(+e.target.value)}/></label><label className="check"><input type="checkbox" checked={reduced} onChange={e=>setReduced(e.target.checked)}/> Reduced motion</label><button className="sound-toggle" onClick={()=>controller.current.centerLook()}>Center view · R<Compass size={16}/></button><label className="check"><input type="checkbox" checked={cockpit} onChange={e=>setCockpit(e.target.checked)}/> Show cockpit</label><button className="sound-toggle" onClick={()=>{setPanel('');setHidden(true);}}>Hide interface · H<Eye size={16}/></button>    </>}
   </section>
  </>}
  {error&&<div role="alert" className="error">{error}<button onClick={()=>setError('')} aria-label="Dismiss error"><X size={16}/></button></div>}
 </main>;
}
createRoot(document.getElementById('root')!).render(<App/>);
