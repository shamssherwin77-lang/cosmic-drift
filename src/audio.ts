export class SpaceAudio {
 ctx: AudioContext | null = null; master?: GainNode; engine?: GainNode; music?: GainNode;
 private jumpGain?:GainNode;private jumpTone?:OscillatorNode;private jumpFilter?:BiquadFilterNode;
 private lastDrive=-1;private lastCharge=-1;
 async start() {
  if (!this.ctx) {
   const c=this.ctx=new AudioContext(); this.master=c.createGain(); this.master.gain.value=0; this.master.connect(c.destination);
   this.engine=c.createGain(); this.music=c.createGain(); this.engine.connect(this.master); this.music.connect(this.master);
   [38,57,76].forEach(f=>{const o=c.createOscillator();o.type='sine';o.frequency.value=f;const g=c.createGain();g.gain.value=.09;o.connect(g).connect(this.engine!);o.start();});
   [130.81,196,261.63,293.66,392].forEach((f,i)=>{const o=c.createOscillator();o.frequency.value=f;const g=c.createGain();g.gain.value=.025;const l=c.createOscillator();l.frequency.value=.035+i*.009;const lg=c.createGain();lg.gain.value=.012;l.connect(lg).connect(g.gain);o.connect(g).connect(this.music!);o.start();l.start();});
   this.jumpGain=c.createGain();this.jumpGain.gain.value=0;this.jumpGain.connect(this.engine);
   this.jumpTone=c.createOscillator();this.jumpTone.frequency.value=42;this.jumpTone.connect(this.jumpGain);this.jumpTone.start();
   const buffer=c.createBuffer(1,c.sampleRate*2,c.sampleRate),data=buffer.getChannelData(0);let seed=1237;
   for(let i=0;i<data.length;i++){seed=seed*16807%2147483647;data[i]=((seed-1)/2147483646-.5)*.35;}
   const noise=c.createBufferSource();noise.buffer=buffer;noise.loop=true;this.jumpFilter=c.createBiquadFilter();this.jumpFilter.type='lowpass';this.jumpFilter.frequency.value=250;
   noise.connect(this.jumpFilter).connect(this.jumpGain);noise.start();
  } await this.ctx.resume();
 }
 set(enabled:boolean,engine:number,music:number,paused:boolean){if(!this.ctx)return;const t=this.ctx.currentTime;this.master?.gain.setTargetAtTime(enabled && !paused ? .65 : 0,t,.4);this.engine?.gain.setTargetAtTime(engine,t,.2);this.music?.gain.setTargetAtTime(music,t,.2);}
 jump(drive:number,charge:number,paused:boolean){
  if(!this.ctx || !this.jumpGain)return;if(paused){drive=charge=0;}
  if(Math.abs(drive-this.lastDrive)<.01 && Math.abs(charge-this.lastCharge)<.01 && !(drive===0&&this.lastDrive!==0))return;
  this.lastDrive=drive;this.lastCharge=charge;const t=this.ctx.currentTime;
  this.jumpGain.gain.cancelScheduledValues(t);this.jumpGain.gain.setTargetAtTime(.018*charge+.055*drive,t,.15);
  this.jumpTone!.frequency.cancelScheduledValues(t);this.jumpTone!.frequency.setTargetAtTime(42+charge*12+drive*145,t,.25);
  this.jumpFilter!.frequency.cancelScheduledValues(t);this.jumpFilter!.frequency.setTargetAtTime(250+drive*1100,t,.25);
 }
 dispose(){void this.ctx?.close();}
}
