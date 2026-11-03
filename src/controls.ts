import { Euler, Quaternion, Vector3 } from 'three';

export type ControlSettings = {
  freeFlight?: boolean;
  mode: string;
  started: boolean;
  paused: boolean;
  blocked: boolean;
  speed: number;
  reduced: boolean;
  motion: number;
  sensitivity: number;
  touchSensitivity: number;
  invertMouseX: boolean;
  invertMouseY: boolean;
};
const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));
const damp = (n: number, target: number, rate: number, dt: number) =>
  target + (n - target) * Math.exp(-rate * dt);
const freeKeys = new Set(['Space','ControlLeft','ControlRight','KeyQ','KeyE']);
const flightKeys = new Set(['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight']);

/** Ship heading and passenger free-look are independent. No automatic roll. */
export class FlightController {
  readonly shipQuaternion = new Quaternion();
  readonly lookQuaternion = new Quaternion();
  readonly position = new Vector3();
  readonly velocity = new Vector3();
  roll = 0;
  rollVelocity = 0;
  private freeActive = false;
  private readonly aimQuaternion = new Quaternion();
  private readonly turnQuaternion = new Quaternion();
  private readonly neutralLook = new Quaternion();
  private readonly desiredVelocity = new Vector3();
  private readonly displacement = new Vector3();
  yaw = 0;
  pitch = 0;
  yawVelocity = 0;
  pitchVelocity = 0;
  speed = 0;
  lookYaw = 0;
  lookPitch = 0;
  lookTargetYaw = 0;
  lookTargetPitch = 0;
  touchX = 0;
  touchY = 0;
  touchSteering = false;
  readonly keys = new Set<string>();
  private elapsed = 0;
  private lastContext = '';
  private readonly euler = new Euler(0, 0, 0, 'YXZ');
  private readonly forward = new Vector3();

