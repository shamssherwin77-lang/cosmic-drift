export type Quality = 'Low' | 'Medium' | 'High';
export type Lighting = 'Dark' | 'Balanced' | 'Cinematic';
export const qualityProfiles = {
  Low: { pixelRatio: 1, stars: [700, 3200, 11000], cloudScale: .4, volumes: 2, steps: 6, octaves: 2, bloom: false },
  Medium: { pixelRatio: 1.25, stars: [1400, 6500, 26000], cloudScale: .5, volumes: 3, steps: 10, octaves: 3, bloom: true },
  High: { pixelRatio: 1.6, stars: [2200, 10000, 48000], cloudScale: .65, volumes: 4, steps: 14, octaves: 4, bloom: true },
} as const;
export const lightingProfiles = {
  Dark: { exposure: .8, cabin: .7, nebula: .65 },
  Balanced: { exposure: 1.12, cabin: 1, nebula: .9 },
  Cinematic: { exposure: 1.32, cabin: 1.12, nebula: 1.08 },
} as const;
export const regions = [
  { name: 'Violet Nebula', subtitle: 'THE PERSEUS ARM', color: '#a879ef', second: '#315fab', accent: '#f4a4cf', density: 1.05, band: .8, structure: 1.15, bandWidth: 1, warmth: .25, stars: .87, exposure: 1 },
  { name: 'Stellar Ocean', subtitle: 'AN ENDLESS SEA OF LIGHT', color: '#88bcf2', second: '#234a89', accent: '#c3dcff', density: .38, band: .7, structure: 1.4, bandWidth: .65, warmth: .07, stars: 1, exposure: 1.04 },
  { name: 'Golden Core', subtitle: 'THE HEART OF THE GALAXY', color: '#edbd79', second: '#956753', accent: '#fff2c9', density: .85, band: 1.65, structure: 1.8, bandWidth: 1.4, warmth: .88, stars: 1.4, exposure: .93 },
  { name: 'Cosmic Clouds', subtitle: 'WHERE THE STARS ARE BORN', color: '#67cbbf', second: '#306c9c', accent: '#b1d5e8', density: 1.3, band: .5, structure: .65, bandWidth: 1.1, warmth: .16, stars: .7, exposure: 1 },
  { name: 'Deep Silence', subtitle: 'FAR FROM EVERYTHING', color: '#6d7fbb', second: '#253553', accent: '#a6b8e1', density: .12, band: .15, structure: .8, bandWidth: .45, warmth: .12, stars: .23, exposure: .84 },
] as const;
export type GraphicsSettings = { quality: Quality; lighting: Lighting; bloom: number };
