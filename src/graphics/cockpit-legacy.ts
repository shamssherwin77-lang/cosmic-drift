import {WorldShaderMaterial} from './world-material';
import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { aerospaceFinish } from './finish';

/** Pilot-scale panoramic canopy. All instruments are ship-space geometry, in six batches including glazing. */
export function createCockpit(ship: T.Group) {
  const cabin = new T.Group(); cabin.name = 'enclosed-flight-deck'; ship.add(cabin);
  const tintUniform = { value: new T.Color('#ae80f0') }, brightnessUniform = { value: 1 };
  const surface=(color:string,metalness:number,roughness:number)=>aerospaceFinish(new T.MeshPhysicalMaterial({color,metalness,roughness,clearcoat:metalness>.7?.28:.12,clearcoatRoughness:.32,envMapIntensity:metalness>.7?1.35:.85}),2.4);
  const metal=surface('#25313a',.7,.33),trim=surface('#b0ada1',.9,.24),dark=surface('#10151b',.12,.76);
  const metalBase=metal.color.clone(),trimBase=trim.color.clone(),darkBase=dark.color.clone();
  const edge = new T.MeshBasicMaterial({ color: '#8abfc2' });
  const batches = new Map<T.Material, T.BufferGeometry[]>();
  let instruments = false;
  const add = (g: T.BufferGeometry, m: T.Material) => {
    // Compact the dashboard around floor level, keeping the horizon unobstructed.
    // Apply the same transform to housings, controls and their display surfaces.
    if (instruments) { g.scale(.72, .58, .9); g.translate(0, -.798, -.3); }
    if (!batches.has(m)) batches.set(m, []); batches.get(m)!.push(g); };
  function box(m: T.Material, x: number, y: number, z: number, w: number, h: number, d: number, rx = 0, ry = 0, rz = 0) {
    const g = new RoundedBoxGeometry(w, h, d, Math.max(w,h,d)>.6?2:1, Math.min(w,h,d)*.12); g.rotateX(rx); g.rotateY(ry); g.rotateZ(rz); g.translate(x, y, z); add(g, m);
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
  // The floor supports the consoles; the rest of the cabin is a glazed observatory.
  box(metal, 0, -2.02, .25, 7.3, .22, 7.0);
  box(metal, 0, -1.65, 2.55, 7.3, .65, .2);
  box(metal, 0, 3.35, 2.55, 7.3, .13, .18);
  for (const x of [-3.5, -1.4, 1.4, 3.5]) {
    box(metal, x, 1.05, 2.55, .085, 4.55, .14);
    box(edge, x + .048, 1.05, 2.48, .008, 4.42, .012);
  }
  for (const z of [-1.5, 1.1, 2.55]) {
    box(metal, 0, 3.35, z, 7.05, .095, .09);
    box(edge, 0, 3.29, z, 6.9, .008, .012);
  }
  for (const side of [-1, 1]) {
    box(metal, side * 3.55, -1.65, .4, .17, .65, 4.3);
    box(metal, side * 3.55, 3.35, -.4, .13, .13, 6.0);
    for (const z of [-1.5, 1.1, 2.55]) {
      box(metal, side * 3.55, 1.05, z, .12, 4.55, .085);
      box(edge, side * 3.48, 1.05, z + .049, .012, 4.42, .008);
    }
    // Low gunwales leave generous port and starboard views through the canopy.
    box(metal, side * 2.62, -1.52, -1.9, .65, .76, 4.0, 0, side * -.1);
    beam(trim, new T.Vector3(side * 1.0, -1.1, -2.95), new T.Vector3(side * 2.72, -1.4, .25), .075);
    beam(metal, new T.Vector3(side * 1.12, -1.15, -3.02), new T.Vector3(side * 2.85, -1.47, .35), .14);
    beam(trim, new T.Vector3(side * 2.9, -.95, -3.2), new T.Vector3(side * 3.12, -1.25, .5), .055);
    beam(edge, new T.Vector3(side * 1.16, -1.18, -2.98), new T.Vector3(side * 2.77, -1.54, .15), .009);
    for (let i = 0; i < 13; i++) {
      const t = i / 12;
      box(trim, side * (1.12 + t * 1.69), -1.15 - t * .33, -3.02 + t * 3.23, .035, .035, .028);
    }
  }
  arch(-3.35, 2.92, 3.62, .085, metal);
  arch(-3.32, 2.84, 3.57, .025, trim);
  arch(-3.29, 2.81, 3.53, .008, edge);
  arch(.7, 3.15, 3.9, .12, metal);
  beam(metal, new T.Vector3(0, 2.68, -3.35), new T.Vector3(0, 2.95, .8), .065);
  // Pressure seals, lock collars and recessed fasteners follow the canopy, not the view.
  arch(-3.38,2.94,3.64,.028,dark);
  for(let i=0;i<13;i++){
    const a=.08+i/12*(Math.PI-.16),x=Math.cos(a)*2.92,y=-.95+Math.sin(a)*3.62;
    box(metal,x,y,-3.34,.115,.145,.125,0,0,a-Math.PI/2);
    const bolt=new T.CylinderGeometry(.026,.026,.014,6);bolt.rotateX(Math.PI/2);bolt.translate(x,y,-3.245);add(bolt,trim);
  }
  for(const side of [-1,1]){
    // Flush sidewall cartridges, rubber isolation joints and layered ventilation slots.
    for(let i=0;i<4;i++){
      box(dark,side*2.72,-1.31,-2.85+i*.75,.39,.19,.57,0,side*-.1);
      box(trim,side*2.72,-1.205,-2.85+i*.75,.28,.014,.43,0,side*-.1);
      for(let j=0;j<5;j++)box(dark,side*2.72,-1.192,-3.02+i*.75+j*.075,.23,.012,.024);
    }
    const hose=[new T.Vector3(side*1.85,-1.8,1.5),new T.Vector3(side*1.82,-1.63,.6),new T.Vector3(side*2.08,-1.66,-.2),new T.Vector3(side*2.3,-1.64,-1.4)];
    add(new T.TubeGeometry(new T.CatmullRomCurve3(hose),28,.035,6,false),dark);
    for(let i=0;i<5;i++)box(trim,side*2.29,-1.61,-1.35+i*.05,.11,.045,.025);
  }
  instruments = true;
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
  for(const side of [-1,1]){
    for(let i=0;i<9;i++)box(dark,side*1.42,-.84,-2.16+i*.085,.07,.018,.035,.18);
    for(let i=0;i<3;i++){
      box(trim,side*.84,-.81,-1.27+i*.18,.028,.018,.12,.18);
      box(dark,side*.84,-.78,-1.29+i*.18,.10,.045,.045,.18);
    }
    for(let i=0;i<4;i++){
      const bezel=new T.TorusGeometry(.048,.01,5,12);bezel.rotateX(-Math.PI/2+.18);bezel.translate(side*1.25,-.77,-1.1-i*.16);add(bezel,trim);
      const knob=new T.CylinderGeometry(.035,.04,.045,12);knob.rotateX(.18);knob.translate(side*1.25,-.75,-1.1-i*.16);add(knob,dark);
    }
  }
  instruments = false;
  // A low seat back keeps the rear observation windows clear at eye level.
  box(dark, 0, -1.66, -.08, .99, .25, 1.4);
  box(metal, 0, -1.12, 1.0, 1.12, .92, .28, -.13);
  box(dark, 0, -1.1, .82, .91, .78, .14, -.13);
  // Glazing is a single lightweight batch. It transmits the actual world in every pane.
  const glassUniforms={reflection:{value:null as T.Texture|null},hasReflection:{value:0},strength:{value:.06},tint:tintUniform};
  const glass=new WorldShaderMaterial({uniforms:glassUniforms,transparent:true,depthWrite:false,side:T.DoubleSide,
    vertexShader:'varying vec3 panePoint,paneNormal;void main(){panePoint=position;paneNormal=normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader:`varying vec3 panePoint,paneNormal;uniform sampler2D reflection;uniform float hasReflection,strength;uniform vec3 tint;
    void main(){vec3 v=normalize(-panePoint),n=normalize(paneNormal);float facing=abs(dot(n,v));vec3 r=reflect(-v,n);
    vec2 uv=vec2(atan(r.z,r.x)/6.2831853+.5,asin(clamp(r.y,-1.,1.))/3.14159265+.5);
    vec3 environment=hasReflection>.5?texture2D(reflection,uv).rgb:vec3(.08,.15,.2);
    float fresnel=pow(1.-facing,3.);float reflectionAlpha=.008+strength*(.12+fresnel);
    float ghost=exp(-pow((panePoint.y+.7)*5.,2.))*pow(max(0.,sin(panePoint.x*8.)),14.);
    gl_FragColor=vec4(environment*.8+tint*.025+vec3(.04,.25,.24)*ghost,reflectionAlpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    }`});
  const pane = (x: number, y: number, z: number, w: number, h: number, rx = 0, ry = 0) => {
    const g = new T.PlaneGeometry(w, h); g.rotateX(rx); g.rotateY(ry); g.translate(x, y, z); add(g, glass);
  };
  // The forward canopy gets the same subtle physical reflection as every other pane.
  const forwardPane=new T.Shape();
  for(let i=0;i<=48;i++){const a=i/48*Math.PI,x=Math.cos(a)*2.79,y=-.95+Math.sin(a)*3.51;if(i===0)forwardPane.moveTo(x,y);else forwardPane.lineTo(x,y);}forwardPane.closePath();
  const forwardGlass=new T.ShapeGeometry(forwardPane,48);forwardGlass.translate(0,0,-3.26);add(forwardGlass,glass);
  for (const side of [-1, 1]) pane(side * 3.56, 1.05, -.4, 5.9, 4.5, 0, Math.PI / 2);
  pane(0, 1.05, 2.57, 7.0, 4.5);
  pane(0, 3.36, -.4, 7.0, 5.9, Math.PI / 2);

  // A single atlas gives each screen its own design without extra draw calls or downloads.
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 2048;
  const ctx = canvas.getContext('2d')!;ctx.scale(2,2);
  ctx.fillStyle = '#030a0e'; ctx.fillRect(0, 0, 1024, 1024);
  const line = (x: number, y: number, x2: number, y2: number, color = '#40bfbf') => { ctx.strokeStyle = color; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x2, y2); ctx.stroke(); };
  const text = (s: string, x: number, y: number, size = 10, color = '#aac9c9') => { ctx.font = `${size}px monospace`; ctx.fillStyle = color; ctx.fillText(s, x, y); };
  // Atlas upper half: navigation computer, dense fine lines and a central orbital radar.
  ctx.fillStyle='#0a1920';ctx.fillRect(5,5,630,354);ctx.strokeStyle='#537b83';ctx.lineWidth=1;ctx.strokeRect(5,5,630,354);ctx.fillStyle='#102932';ctx.fillRect(6,6,628,30);
  text('A E T H E R  /  FLIGHT DECK 01',20,26,12,'#d9e7e1');text('NAV / ONLINE',476,26,9,'#d4b47d');
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
  const halo = ctx.createRadialGradient(320, 185, 1, 320, 185, 65); halo.addColorStop(0, '#c6e7df'); halo.addColorStop(.18, '#538f9d'); halo.addColorStop(1, '#05303b00'); ctx.fillStyle = halo; ctx.fillRect(250, 115, 140, 140);
  for (let i = 0; i < 60; i++) line(185 + i * 4.4, 317 + Math.sin(i * .7) * 7, 189 + i * 4.4, 317 + Math.sin((i + 1) * .7) * 7, '#50cec5');
  text('PERSEUS // CONTINUOUS NAVIGATION', 183, 345, 9);
  // Terminal / left diagnostics / keypad / instrument dials / caution strip.
  ctx.fillStyle = '#071217'; ctx.fillRect(0, 390, 400, 220);
  for (let i = 0; i < 18; i++) text(`${i.toString(16).padStart(2, '0')}  ${['SYSTEM LINK ESTABLISHED', 'TRAJECTORY COMPUTED', 'DEEP FIELD SCAN / OK', '> AETHER FLIGHT COMPUTER'][i % 4]}`, 12, 405 + i * 11, 9, '#82a7b0');
  ctx.fillStyle = '#0a1922'; ctx.fillRect(430, 390, 350, 180);
  for (let i = 0; i < 5; i++) { text(['ATTITUDE', 'ENGINE', 'COOLANT', 'SIGNAL', 'ENERGY'][i], 445, 413 + i * 30, 12); ctx.fillStyle = '#8aafb8'; ctx.fillRect(550, 402 + i * 30, 38 + i * 28, 9); }
  const switches = ['#d6b47e','#6599a4','#6f8990','#a6bfc0','#354c56'];
  for (let row = 0; row < 4; row++) for (let col = 0; col < 8; col++) {
    const x = 12 + col * 48, y = 650 + row * 48; ctx.fillStyle = '#101e22'; ctx.fillRect(x, y, 40, 40); ctx.fillStyle = switches[(row * 3 + col) % 5]; ctx.fillRect(x+4,y+4,32,22);ctx.fillStyle='#0b161c';ctx.fillRect(x+4,y+26,32,3);text(['NAV','RCS','PWR','AUX'][col%4],x+7,y+18,7,'#0a151c'); line(x + 9, y + 34, x + 30, y + 34, '#899d94');
  }
  for (let i = 0; i < 2; i++) {
    const cx = 540 + i * 220, cy = 750;
    for (const r of [65, 57, 45]) { ctx.strokeStyle = '#9bbfc1'; ctx.lineWidth = r === 57 ? 5 : 2; ctx.beginPath(); ctx.arc(cx, cy, r, -.9, 4.9); ctx.stroke(); }
    ctx.fillStyle = '#d3dcd2'; ctx.beginPath(); ctx.arc(cx, cy, 12, 0, Math.PI * 2); ctx.fill(); line(cx, cy, cx + 34, cy - 24, '#d3dcd2'); text(i ? 'OXYGEN' : 'VELOCITY', cx - 30, cy + 91, 11);
  }
  for (let i = 0; i < 12; i++) { ctx.fillStyle = switches[i % 5]; ctx.fillRect(20 + i * 45, 900, 31, 16); text(i % 3 === 0 ? 'ARM' : 'ON', 22 + i * 45, 935, 8); }
  ctx.fillStyle='#e0bc83';ctx.fillRect(850,900,160,36);
  for(let i=0;i<7;i++){ctx.fillStyle=i%3===0?'#d4b888':'#7b9da4';ctx.fillRect(850+i*23,960,12,4);}
  text('AETHER   /   EXPLORATION SYSTEMS',18,977,11,'#a5adb0');
  text('CAUTION  //  PRESSURIZED',18,1004,9,'#c7a774');
  // Orbital tracks and numbered targets add depth without per-frame texture uploads.
  ctx.strokeStyle='#b69c72';ctx.lineWidth=1;ctx.beginPath();ctx.ellipse(320,185,91,36,-.55,0,Math.PI*2);ctx.stroke();
  for(let i=0;i<6;i++){const a=i*2.39,x=320+Math.cos(a)*(40+i*9),y=185+Math.sin(a)*(22+i*8);ctx.fillStyle=i===2?'#e2c28c':'#a5c7c9';ctx.fillRect(x-2,y-2,4,4);text(String(i+1).padStart(2,'0'),x+6,y-4,7,'#b0c4c5');}
  const texture = new T.CanvasTexture(canvas); texture.colorSpace = T.SRGBColorSpace; texture.anisotropy = 4;
  const screenMaterial = new T.MeshBasicMaterial({ map: texture, color: '#e0eeeb', side: T.DoubleSide });
  const screenTime={value:0};
  screenMaterial.onBeforeCompile=shader=>{shader.uniforms.screenTime=screenTime;shader.fragmentShader='uniform float screenTime;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
    vec2 radar=vMapUv-vec2(.3125,.819);float a=atan(radar.y,radar.x);float sweep=pow(max(0.,cos(a-screenTime*.34)),32.)*(1.-smoothstep(.04,.11,length(radar)));
    diffuseColor.rgb+=vec3(.04,.15,.17)*sweep*step(.64,vMapUv.y);diffuseColor.rgb*=.965+.035*sin(vMapUv.y*1024.*3.14159);
  `);};
  function display(x: number, y: number, z: number, w: number, h: number, rect: number[], rx = 0, ry = 0, rz = 0) {
    const g = new T.PlaneGeometry(w, h), uv = g.getAttribute('uv');
    for (let i = 0; i < uv.count; i++) uv.setXY(i, (rect[0] + uv.getX(i) * rect[2]) / 1024, 1 - (rect[1] + (1 - uv.getY(i)) * rect[3]) / 1024);
    g.rotateX(rx); g.rotateY(ry); g.rotateZ(rz); g.translate(x, y, z); add(g, screenMaterial);
  }
  instruments = true;
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
  display(0,.285,-2.72,.72,.035,[12,960,640,30]);
  for(const side of [-1,1]){
    display(side*1.13,-.735,-2.1,.45,.018,[850,900,160,36],-Math.PI/2+.18);
    display(side*1.13,-.88,-.72,.46,.075,[12,960,640,30],-Math.PI/2+.18);
  }
  instruments=false;
  for(const side of [-1,1])display(side*2.64,-1.117,-2.65,.035,.48,[850,900,160,36],-Math.PI/2);
  instruments=true;
  // Rivets along the instrument hood give small-scale depth without separate draw calls.
  for (const p of hoodPoints) { const g = new T.SphereGeometry(.022, 6, 4); g.translate(p.x, p.y, p.z + .055); add(g, trim); }
  instruments = false;
  for (const [material, parts] of batches) {
    // Extrusions/tubes do not all carry matching attributes; normalize before merging.
    for (const part of parts) { if (part.index) { const expanded = part.toNonIndexed(); part.copy(expanded); expanded.dispose(); } part.deleteAttribute('uv1'); }
    const geometry = mergeGeometries(parts)!; parts.forEach(part => part.dispose());
    const mesh = new T.Mesh(geometry, material); if(material===glass)mesh.renderOrder=9; mesh.castShadow=material===metal||material===trim||material===dark;mesh.receiveShadow=mesh.castShadow; mesh.name = material === glass ? 'observation-glazing' : material === metal ? 'enclosure-shell' : material === screenMaterial ? 'instrument-displays' : 'cabin-details'; cabin.add(mesh);
  }
  return {
    group: cabin,
    configureEnvironment(texture:T.Texture,high:boolean){glassUniforms.reflection.value=texture;glassUniforms.hasReflection.value=1;glassUniforms.strength.value=high?.15:.045;},
    update(tint: T.Color, brightness: number, meditation: boolean, visible: boolean, time=0) {
      cabin.visible = visible;
      const dim = meditation ? .5 : 1;
      tintUniform.value.copy(tint); brightnessUniform.value = brightness * dim;
      metal.color.copy(metalBase).multiplyScalar(brightness*dim);trim.color.copy(trimBase).multiplyScalar(brightness*dim);dark.color.copy(darkBase).multiplyScalar(brightness*dim);screenTime.value=time;
      edge.color.set('#89b7bc').multiplyScalar(.45*brightness*dim);
      screenMaterial.color.set('#d5e1df').multiplyScalar((.72+brightness*.16) * (meditation ? .5 : 1));
    },
    dispose() { texture.dispose(); },
  };
}
