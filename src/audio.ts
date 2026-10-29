export class SpaceAudio {
 ctx: AudioContext | null = null; master?: GainNode; engine?: GainNode; music?: GainNode;
 async start() {
  if (!this.ctx) {
   const c=this.ctx=new AudioContext(); this.master=c.createGain(); this.master.gain.value=0; this.master.connect(c.destination);
   this.engine=c.createGain(); this.music=c.createGain(); this.engine.connect(this.master); this.music.connect(this.master);
   [38,57,76].forEach(f=>{const o=c.createOscillator();o.type='sine';o.frequency.value=f;const g=c.createGain();g.gain.value=.09;o.connect(g).connect(this.engine!);o.start();});
   [130.81,196,261.63,293.66,392].forEach((f,i)=>{const o=c.createOscillator();o.frequency.value=f;const g=c.createGain();g.gain.value=.025;const l=c.createOscillator();l.frequency.value=.035+i*.009;const lg=c.createGain();lg.gain.value=.012;l.connect(lg).connect(g.gain);o.connect(g).connect(this.music!);o.start();l.start();});
  } await this.ctx.resume();
 }
 set(enabled:boolean,engine:number,music:number,paused:boolean){if(!this.ctx)return;const t=this.ctx.currentTime;this.master?.gain.setTargetAtTime(enabled && !paused ? .65 : 0,t,.4);this.engine?.gain.setTargetAtTime(engine,t,.2);this.music?.gain.setTargetAtTime(music,t,.2);}
 dispose(){void this.ctx?.close();}
}
