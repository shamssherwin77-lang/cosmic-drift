import test from 'node:test';
import assert from 'node:assert/strict';
import { Euler, Vector3, Quaternion, Object3D } from 'three';
import { LightJump } from '../src/light-jump.ts';
import { advanceFlight, FrameBudget } from '../src/frame-budget.ts';
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
test('free-look remains bounded while ship pitch can travel through every direction', () => {
  const c = pilot(); c.look(10000, -10000, false, settings());
  assert.ok(Math.abs(c.lookTargetYaw) <= .320001 && c.lookTargetPitch <= .320001);
  for (let i = 0; i < 100; i++) c.look(1, -1, false, settings());
  c.key('KeyW', true); advance(c, settings(), 30);
  assert.ok(Math.abs(c.pitch) > .75 && Math.abs(c.pitch) <= Math.PI); assert.ok(Math.abs(c.lookYaw) <= Math.PI && Math.abs(c.lookPitch) <= 1.48);
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


test('slow active frames integrate the full elapsed time without changing steering axes', () => {
  const variable=pilot(),reference=pilot(),s=settings();variable.key('KeyD',true);reference.key('KeyD',true);
  for(let i=0;i<20;i++)for(const dt of [.04,.18,.06,.22])advanceFlight(variable,dt,s);
  advance(reference,s,10,60);
  near(variable.speed,reference.speed);near(variable.yaw,reference.yaw);
  assert.ok(variable.position.distanceTo(reference.position)<.1);
});
test('the frame scheduler rejects tab catch-up and keeps pause neutral', () => {
  const c=pilot();advanceFlight(c,1/60,settings());const p=c.position.clone();
  advanceFlight(c,30,settings());near(c.position.distanceTo(p),0);
  c.key('KeyD',true);advanceFlight(c,.2,settings({paused:true}));assert.equal(c.keys.size,0);
});
test('adaptive resolution has warm-up, bounded scale and resize hysteresis', () => {
  const budget=new FrameBudget();let changes=0;
  for(let i=0;i<20;i++)budget.observe(.1,true,false);near(budget.scale,1);
  for(let i=0;i<600;i++)if(budget.observe(.1,true,false))changes++;
  assert.ok(budget.scale>=.6 && budget.scale<1);assert.ok(changes<=4);
  const low=budget.scale;for(let i=0;i<100;i++)budget.observe(.1,true,true);near(budget.scale,low);
  budget.observe(30,true,false);near(budget.scale,low);
  for(let i=0;i<3600;i++)if(budget.observe(1/60,true,false))changes++;
  assert.ok(budget.scale>low && budget.scale<=1);assert.ok(changes<15);
  budget.reset();near(budget.scale,1);
});

test('Light Jump commits one different destination under cover and runs all phases',()=>{
  const j=new LightJump();assert.ok(j.start(0,7123));assert.equal(j.destination,2);assert.notEqual(j.seed,7123);assert.equal(j.start(0,7123),false);
  const phases=new Set([j.phase]);let commits=0,previous=0;
  for(let i=0;i<660;i++){j.advance(1/60);phases.add(j.phase);assert.ok(Math.abs(j.energy-previous)<.04);previous=j.energy;if(j.justCommitted){commits++;assert.ok(j.veil>.98);}}
  assert.equal(commits,1);assert.deepEqual([...phases],['charging','accelerating','transit','arriving','stabilized','idle']);assert.equal(j.energy,0);assert.equal(j.veil,0);assert.equal(j.busy,false);
});
test('Light Jump pause freezes its clock and repeated jumps never reuse a destination or seed',()=>{
  const j=new LightJump();assert.equal(j.start(0,7123,true),false);j.start(0,7123);j.advance(.1);const elapsed=j.elapsed;j.advance(20,true);near(j.elapsed,elapsed);
  let region=0,seed=7123;const seeds=new Set<number>();
  for(let n=0;n<12;n++){if(j.busy)for(let i=0;i<120;i++)j.advance(.1);assert.ok(j.start(region,seed));assert.notEqual(j.destination,region);assert.ok(!seeds.has(j.seed));seeds.add(j.seed);region=j.destination;seed=j.seed;for(let i=0;i<120;i++)j.advance(.1);}
});


test('interstellar acceleration and braking are smooth, accurate and frame independent', () => {
  const runs=[15,30,60,120].map(fps=>{
    const c=pilot(),s=settings({speed:1200,motion:0});
    c.step(1/fps,s);assert.ok(c.speed>0 && c.speed<70);
    advance(c,s,10-1/fps,fps);assert.ok(c.position.z < -10000);
    const before=c.speed;c.step(1/fps,{...s,speed:0});assert.ok(c.speed>0 && c.speed<before);
    advance(c,{...s,speed:0},20-1/fps,fps);assert.ok(c.speed<.001);
    return c;
  });
  for(const c of runs.slice(1)){near(c.speed,runs[0].speed);near(c.position.z,runs[0].position.z,.001);}
});
test('ship can point straight up, straight down and return through a complete loop',()=>{
  const c=pilot(),s=settings({motion:0});
  for(const pitch of [Math.PI/2,-Math.PI/2,Math.PI*2]){
    c.pitch=pitch;c.step(1/60,s);
    const forward=new Vector3(0,0,-1).applyQuaternion(c.shipQuaternion);
    if(pitch===Math.PI*2)assert.ok(forward.z<-.999);else assert.ok(forward.y*Math.sign(pitch)>.999);
  }
});

import { DEFAULT_AUDIO, parseAudioPreferences } from '../src/audio-preferences.ts';
test('audio preferences survive malformed storage and sanitize saved mixer values', () => {
  assert.deepEqual(parseAudioPreferences('{broken'), DEFAULT_AUDIO);
  assert.deepEqual(parseAudioPreferences('null'), DEFAULT_AUDIO);
  const preferences = parseAudioPreferences(JSON.stringify({ track:'jellyfish', engine:7, space:-2, music:.75, engineEnabled:false, spaceEnabled:true, musicEnabled:false }));
  assert.deepEqual(preferences, { track:'jellyfish', engine:1, space:0, music:.75, engineEnabled:false, spaceEnabled:true, musicEnabled:false });
  const invalid = parseAudioPreferences(JSON.stringify({ track:'missing-song', music:'loud', spaceEnabled:'yes' }));
  assert.deepEqual(invalid, DEFAULT_AUDIO);
  assert.equal(parseAudioPreferences('{"track":"lunar"}').track,'soaring');
});


test('free-look reaches rear and roof, crosses yaw wrap smoothly and recenters without steering',()=>{
  const c=pilot(),s=settings(),heading=c.shipQuaternion.clone();
  for(let i=0;i<20;i++){c.look(.1,0,false,s);advance(c,s,.2);}
  advance(c,s,1);
  assert.ok(new Vector3(0,0,-1).applyQuaternion(c.lookQuaternion).z>.95);
  const before=c.lookQuaternion.clone();c.look(.1,0,false,s);c.step(1/60,s);
  assert.ok(before.angleTo(c.lookQuaternion)<.05);
  for(let i=0;i<20;i++)c.look(0,-.1,false,s);
  advance(c,s,2);assert.ok(new Vector3(0,0,-1).applyQuaternion(c.lookQuaternion).y>.99);
  near(c.shipQuaternion.angleTo(heading),0);
  c.centerLook();advance(c,s,3);assert.ok(c.lookQuaternion.angleTo(heading)<.001);
});

import { systemLayout } from '../src/graphics/system-layout.ts';
test('star systems have stable identities, varied populations and bounded footprints',()=>{
  const a=systemLayout(7123,0),b=systemLayout(7123,0);
  assert.deepEqual(a,b);assert.equal(a.name,'Perseus Anchorage');
  const signatures=new Set();
  for(const seed of [1,2,3,41,7123,129991]){
    const layout=systemLayout(seed,seed%5);
    assert.ok(layout.count>=8&&layout.count<=12);assert.equal(layout.planets.length,12);
    assert.ok(layout.starRadius>=300&&layout.starRadius<=500);
    for(const planet of layout.planets)assert.ok(planet.position.distanceTo(layout.center)<4300);
    signatures.add(JSON.stringify(layout.planets.map(p=>[p.position.toArray(),p.radius,p.color.getHex()])));
  }
  assert.equal(signatures.size,6);
});

const singularity = await import('../src/singularity.ts');
test('singularity alerts escalate by real distance and release with hysteresis',()=>{
 const {readSingularity,CLEAR_READING}=singularity;
 const caution=readSingularity('fixed-system',5300);assert.equal(caution.level,'caution');
 assert.equal(readSingularity('fixed-system',5550,caution).level,'caution');assert.equal(readSingularity('fixed-system',5800,caution).level,'clear');
 const critical=readSingularity('fixed-system',3000,caution);assert.equal(critical.level,'critical');
 assert.equal(readSingularity('fixed-system',3250,critical).level,'critical');assert.equal(readSingularity('fixed-system',3450,critical).level,'caution');
 assert.equal(readSingularity('other-system',5500,critical).level,'clear');assert.deepEqual(readSingularity('',Infinity),CLEAR_READING);
 assert.equal(readSingularity('fixed-system',-10).intensity,1);
});
test('transit exclusion detects high-speed crossings without blocking tangential escape',()=>{
 const {protectedEndpoint}=singularity;
 const stop=protectedEndpoint([0,0,2000],[0,0,-2000],[0,0,0],760);assert.ok(Math.hypot(...stop)>=760);assert.ok(stop[2]>0);
 assert.deepEqual(protectedEndpoint([1000,0,2000],[1000,0,-2000],[0,0,0],760),[1000,0,-2000]);
 assert.deepEqual(protectedEndpoint([0,0,900],[0,0,2000],[0,0,0],760),[0,0,2000]);
 assert.equal(Math.hypot(...protectedEndpoint([0,0,0],[0,0,0],[0,0,0],760)),760);
});

test('Descent is opt-in, rests without thrust and moves on all six local axes',()=>{
 for(const [key,axis,sign] of [['KeyW',2,-1],['KeyS',2,1],['KeyA',0,-1],['KeyD',0,1],['Space',1,1],['ControlLeft',1,-1]] as const){
  const c=new FlightController(),s=settings({freeFlight:true,speed:100});c.step(0,s);advance(c,s,1);near(c.position.length(),0);c.key(key,true);advance(c,s,2);
  const p=c.position.toArray();assert.ok(p[axis]*sign>100);p.forEach((n,i)=>{if(i!==axis)near(n,0);});near(c.yaw,0);near(c.pitch,0);
 }
});
test('Descent release coasts to rest, diagonal thrust is bounded and reversing is gradual',()=>{
 const c=new FlightController(),s=settings({freeFlight:true,speed:100});c.step(0,s);c.key('KeyW',true);c.key('KeyD',true);advance(c,s,4);assert.ok(c.speed<=100);assert.ok(c.speed>99);
 const old=c.velocity.clone();c.key('KeyW',false);c.key('KeyD',false);const p=c.position.clone();advance(c,s,.1);assert.ok(c.position.distanceTo(p)>1);assert.ok(c.speed<old.length()&&c.speed>70);advance(c,s,7);assert.ok(c.speed<.01);
 c.key('KeyS',true);advance(c,s,3);c.key('KeyS',false);c.key('KeyW',true);c.step(1/60,s);assert.ok(c.velocity.z>0);advance(c,s,2);assert.ok(c.velocity.z<0);
});
test('Descent mouse aim and roll use local quaternion axes and preserve six-axis thrust',()=>{
 const c=new FlightController(),s=settings({freeFlight:true,speed:100});c.step(0,s);c.aim(.15,-.1,s);advance(c,s,1);assert.ok(c.yaw<0);assert.ok(c.pitch>0);
 const before=c.shipQuaternion.clone();c.key('KeyQ',true);advance(c,s,2);c.key('KeyQ',false);assert.ok(before.angleTo(c.shipQuaternion)>.8);near(c.shipQuaternion.length(),1);
 const forward=new Vector3(0,0,-1).applyQuaternion(c.shipQuaternion);c.key('KeyW',true);advance(c,s,3);assert.ok(c.velocity.clone().normalize().dot(forward)>.98);
 c.reset(true);const p=c.position.clone();advance(c,{...s,blocked:true},1);near(c.position.distanceTo(p),0);near(c.speed,0);
});
test('Descent translation is stable across frame rates and pause or mode changes cannot queue thrust',()=>{
 const values=[15,30,60,120].map(fps=>{const c=new FlightController(),s=settings({freeFlight:true,speed:120});c.step(0,s);c.key('KeyD',true);advance(c,s,3,fps);c.key('KeyD',false);advance(c,s,2,fps);return c.position.x;});values.forEach(x=>near(x,values[0],1e-7));
 const c=new FlightController(),s=settings({freeFlight:true});c.step(0,s);c.key('KeyW',true);advance(c,s,1);const p=c.position.clone();advance(c,{...s,paused:true},1);advance(c,s,1);near(c.position.distanceTo(p),0);assert.equal(c.keys.size,0);
});

const {ShipFloat}=await import('../src/ship-float.ts');
const floatSettings={enabled:true,paused:false,reduced:false,motion:.6,activity:0};
test('vessel float is bounded, varies gently at rest and settles under active input',()=>{
 const idle=new ShipFloat(),active=new ShipFloat();let idleEnergy=0,activeEnergy=0;const first=[];
 for(let i=0;i<1200;i++){idle.update(1/60,floatSettings);active.update(1/60,{...floatSettings,activity:1});assert.ok(idle.offset.length()<.105);assert.ok(Math.abs(idle.rotation.length()-1)<1e-10);if(i===300)first.push(...idle.offset.toArray());if(i>300){idleEnergy+=idle.offset.lengthSq();activeEnergy+=active.offset.lengthSq();}}
 assert.notDeepEqual(idle.offset.toArray(),first);assert.ok(activeEnergy<idleEnergy*.04);
 const before=active.offset.clone();active.update(1/60,floatSettings);assert.ok(active.offset.distanceTo(before)<.002);
});
test('vessel float freezes on pause, respects reduced motion and is frame-rate independent',()=>{
 const snapshots=[15,30,60,120].map(fps=>{const f=new ShipFloat();for(let i=0;i<fps*8;i++)f.update(1/fps,floatSettings);return{offset:f.offset.toArray(),rotation:f.rotation.toArray()};});snapshots.forEach(s=>s.offset.forEach((v,i)=>near(v,snapshots[0].offset[i],1e-9)));
 const f=new ShipFloat();for(let i=0;i<200;i++)f.update(1/60,floatSettings);const p=f.offset.toArray(),q=f.rotation.toArray();f.update(.2,{...floatSettings,paused:true});assert.deepEqual(f.offset.toArray(),p);assert.deepEqual(f.rotation.toArray(),q);f.update(1/60,{...floatSettings,reduced:true});near(f.offset.length(),0);near(f.rotation.w,1);
});


test('seat inertia reveals vertical cabin heave while user look and helm remain immediate',()=>{
 const f=new ShipFloat(),camera=new Object3D(),vessel=new Object3D(),baseline=new Vector3(0,0,5),helm=new Quaternion().setFromEuler(new Euler(.2,-.4,.3));let vertical=0,lateral=0;
 for(let i=0;i<1200;i++){f.update(1/60,floatSettings);f.apply(vessel,helm,baseline);f.applyCamera(camera,new Quaternion());if(i>300){vertical+=camera.position.y**2;lateral+=camera.position.x**2;}assert.ok(camera.position.length()<.14);}
 assert.ok(vertical>lateral*8);assert.ok(helm.angleTo(new Quaternion().setFromEuler(new Euler(.2,-.4,.3)))<1e-7);
 const before=camera.quaternion.clone(),look=new Quaternion().setFromEuler(new Euler(.1,.6,0));f.applyCamera(camera,look);near(before.angleTo(camera.quaternion),new Quaternion().angleTo(look),1e-7);
 f.update(1/60,{...floatSettings,reduced:true});f.applyCamera(camera,look);near(camera.position.length(),0);near(camera.quaternion.angleTo(look),0,1e-7);
 const values=[15,30,60,120].map(fps=>{const model=new ShipFloat(),eye=new Object3D();for(let i=0;i<fps*8;i++)model.update(1/fps,floatSettings);model.applyCamera(eye,new Quaternion());return eye.position.toArray();});values.forEach(p=>p.forEach((n,i)=>near(n,values[0][i],1e-8)));
});


const {wheelThrottleDelta}=await import('../src/controls.ts');
test('wheel throttle normalizes devices, preserves direction and bounds extreme input',()=>{
 near(wheelThrottleDelta(-100),20);near(wheelThrottleDelta(100),-20);near(wheelThrottleDelta(-3,1),9.6);near(wheelThrottleDelta(1,2),-80);near(wheelThrottleDelta(-100000),80);near(wheelThrottleDelta(NaN),0);near(wheelThrottleDelta(0),0);
});

const planet=await import('../src/planet.ts');
test('Avaris terrain is deterministic with a flat landing basin and surrounding mountains',()=>{
 const {terrainHeight,LANDING_NORMAL,PLANET_RADIUS,groundNormal}=planet;const floor=terrainHeight(LANDING_NORMAL),ridge=LANDING_NORMAL.clone().add(new Vector3(520/PLANET_RADIUS,0,0)).normalize();
 near(terrainHeight(LANDING_NORMAL.clone()),floor);assert.ok(floor>20&&floor<25);assert.ok(terrainHeight(ridge)>floor+120);assert.ok(groundNormal(LANDING_NORMAL).dot(LANDING_NORMAL)>.99);
 for(let i=0;i<100;i++){const n=new Vector3(Math.sin(i*.71),Math.cos(i*.37),Math.sin(i*.21)).normalize();const h=terrainHeight(n);assert.ok(h>=0&&h<=500);near(terrainHeight(n.clone()),h);}
});
test('surface range remains continuous, speed limits reduce gradually and hull sweeps cannot tunnel',()=>{
 const {altitudeAt,terrainHeight,LANDING_NORMAL,PLANET_RADIUS,HULL_CLEARANCE,protectSurface,surfaceSpeedLimit}=planet,center=new Vector3(),p=LANDING_NORMAL.clone().multiplyScalar(PLANET_RADIUS+terrainHeight(LANDING_NORMAL)+100);
 near(altitudeAt(p,center),100,1e-8);const result=new Vector3();assert.equal(protectSurface(p,LANDING_NORMAL.clone().multiplyScalar(-5000),center,result),true);assert.ok(altitudeAt(result,center)>=HULL_CLEARANCE-1e-5);assert.ok(result.dot(LANDING_NORMAL)>0);
 const outward=result.clone().addScaledVector(LANDING_NORMAL,20);assert.equal(protectSurface(result,outward,center,result),false);near(altitudeAt(result,center),HULL_CLEARANCE+20,1e-6);
 assert.equal(surfaceSpeedLimit(100),45);assert.equal(surfaceSpeedLimit(4000),1200);assert.ok(surfaceSpeedLimit(1500)>45&&surfaceSpeedLimit(1500)<1200);
});
test('gentle landing reaches contact and takeoff returns to controllable flight',()=>{
 const {PlanetFlight,LANDING_NORMAL,PLANET_RADIUS,terrainHeight,altitudeAt,HULL_CLEARANCE}=planet,c=new FlightController(),world={key:'1/0/0',name:'Avaris',region:2,center:new Vector3()},surface=new PlanetFlight();
 c.position.copy(LANDING_NORMAL).multiplyScalar(PLANET_RADIUS+terrainHeight(LANDING_NORMAL)+60);surface.update(0,c,world,c.position.clone(),false);assert.equal(surface.reading.canLand,true);assert.equal(surface.land(),true);
 for(let i=0;i<400;i++)surface.update(1/60,c,world,c.position.clone(),true);assert.equal(surface.status,'landed');near(altitudeAt(c.position,world.center),HULL_CLEARANCE,1e-6);near(c.speed,0);
 assert.equal(surface.takeoff(),true);for(let i=0;i<180;i++)surface.update(1/60,c,world,c.position.clone(),true);assert.equal(surface.status,'flight');assert.ok(altitudeAt(c.position,world.center)>80);surface.update(0,c,null,c.position,false);assert.equal(surface.reading.visible,false);
});
