import { test, expect } from '@playwright/test';

test('six-axis travel reaches fixed landmarks and recreates the same sectors on return', async ({ page }) => {
  await page.route('**/travel-harness', r => r.fulfill({ contentType: 'text/html', body: '<html><body></body></html>' }));
  await page.goto('/travel-harness');
  const result = await page.evaluate(async () => {
    const T = await import('/node_modules/three/build/three.module.js');
    const { createUniverse, describeSector, SECTOR_SIZE } = await import('/src/graphics/universe.ts');
    const { FlightController } = await import('/src/controls.ts');
    const scene = new T.Scene(), world = createUniverse(scene), p = new T.Vector3();
    world.configure('Low'); world.update(.1, 0, 0, p);
    const group = () => scene.children.find(g => g.children[0]?.position.distanceTo(new T.Vector3()) < 8000);
    const originGroup = group();
    const snapshot = g => g.children.filter(o => o.userData.kind).map(o => ({
      position: o.position.clone().add(p).toArray(), radius: o.scale.x,
      color: o.material.uniforms.baseColor.value.getHex(), seed: o.material.uniforms.seed.value,
    }));
    const before = snapshot(originGroup), target = new T.Vector3(...before[0].position);
    const controller = new FlightController();
    controller.yaw = Math.atan2(-target.x, -target.z);
    controller.pitch = Math.asin(target.y / target.length());
    const settings = { mode: 'Manual Flight', started: true, paused: false, blocked: false, speed: 1200,
      reduced: false, motion: 0, sensitivity: 1, touchSensitivity: .7, invertMouseX: false, invertMouseY: false };
    const initialDistance = target.length();
    while (controller.position.length() < initialDistance - 200) controller.step(1 / 120, settings);
    p.copy(controller.position); world.update(.1, 0, 4, p);
    const reachedDistance = originGroup.children[0].position.length();
    const reachedWorldPosition = originGroup.children[0].position.clone().add(p).toArray();
    const counts = [], palettes = [];
    for (const direction of [[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]) {
      p.set(...direction).multiplyScalar(SECTOR_SIZE * 20);
      world.update(.1, 0, 2, p);
      counts.push(scene.children.length);
      palettes.push(describeSector(...direction.map(n => n * 20)).seed);
    }
    p.set(0, 0, 0); world.update(.1, 0, 3, p);
    const returned = scene.children.find(g => g.children[0]?.material.uniforms.seed.value === before[0].seed && g.children[0].position.distanceTo(target) < .001);
    const after = returned && snapshot(returned);
    world.dispose();
    return { before, after, counts, palettes, initialDistance, reachedDistance, reachedWorldPosition, remaining: scene.children.length };
  });
  expect(result.reachedDistance).toBeLessThan(210);
  expect(result.reachedDistance).toBeLessThan(result.initialDistance * .5);
  result.reachedWorldPosition.forEach((n,i)=>expect(n).toBeCloseTo(result.before[0].position[i],8));
  expect(result.after).toEqual(result.before);
  expect(new Set(result.palettes).size).toBe(6);
  expect(result.counts).toEqual(Array(6).fill(27));
  expect(result.remaining).toBe(0);
});
