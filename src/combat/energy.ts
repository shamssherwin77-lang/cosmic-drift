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
 gl_FragColor=vec4(energyColor*min(brightness,1.15)+energyColor*pow(max(0.,brightness-1.),2.)*.15,alpha);
 #include <colorspace_fragment>
 }`,
});}

/** A brief fuel/energy flash, not a wire sphere, smoke cloud or debris simulation. */
export function fireballMaterial(){return new WorldShaderMaterial({
 uniforms:{clock:{value:0}},transparent:true,depthWrite:false,blending:T.AdditiveBlending,side:T.DoubleSide,toneMapped:false,
 vertexShader:'varying vec2 fireUV;varying vec3 fireColor;void main(){fireUV=uv;fireColor=instanceColor;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}',
 fragmentShader:`varying vec2 fireUV;varying vec3 fireColor;uniform float clock;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.54);}
 void main(){vec2 p=fireUV*2.-1.;float r=length(p),a=atan(p.y,p.x);float edge=.65+.08*sin(a*5.+clock*12.)+.04*sin(a*9.-clock*17.);float core=exp(-r*r*10.);float flames=(1.-smoothstep(edge-.22,edge+.12,r))*(.65+.35*hash(floor(p*15.+clock*21.)));float halo=exp(-r*r*4.)*(1.-smoothstep(.7,1.,r));float level=core*1.6+flames*.65+halo*.3;gl_FragColor=vec4((mix(vec3(1.8,.12,.005),vec3(2.5,1.2,.2),core)+vec3(pow(core,3.)))*level*fireColor,clamp(level,0.,1.));
 #include <colorspace_fragment>
 }`,
});}
