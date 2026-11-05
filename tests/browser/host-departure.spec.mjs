import {test,expect} from '@playwright/test';

test('leaving a visited landmark keeps its host system at fixed coordinates through the same fade',async({page})=>{
 await page.route('**/host-departure',r=>r.fulfill({contentType:'text/html',body:'<html></html>'}));await page.goto('/host-departure');
 const result=await page.evaluate(async()=>{
  const T=await import('/node_modules/three/build/three.module.js'),{createUniverse,describeSector}=await import('/src/graphics/universe.ts'),P=await import('/src/planet.ts'),S=await import('/src/singularity.ts');
  const scene=new T.Scene(),world=createUniverse(scene),q=new T.Quaternion(),rows=[];world.configure('Low');
  for(const kind of ['planet','black-hole']){
   const host=describeSector(...(kind==='planet'?P.LANDING_SECTOR:S.SINGULARITY_SECTOR)),start=kind==='planet'?P.PLANET_FADE_START:S.SINGULARITY_FADE_START,end=kind==='planet'?P.PLANET_FADE_END:S.SINGULARITY_FADE_END;world.recordJump(host.key);
   for(const distance of [15000,start-1,(start+end)/2,end-1,end+100]){
    const p=host.starWorld.clone().add(new T.Vector3(0,0,distance));world.update(.1,0,host.region,p);
    const group=scene.children.find(g=>g.name==='regional-celestial-bodies'&&g.children.some(o=>o.userData.kind==='star'&&o.position.clone().add(p).distanceTo(host.starWorld)<.001));
    const companion=group?.children.find(o=>o.userData.kind==='planet'&&o.visible),planet=world.planetAt(p),hole=world.singularityAt(p),expected=1-T.MathUtils.smoothstep(distance,start,end);
    rows.push({kind,distance,expected,alpha:companion?.material.uniforms.alpha.value??0,landmark:kind==='planet'?!!planet:!!hole,visibility:planet?.visibility,count:scene.children.length});
   }
   const other=describeSector(...(kind==='planet'?[2,0,0]:[-2,0,1]));world.update(.1,0,other.region,other.starWorld);const navigation=world.navigation(other.starWorld,q);rows.push({kind,neighbor:other.name,current:navigation.current,region:navigation.region,expectedRegion:other.region});
   const returned=host.starWorld.clone().add(new T.Vector3(0,0,6900));world.update(.1,0,host.region,returned);rows.push({kind,returned:kind==='planet'?!!world.planetAt(returned):!!world.singularityAt(returned)});
  }
  world.dispose();return rows;
 });
 for(const row of result){
  if('distance'in row){expect(row.count).toBe(28);expect(row.alpha).toBeCloseTo(row.expected,5);if(row.expected>0)expect(row.landmark).toBe(true);if(row.kind==='planet'&&row.expected>0)expect(row.visibility).toBeCloseTo(row.expected,5);}
  if('neighbor'in row){expect(row.current).toBe(row.neighbor);expect(row.region).toBe(row.expectedRegion);}
  if('returned'in row)expect(row.returned).toBe(true);
 }
});
