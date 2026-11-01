export const MUSIC_TRACKS = [
  { id: 'meditation', name: 'Meditation Impromptu 01', mood: 'Gentle piano · meditation', file: 'meditation-impromptu-01.mp3', artist: 'Kevin MacLeod', isrc: 'USUAN1100163' },
  { id: 'floating', name: 'Floating Cities', mood: 'Dreamlike ambient · a quiet future', file: 'floating-cities.mp3', artist: 'Kevin MacLeod', isrc: 'USUAN1600018' },
  { id: 'jellyfish', name: 'Jellyfish in Space', mood: 'Soft space music · a flowing journey', file: 'jellyfish-in-space.mp3', artist: 'Kevin MacLeod', isrc: 'USUAN1500030' },
  { id: 'soaring', name: 'Soaring', mood: 'Atmospheric ambient · calm and spacious', file: 'soaring.mp3', artist: 'Kevin MacLeod', isrc: 'USUAN1600040' },
] as const;
export type MusicTrack = typeof MUSIC_TRACKS[number]['id'];
export type AudioPreferences = {
  engineEnabled: boolean; spaceEnabled: boolean; musicEnabled: boolean;
  engine: number; space: number; music: number; track: MusicTrack;
};
export const DEFAULT_AUDIO: AudioPreferences = {
  engineEnabled: true, spaceEnabled: true, musicEnabled: true,
  engine: .35, space: .3, music: .5, track: 'meditation',
};
export const AUDIO_STORAGE_KEY = 'cosmic-drift-audio-v1';
export function parseAudioPreferences(value: string | null): AudioPreferences {
  const result = { ...DEFAULT_AUDIO };
  try {
    const saved: unknown = JSON.parse(value ?? 'null');
    if (!saved || typeof saved !== 'object') return result;
    const data = saved as Record<string, unknown>;
    for (const key of ['engineEnabled', 'spaceEnabled', 'musicEnabled'] as const) if (typeof data[key] === 'boolean') result[key] = data[key];
    for (const key of ['engine', 'space', 'music'] as const) if (typeof data[key] === 'number' && Number.isFinite(data[key])) result[key] = Math.max(0, Math.min(1, data[key]));
    const legacy: Record<string, MusicTrack> = { starlight:'meditation', nebula:'floating', orbit:'jellyfish', lunar:'soaring' };
    const selected = typeof data.track === 'string' ? legacy[data.track] ?? data.track : '';
    if (MUSIC_TRACKS.some(track => track.id === selected)) result.track = selected as MusicTrack;
  } catch { /* Storage is optional: bad or blocked storage must not prevent flight. */ }
  return result;
}
