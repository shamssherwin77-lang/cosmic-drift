import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { aerospaceFinish } from './finish';

/** Exterior surfaces sit below the windows and rotate with the vessel, not the passenger's gaze. */
export function createHull(ship: T.Group) {
  const group = new T.Group(); group.name = 'aether-exterior'; ship.add(group);
  const armor = aerospaceFinish(new T.MeshPhysicalMaterial({color:'#3f4b57',metalness:.78,roughness:.3,clearcoat:.32,clearcoatRoughness:.28,side:T.DoubleSide,envMapIntensity:1.25}),.8);
  const trim = aerospaceFinish(new T.MeshStandardMaterial({ color: '#b0b4ac', metalness: .88, roughness: .25,envMapIntensity:1.3 }),2);
  const dark = aerospaceFinish(new T.MeshStandardMaterial({ color: '#101b27', metalness: .25, roughness: .7 }),1.7);
  const glow = new T.MeshBasicMaterial({ color: '#a5d1dc' });
  const red = new T.MeshBasicMaterial({ color: '#f08c81' });
  const batches = new Map<T.Material, T.BufferGeometry[]>();
  const add = (g: T.BufferGeometry, m: T.Material) => { const parts = batches.get(m) ?? []; parts.push(g); batches.set(m, parts); };
  const box = (m: T.Material, x: number, y: number, z: number, w: number, h: number, d: number, rz = 0) => {
    const g = new RoundedBoxGeometry(w, h, d, Math.max(w,h,d)>.6?2:1, Math.min(w,h,d)*.16); g.rotateZ(rz); g.translate(x, y, z); add(g, m);
  };
  const body = new T.SphereGeometry(1, 32, 16); body.scale(3.3, 1.05, 8); body.translate(0, -3.2, 4); add(body, armor);
  box(armor, 0, -2.3, 7, 2.4, .52, 8);
  box(dark, 0, -2.015, 7.5, 1.4, .04, 6.8);
  for (const side of [-1, 1]) {
    const points = [[3, -.8], [5.7, .2], [13.2, 5.1], [12.2, 7.4], [5.5, 5.1], [3, 6.2]].map(([x, z]) => new T.Vector2(side * x, z));
    if (side < 0) points.reverse();
    const shape = new T.Shape(points);
    const wing = new T.ExtrudeGeometry(shape, { depth: .2, bevelEnabled: true, bevelSize: .09, bevelThickness: .07, bevelSegments: 3, steps: 1 });
    wing.rotateX(Math.PI / 2); wing.translate(0, -2.15, 0); add(wing, armor);
    // Inlaid strips and access plates lie on the wing's top surface.
    for (let i = 0; i < 6; i++) {
      box(trim, side * (4.5 + i * 1.15), -2.035, 1.2 + i * .65, .06, .025, 2.0);
      box(dark, side * (4.5 + i * 1.15), -2.02, 2.25 + i * .65, .72, .025, .65);
    }
    box(glow, side * 8.5, -2.015, 4.35, 4.5, .025, .055);
    box(side < 0 ? red : glow, side * 12.8, -2.0, 5.5, .18, .08, .6);
    box(trim, side * 2.5, -2.5, 7.7, 1.3, .65, 5.7);
    box(dark, side * 2.5, -2.45, 8.1, .9, .5, 5.5);
    box(glow, side * 2.5, -2.43, 10.91, .7, .25, .04);
    box(glow, side * .9, -2.02, 8, .035, .025, 5.3);
    const fin = new T.Shape([new T.Vector2(6, -2.1), new T.Vector2(10.6, -.15), new T.Vector2(12.8, -2.1)]);
    const finGeometry = new T.ExtrudeGeometry(fin, { depth: .15, bevelEnabled: true,bevelSize:.035,bevelThickness:.035,bevelSegments:2 });
    // Shape X becomes vessel Z; its height remains Y.
    finGeometry.rotateY(-Math.PI / 2); finGeometry.translate(side * 3.6, 0, 0); add(finGeometry, armor);
  }
  const decalCanvas=document.createElement('canvas');decalCanvas.width=1024;decalCanvas.height=256;const ctx=decalCanvas.getContext('2d')!;
  ctx.fillStyle='#c0c9c8';ctx.font='bold 106px monospace';ctx.fillText('AETHER / 01',18,111);ctx.font='20px monospace';ctx.fillText('DEEP SPACE EXPLORER     //     KEEP CLEAR',22,157);ctx.font='14px monospace';ctx.fillText('SERIAL AE-01 / PRESSURE CHECKED / NO STEP',22,183);
  ctx.fillStyle='#d7a85b';for(let i=0;i<23;i++){ctx.save();ctx.translate(i*48,212);ctx.transform(1,0,-.5,1,0,0);ctx.fillRect(0,0,21,23);ctx.restore();}
  const decalTexture=new T.CanvasTexture(decalCanvas);decalTexture.colorSpace=T.SRGBColorSpace;decalTexture.anisotropy=4;
  const decals=new T.MeshStandardMaterial({map:decalTexture,transparent:true,alphaTest:.2,roughness:.6,metalness:.2,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1});
  for(const side of [-1,1]){
    const label=new T.PlaneGeometry(2.35,.59);label.rotateZ(side*Math.PI/2);label.rotateX(-Math.PI/2);label.translate(side*7.2,-1.99,3.9);add(label,decals);
    for(let i=0;i<6;i++){
      const bolt=new T.SphereGeometry(.028,6,4);bolt.translate(side*(4.5+i*1.15),-1.985,2.25+i*.65);add(bolt,trim);
      box(dark,side*2.5,-2.02,7.1+i*.23,.7,.025,.07);
    }
    const turbine=new T.CylinderGeometry(.48,.58,2.4,18);turbine.rotateX(Math.PI/2);turbine.translate(side*2.5,-2.4,10.1);add(turbine,trim);
    const lip=new T.TorusGeometry(.48,.07,6,20);lip.translate(side*2.5,-2.4,11.3);add(lip,dark);
  }
  for(const side of [-1,1]){
    // Layered wing roots, inset service hatches and functional radiator louvers.
    for(let i=0;i<4;i++){
      box(armor,side*(4.2+i*1.3),-1.99,3.3+i*.53,1.02,.06,.72);
      box(dark,side*(4.2+i*1.3),-1.95,3.3+i*.53,.86,.016,.52);
      for(let j=0;j<7;j++)box(trim,side*(4.2+i*1.3),-1.934,3.08+i*.53+j*.07,.76,.012,.018);
    }
    for(let i=0;i<3;i++){
      const ring=new T.TorusGeometry(.46-i*.075,.025,6,24);ring.translate(side*2.5,-2.4,11.34+i*.014);add(ring,trim);
    }
    const core=new T.CircleGeometry(.24,24);core.translate(side*2.5,-2.4,11.37);add(core,glow);
    for(let i=0;i<12;i++){
      const angle=i*Math.PI/6,blade=new T.BoxGeometry(.2,.04,.025);blade.rotateZ(angle+.5);blade.translate(side*2.5+Math.cos(angle)*.33,-2.4+Math.sin(angle)*.33,11.36);add(blade,dark);
    }
  }
  for (const [material, parts] of batches) {
    const expanded = parts.map(g => g.index ? g.toNonIndexed() : g);
    const geometry = mergeGeometries(expanded)!;
    for (const g of new Set([...parts, ...expanded])) g.dispose();
    const mesh = new T.Mesh(geometry, material); mesh.castShadow=material!==glow&&material!==red&&material!==decals;mesh.receiveShadow=material!==glow&&material!==red;mesh.name = material === armor ? 'wing-and-hull-armor' : 'exterior-details'; group.add(mesh);
  }
  return {
    group,
    update(visible: boolean, speed: number) { group.visible = visible; glow.color.set('#a5d1dc').multiplyScalar(.6+Math.min(speed/1200,1)*.65); },
    dispose() { group.removeFromParent(); group.children.forEach(o => { const mesh = o as T.Mesh; mesh.geometry.dispose(); }); batches.forEach((_, m) => m.dispose());decalTexture.dispose(); },
  };
}
