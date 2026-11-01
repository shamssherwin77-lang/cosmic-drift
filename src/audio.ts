import { DEFAULT_AUDIO, MUSIC_TRACKS, type AudioPreferences } from './audio-preferences';

type Track = typeof MUSIC_TRACKS[number];
type MusicBus = { gain: GainNode; filter: BiquadFilterNode; voices: Set<OscillatorNode>; step: number; next: number; track: Track; retireAt?: number };
const frequency = (midi: number) => 440 * 2 ** ((midi - 69) / 12);
/** Three independent channels; original musical arrangements are CC0 (docs/music-license.md). */
export class SpaceAudio {
  ctx: AudioContext | null = null;
  master?: GainNode; engine?: GainNode; space?: GainNode; music?: GainNode;
  private jumpGain?: GainNode; private jumpTone?: OscillatorNode; private jumpFilter?: BiquadFilterNode;
  private lastDrive = -1; private lastCharge = -1;
  private settings = { ...DEFAULT_AUDIO };
  private enabled = false; private paused = false; private musicActive = false;
  private bus?: MusicBus; private retired: MusicBus[] = [];
  private timer?: ReturnType<typeof setInterval>;
  private visibility = () => this.apply();

  async start() {
    if (!this.ctx) {
      const c = this.ctx = new AudioContext();
      this.master = c.createGain(); this.master.gain.value = 0; this.master.connect(c.destination);
      this.engine = c.createGain(); this.space = c.createGain(); this.music = c.createGain();
      for (const channel of [this.engine, this.space, this.music]) { channel.gain.value = 0; channel.connect(this.master); }
      for (const f of [38, 57, 76]) {
        const oscillator = c.createOscillator(), gain = c.createGain();
        oscillator.type = 'sine'; oscillator.frequency.value = f; gain.gain.value = .09;
        oscillator.connect(gain).connect(this.engine); oscillator.start();
      }
      const buffer = c.createBuffer(2, c.sampleRate * 4, c.sampleRate);
      let seed = 1237;
      for (let channel = 0; channel < 2; channel++) {
        const data = buffer.getChannelData(channel); let brown = 0;
        for (let i = 0; i < data.length; i++) {
          seed = seed * 16807 % 2147483647;
          brown = (brown + ((seed - 1) / 2147483646 - .5) * .035) / 1.018;
          // A short envelope removes the seam in the looping atmosphere.
          const edge = Math.min(1, i / (c.sampleRate * .08), (data.length - 1 - i) / (c.sampleRate * .08));
          data[i] = brown * edge;
        }
      }
      const noise = c.createBufferSource(), air = c.createBiquadFilter();
      noise.buffer = buffer; noise.loop = true; air.type = 'lowpass'; air.frequency.value = 650;
      noise.connect(air).connect(this.space); noise.start();
      for (const f of [82.41, 123.47]) {
        const tone = c.createOscillator(), level = c.createGain(); tone.frequency.value = f; level.gain.value = .012;
        tone.connect(level).connect(this.space); tone.start();
      }
      this.jumpGain = c.createGain(); this.jumpGain.gain.value = 0; this.jumpGain.connect(this.engine);
      this.jumpTone = c.createOscillator(); this.jumpTone.frequency.value = 42; this.jumpTone.connect(this.jumpGain); this.jumpTone.start();
      const rush = c.createBufferSource(); rush.buffer = buffer; rush.loop = true;
      this.jumpFilter = c.createBiquadFilter(); this.jumpFilter.type = 'lowpass'; this.jumpFilter.frequency.value = 250;
      rush.connect(this.jumpFilter).connect(this.jumpGain); rush.start();
      document.addEventListener('visibilitychange', this.visibility);
      this.timer = setInterval(() => this.schedule(), 125);
      this.apply();
    }
    await this.ctx.resume();
    this.apply();
  }

