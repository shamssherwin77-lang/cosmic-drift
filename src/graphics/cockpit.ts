import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/** A closed room around the eye, with a single panoramic forward aperture. */
export function createCockpit(ship: T.Group) {
  const cabin = new T.Group(); cabin.name = 'enclosed-flight-deck'; ship.add(cabin);
  // Cabin-only lighting is evaluated in ship space; no expensive per-pixel PBR light loop.
  const tintUniform={value:new T.Color('#ae80f0')}, brightnessUniform={value:1};
  const white=new T.Color('#c8d7e4');
  const surface=(color:string,polish:number)=>new T.ShaderMaterial({
    uniforms:{baseColor:{value:new T.Color(color)},tint:tintUniform,brightness:brightnessUniform,polish:{value:polish}},
    vertexShader:'varying vec3 point,faceNormal;void main(){point=position;faceNormal=normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader:`varying vec3 point,faceNormal;uniform vec3 baseColor,tint;uniform float brightness,polish;
      void main(){vec3 n=normalize(faceNormal),v=normalize(-point),l=normalize(vec3(0.,.95,.2)-point);
      float diffuse=max(0.,dot(n,l));float spec=pow(max(0.,dot(n,normalize(l+v))),24.);
      float front=max(0.,dot(n,normalize(vec3(0.,.7,-2.1)-point)));
      float fresnel=pow(1.-max(0.,dot(n,v)),2.);
      vec3 color=baseColor*(.55+diffuse*.7)+vec3(.65,.75,.85)*spec*polish+tint*(front*.05+fresnel*.035);
      gl_FragColor=vec4(color*brightness,1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`,
  });
  const metal=surface('#3d4a57',.12),trim=surface('#73818c',.22),dark=surface('#1b2835',.04);
  const edge = new T.MeshBasicMaterial({ color: '#9bb9d1' });
  const batches = new Map<T.Material, T.BufferGeometry[]>();
  const add = (geometry: T.BufferGeometry, material: T.Material) => {
    let parts = batches.get(material); if (!parts) { parts = []; batches.set(material, parts); }
    parts.push(geometry);
  };
  function box(material: T.Material, x: number, y: number, z: number, w: number, h: number, d: number, rx = 0, ry = 0, rz = 0) {
    const geometry = new T.BoxGeometry(w, h, d);
    geometry.rotateX(rx); geometry.rotateY(ry); geometry.rotateZ(rz); geometry.translate(x, y, z); add(geometry, material);
  }
  // Solid port/starboard walls, ceiling, floor and aft bulkhead: no open sides.
  for (const side of [-1, 1]) box(metal, side * 2.85, 0, -.4, .24, 3.9, 5.8);
  box(metal, 0, 1.86, -.4, 5.95, .24, 5.8);
  box(metal, 0, -1.84, -.4, 5.95, .24, 5.8);
  box(metal, 0, 0, 2.43, 5.95, 3.9, .24);
  // Forward bulkhead surrounds the glass opening; the central view remains clear.
  box(metal, 0, 1.64, -3.25, 5.9, .42, .38);
  box(metal, 0, -1.5, -3.25, 5.9, .72, .5);
  for (const side of [-1, 1]) {
    box(metal, side * 2.7, .05, -3.25, .34, 3.2, .4, 0, 0, side * .08);
    box(trim, side * 2.52, .06, -3.02, .055, 2.95, .09, 0, 0, side * .08);
    box(edge, side * 2.475, .06, -2.99, .012, 2.86, .018, 0, 0, side * .08);
  }
  box(trim, 0, 1.385, -3.04, 5.12, .07, .11);
  box(edge, 0, 1.335, -2.98, 5.03, .012, .018);
  box(trim, 0, -1.12, -2.98, 5.1, .075, .16);
  box(edge, 0, -1.07, -2.9, 4.98, .012, .02);
  // Deep dashboard, instrument housings and two wraparound arm consoles.
  box(dark, 0, -1.4, -2.72, 4.9, .44, 1.12, .1);
  box(metal, 0, -1.46, -2.1, 2.15, .3, 1.05, .13);
  box(dark, 0, -1.12, -2.51, 1.98, .56, .2, -.24);
  for (const side of [-1, 1]) {
    box(dark, side * 1.88, -1.18, -2.62, .91, .44, .22, -.15, -side * .18);
    box(metal, side * 2.08, -1.36, -1.05, .7, .38, 2.0, .04, 0, side * .04);
    box(trim, side * 2.08, -1.15, -1.05, .61, .025, 1.8);
    for (let i = 0; i < 6; i++) box(i === 0 ? edge : dark, side * (1.85 + (i % 3) * .15), -1.125, -.5 - Math.floor(i / 3) * .16, .075, .012, .06);
    // Wall inserts, structural ribs and fine service seams give the room depth.
    for (const z of [-1.55, .05, 1.65]) {
      box(dark, side * 2.7, .12, z, .08, 1.6, 1.28);
      box(trim, side * 2.63, .92, z, .045, .035, 1.26);
      box(edge, side * 2.62, -.67, z, .018, .012, 1.1);
    }
    box(trim, side * 2.69, 1.4, -.42, .13, .12, 5.35);
    box(edge, side * 2.61, 1.39, -.42, .018, .018, 5.12);
    box(edge, side * 1.35, -1.705, .1, .025, .012, 3.2);
  }
  for (const z of [-1.6, .35, 1.9]) box(trim, 0, 1.69, z, 5.42, .13, .12);
  box(dark, 0, 1.68, .3, 1.45, .08, 1.4);
  box(edge, 0, 1.62, .3, .65, .012, .15);
  // Seat and sealed rear door remain inside the shell when looking away.
  box(dark, 0, -1.42, .45, 1.15, .48, 1.15);
  box(dark, 0, -.42, 1.0, 1.18, 1.62, .3, -.1);
  box(dark, 0, -.05, 2.25, 1.4, 3.0, .12);
  box(trim, .72, -.05, 2.14, .035, 2.95, .02);
  box(edge, -.72, -.05, 2.14, .015, 2.95, .02);

  const screenCanvas = document.createElement('canvas'); screenCanvas.width = 768; screenCanvas.height = 192;
  const ctx = screenCanvas.getContext('2d')!;
  ctx.fillStyle = '#0b1b28'; ctx.fillRect(0, 0, 768, 192);
  ctx.strokeStyle = '#355865'; ctx.lineWidth = 1;
  for (let x = 18; x < 768; x += 28) { ctx.beginPath(); ctx.moveTo(x, 32); ctx.lineTo(x, 174); ctx.stroke(); }
  ctx.strokeStyle = '#9bcbd3'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(100, 103, 51, .3, Math.PI * 1.8); ctx.stroke();
  ctx.fillStyle = '#c2e1e6'; ctx.font = '18px monospace'; ctx.fillText('AETHER / FLIGHT DECK', 190, 43);
  ctx.font = '13px monospace'; ctx.fillText('NAVIGATION  /  STABLE', 190, 89); ctx.fillText('LIFE SUPPORT  /  NOMINAL', 190, 122);
  ctx.fillStyle = '#5c989f'; ctx.fillRect(190, 151, 410, 3);
  const texture = new T.CanvasTexture(screenCanvas); texture.colorSpace = T.SRGBColorSpace;
  const screenMaterial = new T.MeshBasicMaterial({ map: texture, color: '#b8d3df' });
  function screen(x: number, y: number, z: number, w: number, h: number, rx: number, ry = 0) {
    const geometry = new T.PlaneGeometry(w, h); geometry.rotateX(rx); geometry.rotateY(ry); geometry.translate(x, y, z); add(geometry, screenMaterial);
  }
  screen(0, -1.08, -2.38, 1.77, .42, -.24);
  for (const side of [-1, 1]) screen(side * 1.87, -1.15, -2.48, .77, .3, -.15, -side * .18);
  // Five material batches instead of one draw call for every switch/rib/panel.
  for (const [material, parts] of batches) {
    const geometry = mergeGeometries(parts)!; parts.forEach(part => part.dispose());
    const mesh = new T.Mesh(geometry, material); mesh.name = material === metal ? 'enclosure-shell' : 'cabin-details'; cabin.add(mesh);
  }
  return {
    group: cabin,
    update(tint: T.Color, brightness: number, meditation: boolean, visible: boolean) {
      cabin.visible = visible;
      const dim = meditation ? .5 : 1;
      tintUniform.value.copy(tint);brightnessUniform.value=brightness*dim;
      edge.color.lerpColors(tint, white, .55).multiplyScalar(.6 * brightness * dim);
      screenMaterial.color.copy(edge.color).multiplyScalar(meditation ? .5 : 1);
    },
    dispose() { texture.dispose(); },
  };
}
