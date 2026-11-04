import { test, expect } from '@playwright/test';

const signal = page => page.evaluate(async () => {
  const { analyser } = window.audioHarness, data = new Float32Array(analyser.fftSize), spectrum = new Float32Array(analyser.frequencyBinCount);
  let rms = 0;
  for (let sample=0;sample<3;sample++) {
    await new Promise(resolve=>setTimeout(resolve,40));analyser.getFloatTimeDomainData(data);
    rms = Math.max(rms,Math.sqrt(data.reduce((s,x)=>s+x*x,0)/data.length));
  }
  analyser.getFloatFrequencyData(spectrum);
  let energy=0,weighted=0;
  spectrum.forEach((db,i)=>{const magnitude=10**(db/20);energy+=magnitude;weighted+=magnitude*i*window.audioHarness.audio.ctx.sampleRate/analyser.fftSize;});
  return {rms,centroid:weighted/Math.max(energy,1e-12)};
});
const configure = (page, patch, enabled=true, paused=false) => page.evaluate(({patch,enabled,paused})=>{
  const h=window.audioHarness;Object.assign(h.settings,patch);h.audio.set(enabled,h.settings,paused);
},{patch,enabled,paused});

test('real audio: engine, space and four licensed recordings produce independent signals and mute cleanly',async({page})=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.route('**/audio-harness',r=>r.fulfill({contentType:'text/html',body:'<html><body><button>Start audio</button></body></html>'}));
  await page.goto('/audio-harness');
  await page.evaluate(async()=>{
    const {SpaceAudio}=await import('/src/audio.ts'),{DEFAULT_AUDIO}=await import('/src/audio-preferences.ts');
    const audio=new SpaceAudio(),settings={...DEFAULT_AUDIO,engine:1,engineEnabled:true,spaceEnabled:false,musicEnabled:false};
    window.audioHarness={audio,settings};
    document.querySelector('button').onclick=async()=>{
      await audio.start();audio.set(true,settings,false);
      const analyser=audio.ctx.createAnalyser();analyser.fftSize=4096;analyser.smoothingTimeConstant=0;audio.master.connect(analyser);
      window.audioHarness.analyser=analyser;window.audioHarness.ready=true;
    };
  });
  await page.getByRole('button',{name:'Start audio'}).click();
  await expect.poll(()=>page.evaluate(()=>window.audioHarness.ready)).toBe(true);
  await page.waitForTimeout(1100);const engine=await signal(page);expect(engine.rms).toBeGreaterThan(.01);
  await configure(page,{engineEnabled:false,spaceEnabled:true,space:1});await page.waitForTimeout(1400);
  const space=await signal(page);expect(space.rms).toBeGreaterThan(.001);
  const tracks=[];
  for(const track of ['meditation','floating','jellyfish','soaring']){
    await configure(page,{spaceEnabled:false,musicEnabled:true,music:1,track});
    await expect.poll(()=>page.evaluate(()=>window.audioHarness.audio.musicState.state)).toBe('playing');
    const recording=await page.evaluate(()=>{const el=window.audioHarness.audio.currentRecording;el.currentTime=20;return{src:el.currentSrc,duration:el.duration};});
    expect(recording.src).toContain('.mp3');expect(recording.duration).toBeGreaterThan(180);
    await expect.poll(()=>page.evaluate(()=>{const el=window.audioHarness.audio.currentRecording;return el.currentTime>=20&&el.readyState>=3;})).toBe(true);
    await page.waitForTimeout(1600);
    const music=await signal(page);expect(music.rms).toBeGreaterThan(.001);expect(music.rms).toBeLessThan(.4);tracks.push(music);
  }
  expect(tracks).toHaveLength(4);
  await configure(page,{},true,true);await page.waitForTimeout(1600);expect((await signal(page)).rms).toBeLessThan(.001);
  expect(await page.evaluate(()=>window.audioHarness.audio.currentRecording.paused)).toBe(true);
  await configure(page,{},true,false);await page.waitForTimeout(1200);expect((await signal(page)).rms).toBeGreaterThan(.001);
  await configure(page,{},false);await page.waitForTimeout(1600);expect((await signal(page)).rms).toBeLessThan(.001);
  // Rapid selection and disposal must cancel the old stream without leaking players.
  for(const track of ['meditation','floating','jellyfish','soaring'])await configure(page,{track});
  await page.evaluate(()=>window.audioHarness.audio.dispose());expect(errors).toEqual([]);
});

