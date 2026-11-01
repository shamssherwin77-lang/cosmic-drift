import * as T from 'three';
import { createBodies } from './bodies';

export const SECTOR_SIZE = 18000;
/** Coordinates, rather than visitation order, determine every landmark. */
export function sectorAt(position: T.Vector3) {
  return [position.x, position.y, position.z].map(n => Math.floor((n + SECTOR_SIZE / 2) / SECTOR_SIZE));
}
export function describeSector(x: number, y: number, z: number) {
  let seed = (Math.imul(x, 73856093) ^ Math.imul(y, 19349663) ^ Math.imul(z, 83492791) ^ 7123) >>> 0;
  const identity = seed;
  const random = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
  const home = x === 0 && y === 0 && z === 0;
  const region = home ? 0 : identity % 5;
  const heading = new T.Quaternion().setFromEuler(new T.Euler(random() * Math.PI * 2, random() * Math.PI * 2, random() * Math.PI * 2));
  if (home) heading.identity();
  return { key: `${x}/${y}/${z}`, seed: identity, region, heading, anchor: new T.Vector3(x, y, z).multiplyScalar(SECTOR_SIZE) };
}

/** A fixed pool bounds GPU memory. Evicted sectors are recreated identically. */
export function createUniverse(scene: T.Scene) {
  const slots = Array.from({ length: 27 }, () => ({ bodies: createBodies(scene), sector: null as ReturnType<typeof describeSector> | null }));
  let cell = '', quality = 'Medium';
  const assign = (position: T.Vector3) => {
    const [x, y, z] = sectorAt(position), key = `${x}/${y}/${z}`;
    if (key === cell) return;
    cell = key;
    const needed = new Map<string, ReturnType<typeof describeSector>>();
    for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) for (let dz = -1; dz <= 1; dz++) {
      const sector = describeSector(x + dx, y + dy, z + dz); needed.set(sector.key, sector);
    }
    for (const slot of slots) if (slot.sector && needed.has(slot.sector.key)) needed.delete(slot.sector.key); else slot.sector = null;
    for (const sector of needed.values()) {
      const slot = slots.find(s => !s.sector)!; slot.sector = sector;
      slot.bodies.reseed(sector.seed, sector.region, sector.anchor, sector.heading);
      // Settle layout and palette before the sector first becomes visible.
      slot.bodies.update(1000, 0, sector.region, position);
      slot.bodies.configure(quality);
    }
  };
  return {
    setJump(energy: number) { for (const slot of slots) slot.bodies.setJump(energy); },
    configure(value: string) { quality = value; for (const slot of slots) slot.bodies.configure(value); },
    update(dt: number, time: number, _region: number, position: T.Vector3) {
      assign(position);
      for (const slot of slots) {
        const sector = slot.sector!;
        slot.bodies.update(dt, time, sector.region, position);
        // Entire systems are invisible before entering/leaving the pool.
        // Individual bodies keep their own world coordinates and close-up fade.
        for (const object of slot.bodies.group.children) {
          const distance = object.position.length();
          const fade = 1 - T.MathUtils.smoothstep(distance, 10000, 13000);
          if (object instanceof T.Mesh) {
            const material = object.material as T.ShaderMaterial;
            if (material.uniforms?.alpha) material.uniforms.alpha.value *= fade;
            else if ('opacity' in material) material.opacity *= fade;
          }
          object.visible = object.visible && fade > 0;
        }
      }
    },
    dispose() { for (const slot of slots) slot.bodies.dispose(); },
  };
}
