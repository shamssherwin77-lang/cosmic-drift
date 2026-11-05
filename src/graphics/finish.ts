import * as T from 'three';

/** Filtered machining detail: flat access panels, satin brushing and sparse edge wear. */
export function aerospaceFinish(material: T.MeshStandardMaterial, panelScale = 1) {
  material.onBeforeCompile = shader => {
    shader.uniforms.panelScale = { value: panelScale };
    shader.vertexShader = 'varying vec3 shipPoint,shipNormal;\n' + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nshipPoint=position;shipNormal=normal;');
    shader.fragmentShader = 'varying vec3 shipPoint,shipNormal;uniform float panelScale;\n' + shader.fragmentShader;
    shader.fragmentShader = shader.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
      vec3 dominant=abs(normalize(shipNormal));
      vec2 panelUV=dominant.y>dominant.x&&dominant.y>dominant.z?shipPoint.xz:dominant.x>dominant.z?shipPoint.zy:shipPoint.xy;
      panelUV*=panelScale;vec2 plateUV=panelUV*vec2(.48,1.1);
      vec2 border=.5-abs(fract(plateUV)-.5),aa=max(fwidth(plateUV),vec2(.0004));
      float planar=smoothstep(.91,.995,max(dominant.x,max(dominant.y,dominant.z)));
      float seam=(1.-smoothstep(.002,.002+max(aa.x,aa.y),min(border.x,border.y)))*planar;
      float edge=(1.-smoothstep(.003,.014,min(border.x,border.y)))*planar*(1.-seam);
      float grain=fract(sin(dot(floor(panelUV*220.),vec2(127.1,311.7)))*43758.5453);
      float brushAA=1.-smoothstep(.25,1.2,fwidth(panelUV.x)*650.);
      float brush=sin(panelUV.x*4084.+sin(panelUV.y*21.)*.12)*brushAA;
      vec2 wearCell=floor(panelUV*vec2(12.,3.));float wear=fract(sin(dot(wearCell,vec2(41.7,289.1)))*43758.5453);
      float scratch=step(.988,wear)*(1.-smoothstep(.001,.006,abs(fract(panelUV.y*3.)-.47)));
      diffuseColor.rgb*=.975+(grain-.5)*.025+brush*.012-seam*.43;
      diffuseColor.rgb+=vec3(.026,.027,.024)*edge+vec3(.035)*scratch;
    `);
    shader.fragmentShader = shader.fragmentShader.replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor=clamp(roughnessFactor+(grain-.5)*.035+brush*.012+seam*.14-edge*.055,.14,.96);');
  };
  material.customProgramCacheKey = () => 'aether-machined-satin-v2';
  return material;
}
