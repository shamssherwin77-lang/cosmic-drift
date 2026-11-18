import test from 'node:test';
import assert from 'node:assert/strict';
import {Quaternion,Vector3,Euler} from 'three';
import {PhoneAttitude,deviceAttitude} from '../src/phone-attitude.ts';
import {FlightController,type ControlSettings} from '../src/controls.ts';
const settings:ControlSettings={freeFlight:true,mobileDescent:true,gyroSensitivity:1,mode:'Manual Flight',started:true,paused:false,blocked:false,speed:100,reduced:false,motion:.6,sensitivity:1,touchSensitivity:.7,invertMouseX:false,invertMouseY:false};
const step=(c:FlightController,n=120,s=settings)=>{for(let i=0;i<n;i++)c.step(1/60,s);};
const close=(a:Quaternion,b:Quaternion)=>assert.ok(a.angleTo(b)<1e-6,`angle ${a.angleTo(b)}`);
test('a physical half-turn turns the whole ship, keeps cockpit forward and does not translate at idle',()=>{
 const c=new FlightController(),sensor=new PhoneAttitude();c.step(0,settings);sensor.sample(0,90,0,0,0);
 for(let angle=3;angle<=180;angle+=3){const d=sensor.sample(angle,90,0,0,angle*5);if(d)c.gyro(d,settings);c.step(1/60,settings);}step(c);
 assert.ok(new Vector3(0,0,-1).applyQuaternion(c.shipQuaternion).z>.9999);close(c.lookQuaternion,new Quaternion());assert.equal(c.position.length(),0);
 c.moveTouch(0,-1,true);step(c);assert.ok(c.position.z>100);assert.ok(Math.abs(c.position.x)<.01);
});
test('portrait and both landscape orientations produce the same yaw and pitch response',()=>{
 for(const [screen,alpha,gamma] of [[0,0,0],[90,90,-90],[-90,-90,90]]){
  const sensor=new PhoneAttitude(),beta=screen===0?90:0;sensor.sample(alpha,beta,gamma,screen,0);const d=sensor.sample(alpha+180,beta,gamma,screen,200)!;assert.ok(d);close(d,new Quaternion().setFromAxisAngle(new Vector3(0,1,0),Math.PI));
 }
 const p=new PhoneAttitude();p.sample(0,90,0,0,0);close(p.sample(0,110,0,0,100)!,new Quaternion().setFromAxisAngle(new Vector3(1,0,0),20*Math.PI/180));
});
test('wraparound, cumulative deadzone, invalid data and stale samples cannot jump the heading',()=>{
 const p=new PhoneAttitude();p.sample(359,90,0,0,0);const d=p.sample(1,90,0,0,20)!;assert.ok(d.angleTo(new Quaternion())<.04);
 p.reset();p.sample(0,90,0,0,30);assert.equal(p.sample(.04,90,0,0,40),null);assert.equal(p.sample(.08,90,0,0,50),null);assert.ok(p.sample(.13,90,0,0,60));
 assert.equal(p.sample(null,90,0,0,70),null);assert.equal(p.sample(NaN,90,0,0,80),null);assert.equal(p.sample(180,90,0,0,2000),null);assert.ok(p.sample(190,90,0,0,2020));
 assert.equal(p.sample(0,0,-90,90,2040),null);p.reset();assert.equal(p.sample(270,0,-90,90,2060),null);
});
test('reference changes preserve current heading and independent roll without resetting translation',()=>{
 const c=new FlightController();c.step(0,settings);c.shipQuaternion.setFromEuler(new Euler(.2,.4,.6));c.syncAttitude();const start=c.shipQuaternion.clone(),sensor=new PhoneAttitude();sensor.sample(30,90,0,0,0);const d=sensor.sample(50,90,0,0,20)!;c.gyro(d,settings);step(c);close(c.shipQuaternion,start.multiply(d));
 c.moveTouch(1,0,true);c.touchRollLeft=true;step(c,60);const before=c.shipQuaternion.clone();c.moveTouch(0,0,false);assert.equal(c.touchRollLeft,true);step(c,30);assert.ok(c.shipQuaternion.angleTo(before)>.2);
 const v=c.velocity.length();c.recenterSteering();assert.equal(c.velocity.length(),v);const heading=c.shipQuaternion.clone();sensor.reset();assert.equal(sensor.sample(200,90,0,0,40),null);step(c,1); // roll can keep running independently
 c.reset(true);assert.equal(c.touchRollLeft,false);assert.equal(c.touchMotion.active,false);assert.equal(c.speed,0);
 assert.ok(heading.toArray().every(Number.isFinite));
});
test('blocked gyro and neutral stick do not rotate or move; sensitivity scales angular increments',()=>{
 const c=new FlightController();c.step(0,settings);const d=new Quaternion().setFromAxisAngle(new Vector3(0,1,0),1);c.gyro(d,{...settings,blocked:true});step(c);close(c.shipQuaternion,new Quaternion());c.moveTouch(.03,.03,true);step(c);assert.equal(c.position.length(),0);
 for(const gain of [.5,1,1.5]){const p=new PhoneAttitude();p.sample(0,90,0,0,0);assert.ok(Math.abs(p.sample(20,90,0,0,20,gain)!.angleTo(new Quaternion())-20*Math.PI/180*gain)<1e-8);}
 close(deviceAttitude(0,90,0,0),new Quaternion());
});