  key(code: string, pressed: boolean) {
    if (!flightKeys.has(code) && !freeKeys.has(code)) return;
    if (!pressed) this.keys.delete(code);
    else if (!this.touchSteering) this.keys.add(code);
  }
  steerTouch(x: number, y: number, active: boolean) {
    this.touchSteering = active;
    this.keys.clear();
    const length = Math.hypot(x, y);
    // Radial dead zone, then continuous rescaling to avoid a jump at its edge.
    const magnitude = active ? clamp((length - .1) / .9, 0, 1) : 0;
    this.touchX = length ? x / length * magnitude : 0;
    this.touchY = length ? y / length * magnitude : 0;
  }
  look(dx: number, dy: number, touch: boolean, settings: ControlSettings) {
    if (settings.paused || settings.blocked) return;
    const gain = touch ? settings.touchSensitivity : settings.sensitivity;
    // Deltas are fractions of the viewport, never browser movementX/Y.
    const yaw = this.lookTargetYaw - clamp(dx, -.2, .2) * gain * 1.6 * (!touch && settings.invertMouseX ? -1 : 1);
    this.lookTargetYaw = Math.atan2(Math.sin(yaw), Math.cos(yaw));
    this.lookTargetPitch = clamp(this.lookTargetPitch - clamp(dy, -.2, .2) * gain * 1.6 *
      (!touch && settings.invertMouseY ? -1 : 1), -1.48, 1.48);
  }
  /** Local quaternion rotations remain well-defined through vertical flight and rolls. */
  aim(dx:number,dy:number,s:ControlSettings){
    if(!s.freeFlight||!s.started||s.paused||s.blocked)return;
    if(!this.freeActive)this.syncAttitude();
    const gain=s.sensitivity*(s.reduced?.45:1);
    this.turnQuaternion.setFromEuler(this.euler.set(-clamp(dy,-.2,.2)*gain*1.6*(s.invertMouseY?-1:1),-clamp(dx,-.2,.2)*gain*1.6*(s.invertMouseX?-1:1),0,'YXZ'));
    this.aimQuaternion.multiply(this.turnQuaternion).normalize();
  }
  syncAttitude(){this.aimQuaternion.copy(this.shipQuaternion);this.velocity.set(0,0,0);this.rollVelocity=0;}
  centerLook() { this.lookTargetYaw = this.lookTargetPitch = 0; }
  reset(stop = false) {
    this.keys.clear();
    this.steerTouch(0, 0, false);
    if (stop) {
      this.yawVelocity = this.pitchVelocity = this.rollVelocity = 0;
      this.velocity.set(0,0,0);if(this.freeActive)this.speed=0;this.aimQuaternion.copy(this.shipQuaternion);
      this.lookTargetYaw = this.lookYaw;
      this.lookTargetPitch = this.lookPitch;
    }
  }
  step(delta: number, s: ControlSettings) {
    const context = `${s.mode}/${s.paused}/${s.started}/${s.blocked}/${!!s.freeFlight}`;
    if (this.lastContext && context !== this.lastContext) this.reset(s.paused || s.blocked);
    this.lastContext = context;
    const free=!!s.freeFlight&&s.mode==='Manual Flight'&&s.started;
    if(free!==this.freeActive){this.syncAttitude();if(free){this.lookQuaternion.identity();this.lookYaw=this.lookPitch=this.lookTargetYaw=this.lookTargetPitch=0;}this.freeActive=free;}
    // A tab suspension must never become a catch-up rotation or translation.
    if (!Number.isFinite(delta) || delta <= 0 || delta > .25 || s.paused) return;
    const dt = Math.min(delta, .1);
    this.elapsed += dt;
    if(free){this.stepFree(dt,s);return;}
    const manual = s.mode === 'Manual Flight' && s.started && !s.blocked;
    let horizontal = 0, vertical = 0;
    if (manual) {
      horizontal = this.touchSteering ? this.touchX :
        Number(this.keys.has('KeyD') || this.keys.has('ArrowRight')) - Number(this.keys.has('KeyA') || this.keys.has('ArrowLeft'));
      vertical = this.touchSteering ? this.touchY :
        Number(this.keys.has('KeyS') || this.keys.has('ArrowDown')) - Number(this.keys.has('KeyW') || this.keys.has('ArrowUp'));
      const magnitude = Math.max(1, Math.hypot(horizontal, vertical));
      horizontal /= magnitude;
      vertical /= magnitude;
    }
    const calm = s.reduced ? .45 : 1;
    const gain = this.touchSteering ? s.touchSensitivity : s.sensitivity;
    const ambient = s.started && s.mode !== 'Manual Flight' && !s.blocked && !s.reduced ?
      s.motion * (s.mode === 'Meditation' ? .002 : .006) : 0;
    const yawTarget = manual ? -horizontal * .22 * gain * calm : Math.sin(this.elapsed * .055) * ambient;
    const pitchTarget = manual ? -vertical * .16 * gain * calm : Math.sin(this.elapsed * .08) * ambient * .3;
    // Analytically integrate a damped angular rate, independent of frame rate.
    const rate = 3;
    const factor = (1 - Math.exp(-rate * dt)) / rate;
    this.yaw += yawTarget * dt + (this.yawVelocity - yawTarget) * factor;
    this.pitch += pitchTarget * dt + (this.pitchVelocity - pitchTarget) * factor;
    this.yawVelocity = damp(this.yawVelocity, yawTarget, rate, dt);
    this.pitchVelocity = damp(this.pitchVelocity, pitchTarget, rate, dt);
    this.pitch = Math.atan2(Math.sin(this.pitch), Math.cos(this.pitch));
    this.yaw = Math.atan2(Math.sin(this.yaw), Math.cos(this.yaw));
    this.shipQuaternion.setFromEuler(this.euler.set(this.pitch, this.yaw, 0, 'YXZ'));
    const lookDelta = Math.atan2(Math.sin(this.lookTargetYaw - this.lookYaw), Math.cos(this.lookTargetYaw - this.lookYaw));
    this.lookYaw += lookDelta * (1 - Math.exp(-6 * dt));
    this.lookYaw = Math.atan2(Math.sin(this.lookYaw), Math.cos(this.lookYaw));
    this.lookPitch = damp(this.lookPitch, this.lookTargetPitch, 6, dt);
    this.lookQuaternion.setFromEuler(this.euler.set(this.lookPitch, this.lookYaw, 0, 'YXZ'));
    const targetSpeed = s.started ? Math.max(0, s.speed) * (s.mode === 'Meditation' ? .15 : 1) * (s.reduced ? .3 : 1) : 2;
    const distance = targetSpeed * dt + (this.speed - targetSpeed) * (1 - Math.exp(-.8 * dt)) / .8;
    this.speed = damp(this.speed, targetSpeed, .8, dt);
    this.forward.set(0, 0, -1).applyQuaternion(this.shipQuaternion);
    this.position.addScaledVector(this.forward, distance);
  }
  private stepFree(dt:number,s:ControlSettings){
    if(s.blocked){this.reset(true);this.speed=0;return;}
    const calm=s.reduced?.45:1;
    const steerX=this.touchSteering?this.touchX:Number(this.keys.has('ArrowRight'))-Number(this.keys.has('ArrowLeft'));
    const steerY=this.touchSteering?this.touchY:Number(this.keys.has('ArrowDown'))-Number(this.keys.has('ArrowUp'));
    if(steerX||steerY){this.turnQuaternion.setFromEuler(this.euler.set(-steerY*.3*calm*dt,-steerX*.4*calm*dt,0,'YXZ'));this.aimQuaternion.multiply(this.turnQuaternion).normalize();}
    const rollTarget=(Number(this.keys.has('KeyQ'))-Number(this.keys.has('KeyE')))*.8*calm;
    const rollRate=4,rollFactor=(1-Math.exp(-rollRate*dt))/rollRate;
    const angle=rollTarget*dt+(this.rollVelocity-rollTarget)*rollFactor;
    this.rollVelocity=damp(this.rollVelocity,rollTarget,rollRate,dt);
    this.turnQuaternion.setFromAxisAngle(this.forward.set(0,0,1),angle);
    this.aimQuaternion.multiply(this.turnQuaternion).normalize();this.shipQuaternion.multiply(this.turnQuaternion);
    this.shipQuaternion.slerp(this.aimQuaternion,1-Math.exp(-12*dt)).normalize();
    this.euler.setFromQuaternion(this.shipQuaternion,'YXZ');this.yaw=this.euler.y;this.pitch=this.euler.x;this.roll=this.euler.z;
    // Keep passenger free-look separate; center smoothly when entering free flight.
    this.lookQuaternion.slerp(this.neutralLook,1-Math.exp(-8*dt));
    const x=Number(this.keys.has('KeyD'))-Number(this.keys.has('KeyA'));
    const y=Number(this.keys.has('Space'))-Number(this.keys.has('ControlLeft')||this.keys.has('ControlRight'));
    const z=Number(this.keys.has('KeyS'))-Number(this.keys.has('KeyW'));
    this.desiredVelocity.set(x,y,z);const inputLength=this.desiredVelocity.length();
    if(inputLength>1)this.desiredVelocity.divideScalar(inputLength);
    this.desiredVelocity.multiplyScalar(Math.max(0,s.speed)*(s.reduced?.3:1)).applyQuaternion(this.shipQuaternion);
    const rate=inputLength>0?2.4:1.6,factor=(1-Math.exp(-rate*dt))/rate;
    this.displacement.copy(this.velocity).sub(this.desiredVelocity).multiplyScalar(factor).addScaledVector(this.desiredVelocity,dt);
    this.position.add(this.displacement);this.velocity.lerp(this.desiredVelocity,1-Math.exp(-rate*dt));this.speed=this.velocity.length();
  }
}

