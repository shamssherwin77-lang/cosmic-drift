import {skipIntro} from './skip-intro.mjs';
import {test,expect} from '@playwright/test';
test.use({viewport:{width:640,height:360}});
async function startCampaign(page){
 const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
 await page.route('**/src/scene.ts*',async r=>{const response=await r.fetch();await r.fulfill({response,body:(await response.text()).replace(/new CombatSimulation\(\)/,'(()=>{const sim=new CombatSimulation();window.campaignSim=sim;return sim;})()')});});
 await page.route('**/src/main.tsx*',async r=>{const response=await r.fetch();await r.fulfill({response,body:(await response.text()).replace(/new SpaceAudio\(\)/,'(window.campaignAudio??=new SpaceAudio())').replace(/new FlightController\(\)/,'(window.campaignPilot??=new FlightController())')});});
 await page.goto('/');await skipIntro(page);await page.getByRole('button',{name:'Challenge flight',exact:false}).click();await page.getByRole('button',{name:'Settings',exact:true}).click();await page.getByRole('combobox',{name:'Graphics quality'}).selectOption('Low');await page.getByRole('checkbox',{name:'Performance mode',exact:true}).check();await page.getByRole('button',{name:'Close settings',exact:true}).click();return errors;
}
async function finishWave(page){
 for(let pass=0;pass<8;pass++){
  if(await page.evaluate(()=>window.campaignSim.phase!=='battle'))return;
  await expect.poll(()=>page.evaluate(()=>window.campaignSim.enemies.filter(e=>e.active).length),{timeout:10000}).toBeGreaterThan(0);
  await page.evaluate(()=>{const sim=window.campaignSim;for(const e of sim.enemies){if(!e.active)continue;const s=sim.shots.find(s=>!s.active);s.active=true;s.friendly=true;s.weapon=2;s.damage=10000;s.life=1;s.position.copy(e.position);s.previous.copy(e.position);s.velocity.set(0,0,1);}});
  await page.waitForTimeout(300);
 }if(await page.evaluate(()=>window.campaignSim.phase!=='battle'))return;throw Error('Wave did not finish');
}
test('three live waves end in Titan, post-war flight and an explicit peaceful-flight choice',async({page})=>{
 test.setTimeout(150000);const errors=await startCampaign(page),hud=page.getByLabel('Combat status'),seed=await page.locator('main').getAttribute('data-world-seed'),tracks=[];
 for(let wave=1;wave<=3;wave++){
  await expect(hud).toHaveAttribute('data-phase','battle',{timeout:40000});await expect(hud).toHaveAttribute('data-remaining',String(wave+3));
  await page.evaluate(()=>{for(const e of window.campaignSim.enemies)e.cooldown=999;});
  await expect.poll(()=>page.evaluate(()=>window.campaignAudio.currentRecording?.readyState),{timeout:15000}).toBeGreaterThanOrEqual(3);tracks.push(await page.evaluate(()=>window.campaignAudio.currentRecording.currentSrc));
  await finishWave(page);
  if(wave<3){await expect(hud).toHaveAttribute('data-phase','intermission');await expect(hud).toHaveAttribute('data-remaining','0');await expect.poll(()=>page.evaluate(()=>window.campaignAudio.currentRecording.paused),{timeout:4000}).toBe(true);await page.evaluate(()=>{window.campaignSim.incoming=.05;});}
 }
 expect(new Set(tracks).size).toBe(3);await expect(hud).toHaveAttribute('data-phase','victory');await expect(hud).toHaveAttribute('data-kills','15');await expect.poll(()=>page.evaluate(()=>window.campaignAudio.currentRecording.currentSrc)).toContain('titan.mp3');
 await page.evaluate(()=>{window.campaignSim.postwarTime=29.9;});const choice=page.getByRole('dialog',{name:'Post-war flight'});await expect(choice).toBeVisible();await page.screenshot({path:'test-results/campaign-victory-choice.png'});await page.getByRole('button',{name:'Continue post-war flight'}).click();await expect(choice).toHaveCount(0);const position=await page.evaluate(()=>window.campaignPilot.position.toArray());await page.keyboard.down('w');await expect.poll(async()=>{await page.keyboard.down("w");return page.evaluate(()=>window.campaignPilot.position.toArray());},{timeout:10000}).not.toEqual(position);await page.keyboard.up('w');expect(await page.locator('main').getAttribute('data-world-seed')).toBe(seed);expect(await page.evaluate(()=>window.campaignSim.enemies.some(e=>e.active))).toBe(false);await page.getByRole('button',{name:'Settings',exact:true}).click();await page.getByRole('button',{name:'Return to peaceful flight',exact:true}).click();await expect(hud).toHaveCount(0);await expect.poll(()=>page.evaluate(()=>window.campaignAudio.currentRecording.currentSrc)).toContain('meditation-impromptu-01.mp3');expect(errors).toEqual([]);
});
test('right click cycles one step and preserves a held left trigger',async({page})=>{
 const errors=await startCampaign(page),hud=page.getByLabel('Combat status');await page.mouse.move(320,170);for(const weapon of [2,3,4,1]){await page.mouse.click(320,170,{button:'right'});await expect(hud).toHaveAttribute('data-weapon',String(weapon));}
 await page.mouse.down({button:'left'});await expect.poll(()=>page.evaluate(()=>window.campaignSim.heat)).toBeGreaterThan(0);await page.mouse.click(320,170,{button:'right'});await expect(hud).toHaveAttribute('data-weapon','2');const heat=await page.evaluate(()=>window.campaignSim.heat);await expect.poll(()=>page.evaluate(()=>window.campaignSim.heat),{timeout:10000}).not.toBe(heat);await page.mouse.up({button:'left'});expect(errors).toEqual([]);
});

