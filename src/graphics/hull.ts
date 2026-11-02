import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/** Exterior surfaces sit below the windows and rotate with the vessel, not the passenger's gaze. */
export function createHull(ship: T.Group) {
  const group = new T.Group(); group.name = 'aether-exterior'; ship.add(group);
  const armor = new T.MeshStandardMaterial({ color: '#182632', metalness: .65, roughness: .58, side: T.DoubleSide });
  const trim = new T.MeshStandardMaterial({ color: '#58717d', metalness: .7, roughness: .4 });
  const dark = new T.MeshStandardMaterial({ color: '#080e17', metalness: .3, roughness: .8 });
  const glow = new T.MeshBasicMaterial({ color: '#64d4d8' });
  const red = new T.MeshBasicMaterial({ color: '#f08c81' });
  const batches = new Map<T.Material, T.BufferGeometry[]>();
  const add = (g: T.BufferGeometry, m: T.Material) => { const parts = batches.get(m) ?? []; parts.push(g); batches.set(m, parts); };
  const box = (m: T.Material, x: number, y: number, z: number, w: number, h: number, d: number, rz = 0) => {
    const g = new T.BoxGeometry(w, h, d); g.rotateZ(rz); g.translate(x, y, z); add(g, m);
  };
  const body = new T.SphereGeometry(1, 16, 10); body.scale(3.3, 1.05, 8); body.translate(0, -3.2, 4); add(body, armor);
  box(armor, 0, -2.3, 7, 2.4, .52, 8);
  box(dark, 0, -2.015, 7.5, 1.4, .04, 6.8);
  for (const side of [-1, 1]) {
    const points = [[3, -.8], [5.7, .2], [13.2, 5.1], [12.2, 7.4], [5.5, 5.1], [3, 6.2]].map(([x, z]) => new T.Vector2(side * x, z));
    if (side < 0) points.reverse();
    const shape = new T.Shape(points);
    const wing = new T.ExtrudeGeometry(shape, { depth: .2, bevelEnabled: true, bevelSize: .09, bevelThickness: .07, bevelSegments: 1, steps: 1 });
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
    const finGeometry = new T.ExtrudeGeometry(fin, { depth: .15, bevelEnabled: false });
    // Shape X becomes vessel Z; its height remains Y.
    finGeometry.rotateY(-Math.PI / 2); finGeometry.translate(side * 3.6, 0, 0); add(finGeometry, armor);
  }
  for (const [material, parts] of batches) {
    const expanded = parts.map(g => g.index ? g.toNonIndexed() : g);
    const geometry = mergeGeometries(expanded)!;
    for (const g of new Set([...parts, ...expanded])) g.dispose();
    const mesh = new T.Mesh(geometry, material); mesh.name = material === armor ? 'wing-and-hull-armor' : 'exterior-details'; group.add(mesh);
  }
  return {
    group,
    update(visible: boolean, speed: number) { group.visible = visible; glow.color.set('#64d4d8').multiplyScalar(.65 + Math.min(speed / 1200, 1) * .25); },
    dispose() { group.removeFromParent(); group.children.forEach(o => { const mesh = o as T.Mesh; mesh.geometry.dispose(); }); batches.forEach((_, m) => m.dispose()); },
  };
}
