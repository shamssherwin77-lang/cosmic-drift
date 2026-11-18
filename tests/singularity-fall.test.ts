import test from 'node:test';
import assert from 'node:assert/strict';
import {SingularityFall,horizonEntry,FALL_DURATION} from '../src/singularity-fall.ts';
import {HORIZON_RADIUS,SAFE_RETURN_DISTANCE,ARRIVAL_DISTANCE,CAUTION_DISTANCE,CRITICAL_DISTANCE,LAST_ESCAPE_DISTANCE} from '../src/singularity.ts';
test('swept horizon catches a complete crossing and permits tangential escape',()=>{
 assert.equal(horizonEntry([0,0,3000],[0,0,-3000],[0,0,0]),(3000-HORIZON_RADIUS)/6000);
 assert.equal(horizonEntry([2000,0,3000],[2000,0,-3000],[0,0,0]),null);
 assert.equal(horizonEntry([0,0,2000],[0,0,3000],[0,0,0]),null);
 assert.equal(horizonEntry([0,0,0],[0,0,0],[0,0,0]),0);
 assert.equal(horizonEntry([NaN,0,0],[0,0,0],[0,0,0]),null);
});
test('descent advances once, freezes while paused, has finite bounded phases and resets safely',()=>{
 const f=new SingularityFall(),center=[10000,-200,55000];
 assert.equal(f.enter([10000,-200,58000],[10000,-200,55000],center),true);
 assert.equal(f.enter([0,0,0],[0,0,0],[0,0,0]),false);
 assert.equal(f.phase,'captured');assert.equal(f.reading().strain,0);
 f.advance(1,true);f.advance(NaN);assert.equal(f.elapsed,0);
 f.advance(50);assert.equal(f.elapsed,.25); // no tab-resume jump to death
 for(let i=0;i<10;i++)f.advance(.25);assert.equal(f.phase,'stretch');
 for(let i=0;i<24;i++)f.advance(.25);assert.equal(f.phase,'breakup');
 for(let i=0;i<12;i++)f.advance(.25);assert.equal(f.phase,'lost');assert.equal(f.elapsed,FALL_DURATION);assert.equal(f.reading().blackout,1);
 const safe=f.safePosition();assert.equal(Math.hypot(...safe.map((x,i)=>x-center[i])),SAFE_RETURN_DISTANCE);
 assert.ok(safe.every(Number.isFinite));f.reset();assert.equal(f.active,false);assert.equal(f.reading().strain,0);
 assert.equal(f.enter([0,0,0],[0,0,0],[0,0,0]),true);assert.ok(f.safePosition().every(Number.isFinite));
});
test('arrival and warnings provide an escapable approach before the actual horizon',()=>{
 assert.ok(ARRIVAL_DISTANCE>SAFE_RETURN_DISTANCE&&SAFE_RETURN_DISTANCE>CAUTION_DISTANCE);
 assert.ok(CAUTION_DISTANCE>CRITICAL_DISTANCE&&CRITICAL_DISTANCE>LAST_ESCAPE_DISTANCE&&LAST_ESCAPE_DISTANCE>HORIZON_RADIUS);
});