test('CIWS rounds have separated orange traces and explosions are brief soft fire without fragments',async({page})=>{
 const errors=[];page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});await page.setViewportSize({width:1200,height:600});await page.route('**/campaign-fx',r=>r.fulfill({contentType:'text/html',body:'<html><body style="margin:0;background:black"></body></html>'}));await page.goto('/campaign-fx');
 const result=await page.evaluate(async()=>{const T=await import('/node_modules/three/build/three.module.js'),{createCombatGraphics}=await import('/src/combat/graphics.ts'),{CombatSimulation}=await import('/src/combat/simulation.ts');const scene=new T.Scene(),renderer=new T.WebGLRenderer({antialias:true,logarithmicDepthBuffer:true,preserveDrawingBuffer:true});renderer.setSize(1200,600);scene.background=new T.Color('#04090e');document.body.append(renderer.domElement);const camera=new T.PerspectiveCamera(55,2,.1,120000);camera.position.set(1300,450,2200);camera.lookAt(1300,0,0);const sim=new CombatSimulation(),p={position:new T.Vector3(),rotation:new T.Quaternion().setFromAxisAngle(new T.Vector3(0,1,0),-Math.PI/2),velocity:new T.Vector3(),weapon:2,firing:true};sim.step(.016,p,true,false);sim.incoming=999;sim.step(.23,p,true,false);for(let i=0;i<3;i++){const b=sim.bursts[i];b.active=true;b.kill=true;b.position.set(450+i*550,250,0);b.age=[.03,.16,.36][i];b.size=70;}const graphics=createCombatGraphics(scene);graphics.update(sim,new T.Vector3(),true,camera);renderer.render(scene,camera);const beams=scene.getObjectByName('combat-energy-trails'),fx=scene.getObjectByName('combat-impact-pool'),matrix=new T.Matrix4(),scale=new T.Vector3(),rotation=new T.Quaternion(),pos=new T.Vector3();beams.getMatrixAt(0,matrix);matrix.decompose(pos,rotation,scale);const c=new T.Color();beams.getColorAt(0,c);window.campaignFX={renderer,scene,camera,graphics};return{traces:beams.count,length:scale.y,color:c.getHexString(),wireframe:!!fx.material.wireframe,error:renderer.getContext().getError()};});
 expect(result.traces).toBeGreaterThanOrEqual(8);expect(result.length).toBeLessThanOrEqual(91);expect(result.wireframe).toBe(false);expect(result.color).toBe('ff8b2b');expect(result.error).toBe(0);await page.screenshot({path:'test-results/campaign-fire-tracers.png'});await page.evaluate(()=>{const h=window.campaignFX;h.graphics.dispose();h.renderer.dispose();});expect(errors).toEqual([]);
});
