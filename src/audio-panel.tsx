import { Volume2, VolumeX } from 'lucide-react';
import { MUSIC_TRACKS, type AudioPreferences, type MusicTrack } from './audio-preferences';

type Props = {
  sound: boolean; paused: boolean; settings: AudioPreferences;
  onToggle: () => void; onChange: (settings: Partial<AudioPreferences>) => void;
  onTrack: (track: MusicTrack) => void;
};
export function AudioPanel({ sound, paused, settings, onToggle, onChange, onTrack }: Props) {
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
        <input type="radio" name="music-track" aria-label={track.name} checked={settings.track === track.id} onChange={() => onTrack(track.id)}/>
        <span className={`music-art music-art-${i}`} aria-hidden="true">{['✦', '◌', '◎', '☾'][i]}</span>
        <span className="music-description">{track.name}<small>{track.mood}</small></span>
      </label>)}
    </fieldset>
    <small className="audio-note" aria-live="polite">{sound && paused ? 'Audio paused · resume the journey to listen' : sound && settings.musicEnabled ? 'Playing your selection · continuous music' : sound ? 'Music is off · engine and space follow your settings' : 'Audio is off · choose a track or enable sound'}</small>
    <small className="audio-license">Four original tracks · free to use · no subscription</small>
  </>;
}
