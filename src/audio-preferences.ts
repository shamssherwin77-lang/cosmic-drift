export const MUSIC_TRACKS = [
  { id: 'starlight', name: 'Starlight Piano', mood: 'Soft keys · a slow, peaceful melody', tempo: 48, root: 48, voice: 'piano', melody: [12, 16, 19, -1, 14, 12, 7, -1, 9, 12, 16, -1, 14, 7, 12, -1] },
  { id: 'nebula', name: 'Nebula Dreams', mood: 'Warm pads · floating through the clouds', tempo: 40, root: 45, voice: 'pad', melody: [12, -1, 19, -1, 16, -1, 14, -1, 9, -1, 12, -1, 7, -1, 16, -1] },
  { id: 'orbit', name: 'Quiet Orbit', mood: 'Gentle chimes · spacious and unhurried', tempo: 36, root: 50, voice: 'chime', melody: [24, -1, 19, -1, 16, 14, -1, -1, 12, -1, 21, -1, 19, 16, -1, -1] },
  { id: 'lunar', name: 'Lunar Tide', mood: 'Mellow tones · a quiet night on the moon', tempo: 44, root: 41, voice: 'warm', melody: [12, 7, -1, 9, 16, -1, 14, -1, 12, -1, 7, 4, 9, -1, 7, -1] },
] as const;
export type MusicTrack = typeof MUSIC_TRACKS[number]['id'];
export type AudioPreferences = {
  engineEnabled: boolean; spaceEnabled: boolean; musicEnabled: boolean;
  engine: number; space: number; music: number; track: MusicTrack;
};
export const DEFAULT_AUDIO: AudioPreferences = {
  engineEnabled: true, spaceEnabled: true, musicEnabled: true,
  engine: .35, space: .3, music: .5, track: 'starlight',
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
    if (MUSIC_TRACKS.some(track => track.id === data.track)) result.track = data.track as MusicTrack;
  } catch { /* Storage is optional: bad or blocked storage must not prevent flight. */ }
  return result;
}