test.describe('mobile audio selection',()=>{
  test.use({viewport:{width:412,height:915},hasTouch:true,isMobile:true,deviceScaleFactor:1});
  test('mix layers, choose music, preserve preferences and restore muted after reload',async({page})=>{
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.goto('/');await page.getByRole('button',{name:'Start journey',exact:true}).click();await page.getByRole('button',{name:'Audio settings',exact:true}).tap();
    await expect(page.getByRole('radio')).toHaveCount(4);
    await page.getByRole('checkbox',{name:'Engine sound',exact:false}).uncheck();
    await expect(page.getByRole('slider',{name:'Engine volume'})).toBeDisabled();
    await page.getByRole('slider',{name:'Space volume'}).fill('0.61');
    await page.getByRole('radio',{name:'Jellyfish in Space',exact:true}).check();
    await expect(page.getByRole('button',{name:'Mute all audio',exact:true})).toBeVisible();
    await page.getByRole('checkbox',{name:'Music',exact:false}).uncheck();
    await expect(page.getByRole('slider',{name:'Music volume'})).toBeDisabled();
    await page.getByRole('radio',{name:'Soaring',exact:true}).check();
    await expect(page.getByRole('slider',{name:'Music volume'})).toBeEnabled();
    await page.screenshot({path:'test-results/audio-portrait.png'});
    await page.reload();await page.getByRole('button',{name:'Start journey',exact:true}).click();await page.getByRole('button',{name:'Audio settings',exact:true}).tap();
    await expect(page.getByRole('radio',{name:'Soaring',exact:true})).toBeChecked();
    await expect(page.getByRole('slider',{name:'Space volume'})).toHaveValue('0.61');
    await expect(page.getByRole('slider',{name:'Engine volume'})).toBeDisabled();
    await expect(page.getByRole('button',{name:'Mute all audio',exact:true})).toBeVisible();
    await page.setViewportSize({width:915,height:412});
    await page.getByRole('radio',{name:'Meditation Impromptu 01',exact:true}).check();
    const panel=page.locator('.panel');expect(await panel.evaluate(el=>el.scrollHeight>el.clientHeight)).toBe(true);
    await page.getByRole('button',{name:'Close settings',exact:true}).tap();

    await expect(page.getByRole('group',{name:'Touch flight joystick'})).toBeVisible();
    expect(errors).toEqual([]);
  });
});

test('recordings are lazy, credit the composer and show a retryable error instead of synthetic fallback',async({page})=>{
  const requests=[];let fail=true;
  page.on('request',request=>{if(request.url().includes('/audio/')&&request.url().includes('.mp3'))requests.push(request.url());});
  await page.route('**/audio/*.mp3',route=>fail&&route.request().url().includes('floating-cities')?route.abort():route.continue());
  await page.goto('/');expect(requests).toEqual([]);await page.getByRole('button',{name:'Start journey',exact:true}).click();await page.getByRole('button',{name:'Audio settings',exact:true}).click();
  await page.getByRole('radio',{name:'Floating Cities',exact:true}).check();
  await expect(page.locator('.audio-note')).toHaveAttribute('data-playback-state','error');
  await expect(page.locator('.audio-note')).toContainText(/could not|allow playback/);
  expect(requests.some(url=>url.includes('floating-cities.mp3'))).toBe(true);
  fail=false;
  await page.getByRole('radio',{name:'Floating Cities',exact:true}).click();
  await expect(page.locator('.audio-note')).toHaveAttribute('data-playback-state','playing');
  await page.getByText('Music credits & licenses',{exact:true}).click();
  await expect(page.locator('.music-credits')).toContainText('Kevin MacLeod');
  await expect(page.locator('.music-credits a').filter({hasText:'CC BY 3.0'})).toHaveAttribute('href','https://creativecommons.org/licenses/by/3.0/');
});

