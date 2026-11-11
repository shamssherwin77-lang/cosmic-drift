export const MUSIC_TRACKS = [
  { id: 'meditation', name: 'Meditation Impromptu 01', mood: 'Gentle piano · meditation', file: 'meditation-impromptu-01.mp3', artist: 'Kevin MacLeod', isrc: 'USUAN1100163' },
  { id: 'floating', name: 'Floating Cities', mood: 'Dreamlike ambient · a quiet future', file: 'floating-cities.mp3', artist: 'Kevin MacLeod', isrc: 'USUAN1600018' },
  { id: 'jellyfish', name: 'Jellyfish in Space', mood: 'Soft space music · a flowing journey', file: 'jellyfish-in-space.mp3', artist: 'Kevin MacLeod', isrc: 'USUAN1500030' },
  { id: 'soaring', name: 'Soaring', mood: 'Atmospheric ambient · calm and spacious', file: 'soaring.mp3', artist: 'Kevin MacLeod', isrc: 'USUAN1600040' },
] as const;
export type MusicTrack = typeof MUSIC_TRACKS[number]['id'];
export type AudioPreferences = {
  engineEnabled: boolean; spaceEnabled: boolean; musicEnabled: boolean; weaponsEnabled:boolean;
  engine: number; space: number; music: number; weapons:number; track: MusicTrack;
};
export const DEFAULT_AUDIO: AudioPreferences = {
  engineEnabled: true, spaceEnabled: true, musicEnabled: true, weaponsEnabled:true,
  engine: .35, space: .3, music: .5, weapons:.65, track: 'meditation',
};
export const AUDIO_STORAGE_KEY = 'cosmic-drift-audio-v1';
export function parseAudioPreferences(value: string | null): AudioPreferences {
  const result = { ...DEFAULT_AUDIO };
  try {
    const saved: unknown = JSON.parse(value ?? 'null');
    if (!saved || typeof saved !== 'object') return result;
    const data = saved as Record<string, unknown>;
    for (const key of ['engineEnabled', 'spaceEnabled', 'musicEnabled','weaponsEnabled'] as const) if (typeof data[key] === 'boolean') result[key] = data[key];
    for (const key of ['engine', 'space', 'music','weapons'] as const) if (typeof data[key] === 'number' && Number.isFinite(data[key])) result[key] = Math.max(0, Math.min(1, data[key]));
    const legacy: Record<string, MusicTrack> = { starlight:'meditation', nebula:'floating', orbit:'jellyfish', lunar:'soaring' };
    const selected = typeof data.track === 'string' ? legacy[data.track] ?? data.track : '';
    if (MUSIC_TRACKS.some(track => track.id === selected)) result.track = selected as MusicTrack;
  } catch { /* Storage is optional: bad or blocked storage must not prevent flight. */ }
  return result;
}

export const BATTLE_TRACKS=[
 {id:'legionnaire',name:'Legionnaire (2022 Remaster)',artist:'Scott Buckley',file:'legionnaire.mp3',source:'https://www.scottbuckley.com.au/library/legionnaire-2022/',license:'4.0'},
 {id:'volatile',name:'Volatile Reaction',artist:'Kevin MacLeod',file:'volatile-reaction.mp3',source:'https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1400039',license:'4.0'},
 {id:'chase',name:'Chase Pulse',artist:'Kevin MacLeod',file:'chase-pulse.mp3',source:'https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100383',license:'4.0'},
 {id:'titan',name:'Titan',artist:'Scott Buckley',file:'titan.mp3',source:'https://www.scottbuckley.com.au/library/titan/',license:'4.0'},
] as const;
export const ALL_MUSIC_TRACKS=[...MUSIC_TRACKS,...BATTLE_TRACKS] as const;
export type RecordingId=typeof ALL_MUSIC_TRACKS[number]['id'];
export function shuffledBattleMusic(random= Math.random):RecordingId[]{const tracks:RecordingId[]=['legionnaire','volatile','chase'];for(let i=tracks.length-1;i>0;i--){const j=Math.min(i,Math.floor(Math.max(0,random())*(i+1)));[tracks[i],tracks[j]]=[tracks[j],tracks[i]];}return tracks;}
