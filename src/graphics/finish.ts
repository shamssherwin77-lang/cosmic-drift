import * as T from 'three';

/** Shared PBR finish: surface-scale seams, brushed microstructure and restrained edge wear. */
export function aerospaceFinish(material: T.MeshStandardMaterial, panelScale = 1) {
  material.onBeforeCompile = shader => {
    shader.uniforms.panelScale = { value: panelScale };
    shader.vertexShader = 'varying vec3 shipPoint,shipNormal;\n' + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nshipPoint=position;shipNormal=normal;');
    shader.fragmentShader = 'varying vec3 shipPoint,shipNormal;uniform float panelScale;\n' + shader.fragmentShader;
    shader.fragmentShader = shader.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
      vec3 dominant=abs(normalize(shipNormal));
      vec2 panelUV=dominant.y>dominant.x&&dominant.y>dominant.z?shipPoint.xz:dominant.x>dominant.z?shipPoint.zy:shipPoint.xy;
      panelUV*=panelScale;vec2 cell=abs(fract(panelUV)-.5);
      float seam=smoothstep(.478,.497,max(cell.x,cell.y));
      float grain=fract(sin(dot(floor(panelUV*470.),vec2(127.1,311.7)))*43758.5453);
      float brush=.5+.5*sin(panelUV.x*1900.+sin(panelUV.y*29.)*.2);
      float edge=smoothstep(.447,.471,max(cell.x,cell.y))*(1.-smoothstep(.474,.49,max(cell.x,cell.y)));
      diffuseColor.rgb*=.91+grain*.075+brush*.025;diffuseColor.rgb*=1.-seam*.62;
      diffuseColor.rgb+=vec3(.025,.033,.036)*edge*(.35+grain*.65);
    `);
    shader.fragmentShader = shader.fragmentShader.replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor=clamp(roughnessFactor+(grain-.5)*.085+seam*.24-edge*.12,.15,.95);');
  };
  material.customProgramCacheKey = () => 'aether-aerospace-pbr-v1';
  return material;
}
