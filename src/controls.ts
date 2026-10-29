import { Euler, Quaternion, Vector3 } from 'three';

export type ControlSettings = {
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
const flightKeys = new Set(['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight']);

/** Ship heading and passenger free-look are independent. No automatic roll. */
export class FlightController {
  readonly shipQuaternion = new Quaternion();
  readonly lookQuaternion = new Quaternion();
  readonly position = new Vector3();
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
    if (!flightKeys.has(code)) return;
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
    this.lookTargetYaw = clamp(this.lookTargetYaw - clamp(dx, -.2, .2) * gain * 1.6 *
      (!touch && settings.invertMouseX ? -1 : 1), -.85, .85);
    this.lookTargetPitch = clamp(this.lookTargetPitch - clamp(dy, -.2, .2) * gain * 1.6 *
      (!touch && settings.invertMouseY ? -1 : 1), -.5, .5);
  }
  reset(stop = false) {
    this.keys.clear();
    this.steerTouch(0, 0, false);
    if (stop) {
      this.yawVelocity = this.pitchVelocity = 0;
      this.lookTargetYaw = this.lookYaw;
      this.lookTargetPitch = this.lookPitch;
    }
  }
  step(delta: number, s: ControlSettings) {
    const context = `${s.mode}/${s.paused}/${s.started}/${s.blocked}`;
    if (this.lastContext && context !== this.lastContext) this.reset(s.paused || s.blocked);
    this.lastContext = context;
    // A tab suspension must never become a catch-up rotation or translation.
    if (!Number.isFinite(delta) || delta <= 0 || delta > .25 || s.paused) return;
    const dt = Math.min(delta, .1);
    this.elapsed += dt;
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
    this.pitch = clamp(this.pitch + pitchTarget * dt + (this.pitchVelocity - pitchTarget) * factor, -.75, .75);
    this.yawVelocity = damp(this.yawVelocity, yawTarget, rate, dt);
    this.pitchVelocity = damp(this.pitchVelocity, pitchTarget, rate, dt);
    if (Math.abs(this.pitch) >= .75 && Math.sign(this.pitchVelocity) === Math.sign(this.pitch)) this.pitchVelocity = 0;
    this.yaw = Math.atan2(Math.sin(this.yaw), Math.cos(this.yaw));
    this.shipQuaternion.setFromEuler(this.euler.set(this.pitch, this.yaw, 0, 'YXZ'));
    this.lookYaw = damp(this.lookYaw, this.lookTargetYaw, 6, dt);
    this.lookPitch = damp(this.lookPitch, this.lookTargetPitch, 6, dt);
    this.lookQuaternion.setFromEuler(this.euler.set(this.lookPitch, this.lookYaw, 0, 'YXZ'));
    const targetSpeed = s.started ? s.speed * (s.mode === 'Meditation' ? .15 : 1) * (s.reduced ? .3 : 1) : 2;
    const distance = targetSpeed * dt + (this.speed - targetSpeed) * (1 - Math.exp(-.8 * dt)) / .8;
    this.speed = damp(this.speed, targetSpeed, .8, dt);
    this.forward.set(0, 0, -1).applyQuaternion(this.shipQuaternion);
    this.position.addScaledVector(this.forward, distance);
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
    if (pointer && canvas.hasPointerCapture(pointer.id)) canvas.releasePointerCapture(pointer.id);
  };
  const endStick = () => {
    const pointer = stickPointer; stickPointer = null;
    controller.steerTouch(0, 0, false); showStick(0, 0);
    if (pointer !== null && joystick.hasPointerCapture(pointer)) joystick.releasePointerCapture(pointer);
  };
  const reset = () => { endLook(); endStick(); controller.reset(true); };
  on(canvas, 'pointerdown', ((e: PointerEvent) => {
    if (!available() || lookPointer || (e.pointerType === 'mouse' && (e.button !== 0 || stickPointer !== null))) return;
    e.preventDefault();
    lookPointer = { id: e.pointerId, type: e.pointerType, x: e.clientX, y: e.clientY };
    canvas.setPointerCapture(e.pointerId);
  }) as EventListener);
  on(canvas, 'pointermove', ((e: PointerEvent) => {
    if (lookPointer?.id !== e.pointerId) return;
    if (!available() || (e.pointerType === 'mouse' && !(e.buttons & 1))) { endLook(); return; }
    e.preventDefault();
    const scale = Math.max(240, Math.min(canvas.clientWidth, canvas.clientHeight));
    controller.look((e.clientX - lookPointer.x) / scale, (e.clientY - lookPointer.y) / scale, lookPointer.type !== 'mouse', get());
    lookPointer.x = e.clientX; lookPointer.y = e.clientY;
  }) as EventListener);
  for (const event of ['pointerup', 'pointercancel', 'lostpointercapture']) {
    on(canvas, event, ((e: PointerEvent) => { if (e.pointerId === lookPointer?.id) endLook(); }) as EventListener);
  }
  const steer = (e: PointerEvent) => {
    const rect = joystick.getBoundingClientRect();
    let x = (e.clientX - rect.left - rect.width / 2) / (rect.width * .35);
    let y = (e.clientY - rect.top - rect.height / 2) / (rect.height * .35);
    const length = Math.max(1, Math.hypot(x, y)); x /= length; y /= length;
    controller.steerTouch(x, y, true); showStick(x, y);
  };
  on(joystick, 'pointerdown', ((e: PointerEvent) => {
    if (e.pointerType === 'mouse' || stickPointer !== null || !manual()) return;
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
    if (!flightKeys.has(e.code) || editable(e.target) || !manual() || e.ctrlKey || e.metaKey || e.altKey) return;
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
      const s = get(); const context = `${s.mode}/${s.paused}/${s.started}/${s.blocked}`;
      if (lastContext && context !== lastContext) { endLook(); endStick(); controller.reset(s.paused || s.blocked); }
      lastContext = context;
    },
    dispose() { reset(); listeners.forEach(remove => remove()); },
  };
}
