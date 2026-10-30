import * as T from 'three';
import { createBodies } from './bodies';
import { qualityProfiles, regions, type Quality } from './config';
import { starVertex, starFragment, skyVertex, skyFragment, volumeVertex, volumeFragment } from './shaders';

/** GPU point fields, a distant galactic halo, and traversable ray-marched clouds. */
export function createSpace(scene: T.Scene) {
  const initial = regions[0];
  const atmosphere = new T.Scene();
  const target = new T.WebGLRenderTarget(1, 1, { type: T.HalfFloatType, depthBuffer: false });
  const reprojection = new T.Matrix3();
  const backdropUniforms = { sky: { value: target.texture }, reprojection: { value: reprojection }, tanHalf: { value: .6745 }, wideTanHalf: { value: .7554 }, aspect: { value: 1 } };
  const backdrop = new T.Mesh(new T.PlaneGeometry(2, 2), new T.ShaderMaterial({
    uniforms: backdropUniforms, depthTest: false, depthWrite: false,
    vertexShader: 'varying vec2 uvv;void main(){uvv=uv;gl_Position=vec4(position.xy,1.,1.);}',
    fragmentShader: `varying vec2 uvv;uniform sampler2D sky;uniform mat3 reprojection;uniform float tanHalf,wideTanHalf,aspect;
      void main(){vec3 ray=reprojection*vec3((uvv-.5)*2.*tanHalf*vec2(aspect,1.),-1.);
      vec2 sampleUV=ray.xy/max(.001,-ray.z)/(2.*wideTanHalf*vec2(aspect,1.))+.5;
      gl_FragColor=texture2D(sky,clamp(sampleUV,.001,.999));
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`,
  }));
  backdrop.frustumCulled = false; backdrop.renderOrder = -10; scene.add(backdrop);
  const atmosphereCamera = new T.PerspectiveCamera(75,1,.1,16000);
  const currentQ = new T.Quaternion(), renderedQ = new T.Quaternion(), relativeQ = new T.Quaternion();
  const cameraPosition = new T.Vector3(), cameraScale = new T.Vector3(), rotationMatrix = new T.Matrix4();
  const fieldPosition = new T.Vector3(), renderedPosition = new T.Vector3();
  let cacheDirty = true, renderedAt = -Infinity, interval = 1/24;
  const bodies = createBodies(scene);
  const palettes = regions.map(r => ({ tint: new T.Color(r.color), second: new T.Color(r.second), accent: new T.Color(r.accent) }));
  const shared = {
    time: { value: 0 }, tint: { value: palettes[0].tint.clone() },
    second: { value: palettes[0].second.clone() }, accent: { value: palettes[0].accent.clone() },
    density: { value: Number(initial.density) }, band: { value: Number(initial.band) },
    warmth: { value: Number(initial.warmth) }, abundance: { value: initial.stars / 1.4 },
    structure: { value: Number(initial.structure) }, bandWidth: { value: Number(initial.bandWidth) }, energy: { value: .9 }, octaves: { value: 3 }, halo: { value: 1 },
  };
  let seed = 7123;
  const random = () => { seed = seed * 16807 % 2147483647; return (seed - 1) / 2147483646; };
  const gaussian = () => Math.sqrt(-2 * Math.log(Math.max(.00001, random()))) * Math.cos(2 * Math.PI * random());
  const spans = [new T.Vector3(1900, 1400, 1900), new T.Vector3(5400, 4000, 5400), new T.Vector3(15000, 11000, 15000)];
  const fields = spans.map((span, layer) => {
    const count = qualityProfiles.High.stars[layer];
    const position = new Float32Array(count * 3), radius = new Float32Array(count);
    const temperature = new Float32Array(count), identity = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      let x = (random() - .5) * span.x, z = (random() - .5) * span.z;
      let y = (random() - .5) * span.y;
      if (layer > 0 && random() < .72) {
        // Dense, tilted galactic band with distributed cluster knots.
        if (random() < .28) {
          const cluster = Math.floor(random() * 4);
          x = (cluster % 2 ? .22 : -.24) * span.x + gaussian() * span.x * .045;
          z = (cluster < 2 ? -.27 : .22) * span.z + gaussian() * span.z * .055;
        }
        y = -.42 * x + gaussian() * span.y * .035 + Math.sin(z / span.z * 5) * span.y * .045;
      }
      position.set([x, y, z], i * 3);
      const rare = random();
      radius[i] = (rare > .987 ? 12 + random() * 14 : 1.3 + random() * 4.6) * [ .7, 1.1, 2 ][layer];
      temperature[i] = random(); identity[i] = random();
    }
    const geometry = new T.BufferGeometry();
    geometry.setAttribute('position', new T.BufferAttribute(position, 3));
    geometry.setAttribute('radius', new T.BufferAttribute(radius, 1));
    geometry.setAttribute('temperature', new T.BufferAttribute(temperature, 1));
    geometry.setAttribute('identity', new T.BufferAttribute(identity, 1));
    const material = new T.ShaderMaterial({
      uniforms: { ...shared, offset: { value: new T.Vector3() }, span: { value: span }, pixels: { value: 400 }, dpr: { value: 1 } },
      vertexShader: starVertex, fragmentShader: starFragment,
      transparent: true, depthWrite: false, blending: T.AdditiveBlending,
    });
    const points = new T.Points(geometry, material);
    // Vertices are periodically wrapped in the shader; CPU bounds are not valid.
    points.frustumCulled = false;
    points.renderOrder = 3;
    scene.add(points);
    return points;
  });
  const sky = new T.Mesh(new T.SphereGeometry(12500, 32, 16), new T.ShaderMaterial({
    uniforms: shared, vertexShader: skyVertex, fragmentShader: skyFragment,
    side: T.BackSide, depthWrite: false,
  }));
  sky.renderOrder = -2; sky.frustumCulled = false; atmosphere.add(sky);

  const volumeGeometry = new T.SphereGeometry(1, 24, 16);
  const layouts = [
    { center: new T.Vector3(-180, 110, -820), radii: new T.Vector3(680, 330, 770) },
    { center: new T.Vector3(600, -140, -1600), radii: new T.Vector3(1050, 480, 1000) },
    { center: new T.Vector3(-850, 220, -2400), radii: new T.Vector3(1200, 520, 1050) },
    { center: new T.Vector3(450, 420, 1200), radii: new T.Vector3(850, 600, 1000) },
  ];
  const volumes = layouts.map((layout, i) => {
    const material = new T.ShaderMaterial({
      uniforms: { ...shared, center: { value: layout.center.clone() }, radii: { value: layout.radii },
        steps: { value: 10 }, visibility: { value: 1 }, seed: { value: 4.3 + i * 9.7 } },
      vertexShader: volumeVertex, fragmentShader: volumeFragment,
      transparent: true, depthWrite: false, side: T.BackSide,
    });
    const mesh = new T.Mesh(volumeGeometry, material);
    mesh.position.copy(layout.center); mesh.scale.copy(layout.radii); mesh.renderOrder = 1;
    atmosphere.add(mesh);
    return mesh;
  });
  const hemisphere = new T.HemisphereLight('#b7c6ef', '#080e1d', 1.6); scene.add(hemisphere);
  const sun = new T.DirectionalLight('#dae6ff', 2.8); sun.position.set(-3, 4, 1); scene.add(sun);

  return {
    tint: shared.tint.value,
    renderAtmosphere(renderer: T.WebGLRenderer, camera: T.Camera, force = false) {
      camera.updateWorldMatrix(true, false);
      camera.matrixWorld.decompose(cameraPosition,currentQ,cameraScale);
      const perspective = camera as T.PerspectiveCamera;
      const tanHalf = Math.tan(T.MathUtils.degToRad(perspective.fov)*.5);
      if(backdropUniforms.aspect.value!==perspective.aspect || backdropUniforms.tanHalf.value!==tanHalf)cacheDirty=true;
      backdropUniforms.tanHalf.value=tanHalf;backdropUniforms.wideTanHalf.value=tanHalf*1.12;backdropUniforms.aspect.value=perspective.aspect;
      const now = performance.now()/1000;
      // Wide-FOV history is reprojected at display rate, so free-look never waits for a cloud refresh.
      if(force || cacheDirty || now-renderedAt>=interval || currentQ.angleTo(renderedQ)>.075 || fieldPosition.distanceToSquared(renderedPosition)>900){
        atmosphereCamera.fov=T.MathUtils.radToDeg(2*Math.atan(tanHalf*1.12));atmosphereCamera.aspect=perspective.aspect;
        atmosphereCamera.near=perspective.near;atmosphereCamera.far=perspective.far;atmosphereCamera.updateProjectionMatrix();
        atmosphereCamera.position.copy(cameraPosition);atmosphereCamera.quaternion.copy(currentQ);
        const toneMapping=renderer.toneMapping;renderer.toneMapping=T.NoToneMapping;
        renderer.setRenderTarget(target);renderer.render(atmosphere,atmosphereCamera);
        renderer.setRenderTarget(null);renderer.toneMapping=toneMapping;
        renderedQ.copy(currentQ);renderedPosition.copy(fieldPosition);renderedAt=performance.now()/1000;cacheDirty=false;
      }
      relativeQ.copy(renderedQ).invert().multiply(currentQ);rotationMatrix.makeRotationFromQuaternion(relativeQ);reprojection.setFromMatrix4(rotationMatrix);
    },
    dispose() {
      target.dispose(); bodies.dispose();
      const geometries = new Set<T.BufferGeometry>(), materials = new Set<T.Material>();
      atmosphere.traverse(object => { if(object instanceof T.Mesh) { geometries.add(object.geometry); materials.add(object.material as T.Material); } });
      geometries.forEach(g => g.dispose()); materials.forEach(m => m.dispose());
    },
    configure(quality: Quality, pixelRatio: number, width: number, height: number, bloom: number, hdr: boolean, performanceMode = false) {
      cacheDirty = true; interval = performanceMode ? 1/15 : quality==='Low' ? 1/20 : quality==='Medium' ? 1/24 : 1/30;
      const profile = qualityProfiles[quality]; bodies.configure(quality); shared.octaves.value = profile.octaves;
      const type = hdr && quality !== 'Low' ? T.HalfFloatType : T.UnsignedByteType;
      if (target.texture.type !== type) { target.dispose(); target.texture.type = type; }
      target.setSize(Math.max(1, Math.round(width * pixelRatio * (performanceMode ? .26 : profile.cloudScale))), Math.max(1, Math.round(height * pixelRatio * (performanceMode ? .26 : profile.cloudScale))));
      // Halos remain available on Low without a postprocessing render target.
      shared.halo.value = .75 + bloom * .8;
      fields.forEach((field, i) => {
        field.geometry.setDrawRange(0, profile.stars[i]);
        field.material.uniforms.pixels.value = height * .64 * pixelRatio;
        field.material.uniforms.dpr.value = pixelRatio;
      });
      volumes.forEach((volume, i) => { volume.visible = i < profile.volumes; volume.material.uniforms.steps.value = profile.steps; });
    },
    update(dt: number, time: number, region: number, position: T.Vector3, energy: number) {
      fieldPosition.copy(position); bodies.update(dt,time,region,position);
      const target = regions[region], palette = palettes[region], a = 1 - Math.exp(-dt * .55);
      shared.time.value = time;
      shared.tint.value.lerp(palette.tint, a); shared.second.value.lerp(palette.second, a); shared.accent.value.lerp(palette.accent, a);
      shared.density.value = T.MathUtils.lerp(shared.density.value, target.density, a);
      shared.band.value = T.MathUtils.lerp(shared.band.value, target.band, a);
      shared.structure.value = T.MathUtils.lerp(shared.structure.value, target.structure, a);
      shared.bandWidth.value = T.MathUtils.lerp(shared.bandWidth.value, target.bandWidth, a);
      shared.warmth.value = T.MathUtils.lerp(shared.warmth.value, target.warmth, a);
      shared.abundance.value = T.MathUtils.lerp(shared.abundance.value, target.stars / 1.4, a);
      shared.energy.value = T.MathUtils.lerp(shared.energy.value, energy, a);
      fields.forEach(field => field.material.uniforms.offset.value.copy(position));
      volumes.forEach((volume, i) => {
        const base = layouts[i].center;
        // Recycle only at the far boundary; fade to zero before wrapping.
        volume.position.set(
          T.MathUtils.euclideanModulo(base.x - position.x + 4600, 9200) - 4600,
          T.MathUtils.euclideanModulo(base.y - position.y + 3600, 7200) - 3600,
          T.MathUtils.euclideanModulo(base.z - position.z + 4600, 9200) - 4600,
        );
        volume.material.uniforms.center.value.copy(volume.position);
        const edge = Math.max(Math.abs(volume.position.x) / 4600, Math.abs(volume.position.y) / 3600, Math.abs(volume.position.z) / 4600);
        volume.material.uniforms.visibility.value = 1 - T.MathUtils.smoothstep(edge, .65, .95);
      });

    },
  };
}