/** Each active pointer owns one role; capture/cancel cannot leak into another. */
export function bindFlightInput(canvas: HTMLCanvasElement, joystick: HTMLElement, controller: FlightController, get: () => ControlSettings) {
  let lookPointer: { id: number; type: string; x: number; y: number } | null = null;
  let stickPointer: number | null = null;
  let lastContext = '';
  const listeners: (() => void)[] = [];
  const on = (target: EventTarget, type: string, handler: EventListener, options?: AddEventListenerOptions) => {
    target.addEventListener(type, handler, options);
    listeners.push(() => target.removeEventListener(type, handler, options));
  };
  const available = () => !get().paused && !get().blocked && document.visibilityState !== 'hidden';
  const manual = () => available() && get().started && get().mode === 'Manual Flight';
  const showStick = (x: number, y: number) => {
    joystick.style.setProperty('--stick-x', `${x * 34}px`);
    joystick.style.setProperty('--stick-y', `${y * 34}px`);
  };
  const endLook = () => {
    const pointer = lookPointer; lookPointer = null;
    if (pointer && document.pointerLockElement!==canvas && canvas.hasPointerCapture(pointer.id)) canvas.releasePointerCapture(pointer.id);
  };
  const endStick = () => {
    const pointer = stickPointer; stickPointer = null;
    controller.steerTouch(0, 0, false); showStick(0, 0);
    if (pointer !== null && joystick.hasPointerCapture(pointer)) joystick.releasePointerCapture(pointer);
  };
  const releaseLock=()=>{if(document.pointerLockElement===canvas)document.exitPointerLock();};
  const reset = () => { endLook(); endStick(); controller.reset(true);releaseLock(); };
  on(canvas, 'pointerdown', ((e: PointerEvent) => {
    if (!available() || lookPointer || (e.pointerType === 'mouse' && (e.button !== 0 || stickPointer !== null))) return;
    e.preventDefault();
    if(document.activeElement instanceof HTMLElement)document.activeElement.blur();
    lookPointer = { id: e.pointerId, type: e.pointerType, x: e.clientX, y: e.clientY };
    if(document.pointerLockElement!==canvas)canvas.setPointerCapture(e.pointerId);
    if(e.pointerType==='mouse'&&get().freeFlight&&manual()&&document.pointerLockElement!==canvas&&canvas.requestPointerLock){try{const request=canvas.requestPointerLock();request?.catch(()=>{});}catch{ /* Captured drag remains available. */ }}
  }) as EventListener);
  on(canvas, 'pointermove', ((e: PointerEvent) => {
    if(document.pointerLockElement===canvas)return;
    if (lookPointer?.id !== e.pointerId) return;
    if (!available() || (e.pointerType === 'mouse' && !(e.buttons & 1))) { endLook(); return; }
    e.preventDefault();
    const scale = Math.max(240, Math.min(canvas.clientWidth, canvas.clientHeight));
    if(get().freeFlight&&lookPointer.type==='mouse')controller.aim((e.clientX-lookPointer.x)/scale,(e.clientY-lookPointer.y)/scale,get());
    else controller.look((e.clientX - lookPointer.x) / scale, (e.clientY - lookPointer.y) / scale, lookPointer.type !== 'mouse', get());
    lookPointer.x = e.clientX; lookPointer.y = e.clientY;
  }) as EventListener);
  for (const event of ['pointerup', 'pointercancel', 'lostpointercapture']) {
    on(canvas, event, ((e: PointerEvent) => { if (e.pointerId === lookPointer?.id) endLook(); }) as EventListener);
  }
  on(document,'mousemove',((e:MouseEvent)=>{if(document.pointerLockElement!==canvas||!manual()||!get().freeFlight)return;const scale=Math.max(240,Math.min(canvas.clientWidth,canvas.clientHeight));controller.aim(e.movementX/scale,e.movementY/scale,get());}) as EventListener);
  on(document,'pointerlockchange',()=>{endLook();if(document.pointerLockElement!==canvas)controller.reset(true);});
  const steer = (e: PointerEvent) => {
    const rect = joystick.getBoundingClientRect();
    let x = (e.clientX - rect.left - rect.width / 2) / (rect.width * .35);
    let y = (e.clientY - rect.top - rect.height / 2) / (rect.height * .35);
    const length = Math.max(1, Math.hypot(x, y)); x /= length; y /= length;
    controller.steerTouch(x, y, true); showStick(x, y);
  };
  on(joystick, 'pointerdown', ((e: PointerEvent) => {
    if ((e.pointerType === 'mouse' && e.button !== 0) || stickPointer !== null || !manual()) return;
    e.preventDefault(); e.stopPropagation();
    // Drop a mouse look when a real touch takes control; keep two-finger touch roles.
    if (lookPointer?.type === 'mouse') endLook();
    stickPointer = e.pointerId; joystick.setPointerCapture(e.pointerId); steer(e);
  }) as EventListener);
  on(joystick, 'pointermove', ((e: PointerEvent) => {
    if (e.pointerId !== stickPointer) return;
    if (!manual()) { endStick(); return; }
    e.preventDefault(); steer(e);
  }) as EventListener);
  for (const event of ['pointerup', 'pointercancel', 'lostpointercapture']) {
    on(joystick, event, ((e: PointerEvent) => { if (e.pointerId === stickPointer) endStick(); }) as EventListener);
  }
  const editable = (target: EventTarget | null) => target instanceof HTMLElement && !!target.closest('input,select,textarea,[contenteditable="true"]');
  on(window, 'keydown', ((e: KeyboardEvent) => {
    if(e.code==='Escape'&&get().freeFlight){reset();return;}
    if (!(flightKeys.has(e.code)||get().freeFlight&&freeKeys.has(e.code)) || editable(e.target) || !manual() || e.metaKey || e.altKey || e.ctrlKey&&!(get().freeFlight&&(e.code==='ControlLeft'||e.code==='ControlRight'||document.pointerLockElement===canvas||lookPointer?.type==='mouse'))) return;
    e.preventDefault(); controller.key(e.code, true);
  }) as EventListener);
  on(window, 'keyup', ((e: KeyboardEvent) => controller.key(e.code, false)) as EventListener);
  on(window, 'blur', reset);
  on(document, 'visibilitychange', reset);
  on(window, 'resize', reset);
  on(window, 'orientationchange', reset);
  // Context menus and browser gestures are disabled only on the two control surfaces.
  on(canvas, 'contextmenu', e => e.preventDefault());
  on(joystick, 'contextmenu', e => e.preventDefault());
  return {
    sync() {
      const s = get(); const context = `${s.mode}/${s.paused}/${s.started}/${s.blocked}/${!!s.freeFlight}`;
      if (lastContext && context !== lastContext) { endLook(); endStick(); controller.reset(s.paused || s.blocked);if(s.paused||s.blocked||!s.freeFlight)releaseLock(); }
      lastContext = context;
    },
    dispose() { reset(); listeners.forEach(remove => remove()); },
  };
}
