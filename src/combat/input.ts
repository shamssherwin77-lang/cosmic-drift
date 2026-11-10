/** Firing owns only the canvas/trigger, never clicks on menus or sliders. */
export function bindCombatInput(canvas:HTMLCanvasElement,get:()=>{active:boolean;blocked:boolean;paused:boolean},input:{firing:boolean;weapon:number}){
 const listeners:(()=>void)[]=[];const on=(target:EventTarget,type:string,handler:EventListener)=>{target.addEventListener(type,handler);listeners.push(()=>target.removeEventListener(type,handler));};
 const stop=()=>{input.firing=false;};const allowed=()=>{const s=get();return s.active&&!s.blocked&&!s.paused&&!document.hidden;};
 on(canvas,'pointerdown',((e:PointerEvent)=>{if(e.pointerType==='mouse'&&e.button===0&&allowed())input.firing=true;}) as EventListener);
 on(window,'pointerup',stop);on(window,'pointercancel',stop);on(window,'blur',stop);on(document,'visibilitychange',stop);on(document,'pointerlockchange',()=>{if(document.pointerLockElement!==canvas)stop();});
 on(window,'keydown',((e:KeyboardEvent)=>{if(e.code==='Escape'){stop();return;}if(!allowed()||e.ctrlKey||e.altKey||e.metaKey||e.target instanceof HTMLElement&&e.target.closest('input,select,textarea,[contenteditable="true"]'))return;const n=Number(e.code.replace(/^(Digit|Numpad)/,''));if(n>=1&&n<=4){e.preventDefault();input.weapon=n-1;}}) as EventListener);
 return{sync(){if(!allowed())stop();},dispose(){stop();listeners.forEach(f=>f());}};
}
