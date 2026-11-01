import { DEFAULT_AUDIO, MUSIC_TRACKS, type AudioPreferences, type MusicTrack } from './audio-preferences';

type Track = typeof MUSIC_TRACKS[number];
type RecordingSlot = { element: HTMLAudioElement; source: MediaElementAudioSourceNode; gain: GainNode; track: Track | null; request: number; pending: boolean };
export type MusicPlayback = { state: 'idle' | 'loading' | 'playing' | 'paused' | 'error'; track: MusicTrack | null; message?: string };
/** Two streaming players crossfade licensed recordings; engine and atmosphere remain independent. */
export class SpaceAudio {
  ctx: AudioContext | null = null;
  master?: GainNode; engine?: GainNode; space?: GainNode; music?: GainNode;
  onMusicState?: (state: MusicPlayback) => void;
  musicState: MusicPlayback = { state: 'idle', track: null };
  private jumpGain?: GainNode; private jumpTone?: OscillatorNode; private jumpFilter?: BiquadFilterNode;
  private lastDrive = -1; private lastCharge = -1;
  private settings = { ...DEFAULT_AUDIO };
  private enabled = false; private paused = false;
  private slots: RecordingSlot[] = []; private current?: RecordingSlot; private retiring?: RecordingSlot;
  private fadeTimer?: ReturnType<typeof setTimeout>; private pauseTimer?: ReturnType<typeof setTimeout>;
  private visibility = () => this.apply();
  get currentRecording() { return this.current?.element ?? null; }
  private get musicActive() { return this.enabled && !this.paused && !document.hidden && this.settings.musicEnabled && this.settings.music > 0; }
  private report(state: MusicPlayback['state'], message?: string) {
    const track = this.current?.track?.id ?? null;
    if (this.musicState.state === state && this.musicState.track === track && this.musicState.message === message) return;
    this.musicState = { state, track, message }; this.onMusicState?.(this.musicState);
  }

  async start(track?: MusicTrack) {
    if (track) this.settings = { ...this.settings, track, musicEnabled: true };
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
      this.slots = Array.from({ length: 2 }, () => this.makeSlot(c));
      document.addEventListener('visibilitychange', this.visibility);
    }
    this.apply();
    // Call play before awaiting anything: mobile browsers require a real user gesture.
    if (this.current && this.settings.musicEnabled && this.settings.music > 0) this.play(this.current);
    await this.ctx.resume();
    this.apply();
  }
  private makeSlot(c: AudioContext): RecordingSlot {
    const element = new Audio(); element.loop = true; element.preload = 'none';
    const source = c.createMediaElementSource(element), gain = c.createGain(); gain.gain.value = 0;
    source.connect(gain).connect(this.music!);
    const slot: RecordingSlot = { element, source, gain, track: null, request: 0, pending: false };
    element.onwaiting = () => { if (this.current === slot && this.musicActive) this.report('loading'); };
    element.onplaying = () => { if (this.current === slot && this.musicActive) this.report('playing'); };
    element.onerror = () => { if (this.current === slot && slot.track) this.report('error', 'This recording could not load. Select it again to retry.'); };
    // Unlock both persistent players in the first gesture using a tiny silent WAV.
    // Real songs remain untouched recordings; this only primes the mobile media policy.
    const wav = new Uint8Array(76), view = new DataView(wav.buffer);
    const word = (offset: number, value: string) => { for (let i = 0; i < value.length; i++) wav[offset + i] = value.charCodeAt(i); };
    word(0, 'RIFF'); view.setUint32(4, 68, true); word(8, 'WAVEfmt '); view.setUint32(16, 16, true);
    view.setUint16(20, 1, true); view.setUint16(22, 1, true); view.setUint32(24, 8000, true); view.setUint32(28, 16000, true);
    view.setUint16(32, 2, true); view.setUint16(34, 16, true); word(36, 'data'); view.setUint32(40, 32, true);
    element.src = 'data:audio/wav;base64,' + btoa(String.fromCharCode(...wav));
    void element.play().then(() => { if (!slot.track) { element.pause(); element.removeAttribute('src'); element.load(); } }).catch(() => {});
    return slot;
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
    if (!this.current || this.current.track?.id !== track.id) this.changeTrack(track);
    if (this.musicActive) {
      clearTimeout(this.pauseTimer); this.pauseTimer = undefined;
      if (this.current!.element.paused && !this.current!.pending) this.play(this.current!);
      else if (!this.current!.element.paused && this.current!.element.readyState >= 3) this.report('playing');
      else this.report('loading');
    } else {
      this.report('paused');
      // Let gain ramps finish before stopping the recording's transport.
      if (!this.pauseTimer) this.pauseTimer = setTimeout(() => {
        this.pauseTimer = undefined;
        if (!this.musicActive) { this.current?.element.pause(); if (this.current) this.current.pending = false; }
      }, 1100);
    }
  }
  private changeTrack(track: Track) {
    const c = this.ctx!, now = c.currentTime;
    clearTimeout(this.fadeTimer);
    if (this.retiring) this.release(this.retiring);
    const previous = this.current, next = this.slots.find(slot => slot !== previous)!;
    this.release(next); next.track = track;
    next.element.src = `${import.meta.env.BASE_URL}audio/${track.file}`;
    next.gain.gain.setValueAtTime(0, now); next.gain.gain.setTargetAtTime(1, now, .3);
    this.current = next; this.report('loading');
    if (previous) {
      previous.gain.gain.cancelScheduledValues(now); previous.gain.gain.setTargetAtTime(0, now, .2);
      this.retiring = previous;
      this.fadeTimer = setTimeout(() => { this.release(previous); if (this.retiring === previous) this.retiring = undefined; }, 1200);
    }
  }
  private play(slot: RecordingSlot) {
    if (slot.pending || !slot.track) return;
    if (slot.element.error) slot.element.load();
    const request = ++slot.request; slot.pending = true;
    if (this.current === slot) this.report('loading');
    void slot.element.play().then(() => {
      if (slot.request !== request) return;
      slot.pending = false;
      if (this.current === slot && this.musicActive) this.report('playing');
    }).catch((error: unknown) => {
      if (slot.request !== request) return;
      slot.pending = false;
      if (error instanceof DOMException && error.name === 'AbortError') return;
      if (this.current === slot) this.report('error', error instanceof DOMException && error.name === 'NotAllowedError'
        ? 'Tap the selected track again to allow playback.' : 'This recording could not play. Select it again to retry.');
    });
  }
  private release(slot: RecordingSlot) {
    slot.request++; slot.pending = false; slot.track = null;
    slot.element.pause(); slot.element.removeAttribute('src'); slot.element.load();
    if (this.ctx && this.ctx.state !== 'closed') { slot.gain.gain.cancelScheduledValues(this.ctx.currentTime); slot.gain.gain.value = 0; }
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
    clearTimeout(this.fadeTimer); clearTimeout(this.pauseTimer);
    document.removeEventListener('visibilitychange', this.visibility);
    for (const slot of this.slots) { slot.element.onwaiting = slot.element.onplaying = slot.element.onerror = null; this.release(slot); slot.source.disconnect(); slot.gain.disconnect(); }
    this.current = this.retiring = undefined; this.slots = []; this.onMusicState = undefined;
    void this.ctx?.close().catch(() => {}); this.ctx = null;
  }
}
