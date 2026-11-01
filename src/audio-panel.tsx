import { Volume2, VolumeX } from 'lucide-react';
import type { MusicPlayback } from './audio';
import { MUSIC_TRACKS, type AudioPreferences, type MusicTrack } from './audio-preferences';

type Props = {
  sound: boolean; paused: boolean; playback: MusicPlayback; settings: AudioPreferences;
  onToggle: () => void; onChange: (settings: Partial<AudioPreferences>) => void;
  onTrack: (track: MusicTrack) => void;
};
export function AudioPanel({ sound, paused, playback, settings, onToggle, onChange, onTrack }: Props) {
  const description = playback.state === 'error' ? playback.message
    : !sound ? 'Audio is off · choose a track or enable sound'
    : paused ? 'Audio paused · resume the journey to listen'
    : !settings.musicEnabled ? 'Music is off · engine and space follow your settings'
    : settings.music <= 0 ? 'Music volume is zero · raise it to listen'
    : playback.state === 'playing' ? 'Playing your selection · recorded music'
    : playback.state === 'paused' ? 'Music paused · select the track to continue'
    : 'Loading recording…';
  return <>
    <p>Your own mix of engine, space and music.</p>
    <button className="sound-toggle" onClick={onToggle}>{sound ? 'Mute all audio' : 'Enable sound'}{sound ? <Volume2 size={17}/> : <VolumeX size={17}/>}</button>
    <div className="audio-channels">
      {([
        { toggle: 'engineEnabled', volume: 'engine', name: 'Engine sound', label: 'Engine volume', hint: 'Engine hum and Light Jump' },
        { toggle: 'spaceEnabled', volume: 'space', name: 'Space ambience', label: 'Space volume', hint: 'A soft, atmospheric soundscape' },
        { toggle: 'musicEnabled', volume: 'music', name: 'Music', label: 'Music volume', hint: 'Your selected relaxation track' },
      ] as const).map(channel => <div className="audio-channel" key={channel.volume}>
        <label className="check"><input type="checkbox" checked={settings[channel.toggle]} onChange={e => onChange({ [channel.toggle]: e.target.checked })}/><span>{channel.name}<small>{channel.hint}</small></span></label>
        <label className="audio-level">Volume <output>{Math.round(settings[channel.volume] * 100)}%</output><input aria-label={channel.label} type="range" min="0" max="1" step=".01" disabled={!settings[channel.toggle]} value={settings[channel.volume]} onChange={e => onChange({ [channel.volume]: +e.target.value })}/></label>
      </div>)}
    </div>
    <fieldset className="music-library"><legend>Choose your music</legend>
      {MUSIC_TRACKS.map((track, i) => <label className={`music-option ${settings.track === track.id ? 'selected' : ''}`} key={track.id}>
        <input onClick={()=>{if(settings.track===track.id)onTrack(track.id);}} type="radio" name="music-track" aria-label={track.name} checked={settings.track === track.id} onChange={() => onTrack(track.id)}/>
        <span className={`music-art music-art-${i}`} aria-hidden="true">{['✦', '◌', '◎', '☾'][i]}</span>
        <span className="music-description">{track.name}<small>{track.mood}</small><small>{track.artist} · CC BY 3.0</small></span>
      </label>)}
    </fieldset>
    <small className="audio-note" data-playback-state={playback.state} aria-live="polite">{description}</small>
    <small className="audio-license">Recorded music by Kevin MacLeod · free with attribution</small>
    <details className="music-credits"><summary>Music credits &amp; licenses</summary>
      <p>All four recordings are by <a href="https://incompetech.com/" target="_blank" rel="noreferrer">Kevin MacLeod</a>, used under <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noreferrer">CC BY 3.0</a>.</p>
      {MUSIC_TRACKS.map(track=><a key={track.id} href={`https://incompetech.com/music/royalty-free/index.html?isrc=${track.isrc}`} target="_blank" rel="noreferrer">{track.name} ↗</a>)}
      <p>Audio editions from FitVita: trimmed, faded, loudness-normalized and encoded to Opus; converted to MP3 for this site. <a href="https://github.com/smyrna-pergamum/fitvita" target="_blank" rel="noreferrer">Source &amp; credits ↗</a></p>
    </details>
  </>;
}
