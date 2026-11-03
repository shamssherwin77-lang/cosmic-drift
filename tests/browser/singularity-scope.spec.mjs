import {test,expect} from '@playwright/test';

test('one fixed host exists across nebula palettes and mirrored procedural seeds',async({page})=>{
 await page.route('**/scope-harness',r=>r.fulfill({contentType:'text/html',body:'<html></html>'}));await page.goto('/scope-harness');
 const result=await page.evaluate(async()=>{
  const T=await import('/node_modules/three/build/three.module.js'),{createUniverse,describeSector}=await import('/src/graphics/universe.ts'),{SINGULARITY_SECTOR,SINGULARITY_KEY}=await import('/src/singularity.ts');
  const sectors=[];for(let x=-4;x<=4;x++)for(let y=-4;y<=4;y++)for(let z=-4;z<=4;z++)sectors.push(describeSector(x,y,z));
  const world=createUniverse(new T.Scene()),host=describeSector(...SINGULARITY_SECTOR),mirror=describeSector(1,0,-1),observer=host.starWorld.clone().add(new T.Vector3(0,0,6900));world.update(.1,0,4,observer);
  const inside=world.singularityAt(observer),other=[];
  for(const sector of sectors.filter(s=>s.key!==SINGULARITY_KEY&&s.starWorld.distanceTo(host.starWorld)<30000)){
   world.update(.1,0,sector.region,sector.starWorld);const reading=world.singularityAt(sector.starWorld),nav=world.navigation(sector.starWorld,new T.Quaternion());other.push({key:sector.key,region:nav.region,reading:reading?.id??null});
  }
  world.update(.1,0,4,observer);const returned=world.singularityAt(observer);world.dispose();return{hosts:sectors.filter(s=>s.blackHole).map(s=>s.key),deepSilent:sectors.filter(s=>s.region===4).length,inside:inside?.id,returned:returned?.id,other,mirror:{seed:mirror.seed,hostSeed:host.seed,blackHole:mirror.blackHole}};
 });
 expect(result.hosts).toEqual(['-1/0/1']);expect(result.deepSilent).toBeGreaterThan(10);expect(result.inside).toBe('-1/0/1');expect(result.returned).toBe(result.inside);expect(result.mirror.seed).toBe(result.mirror.hostSeed);expect(result.mirror.blackHole).toBe(false);expect(result.other.length).toBeGreaterThan(5);result.other.forEach(s=>expect(s.reading,s.key).toBeNull());
});

test('safe Jump destinations cannot land inside the host domain without a warning',async({page})=>{
 await page.route('**/landing-harness',r=>r.fulfill({contentType:'text/html',body:'<html></html>'}));await page.goto('/landing-harness');
 const result=await page.evaluate(async()=>{
  const T=await import('/node_modules/three/build/three.module.js'),{createUniverse,describeSector}=await import('/src/graphics/universe.ts'),{SINGULARITY_SECTOR}=await import('/src/singularity.ts');const world=createUniverse(new T.Scene()),host=describeSector(...SINGULARITY_SECTOR),landings=[];
  for(const offset of [[0,0,6900],[0,0,-6900],[6900,0,0],[-6900,0,0],[0,6900,0]])for(let a=0;a<12;a++){
   const origin=host.starWorld.clone().add(new T.Vector3(...offset)),q=new T.Quaternion().setFromEuler(new T.Euler(0,a*Math.PI/6,0));const target=world.jumpTarget(origin,q),encounter=world.singularityAt(target.position);landings.push({warn:target.blackHole,key:target.key,visible:encounter?.id??null});
  }
  world.dispose();return landings;
 });
 expect(result.some(r=>!r.warn)).toBe(true);result.filter(r=>!r.warn).forEach(r=>expect(r.visible,r.key).toBeNull());
});

test('normal forward travel offers the unique host after two completed jumps, with stable previews and no repeats',async({page})=>{
 await page.route('**/route-harness',r=>r.fulfill({contentType:'text/html',body:'<html></html>'}));await page.goto('/route-harness');
 const result=await page.evaluate(async()=>{
  const T=await import('/node_modules/three/build/three.module.js'),{createUniverse}=await import('/src/graphics/universe.ts');const world=createUniverse(new T.Scene()),p=new T.Vector3(),q=new T.Quaternion(),e=new T.Euler(0,0,0,'YXZ'),targets=[];world.update(.1,0,0,p);
  for(let i=0;i<3;i++){const target=world.jumpTarget(p,q);for(let n=0;n<5;n++)if(world.jumpTarget(p,q).key!==target.key)throw Error('Planning consumed journey progress');targets.push({key:target.key,hazard:target.blackHole});world.recordJump(target.key);p.copy(target.position);q.setFromEuler(e.set(Math.asin(target.direction.y),Math.atan2(-target.direction.x,-target.direction.z),0,'YXZ'));world.update(.1,i,target.region,p);}
  const after=world.jumpTarget(p,q);world.dispose();return{targets,after:{key:after.key,hazard:after.blackHole}};
 });
 expect(result.targets[2]).toEqual({key:'-1/0/1',hazard:true});expect(result.targets.filter(t=>t.hazard)).toHaveLength(1);expect(result.after.hazard).toBe(false);
});
