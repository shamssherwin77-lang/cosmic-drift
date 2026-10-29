import * as T from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { bindFlightInput, FlightController, type ControlSettings } from './controls';
import { createSpace } from './graphics/space';
import { createCockpit } from './graphics/cockpit';
import { lightingProfiles, qualityProfiles, regions, type GraphicsSettings } from './graphics/config';
export { regions } from './graphics/config';

export type Flight = ControlSettings & GraphicsSettings & { region: number; cockpit: boolean };

export function createScene(el: HTMLDivElement, get: () => Flight, controller: FlightController, joystick: HTMLElement) {
  const renderer = new T.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setClearColor('#040710');
  renderer.outputColorSpace = T.SRGBColorSpace;
  renderer.toneMapping = T.ACESFilmicToneMapping;
  renderer.toneMappingExposure = lightingProfiles.Balanced.exposure;
  el.appendChild(renderer.domElement);
  const scene = new T.Scene();
  const camera = new T.PerspectiveCamera(68, 1, .1, 16000);
  const ship = new T.Group(); ship.position.z = 5; ship.add(camera); scene.add(ship);
  const space = createSpace(scene);
  const cockpit = createCockpit(ship);
  const input = bindFlightInput(renderer.domElement, joystick, controller, get);
  const clock = new T.Clock();
  let frame = 0, time = 0, pausedRenderTime = 0, configuration = '', disposed = false;
  let composer: EffectComposer | null = null, bloomPass: UnrealBloomPass | null = null;
  const disposeComposer = () => {
    if (!composer) return;
    composer.passes.forEach(pass => pass.dispose()); composer.dispose(); composer = null; bloomPass = null;
  };
  const configure = () => {
    const s = get(), profile = qualityProfiles[s.quality];
    const width = Math.max(1, el.clientWidth), height = Math.max(1, el.clientHeight);
    const ratio = Math.min(window.devicePixelRatio || 1, profile.pixelRatio);
    renderer.setPixelRatio(ratio); renderer.setSize(width, height);
    camera.aspect = width / height; camera.updateProjectionMatrix();
    // Mobile Low uses shader halos and direct rendering, avoiding HDR targets.
    const needsBloom = profile.bloom && s.bloom > 0 && renderer.extensions.has('EXT_color_buffer_float');
    if (needsBloom && !composer) {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      bloomPass = new UnrealBloomPass(new T.Vector2(width, height), .2, .55, 1.1);
      composer.addPass(bloomPass); composer.addPass(new OutputPass());
    } else if (!needsBloom) disposeComposer();
    if (composer) { composer.setPixelRatio(ratio); composer.setSize(width, height); }
    space.configure(s.quality, ratio, width, height, s.bloom, renderer.extensions.has('EXT_color_buffer_float'));
    configuration = `${s.quality}/${s.bloom}`;
  };
  window.addEventListener('resize', configure); configure();
  const animate = () => {
    if (disposed) return;
    frame = requestAnimationFrame(animate);
    const delta = clock.getDelta(), dt = delta > .25 ? 0 : Math.min(delta, .1), s = get();
    const graphicsDt = Math.min(delta, .25);
    input.sync(); controller.step(dt, s);
    if (configuration !== `${s.quality}/${s.bloom}`) configure();
    if (!s.paused) time += dt;
    const lighting = lightingProfiles[s.lighting];
    // Scene-guided exposure adapts gradually, never flashes at a region change.
    renderer.toneMappingExposure = T.MathUtils.damp(renderer.toneMappingExposure, lighting.exposure * regions[s.region].exposure, .8, graphicsDt);
    space.update(graphicsDt, time, s.region, controller.position, lighting.nebula);
    ship.quaternion.copy(controller.shipQuaternion); camera.quaternion.copy(controller.lookQuaternion);
    cockpit.update(space.tint, lighting.cabin, s.mode === 'Meditation', s.cockpit);
    if (bloomPass) bloomPass.strength = s.bloom * (s.mode === 'Meditation' ? .45 : .8);
    // A paused scene has no flight animation; keep transitions responsive at 15 FPS.
    pausedRenderTime += delta;
    if (s.paused && pausedRenderTime < 1 / 15) return;
    pausedRenderTime = 0;
    space.renderAtmosphere(renderer, camera);
    if (composer) composer.render(); else renderer.render(scene, camera);
  };
  animate();
  return () => {
    disposed = true; cancelAnimationFrame(frame); input.dispose(); window.removeEventListener('resize', configure);
    disposeComposer(); cockpit.dispose(); space.dispose();
    const geometries = new Set<T.BufferGeometry>(), materials = new Set<T.Material>();
    scene.traverse(object => {
      if (object instanceof T.Mesh || object instanceof T.Points) {
        geometries.add(object.geometry);
        for (const material of Array.isArray(object.material) ? object.material : [object.material]) materials.add(material);
      }
    });
    geometries.forEach(geometry => geometry.dispose()); materials.forEach(material => material.dispose());
    renderer.dispose(); renderer.domElement.remove();
  };
}
