import * as T from 'three';
import { systemLayout } from './system-layout';

const vertex = /* glsl */`
varying vec3 localPoint, surfaceNormal, worldPoint;
void main(){localPoint=position;worldPoint=(modelMatrix*vec4(position,1.)).xyz;surfaceNormal=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`;
const fragment = /* glsl */`
varying vec3 localPoint,surfaceNormal,worldPoint;
uniform vec3 baseColor,detailColor,lightDirection;
uniform float kind,alpha,seed,time;
float hash(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);}
float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+1.),f.x),f.y),f.z);}
void main(){
 if(alpha<.005)discard;
 if(kind>2.5){float activity=noise(localPoint*18.+seed+time*.012)*.55+noise(localPoint*47.+seed)*.15;float limb=sqrt(max(0.,dot(normalize(surfaceNormal),normalize(cameraPosition-worldPoint))));gl_FragColor=vec4(baseColor*(.8+activity)*(.62+limb*.7)*1.45,alpha);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 return;}
 vec3 p=localPoint;float n=noise(p*5.+seed),fine=noise(p*17.+seed);
 float bands=.5+.25*sin(p.y*55.+n*5.)+.16*sin(p.y*19.+fine*2.);
 float terrain=noise(p*3.+seed)*.6+n*.28+fine*.12;float land=smoothstep(.46,.6,terrain);
 float feature=kind>.5&&kind<1.5?bands:land;
 vec3 color=mix(baseColor,detailColor,feature*(kind>1.5?.5:.35));
 if(kind>1.5)color*=.67+fine*.43;
 if(kind<.5){float clouds=smoothstep(.63,.83,noise(p*9.+seed+8.));color=mix(color,vec3(.7,.8,.84),clouds*.15);}
 vec3 normal=normalize(surfaceNormal);float day=max(0.,dot(normal,normalize(lightDirection)));
 float rim=pow(1.-abs(dot(normal,normalize(cameraPosition-worldPoint))),3.);
 gl_FragColor=vec4(color*(.065+day*.92)+baseColor*rim*.07,alpha);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}
`;

