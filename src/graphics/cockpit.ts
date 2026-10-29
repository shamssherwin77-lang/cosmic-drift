import * as T from 'three';

/** Physical cabin geometry and local light; independent of flight orientation. */
export function createCockpit(ship: T.Group) {
  const cabin = new T.Group(); ship.add(cabin);
  const metal = new T.MeshStandardMaterial({ color: '#35434e', metalness: .65, roughness: .48, emissive: '#314454', emissiveIntensity: .035 });
  const trim = new T.MeshStandardMaterial({ color: '#64737f', metalness: .8, roughness: .35 });
  const dark = new T.MeshStandardMaterial({ color: '#121e29', metalness: .35, roughness: .65 });
  const edge = new T.MeshBasicMaterial({ color: '#9bb9d1' });
  function box(x: number, y: number, z: number, w: number, h: number, d: number, material: T.Material, tilt = 0) {
    const mesh = new T.Mesh(new T.BoxGeometry(w, h, d), material);
    mesh.position.set(x, y, z); mesh.rotation.z = tilt; cabin.add(mesh); return mesh;
  }
  // Keep the main aperture wide; use narrow illuminated inner bevels.
  box(-2.55, 0, -2.4, .14, 4, .3, metal, -.2);
  box(2.55, 0, -2.4, .14, 4, .3, metal, .2);
  box(-2.46, 0, -2.31, .012, 3.8, .025, edge, -.2);
  box(2.46, 0, -2.31, .012, 3.8, .025, edge, .2);
  box(0, 1.76, -2.4, 6.8, .17, .35, metal);
  box(0, 1.66, -2.25, 6.6, .014, .03, edge);
  box(0, -1.63, -2.1, 7, .45, .7, metal);
  box(0, -1.39, -2.18, 6.7, .035, .07, trim);
  box(0, -1.365, -2.08, 6.35, .011, .018, edge);
  const console = box(0, -1.42, -2.35, 2.3, .2, .68, dark);
  console.rotation.x = .12;
  const screenTexture = document.createElement('canvas'); screenTexture.width = 512; screenTexture.height = 128;
  const ctx = screenTexture.getContext('2d')!;
  ctx.fillStyle = '#0b1823'; ctx.fillRect(0, 0, 512, 128);
  ctx.strokeStyle = '#42616d'; ctx.lineWidth = 1;
  for (let x = 14; x < 512; x += 24) { ctx.beginPath(); ctx.moveTo(x, 30); ctx.lineTo(x, 118); ctx.stroke(); }
  ctx.strokeStyle = '#a2d5dd'; ctx.beginPath(); ctx.arc(70, 70, 31, .3, Math.PI * 1.8); ctx.stroke();
  ctx.fillStyle = '#b7dce2'; ctx.font = '12px monospace'; ctx.fillText('AETHER / EXPLORATION SYSTEMS', 125, 35);
  ctx.font = '9px monospace'; ctx.fillText('NAVIGATION  /  STABLE', 125, 65); ctx.fillText('LIFE SUPPORT  /  NOMINAL', 125, 88);
  ctx.fillStyle = '#5c989f'; ctx.fillRect(125, 104, 240, 2);
  const texture = new T.CanvasTexture(screenTexture); texture.colorSpace = T.SRGBColorSpace;
  const screenMaterial = new T.MeshBasicMaterial({ map: texture, color: '#c4d8e4', transparent: true, opacity: .9 });
  const display = new T.Mesh(new T.PlaneGeometry(1.7, .35), screenMaterial);
  display.position.set(0, -1.245, -2.27); display.rotation.x = -.5; cabin.add(display);
  for (const side of [-1, 1]) {
    const wing = box(side * 1.5, -1.42, -2.4, .62, .12, .48, dark);
    wing.rotation.z = side * .08;
    for (let i = 0; i < 4; i++) box(side * (1.31 + i * .1), -1.35, -2.24, .045, .013, .065, i === 0 ? edge : trim);
  }
  const key = new T.PointLight('#c2d6e6', 4, 8, 1.5); key.position.set(0, .5, .5); cabin.add(key);
  const rim = new T.PointLight('#ae80f0', 3, 7, 1.5); rim.position.set(0, .3, -2); cabin.add(rim);
  return {
    group: cabin,
    update(tint: T.Color, brightness: number, meditation: boolean, visible: boolean) {
      cabin.visible = visible;
      const dim = meditation ? .42 : 1;
      key.intensity = 4 * brightness * dim;
      rim.color.copy(tint); rim.intensity = 3 * brightness * dim;
      metal.emissive.copy(tint); metal.emissiveIntensity = .035 * brightness * dim;
      edge.color.copy(tint).lerpColors(tint, key.color, .45).multiplyScalar(.65 * brightness * dim);
      screenMaterial.color.copy(edge.color); screenMaterial.opacity = meditation ? .3 : .9;
    },
    dispose() { texture.dispose(); },
  };
}
