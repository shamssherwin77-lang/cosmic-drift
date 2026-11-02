import * as T from 'three';

export function systemLayout(seed: number, region: number, landmarks = true) {
  let state = (seed ^ Math.imul(region, 2654435761)) >>> 0;
  const random = () => { state = (Math.imul(state, 1664525) + 1013904223) >>> 0; return state / 4294967296; };
  const home = seed === 7123 && region === 0;
  const center = home ? new T.Vector3(500, 200, -3000) : new T.Vector3((random() - .5) * 1800, (random() - .5) * 1200, (random() - .5) * 1800);
  const starRadius = 300 + random() * 200;
  const starColor = new T.Color(['#ffd4a0', '#a9d5ff', '#ffe8bc', '#ffc1ab', '#d6dbff'][(seed >>> 3) % 5]);
  const count = 8 + Math.floor(random() * 5), phase = random() * Math.PI * 2, tilt = (random() - .5) * .65;
  const planets = Array.from({ length: landmarks ? 12 : 0 }, (_, i) => {
    const angle = phase + i * 2.39996 + (random() - .5) * .35;
    const orbit = 800 + i * 260 + random() * 100;
    const position = center.clone().add(new T.Vector3(Math.cos(angle) * orbit, Math.sin(angle) * orbit * tilt, Math.sin(angle) * orbit));
    if (home && i === 0) position.set(-480, -45, -1500);
    const kind = i % 4 === 1 ? 1 : random() > .45 ? 0 : 2;
    const radius = kind === 1 ? 160 + random() * 100 : 55 + random() * 95;
    const surfaceSeed = random() * 100 + 1;
    const color = new T.Color().setHSL((region * .14 + i * .103 + random() * .07) % 1, .17 + random() * .28, .28 + random() * .16);
    if (home && i === 0) color.set('#315e9c');
    return { position, kind, radius, seed: surfaceSeed, color };
  });
  const name = home ? 'Perseus Anchorage' : `${['Aster', 'Nyra', 'Vela', 'Lumen', 'Thal', 'Solis', 'Caeli'][seed % 7]}-${(seed & 65535).toString(16).padStart(4, '0').toUpperCase()}`;
  return { center, starRadius, starColor, count, planets, name };
}