/** A deterministic star system. Quality changes tessellation and asteroid count, never identity. */
export function createBodies(scene: T.Scene) {
  const group = new T.Group(); group.name = 'regional-celestial-bodies'; scene.add(group);
  const high = new T.SphereGeometry(1, 32, 20), low = new T.SphereGeometry(1, 16, 10), far = new T.SphereGeometry(1, 8, 6);
  const makeBody = (kind: number) => {
    const material = new T.ShaderMaterial({ uniforms: {
      baseColor: { value: new T.Color('#718fa6') }, detailColor: { value: new T.Color('#c7c6b0') }, kind: { value: kind },
      alpha: { value: 1 }, seed: { value: 1 }, time: { value: 0 }, lightDirection: { value: new T.Vector3(-.65, .4, .75) },
    }, vertexShader: vertex, fragmentShader: fragment, transparent: true, depthWrite: true });
    const mesh = new T.Mesh(high, material); mesh.renderOrder = 4; mesh.userData.kind = kind > 2.5 ? 'star' : kind > 1.5 ? 'rocky-body' : 'planet'; group.add(mesh); return mesh;
  };
  const planets = Array.from({ length: 12 }, () => makeBody(0));
  const moons = Array.from({ length: 8 }, (_, i) => { const mesh = makeBody(2); mesh.userData.kind = 'moon'; return { mesh, parent: i }; });
  const star = makeBody(3); star.name = 'primary-star';
  const glow = new T.Mesh(new T.PlaneGeometry(1, 1), new T.ShaderMaterial({
    uniforms: { baseColor: { value: new T.Color() }, alpha: { value: 1 } }, transparent: true, depthWrite: false, blending: T.AdditiveBlending,
    vertexShader: `varying vec2 vUv;void main(){vUv=uv;vec4 center=modelViewMatrix*vec4(0.,0.,0.,1.);vec2 size=vec2(length(modelMatrix[0].xyz),length(modelMatrix[1].xyz));center.xy+=position.xy*size;gl_Position=projectionMatrix*center;}`,
    fragmentShader: `varying vec2 vUv;uniform vec3 baseColor;uniform float alpha;void main(){float r=length(vUv-.5)*2.;float a=exp(-r*r*7.)*(1.-smoothstep(.7,1.,r));gl_FragColor=vec4(baseColor*1.3,a*alpha*.45);}`,
  })); glow.name = 'stellar-corona'; glow.frustumCulled = false; glow.renderOrder = 3.5; group.add(glow);
  const ring = new T.Mesh(new T.RingGeometry(1.32, 2.2, 64), new T.ShaderMaterial({
    uniforms: { color: { value: new T.Color('#b8afa0') }, alpha: { value: 1 } }, transparent: true, depthWrite: false, side: T.DoubleSide,
    vertexShader: 'varying vec2 p;void main(){p=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: `varying vec2 p;uniform vec3 color;uniform float alpha;void main(){float r=length(p);float edge=smoothstep(1.32,1.42,r)*(1.-smoothstep(2.05,2.2,r));float bands=.35+.25*sin(r*180.)+.2*sin(r*47.);gl_FragColor=vec4(color*.7,edge*max(.1,bands)*alpha);}`,
  })); ring.name = 'planetary-ring'; ring.renderOrder = 5; group.add(ring);
  const ringTilt = new T.Quaternion().setFromEuler(new T.Euler(1.12, .2, -.27));
  const rockMaterial = new T.MeshStandardMaterial({ color: '#7a858d', roughness: 1, transparent: true });
  const rocks = new T.InstancedMesh(new T.IcosahedronGeometry(1, 0), rockMaterial, 96); rocks.name = 'distant-rock-cluster'; group.add(rocks);
  const anchor = new T.Vector3(), orientation = new T.Quaternion(), relative = new T.Vector3(), moonOffset = new T.Vector3();
  let layout = systemLayout(7123, 0), activeSeed = 7123, activeRegion = 0, initialized = false, quality = 'Medium', jumpEnergy = 0;
  const reseed = (seed: number, region: number, position: T.Vector3, heading?: T.Quaternion) => {
    activeSeed = seed; activeRegion = region; layout = systemLayout(seed, region); initialized = true;
    anchor.copy(position); heading ? orientation.copy(heading) : orientation.identity(); group.userData.systemName = layout.name;
    planets.forEach((planet, i) => {
      const body = layout.planets[i], u = planet.material.uniforms;
      u.baseColor.value.copy(body.color); u.detailColor.value.copy(body.color).lerp(new T.Color('#d0d0b0'), .5);
      u.seed.value = body.seed; u.kind.value = body.kind;
      u.lightDirection.value.copy(layout.center).sub(body.position).applyQuaternion(orientation).normalize();
      planet.userData.kind = body.kind === 2 ? 'rocky-body' : 'planet';
    });
    moons.forEach(({ mesh, parent }, i) => {
      mesh.material.uniforms.baseColor.value.copy(layout.planets[parent].color).lerp(new T.Color('#a4a5ac'), .7);
      mesh.material.uniforms.detailColor.value.set('#b7b4ab'); mesh.material.uniforms.seed.value = layout.planets[parent].seed + i * 3.1;
    });
    star.material.uniforms.baseColor.value.copy(layout.starColor); star.material.uniforms.seed.value = seed % 1000;
    glow.material.uniforms.baseColor.value.copy(layout.starColor);
    ring.material.uniforms.color.value.copy(layout.planets[1].color).lerp(new T.Color('#e5d5b1'), .5);
    let state = (seed ^ 0x51a7) >>> 0;
    const random = () => { state = (Math.imul(state, 1664525) + 1013904223) >>> 0; return state / 4294967296; };
    const dummy = new T.Object3D();
    for (let i = 0; i < 96; i++) {
      const angle = random() * Math.PI * 2, radius = 2300 + random() * 650;
      dummy.position.set(Math.cos(angle) * radius, (random() - .5) * 160, Math.sin(angle) * radius);
      dummy.rotation.set(random() * 3, random() * 3, random() * 3); const size = 5 + random() * 13; dummy.scale.set(size, size * .7, size * 1.15);
      dummy.updateMatrix(); rocks.setMatrixAt(i, dummy.matrix);
    }
    rocks.instanceMatrix.needsUpdate = true; rocks.computeBoundingSphere();
  };
  const place = (mesh: T.Mesh, center: T.Vector3, radius: number, position: T.Vector3) => {
    mesh.position.copy(center).applyQuaternion(orientation).add(anchor).sub(position); mesh.scale.setScalar(radius);
  };
  return {
    group,
    reseed,
    setJump(value: number) { jumpEnergy = value; },
    configure(value: string) { quality = value; rocks.count = value === 'Low' ? 48 : value === 'Medium' ? 72 : 96; },
    update(_dt: number, time: number, region: number, position: T.Vector3) {
      if (!initialized || region !== activeRegion) reseed(activeSeed, region, anchor.clone(), orientation.clone());
      const visibility = 1 - T.MathUtils.smoothstep(jumpEnergy, .12, .65);
      planets.forEach((planet, i) => {
        const body = layout.planets[i]; planet.visible = i < layout.count;
        place(planet, body.position, body.radius, position); planet.rotation.y = time * .002 + i * .5;
        planet.geometry = planet.position.lengthSq() > 6000 ** 2 ? far : quality === 'High' ? high : low;
        planet.material.uniforms.alpha.value = T.MathUtils.smoothstep(planet.position.length() / body.radius, 1.05, 1.4) * visibility;
      });
      moons.forEach(({ mesh, parent }, i) => {
        const planet = planets[parent], radius = layout.planets[parent].radius;
        mesh.visible = planet.visible; mesh.geometry = planet.geometry;
        moonOffset.set(radius * (2.2 + i * .12), radius * .6, radius * .7).applyQuaternion(orientation);
        mesh.position.copy(planet.position).add(moonOffset); mesh.scale.setScalar(Math.max(12, radius * .18));
        mesh.material.uniforms.alpha.value = planet.material.uniforms.alpha.value;
      });
      place(star, layout.center, layout.starRadius, position); star.geometry = quality === 'High' ? high : low; star.visible = true;star.material.uniforms.time.value=time;
      star.material.uniforms.alpha.value = T.MathUtils.smoothstep(star.position.length() / layout.starRadius, 1.05, 1.4) * visibility;
      glow.position.copy(star.position); glow.scale.setScalar(layout.starRadius * 8); glow.visible = true; glow.material.uniforms.alpha.value = star.material.uniforms.alpha.value;
      ring.visible = true; ring.position.copy(planets[1].position); ring.scale.setScalar(layout.planets[1].radius); ring.quaternion.copy(orientation).multiply(ringTilt); ring.material.uniforms.alpha.value = planets[1].material.uniforms.alpha.value;
      relative.copy(layout.center).applyQuaternion(orientation).add(anchor).sub(position); rocks.position.copy(relative); rocks.quaternion.copy(orientation); rocks.visible = true; rockMaterial.opacity = visibility;
    },
    dispose() {
      group.removeFromParent(); rocks.dispose();
      const geometries = new Set<T.BufferGeometry>([high, low, far]), materials = new Set<T.Material>();
      group.traverse(o => { if (o instanceof T.Mesh) { geometries.add(o.geometry); for (const m of Array.isArray(o.material) ? o.material : [o.material]) materials.add(m); } });
      geometries.forEach(g => g.dispose()); materials.forEach(m => m.dispose());
    },
  };
}
