import React,{useEffect,useRef,useState} from 'react';

/** The game mounts after the film, so video decoding never competes with WebGL. */
export function OpeningCinematic({onComplete}:{onComplete:()=>void}){
 const video=useRef<HTMLVideoElement>(null),finished=useRef(false);
 const[muted,setMuted]=useState(true),[needsPlay,setNeedsPlay]=useState(false),[playing,setPlaying]=useState(false);
 const finish=()=>{if(finished.current)return;finished.current=true;video.current?.pause();onComplete();};
 useEffect(()=>{
  const element=video.current!;let alive=true;element.muted=true;
  void element.play().catch(()=>{if(alive)setNeedsPlay(true);});
  const key=(e:KeyboardEvent)=>{if(e.code==='Escape'){e.preventDefault();finish();}};
  const visibility=()=>{if(document.hidden)element.pause();else if(!finished.current)void element.play().catch(()=>{if(alive)setNeedsPlay(true);});};
  window.addEventListener('keydown',key);document.addEventListener('visibilitychange',visibility);
  return()=>{alive=false;window.removeEventListener('keydown',key);document.removeEventListener('visibilitychange',visibility);element.pause();element.removeAttribute('src');element.load();};
 },[]);
 const play=(withSound:boolean)=>{
  const element=video.current;if(!element)return;element.muted=!withSound;setMuted(!withSound);
  void element.play().then(()=>setNeedsPlay(false)).catch(()=>setNeedsPlay(true));
 };
 return <main className="opening-cinematic" aria-label="Opening cinematic" onPointerDown={e=>{if(!(e.target as HTMLElement).closest('button')&&muted)play(true);}}>
  <video ref={video} className="opening-video" aria-label="Cosmic Drift opening film" src={`${import.meta.env.BASE_URL}video/cosmic-drift-intro.mp4`} poster={`${import.meta.env.BASE_URL}video/intro-poster.jpg`} autoPlay muted playsInline preload="auto" onEnded={finish} onError={finish} onPlaying={()=>{setPlaying(true);setNeedsPlay(false);}}/>
  {!playing&&!needsPlay&&<div className="opening-mark" aria-hidden="true">COSMIC DRIFT</div>}
  {needsPlay&&<button className="opening-play" onClick={()=>play(true)}>Play intro <span>20 seconds · Sound on</span></button>}
  <div className="opening-controls">
   <button className="opening-sound" aria-label={muted?'Enable intro sound':'Mute intro sound'} onClick={()=>play(muted)}>{muted?'Sound on':'Mute sound'}</button>
   <button className="opening-skip" onClick={finish}>Skip intro <span aria-hidden="true">→</span></button>
  </div>
 </main>;
}