  set(enabled: boolean, settings: AudioPreferences, paused: boolean) {
    this.enabled = enabled; this.settings = { ...settings }; this.paused = paused; this.apply();
  }
  private apply() {
    const c = this.ctx; if (!c || c.state === 'closed') return;
    const now = c.currentTime, active = this.enabled && !this.paused && !document.hidden;
    this.master!.gain.setTargetAtTime(active ? .65 : 0, now, .18);
    for (const [channel, volume, enabled] of [
      [this.engine!, this.settings.engine, this.settings.engineEnabled],
      [this.space!, this.settings.space, this.settings.spaceEnabled],
      [this.music!, this.settings.music, this.settings.musicEnabled],
    ] as const) channel.gain.setTargetAtTime(enabled ? volume : 0, now, .16);
    const track = MUSIC_TRACKS.find(t => t.id === this.settings.track) ?? MUSIC_TRACKS[0];
    if (!this.bus || this.bus.track.id !== track.id) this.changeTrack(track);
    const musicActive = active && this.settings.musicEnabled && this.settings.music > 0;
    if (musicActive && !this.musicActive && this.bus) {
      // Re-enter on a gentle chord rather than waiting through the previous decay.
      this.bus.step = Math.floor(this.bus.step / 8) * 8; this.bus.next = now + .04;
    }
    this.musicActive = musicActive;
    this.schedule();
  }
  private changeTrack(track: Track) {
    const c = this.ctx!, now = c.currentTime;
    // Retain at most one fading bus even during rapid track changes.
    for (const bus of this.retired) this.release(bus);
    this.retired = [];
    if (this.bus) {
      const previous = this.bus;
      previous.gain.gain.cancelScheduledValues(now);
      previous.gain.gain.setTargetAtTime(0, now, .22);
      previous.retireAt = now + 1.3; this.retired.push(previous);
    }
    const gain = c.createGain(), filter = c.createBiquadFilter();
    gain.gain.value = 0; gain.gain.setTargetAtTime(1, now, .28);
    filter.type = 'lowpass'; filter.frequency.value = track.voice === 'pad' ? 1100 : track.voice === 'warm' ? 850 : 3800;
    filter.Q.value = .35; filter.connect(gain).connect(this.music!);
    this.bus = { gain, filter, track, voices: new Set(), step: 0, next: now + .04 };
  }
  private note(bus: MusicBus, midi: number, at: number, duration: number, level: number, chord = false) {
    const c = this.ctx!, envelope = c.createGain(), voice = bus.track.voice;
    const attack = voice === 'pad' ? .9 : voice === 'warm' ? .38 : .025;
    envelope.gain.setValueAtTime(.00001, at);
    envelope.gain.exponentialRampToValueAtTime(level, at + attack);
    envelope.gain.exponentialRampToValueAtTime(.00001, at + duration);
    envelope.connect(bus.filter);
    const partials = voice === 'chime' && !chord ? [1, 2.006] : voice === 'piano' && !chord ? [1, 2] : [1];
    let remaining = partials.length;
    partials.forEach((ratio, index) => {
      const oscillator = c.createOscillator(), weight = c.createGain();
      oscillator.type = voice === 'pad' || voice === 'warm' ? 'triangle' : 'sine';
      oscillator.frequency.value = frequency(midi) * ratio; weight.gain.value = index ? .17 : 1;
      oscillator.connect(weight).connect(envelope); bus.voices.add(oscillator);
      oscillator.onended = () => { bus.voices.delete(oscillator); oscillator.disconnect(); weight.disconnect(); if (!--remaining) envelope.disconnect(); };
      oscillator.start(at); oscillator.stop(at + duration + .02);
    });
  }
  private schedule() {
    const c = this.ctx; if (!c || c.state === 'closed') return;
    const now = c.currentTime;
    this.retired = this.retired.filter(bus => { if (now >= bus.retireAt!) { this.release(bus); return false; } return true; });
    if (!this.bus || !this.enabled || this.paused || document.hidden || !this.settings.musicEnabled || this.settings.music <= 0) return;
    const bus = this.bus, beat = 60 / bus.track.tempo;
    if (bus.next < now) bus.next = now + .04; // Resume without queued notes or catch-up bursts.
    while (bus.next < now + .3) {
      const step = bus.step, root = bus.track.root, progression = [0, 5, 9, 7];
      const degree = Math.floor(step / 8) % progression.length;
      const chordRoot = root + progression[degree];
      if (step % 8 === 0) {
        for (const interval of [0, 7, degree === 2 ? 15 : 16]) this.note(bus, chordRoot + interval, bus.next, beat * 7.7, bus.track.voice === 'pad' ? .024 : .014, true);
      }
      const melody = bus.track.melody[step % bus.track.melody.length];
      if (melody >= 0) this.note(bus, root + melody, bus.next, bus.track.voice === 'chime' ? 5 : bus.track.voice === 'pad' ? 5.5 : 3.7, .035);
      bus.step++; bus.next += beat;
    }
  }
  private release(bus: MusicBus) {
    for (const voice of bus.voices) { try { voice.stop(); } catch { /* Already ended. */ } }
    bus.filter.disconnect(); bus.gain.disconnect();
  }
  jump(drive: number, charge: number, paused: boolean) {
    if (!this.ctx || this.ctx.state === 'closed' || !this.jumpGain) return;
    if (paused) drive = charge = 0;
    if (Math.abs(drive - this.lastDrive) < .01 && Math.abs(charge - this.lastCharge) < .01 && !(drive === 0 && this.lastDrive !== 0)) return;
    this.lastDrive = drive; this.lastCharge = charge; const t = this.ctx.currentTime;
    this.jumpGain.gain.cancelScheduledValues(t); this.jumpGain.gain.setTargetAtTime(.018 * charge + .055 * drive, t, .15);
    this.jumpTone!.frequency.cancelScheduledValues(t); this.jumpTone!.frequency.setTargetAtTime(42 + charge * 12 + drive * 145, t, .25);
    this.jumpFilter!.frequency.cancelScheduledValues(t); this.jumpFilter!.frequency.setTargetAtTime(250 + drive * 1100, t, .25);
  }
  dispose() {
    if (this.timer) clearInterval(this.timer);
    document.removeEventListener('visibilitychange', this.visibility);
    if (this.bus) this.release(this.bus);
    for (const bus of this.retired) this.release(bus);
    this.bus = undefined; this.retired = [];
    void this.ctx?.close().catch(() => {}); this.ctx = null;
  }
}
