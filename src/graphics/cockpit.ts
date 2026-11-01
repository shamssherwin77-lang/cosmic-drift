import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/** Pilot-scale panoramic canopy. All instruments are ship-space geometry, in five batches. */
export function createCockpit(ship: T.Group) {
  const cabin = new T.Group(); cabin.name = 'enclosed-flight-deck'; ship.add(cabin);
  const tintUniform = { value: new T.Color('#ae80f0') }, brightnessUniform = { value: 1 };
  const surface = (color: string, polish: number) => new T.ShaderMaterial({
    uniforms: { baseColor: { value: new T.Color(color) }, tint: tintUniform, brightness: brightnessUniform, polish: { value: polish } },
    vertexShader: 'varying vec3 point,faceNormal;void main(){point=position;faceNormal=normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: `varying vec3 point,faceNormal;uniform vec3 baseColor,tint;uniform float brightness,polish;
      float hash(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453);}
      void main(){vec3 n=normalize(faceNormal),v=normalize(-point),l=normalize(vec3(0.,1.8,-1.)-point);
      float diffuse=max(0.,dot(n,l)),spec=pow(max(0.,dot(n,normalize(l+v))),38.);
      float wear=step(.995,hash(floor(point*240.)))*.02;
      float brushed=sin(point.z*360.+point.x*170.)*.012;
      float rim=pow(1.-abs(dot(n,v)),3.);
      vec3 color=baseColor*(.65+diffuse*.85+brushed)+vec3(.34,.44,.49)*spec*polish;
      color+=tint*(rim*.024)+vec3(.25,.35,.35)*wear;
      gl_FragColor=vec4(color*brightness,1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`,
  });
  const metal = surface('#141d23', .3), trim = surface('#2b393e', .5), dark = surface('#070b10', .12);
  const edge = new T.MeshBasicMaterial({ color: '#52d9d5' });
  const batches = new Map<T.Material, T.BufferGeometry[]>();
  const add = (g: T.BufferGeometry, m: T.Material) => { if (!batches.has(m)) batches.set(m, []); batches.get(m)!.push(g); };
  function box(m: T.Material, x: number, y: number, z: number, w: number, h: number, d: number, rx = 0, ry = 0, rz = 0) {
    const g = new T.BoxGeometry(w, h, d); g.rotateX(rx); g.rotateY(ry); g.rotateZ(rz); g.translate(x, y, z); add(g, m);
  }
  function beam(m: T.Material, a: T.Vector3, b: T.Vector3, radius: number) {
    const g = new T.CylinderGeometry(radius, radius, a.distanceTo(b), 8);
    g.applyQuaternion(new T.Quaternion().setFromUnitVectors(new T.Vector3(0, 1, 0), b.clone().sub(a).normalize()));
    g.translate(...a.clone().add(b).multiplyScalar(.5).toArray()); add(g, m);
  }
  function arch(z: number, rx: number, ry: number, radius: number, m: T.Material) {
    const points = Array.from({ length: 41 }, (_, i) => { const a = -.12 + i / 40 * (Math.PI + .24); return new T.Vector3(Math.cos(a) * rx, -.95 + Math.sin(a) * ry, z); });
    add(new T.TubeGeometry(new T.CatmullRomCurve3(points), 48, radius, 8, false), m);
  }
  // The solid room continues behind the glazed canopy, outside the forward view.
  box(metal, 0, -2.02, .25, 7.3, .22, 7.0);
  box(metal, 0, 3.35, -.4, 7.3, .2, 7.3);
  box(metal, 0, .6, 2.55, 7.3, 5.7, .2);
  for (const side of [-1, 1]) {
    box(metal, side * 3.55, -.15, .4, .2, 6.8, 5.0);
    // Low gunwales leave generous port and starboard views through the canopy.
    box(metal, side * 2.62, -1.52, -1.9, .65, .76, 4.0, 0, side * -.1);
    beam(trim, new T.Vector3(side * 1.35, -.3, -3.18), new T.Vector3(side * 2.72, -1.4, .25), .075);
    beam(metal, new T.Vector3(side * 1.48, -.38, -3.2), new T.Vector3(side * 2.85, -1.47, .35), .14);
    beam(trim, new T.Vector3(side * 2.9, -.95, -3.2), new T.Vector3(side * 3.12, -1.25, .5), .055);
    beam(edge, new T.Vector3(side * 1.52, -.49, -3.1), new T.Vector3(side * 2.77, -1.54, .15), .009);
    for (let i = 0; i < 13; i++) {
      const t = i / 12;
      box(trim, side * (1.48 + t * 1.33), -.4 - t * 1.08, -3.14 + t * 3.35, .035, .035, .028);
    }
  }
  arch(-3.35, 2.92, 3.62, .085, metal);
  arch(-3.32, 2.84, 3.57, .025, trim);
  arch(-3.29, 2.81, 3.53, .008, edge);
  arch(.7, 3.15, 3.9, .12, metal);
  beam(metal, new T.Vector3(0, 2.68, -3.35), new T.Vector3(0, 2.95, .8), .065);
  // Raised instrument binnacle: rounded shoulders, lowered wings and a deep footwell.
  const outline = new T.Shape();
  outline.moveTo(-1.62, -1.85); outline.lineTo(-1.44, -.58);
  outline.bezierCurveTo(-1.2, -.12, -.92, .48, -.58, .55);
  outline.quadraticCurveTo(0, .72, .58, .55);
  outline.bezierCurveTo(.92, .48, 1.2, -.12, 1.44, -.58);
  outline.lineTo(1.62, -1.85); outline.closePath();
  const binnacle = new T.ExtrudeGeometry(outline, { depth: .24, bevelEnabled: true, bevelSize: .045, bevelThickness: .045, bevelSegments: 2, steps: 1 });
  binnacle.translate(0, -.12, -3.18); add(binnacle, dark);
  const hoodPoints = [new T.Vector3(-1.4, -.62, -2.89), new T.Vector3(-.88, .23, -2.89), new T.Vector3(0, .52, -2.89), new T.Vector3(.88, .23, -2.89), new T.Vector3(1.4, -.62, -2.89)];
  add(new T.TubeGeometry(new T.CatmullRomCurve3(hoodPoints), 40, .045, 8, false), trim);
  // Recessed navigation display and two flanking flight dials.
  box(trim, 0, -.13, -2.84, 1.19, .76, .12, -.1);
  box(dark, 0, -.13, -2.755, 1.13, .7, .035, -.1);
  box(metal, 0, -.74, -2.72, 1.32, .18, .22);
  box(dark, 0, -.72, -2.58, .85, .09, .06);
  // Wraparound console surfaces slope away from the pilot, with protective handrails.
  for (const side of [-1, 1]) {
    box(metal, side * 1.14, -1.05, -1.62, .78, .25, 1.75, .18, 0, side * .12);
    box(dark, side * 1.14, -.91, -1.62, .69, .035, 1.66, .18, 0, side * .12);
    beam(trim, new T.Vector3(side * 1.59, -1.13, -.65), new T.Vector3(side * 1.61, -.78, -2.5), .045);
    beam(trim, new T.Vector3(side * .73, -1.12, -.72), new T.Vector3(side * .75, -.87, -2.35), .035);
    // Upright terminal plinths and physical controls remain readable in free-look.
    box(dark, side * .97, -.63, -2.36, .59, .44, .12, -.34, -side * .18);
    for (let row = 0; row < 3; row++) for (let col = 0; col < 4; col++) {
      box(trim, side * 1.15 + (col - 1.5) * .12, -.76 - row * .035, -1.8 + row * .18, .085, .04, .105, .18);
    }
    for (let i = 0; i < 5; i++) {
      box(dark, side * 1.23, -.83, -.96 - i * .15, .12, .07, .085, .18);
      box(trim, side * .94, -.79, -.98 - i * .15, .045, .06, .065, .18);
    }
    // Short flight sticks, gimbals and textured-looking boot surrounds.
    box(dark, side * .65, -1.11, -1.78, .26, .11, .3);
    beam(trim, new T.Vector3(side * .65, -1.07, -1.78), new T.Vector3(side * .59, -.78, -1.86), .043);
    box(dark, side * .59, -.72, -1.87, .11, .19, .16, -.25, 0, side * .15);
    box(edge, side * .59, -.625, -1.84, .035, .008, .045);
    // Foot pedals, floor grille and restrained cyan footwell lighting.
    box(trim, side * .22, -1.74, -2.16, .2, .09, .34, .5);
    for (let i = 0; i < 6; i++) box(dark, side * .22, -1.69 + i * .013, -2.29 + i * .04, .14, .014, .012, .5);
    box(edge, side * 1.34, -1.82, -.45, .025, .025, .58);
    for (let i = 0; i < 18; i++) box(trim, side * 1.32, -1.91, -.9 + i * .085, .28, .014, .012);
  }
  // Pilot seat and sealed aft bulkhead complete the room when looking back.
  box(dark, 0, -1.66, -.08, .99, .25, 1.4);
  box(metal, 0, -.74, 1.0, 1.12, 1.65, .28, -.13);
  box(dark, 0, -.72, .82, .91, 1.44, .14, -.13);
  box(dark, 0, -.04, 2.39, 1.5, 3.0, .1);
  for (const side of [-1, 1]) box(trim, side * .79, -.04, 2.29, .035, 3.0, .035);

  // A single atlas gives each screen its own design without extra draw calls or downloads.
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 1024;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#020b10'; ctx.fillRect(0, 0, 1024, 1024);
  const line = (x: number, y: number, x2: number, y2: number, color = '#40bfbf') => { ctx.strokeStyle = color; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x2, y2); ctx.stroke(); };
  const text = (s: string, x: number, y: number, size = 10, color = '#6ee9dd') => { ctx.font = `${size}px monospace`; ctx.fillStyle = color; ctx.fillText(s, x, y); };
  // Atlas upper half: navigation computer, dense fine lines and a central orbital radar.
  ctx.strokeStyle = '#65eddf'; ctx.lineWidth = 3; ctx.strokeRect(5, 5, 630, 354);
  text('A E T H E R   /   DEEP SPACE NAVIGATION', 20, 26, 12);
  text('FLIGHT SYSTEMS', 21, 53); text('VECTOR  /  LOCK', 465, 53);
  ctx.lineWidth = 1;
  for (let i = 0; i < 11; i++) {
    line(20, 70 + i * 22, 164, 70 + i * 22, '#154c58');
    text(['NAV  ONLINE', 'DRIVE NOMINAL', 'O2   100.0%', 'HULL  STABLE'][i % 4], 24, 84 + i * 22, 8);
    line(460, 70 + i * 22, 610, 70 + i * 22, '#154c58');
    text(`${(i * 173.29 + 72).toFixed(2)} / ${i % 3 === 0 ? 'ACTIVE' : 'SYNC'}`, 467, 84 + i * 22, 8);
  }
  for (let i = 0; i < 9; i++) { const r = 18 + i * 11; ctx.strokeStyle = i % 2 ? '#174b59' : '#21838b'; ctx.beginPath(); ctx.arc(320, 185, r, 0, Math.PI * 2); ctx.stroke(); }
  for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; line(320 + Math.cos(a) * 19, 185 + Math.sin(a) * 19, 320 + Math.cos(a) * 107, 185 + Math.sin(a) * 107, '#18525e'); }
  const halo = ctx.createRadialGradient(320, 185, 1, 320, 185, 65); halo.addColorStop(0, '#8bfff5'); halo.addColorStop(.18, '#1dd7d5'); halo.addColorStop(1, '#05303b00'); ctx.fillStyle = halo; ctx.fillRect(250, 115, 140, 140);
  for (let i = 0; i < 60; i++) line(185 + i * 4.4, 317 + Math.sin(i * .7) * 7, 189 + i * 4.4, 317 + Math.sin((i + 1) * .7) * 7, '#50cec5');
  text('PERSEUS // CONTINUOUS NAVIGATION', 183, 345, 9);
  // Terminal / left diagnostics / keypad / instrument dials / caution strip.
  ctx.fillStyle = '#04100a'; ctx.fillRect(0, 390, 400, 220);
  for (let i = 0; i < 18; i++) text(`${i.toString(16).padStart(2, '0')}  ${['SYSTEM LINK ESTABLISHED', 'TRAJECTORY COMPUTED', 'DEEP FIELD SCAN / OK', '> AETHER FLIGHT COMPUTER'][i % 4]}`, 12, 405 + i * 11, 9, '#80c858');
  ctx.fillStyle = '#063547'; ctx.fillRect(430, 390, 350, 180);
  for (let i = 0; i < 5; i++) { text(['ATTITUDE', 'ENGINE', 'COOLANT', 'SIGNAL', 'ENERGY'][i], 445, 413 + i * 30, 12); ctx.fillStyle = '#47e4ef'; ctx.fillRect(550, 402 + i * 30, 38 + i * 28, 9); }
  const switches = ['#f3d238', '#28becf', '#e35345', '#9cd357', '#c7e9de'];
  for (let row = 0; row < 4; row++) for (let col = 0; col < 8; col++) {
    const x = 12 + col * 48, y = 650 + row * 48; ctx.fillStyle = '#101e22'; ctx.fillRect(x, y, 40, 40); ctx.fillStyle = switches[(row * 3 + col) % 5]; ctx.fillRect(x + 4, y + 4, 32, 25); line(x + 9, y + 34, x + 30, y + 34, '#899d94');
  }
  for (let i = 0; i < 2; i++) {
    const cx = 540 + i * 220, cy = 750;
    for (const r of [65, 57, 45]) { ctx.strokeStyle = '#8df6e5'; ctx.lineWidth = r === 57 ? 5 : 2; ctx.beginPath(); ctx.arc(cx, cy, r, -.9, 4.9); ctx.stroke(); }
    ctx.fillStyle = '#bdfff2'; ctx.beginPath(); ctx.arc(cx, cy, 12, 0, Math.PI * 2); ctx.fill(); line(cx, cy, cx + 34, cy - 24, '#bdfff2'); text(i ? 'OXYGEN' : 'VELOCITY', cx - 30, cy + 91, 11);
  }
  for (let i = 0; i < 12; i++) { ctx.fillStyle = switches[i % 5]; ctx.fillRect(20 + i * 45, 900, 31, 16); text(i % 3 === 0 ? 'ARM' : 'ON', 22 + i * 45, 935, 8); }
  const texture = new T.CanvasTexture(canvas); texture.colorSpace = T.SRGBColorSpace; texture.anisotropy = 2;
  const screenMaterial = new T.MeshBasicMaterial({ map: texture, color: '#d8fff5', side: T.DoubleSide });
  function display(x: number, y: number, z: number, w: number, h: number, rect: number[], rx = 0, ry = 0, rz = 0) {
    const g = new T.PlaneGeometry(w, h), uv = g.getAttribute('uv');
    for (let i = 0; i < uv.count; i++) uv.setXY(i, (rect[0] + uv.getX(i) * rect[2]) / 1024, 1 - (rect[1] + (1 - uv.getY(i)) * rect[3]) / 1024);
    g.rotateX(rx); g.rotateY(ry); g.rotateZ(rz); g.translate(x, y, z); add(g, screenMaterial);
  }
  display(0, -.13, -2.727, 1.07, .6, [0, 0, 640, 365], -.1);
  display(-.73, -.39, -2.72, .32, .36, [455, 663, 170, 190]);
  display(.73, -.39, -2.72, .32, .36, [675, 663, 170, 190]);
  display(-.98, -.61, -2.265, .49, .32, [430, 390, 350, 180], -.34, .18, .1);
  display(.98, -.61, -2.265, .49, .32, [0, 390, 400, 220], -.34, -.18, -.1);
  display(0, -1.02, -2.39, .62, .3, [0, 640, 400, 205], -.4);
  display(0, -.59, -2.71, 1.46, .085, [0, 890, 560, 65]);
  for (const side of [-1, 1]) {
    display(side * 1.14, -.86, -1.53, .5, .53, [0, 640, 400, 205], -Math.PI / 2 + .18, 0, side * .12);
    display(side * .65, -1.038, -1.67, .23, .09, [0, 890, 250, 45], -Math.PI / 2);
    display(side * 1.14, -.77, -2.03, .54, .11, [0, 890, 560, 65], -Math.PI / 2 + .18);
  }
  // Illuminated key caps sit on the physical switches rather than behind them.
  for (const side of [-1, 1]) for (let row = 0; row < 3; row++) for (let col = 0; col < 4; col++) {
    display(side * 1.15 + (col - 1.5) * .12, -.734 - row * .035, -1.8 + row * .18,
      .065, .08, [16 + ((row * 3 + col) % 8) * 48, 654 + row * 48, 30, 25], -Math.PI / 2 + .18);
  }
  // Rivets along the instrument hood give small-scale depth without separate draw calls.
  for (const p of hoodPoints) { const g = new T.SphereGeometry(.022, 6, 4); g.translate(p.x, p.y, p.z + .055); add(g, trim); }
  for (const [material, parts] of batches) {
    // Extrusions/tubes do not all carry matching attributes; normalize before merging.
    for (const part of parts) { if (part.index) { const expanded = part.toNonIndexed(); part.copy(expanded); expanded.dispose(); } part.deleteAttribute('uv1'); }
    const geometry = mergeGeometries(parts)!; parts.forEach(part => part.dispose());
    const mesh = new T.Mesh(geometry, material); mesh.name = material === metal ? 'enclosure-shell' : material === screenMaterial ? 'instrument-displays' : 'cabin-details'; cabin.add(mesh);
  }
  return {
    group: cabin,
    update(tint: T.Color, brightness: number, meditation: boolean, visible: boolean) {
      cabin.visible = visible;
      const dim = meditation ? .5 : 1;
      tintUniform.value.copy(tint); brightnessUniform.value = brightness * dim;
      edge.color.set('#50d7ce').multiplyScalar(.7 * brightness * dim);
      screenMaterial.color.set('#d8fff5').multiplyScalar((.8 + brightness * .2) * (meditation ? .5 : 1));
    },
    dispose() { texture.dispose(); },
  };
}
