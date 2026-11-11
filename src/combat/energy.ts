import * as T from 'three';
import {WorldShaderMaterial} from '../graphics/world-material';
/** Analytic soft light: visible even on Low, without bloom or downloaded textures. */
export function energyMaterial(orb=false){return new WorldShaderMaterial({
 uniforms:{clock:{value:0}},transparent:true,depthWrite:false,blending:T.AdditiveBlending,side:T.DoubleSide,toneMapped:false,
 vertexShader:`varying vec2 energyUV;varying vec3 energyColor;void main(){energyUV=uv;energyColor=instanceColor;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}`,
 fragmentShader:`varying vec2 energyUV;varying vec3 energyColor;uniform float clock;
 void main(){vec2 p=energyUV*2.-1.;float brightness,alpha;
 ${orb?`float r=length(p);if(r>1.)discard;float a=atan(p.y,p.x);float edge=.48+.045*sin(a*7.+clock*11.)+.025*sin(a*13.-clock*8.);float shell=exp(-pow((r-edge)*10.,2.));float core=exp(-r*r*28.);float halo=exp(-r*r*4.2)*(1.-smoothstep(.7,1.,r));brightness=core*2.+shell*.55+halo*.55;alpha=clamp(core+shell*.65+halo,0.,1.);`
 :`float core=exp(-p.x*p.x*160.);float halo=exp(-p.x*p.x*8.);float ends=smoothstep(0.,.08,energyUV.y)*(1.-smoothstep(.85,1.,energyUV.y));brightness=(core*2.+halo*.5)*ends;alpha=clamp((core+halo*.6)*ends,0.,1.);`}
 gl_FragColor=vec4(energyColor*brightness+vec3(pow(max(0.,brightness-1.),2.))*.8,alpha);
 #include <colorspace_fragment>
 }`,
});}
