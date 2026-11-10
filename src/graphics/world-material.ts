import {ShaderMaterial,type ShaderMaterialParameters} from 'three';

/** Custom world shaders must use the same depth encoding as Three's built-in materials. */
export class WorldShaderMaterial extends ShaderMaterial{
 constructor(parameters:ShaderMaterialParameters & {rayDepth?:boolean}){
  const {rayDepth,...options}=parameters;
  const wrap=(source:string,name:string,pars:string,body:string)=>`#include <${pars}>\n${source.replace(/void\s+main\s*\(\s*\)\s*\{/,`void ${name}(){`)}\nvoid main(){\n${name}();\n${body}\n}`;
  super({...options,
   vertexShader:wrap('#include <common>\n'+options.vertexShader!,'worldVertex','logdepthbuf_pars_vertex','#include <logdepthbuf_vertex>'),
   fragmentShader:wrap(options.fragmentShader!,'worldFragment','logdepthbuf_pars_fragment',rayDepth?'':'#include <logdepthbuf_fragment>'),
  });
 }
}
