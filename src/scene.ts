import * as T from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { bindFlightInput, FlightController, type ControlSettings } from './controls';
import { advanceFlight, FrameBudget } from './frame-budget';
import { LightJump, type JumpPhase } from './light-jump';
import { createJumpEffect } from './graphics/jump-effect';
import { createSpace } from './graphics/space';
import { createCockpit } from './graphics/cockpit';
import { lightingProfiles, qualityProfiles, regions, type GraphicsSettings } from './graphics/config';
export { regions } from './graphics/config';

export type Flight = ControlSettings & GraphicsSettings & { region: number; cockpit: boolean; worldSeed?: number };

export type JumpEvents={jump?:LightJump;onPhase?:(phase:JumpPhase)=>void;onDestination?:(region:number,seed:number)=>void;onAudio?:(energy:number,charge:number,paused:boolean)=>void};
export function createScene(el: HTMLDivElement, get: () => Flight, controller: FlightController, joystick: HTMLElement, events:JumpEvents = {}) {
  const renderer = new T.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setClearColor('#040710');
  renderer.outputColorSpace = T.SRGBColorSpace;
  renderer.toneMapping = T.ACESFilmicToneMapping;
  renderer.toneMappingExposure = lightingProfiles.Balanced.exposure;
  el.appendChild(renderer.domElement);
  const scene = new T.Scene();
  const camera = new T.PerspectiveCamera(68, 1, .1, 16000);
  const ship = new T.Group(); ship.position.z = 5; ship.add(camera); scene.add(ship);
  const jump=events.jump ?? new LightJump();let lastPhase=jump.phase;
  const runtime={...get()};
  const readInput=()=>{Object.assign(runtime,get());runtime.blocked=runtime.blocked||jump.busy;return runtime;};
  const space = createSpace(scene);
  const jumpEffect=createJumpEffect(ship),cabinTint=new T.Color(),jumpWhite=new T.Color('#bad9f3');
  const cockpit = createCockpit(ship);
  const input = bindFlightInput(renderer.domElement, joystick, controller, readInput);
  const clock = new T.Clock(), budget = new FrameBudget();
  let lastQuality = get().quality, lastPerformance = get().performanceMode, lastAdaptive = get().adaptive;
  let frame = 0, time = 0, pausedRenderTime = 0, configuration = '', disposed = false;
  let composer: EffectComposer | null = null, bloomPass: UnrealBloomPass | null = null;
  const disposeComposer = () => {
    if (!composer) return;
    composer.passes.forEach(pass => pass.dispose()); composer.dispose(); composer = null; bloomPass = null;
  };
  const configure = () => {
    const s = get(), effectiveQuality = s.performanceMode ? 'Low' : s.quality, profile = qualityProfiles[effectiveQuality];
    const width = Math.max(1, el.clientWidth), height = Math.max(1, el.clientHeight);
    const ratio = Math.min(window.devicePixelRatio || 1, profile.pixelRatio) * (s.performanceMode ? .85 : s.adaptive ? budget.scale : 1);
    renderer.setPixelRatio(ratio); renderer.setSize(width, height);
    camera.aspect = width / height; camera.updateProjectionMatrix();
    // Mobile Low uses shader halos and direct rendering, avoiding HDR targets.
    const needsBloom = !s.performanceMode && profile.bloom && s.bloom > 0 && renderer.extensions.has('EXT_color_buffer_float');
    if (needsBloom && !composer) {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      bloomPass = new UnrealBloomPass(new T.Vector2(width, height), .2, .55, 1.1);
      composer.addPass(bloomPass); composer.addPass(new OutputPass());
    } else if (!needsBloom) disposeComposer();
    if (composer) { composer.setPixelRatio(ratio); composer.setSize(width, height); }
    space.configure(effectiveQuality, ratio, width, height, s.bloom, renderer.extensions.has('EXT_color_buffer_float'), s.performanceMode);
    jumpEffect.configure(effectiveQuality,s.reduced);
    configuration = `${s.quality}/${s.bloom}/${s.performanceMode}/${s.adaptive}/${s.reduced}`;
  };
  const visibility=()=>{clock.getDelta();controller.reset(true);events.onAudio?.(0,0,true);};
  document.addEventListener('visibilitychange',visibility);
  window.addEventListener('resize', configure); configure();
  const animate = () => {
    if (disposed) return;
    frame = requestAnimationFrame(animate);
    const delta = clock.getDelta(), dt = delta > .25 ? 0 : delta, s = get();
    if(document.hidden){controller.reset(true);return;}
    const graphicsDt = Math.min(delta, .25);
    jump.advance(delta,s.paused);
    if(jump.phase!==lastPhase){lastPhase=jump.phase;events.onPhase?.(jump.phase);}
    if(jump.justCommitted){space.reseed(jump.seed,jump.destination,controller.position,controller.shipQuaternion);events.onDestination?.(jump.destination,jump.seed);}
    const renderRegion=jump.busy&&jump.committed?jump.destination:s.region;
    const visualEnergy=jump.energy*(s.reduced?.16:s.mode==='Meditation'?.55:1);
    input.sync();readInput();
    if(jump.busy){runtime.mode='Autopilot';runtime.motion=0;runtime.started=true;runtime.speed=s.speed+Math.pow(jump.energy,2)*(s.reduced?100:360);}
    advanceFlight(controller,delta,runtime);
    events.onAudio?.(visualEnergy,jump.charge,s.paused);

    if(s.quality!==lastQuality || s.performanceMode!==lastPerformance || s.adaptive!==lastAdaptive){
      budget.reset();lastQuality=s.quality;lastPerformance=s.performanceMode;lastAdaptive=s.adaptive;
    }
    const resized=budget.observe(delta,s.adaptive && !s.performanceMode,s.paused);
    if (configuration !== `${s.quality}/${s.bloom}/${s.performanceMode}/${s.adaptive}/${s.reduced}` || resized) configure();
    if (!s.paused) time += dt;
    const lighting = lightingProfiles[s.lighting];
    // Scene-guided exposure adapts gradually, never flashes at a region change.
    renderer.toneMappingExposure = T.MathUtils.damp(renderer.toneMappingExposure, lighting.exposure * regions[renderRegion].exposure, .8, graphicsDt);
    space.setJump(visualEnergy,jump.veil);
    space.update(graphicsDt, time, renderRegion, controller.position, lighting.nebula);
    ship.quaternion.copy(controller.shipQuaternion); camera.quaternion.copy(controller.lookQuaternion);
    cabinTint.copy(space.tint).lerp(jumpWhite,jump.charge*.3);
    cockpit.update(cabinTint, lighting.cabin*(1+jump.charge*.12), s.mode === 'Meditation', s.cockpit);
    jumpEffect.update(s.paused?0:Math.min(delta,.1),visualEnergy,space.tint);
    if (bloomPass) bloomPass.strength = s.bloom * (s.mode === 'Meditation' ? .45 : .8+visualEnergy*.2);
    // A paused scene has no flight animation; keep transitions responsive at 15 FPS.
    pausedRenderTime += delta;
    if (s.paused && pausedRenderTime < 1 / 15) return;
    pausedRenderTime = 0;
    space.renderAtmosphere(renderer, camera);
    if (composer) composer.render(); else renderer.render(scene, camera);
  };
  animate();
  return () => {
    disposed = true; cancelAnimationFrame(frame); input.dispose(); window.removeEventListener('resize', configure);document.removeEventListener('visibilitychange',visibility);
    events.onAudio?.(0,0,true);disposeComposer(); cockpit.dispose(); space.dispose();
    const geometries = new Set<T.BufferGeometry>(), materials = new Set<T.Material>();
    scene.traverse(object => {
      if (object instanceof T.Mesh || object instanceof T.Points || object instanceof T.Line) {
        geometries.add(object.geometry);
        for (const material of Array.isArray(object.material) ? object.material : [object.material]) materials.add(material);
      }
    });
    geometries.forEach(geometry => geometry.dispose()); materials.forEach(material => material.dispose());
    renderer.dispose(); renderer.domElement.remove();
  };
}