test('black-hole briefing silences normal layers, confirmation resumes the recording and proximity replaces music',async({page})=>{
 await page.route('**/hazard-audio-harness',r=>r.fulfill({contentType:'text/html',body:'<html><button>Start</button></html>'}));await page.goto('/hazard-audio-harness');
 await page.evaluate(async()=>{const {SpaceAudio}=await import('/src/audio.ts'),{DEFAULT_AUDIO}=await import('/src/audio-preferences.ts');const audio=new SpaceAudio();window.hazardAudio=audio;document.querySelector('button').onclick=async()=>{await audio.start('meditation');audio.set(true,{...DEFAULT_AUDIO},false);};});
 await page.getByRole('button',{name:'Start',exact:true}).click();await expect.poll(()=>page.evaluate(()=>window.hazardAudio.musicState.state)).toBe('playing');
 await page.evaluate(()=>window.hazardAudio.hazard(true,'clear',0));await page.waitForTimeout(1800);
 const silent=await page.evaluate(()=>{const a=window.hazardAudio;return{engine:a.engine.gain.value,space:a.space.gain.value,music:a.music.gain.value,paused:a.currentRecording.paused,time:a.currentRecording.currentTime};});
 expect(silent.engine).toBeLessThan(.001);expect(silent.space).toBeLessThan(.001);expect(silent.music).toBeLessThan(.001);expect(silent.paused).toBe(true);
 await page.evaluate(()=>window.hazardAudio.hazard(false,'clear',0));await expect.poll(()=>page.evaluate(()=>window.hazardAudio.musicState.state)).toBe('playing');
 expect(await page.evaluate(()=>window.hazardAudio.currentRecording.currentTime)).toBeGreaterThanOrEqual(silent.time);
 await page.evaluate(()=>window.hazardAudio.hazard(false,'caution',.4,true));await page.waitForTimeout(1800);const proximity=await page.evaluate(()=>{const a=window.hazardAudio;return{music:a.music.gain.value,anomaly:a.anomalyGain.gain.value,paused:a.currentRecording.paused};});
 expect(proximity.music).toBeLessThan(.001);expect(proximity.anomaly).toBeGreaterThan(.2);expect(proximity.paused).toBe(true);
 await page.evaluate(()=>window.hazardAudio.hazard(false,'clear',0));await expect.poll(()=>page.evaluate(()=>window.hazardAudio.musicState.state)).toBe('playing');await page.evaluate(()=>window.hazardAudio.dispose());
});

test('planet ambience changes softly and landed engines idle without changing mixer preferences',async({page})=>{
 await page.route('**/surface-audio-harness',r=>r.fulfill({contentType:'text/html',body:'<html><button>Start</button></html>'}));await page.goto('/surface-audio-harness');await page.evaluate(async()=>{const {SpaceAudio}=await import('/src/audio.ts'),{DEFAULT_AUDIO}=await import('/src/audio-preferences.ts');const audio=new SpaceAudio();window.surfaceAudio=audio;document.querySelector('button').onclick=async()=>{await audio.start('meditation');audio.set(true,{...DEFAULT_AUDIO},false);audio.surface(1,false);};});
 await page.getByRole('button',{name:'Start',exact:true}).click();await expect.poll(()=>page.evaluate(()=>window.surfaceAudio.musicState.state)).toBe('playing');await page.waitForTimeout(1200);const before=await page.evaluate(()=>({engine:window.surfaceAudio.engine.gain.value,filter:window.surfaceAudio.airFilter.frequency.value}));expect(before.filter).toBeGreaterThan(1000);await page.evaluate(()=>window.surfaceAudio.surface(1,true));await page.waitForTimeout(1200);expect(await page.evaluate(()=>window.surfaceAudio.engine.gain.value)).toBeLessThan(before.engine*.3);expect(await page.evaluate(()=>window.surfaceAudio.musicState.state)).toBe('playing');await page.evaluate(()=>window.surfaceAudio.dispose());
});
