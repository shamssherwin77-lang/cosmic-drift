import * as T from 'three';
import type { Quality } from './config';

/** One preallocated line draw call, with stable lanes and GPU-only travel. */
export function createJumpEffect(ship:T.Group){
  const count=780,lanes=new Float32Array(count*2*3),ends=new Float32Array(count*2),positions=new Float32Array(count*2*3);
  let seed=4171;const random=()=>{seed=seed*16807%2147483647;return(seed-1)/2147483646;};
  for(let i=0;i<count;i++){const angle=random()*Math.PI*2,radius=18+Math.pow(random(),1.3)*550,depth=random();for(let end=0;end<2;end++){lanes.set([Math.cos(angle)*radius,Math.sin(angle)*radius*.72,depth],(i*2+end)*3);ends[i*2+end]=end;}}
  const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(positions,3));geometry.setAttribute('lane',new T.BufferAttribute(lanes,3));geometry.setAttribute('endpoint',new T.BufferAttribute(ends,1));
  const uniforms={time:{value:0},energy:{value:0},tint:{value:new T.Color('#b7d8ef')}};
  const white=new T.Color('#d4ecfa');
  const material=new T.ShaderMaterial({uniforms,transparent:true,depthWrite:false,blending:T.AdditiveBlending,
    vertexShader:`attribute vec3 lane;attribute float endpoint;uniform float time,energy;varying float fade;
      void main(){float z=-12.-fract(lane.z+time)*800.;float trailLength=energy*(22.+energy*155.);
      vec3 p=vec3(lane.xy,z-endpoint*trailLength);fade=smoothstep(15.,65.,-z)*(1.-smoothstep(650.,810.,-z))*(.35+endpoint*.4);
      gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,
    fragmentShader:`uniform float energy;uniform vec3 tint;varying float fade;void main(){gl_FragColor=vec4(tint*1.35,fade*energy*.7);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,
  });
  const lines=new T.LineSegments(geometry,material);lines.name='light-jump-streaks';lines.frustumCulled=false;lines.renderOrder=3;ship.add(lines);let warm=true,travel=0;
  return {
    configure(quality:Quality,reduced:boolean){geometry.setDrawRange(0,(reduced?70:quality==='Low'?180:quality==='Medium'?420:780)*2);warm=true;},
    update(dt:number,energy:number,tint:T.Color){if(energy>0)travel+=dt*(.18+energy*1.7);uniforms.time.value=travel;uniforms.energy.value=energy;uniforms.tint.value.copy(tint).lerp(white,.7);lines.visible=energy>.001||warm;warm=false;},
  };
}
