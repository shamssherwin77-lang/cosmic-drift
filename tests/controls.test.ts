import test from 'node:test';
import assert from 'node:assert/strict';
import { Euler, Vector3 } from 'three';
import { FlightController, type ControlSettings } from '../src/controls.ts';

const settings = (overrides: Partial<ControlSettings> = {}): ControlSettings => ({
  mode: 'Manual Flight', started: true, paused: false, blocked: false,
  speed: 18, reduced: false, motion: .6, sensitivity: 1, touchSensitivity: .7,
  invertMouseX: false, invertMouseY: false, ...overrides,
});
function advance(c: FlightController, s: ControlSettings, seconds: number, fps = 60) {
  for (let i = 0; i < Math.round(seconds * fps); i++) c.step(1 / fps, s);
}
function pilot(s = settings()) { const c = new FlightController(); c.step(0, s); return c; }
const near = (a: number, b: number, tolerance = 1e-6) => assert.ok(Math.abs(a - b) < tolerance, `${a} != ${b}`);

test('WASD and arrows turn in the expected direction with no roll', () => {
  for (const [code, axis, sign] of [
    ['KeyD', 'yaw', -1], ['ArrowRight', 'yaw', -1], ['KeyA', 'yaw', 1], ['ArrowLeft', 'yaw', 1],
    ['KeyW', 'pitch', 1], ['ArrowUp', 'pitch', 1], ['KeyS', 'pitch', -1], ['ArrowDown', 'pitch', -1],
  ] as const) {
    const c = pilot(); c.key(code, true); advance(c, settings(), 2);
    assert.ok(c[axis] * sign > .1);
    near(new Euler().setFromQuaternion(c.shipQuaternion, 'YXZ').z, 0);
  }
});
test('angular acceleration is gradual and release settles with bounded inertia', () => {
  const c = pilot(); c.key('KeyD', true); c.step(1 / 60, settings());
  assert.ok(Math.abs(c.yawVelocity) < .02);
  advance(c, settings(), 2); c.key('KeyD', false);
  const angle = c.yaw; advance(c, settings(), 3);
  assert.ok(Math.abs(c.yawVelocity) < .0001);
  assert.ok(Math.abs(c.yaw - angle) < .075);
});
test('controls and forward distance are stable at 15, 30, 60 and 120 FPS', () => {
  const runs = [15, 30, 60, 120].map(fps => {
    const c = pilot(); c.key('KeyD', true); advance(c, settings(), 3, fps);
    return c;
  });
  for (const c of runs.slice(1)) {
    near(c.yaw, runs[0].yaw); near(c.yawVelocity, runs[0].yawVelocity);
    assert.ok(c.position.distanceTo(runs[0].position) < .25);
  }
});
test('travel follows ship heading; free-look does not steer the ship', () => {
  const s = settings(); const c = pilot(s); c.yaw = -Math.PI / 2; advance(c, s, 2);
  assert.ok(c.position.x > 10); near(c.position.z, 0);
  const heading = c.shipQuaternion.clone();
  c.look(.1, -.1, false, s); advance(c, s, 2);
  near(c.shipQuaternion.angleTo(heading), 0);
  assert.ok(c.lookYaw < 0 && c.lookPitch > 0);
  assert.ok(new Vector3(0, 0, -1).applyQuaternion(c.shipQuaternion).x > .99);
});
test('mouse inversion, touch independence and sensitivity work', () => {
  const normal = pilot(), inverted = pilot(), touch = pilot();
  normal.look(.1, -.1, false, settings());
  inverted.look(.1, -.1, false, settings({invertMouseX: true, invertMouseY: true}));
  near(normal.lookTargetYaw, -inverted.lookTargetYaw); near(normal.lookTargetPitch, -inverted.lookTargetPitch);
  touch.look(.1, -.1, true, settings({invertMouseX: true, invertMouseY: true}));
  assert.ok(touch.lookTargetYaw < 0 && touch.lookTargetPitch > 0);
  const slow = pilot(); slow.look(.1, 0, false, settings({sensitivity: .5}));
  near(slow.lookTargetYaw, normal.lookTargetYaw / 2);
});
test('look and pitch remain bounded and extreme pointer deltas cannot jump', () => {
  const c = pilot(); c.look(10000, -10000, false, settings());
  assert.ok(Math.abs(c.lookTargetYaw) <= .320001 && c.lookTargetPitch <= .320001);
  for (let i = 0; i < 100; i++) c.look(1, -1, false, settings());
  c.key('KeyW', true); advance(c, settings(), 30);
  near(c.pitch, .75); assert.ok(Math.abs(c.lookYaw) <= .85 && Math.abs(c.lookPitch) <= .5);
  assert.ok(c.shipQuaternion.toArray().every(Number.isFinite));
});
test('touch dead zone, normalization, keyboard exclusion and neutral release', () => {
  const c = pilot(); c.key('KeyA', true); c.steerTouch(.03, .02, true);
  near(c.touchX, 0); near(c.touchY, 0); assert.equal(c.keys.size, 0);
  c.steerTouch(1, 1, true); assert.ok(Math.hypot(c.touchX, c.touchY) <= 1.000001);
  c.key('KeyA', true); assert.equal(c.keys.size, 0);
  advance(c, settings(), 1); assert.ok(c.yaw < 0 && c.pitch < 0);
  c.steerTouch(0, 0, false); near(c.touchX, 0); near(c.touchY, 0);
  advance(c, settings(), 3); assert.ok(Math.abs(c.yawVelocity) < .0001);
});
test('pause, panels and tab suspension cannot queue movement', () => {
  const c = pilot(); c.key('KeyD', true); advance(c, settings(), 1);
  const q = c.shipQuaternion.clone(), p = c.position.clone();
  advance(c, settings({paused: true}), 2); near(c.shipQuaternion.angleTo(q), 0); near(c.position.distanceTo(p), 0);
  assert.equal(c.keys.size, 0); near(c.yawVelocity, 0);
  c.look(.2, .2, false, settings({paused: true})); near(c.lookTargetYaw, 0);
  advance(c, settings({blocked: true}), 1); assert.equal(c.keys.size, 0);
  c.step(30, settings()); near(c.shipQuaternion.angleTo(q), 0);
});
test('autopilot/manual/meditation transitions keep orientation continuous', () => {
  const s = settings({mode: 'Autopilot'}), c = pilot(s); advance(c, s, 10);
  const q = c.shipQuaternion.clone(); c.step(1 / 60, settings());
  assert.ok(c.shipQuaternion.angleTo(q) < .001);
  c.key('KeyD', true); advance(c, settings(), 2);
  const manualQ = c.shipQuaternion.clone(); c.step(1 / 60, settings({mode: 'Meditation'}));
  assert.ok(c.shipQuaternion.angleTo(manualQ) < .004);
  const normal = pilot(s), calm = pilot({...s,mode:'Meditation'});
  advance(normal, s, 20); advance(calm, {...s,mode:'Meditation'}, 20);
  assert.ok(calm.speed < normal.speed * .2); assert.ok(Math.abs(calm.yaw) < Math.abs(normal.yaw) * .4);
});
test('reduced motion disables automatic turns and lowers manual rate', () => {
  const s = settings({mode:'Autopilot',reduced:true}), c = pilot(s); advance(c,s,20);
  near(c.yaw,0); near(c.pitch,0);
  const a=pilot(),b=pilot();a.key('KeyD',true);b.key('KeyD',true);
  advance(a,settings(),2);advance(b,settings({reduced:true}),2);
  near(b.yaw,a.yaw*.45);
});

test('opposing keys cancel and reversal cannot instantly flip angular velocity', () => {
  const c=pilot();c.key('KeyA',true);c.key('KeyD',true);advance(c,settings(),1);near(c.yaw,0);
  c.key('KeyA',false);advance(c,settings(),1);assert.ok(c.yawVelocity<0);
  const before=c.yawVelocity;c.key('KeyD',false);c.key('KeyA',true);c.step(1/60,settings());
  assert.ok(c.yawVelocity<0 && c.yawVelocity>before);
  advance(c,settings(),2);assert.ok(c.yawVelocity>0);
});
