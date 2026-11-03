import * as T from 'three';
import { HORIZON_RADIUS } from '../singularity';
import type { Quality } from './config';

/** Curved-ray disk integration. Background is captured without the vessel so cabin geometry is never lensed. */
export function createBlackHole(scene:T.Scene){
 const target=new T.WebGLRenderTarget(1,1,{depthBuffer:true});target.texture.colorSpace=T.LinearSRGBColorSpace;
 const u={background:{value:target.texture},center:{value:new T.Vector3()},radius:{value:HORIZON_RADIUS},time:{value:0},steps:{value:80},veil:{value:0},resolution:{value:new T.Vector2(1,1)},viewProjection:{value:new T.Matrix4()},cameraRight:{value:new T.Vector3(1,0,0)},cameraUp:{value:new T.Vector3(0,1,0)}};
 const material=new T.ShaderMaterial({uniforms:u,side:T.BackSide,depthWrite:true,transparent:false,
 vertexShader:`varying vec3 worldPoint;void main(){vec4 p=modelMatrix*vec4(position,1.);worldPoint=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}`,
 fragmentShader:`precision highp float;
 varying vec3 worldPoint;uniform sampler2D background;uniform vec3 center,cameraRight,cameraUp;uniform float radius,time,veil;uniform int steps;uniform vec2 resolution;uniform mat4 viewProjection;
 float hash(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);}
 float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
 vec3 disk(vec3 p,vec3 dir){
  float r=length(p.xz),angle=atan(p.z,p.x),rotation=time*.18/pow(max(r,1.),1.35);
  vec3 q=vec3(cos(angle-rotation),sin(angle-rotation),r*.9);
  float filaments=noise(q*vec3(8.,8.,5.))*.55+noise(q*vec3(19.,19.,11.))*.3+noise(q*vec3(43.,43.,23.))*.15;
  float rings=.85+.15*sin(r*29.+filaments*19.-time*.23);
  float profile=smoothstep(1.55,2.15,r)*(1.-smoothstep(4.4,6.5,r))*pow(2./max(r,1.),1.4);
  vec3 tangent=normalize(vec3(-p.z,0.,p.x));float doppler=clamp(1.+dot(tangent,-dir)*.62,.42,1.8);
  vec3 color=mix(vec3(1.9,.37,.065),vec3(3.8,2.55,1.15),(1.-smoothstep(1.7,6.2,r)));
  return color*profile*(.25+filaments*1.4)*rings*pow(doppler,2.4);
 }
 void main(){
  vec3 origin=(cameraPosition-center)/radius,ray=normalize(worldPoint-cameraPosition),original=ray;
  float b=dot(origin,ray),disc=b*b-dot(origin,origin)+64.;if(disc<0.)discard;
  float entry=max(0.,-b-sqrt(disc));vec3 p=origin+ray*entry;vec3 emission=vec3(0.);float transmittance=1.,captured=0.;
  // Fixed disk tilt gives a real three-dimensional plane from every approach.
  mat3 tilt=mat3(.98877,0.,-.14944,.01492,.995,.09871,.14869,-.09983,.98383);
  for(int i=0;i<112;i++){
   if(i>=steps)break;float r=length(p);if(r<1.015){captured=1.;break;}if(r>8.1&&i>1)break;
   float stepSize=clamp((r-1.)*.17,.035,.44);vec3 old=p;
   vec3 bend=-(p-ray*dot(p,ray));ray=normalize(ray+bend*(1.48/(r*r*r))*stepSize);p+=ray*stepSize;
   vec3 a=tilt*old,c=tilt*p;float radial=length(c.xz);
   if(a.y*c.y<=0.&&radial>1.55&&radial<6.5){float f=abs(a.y)/(abs(a.y)+abs(c.y)+.0001);vec3 hit=mix(a,c,f);float optical=clamp(.63/max(.23,abs((tilt*ray).y)),0.,.98);emission+=disk(hit,tilt*ray)*optical*transmittance;transmittance*=1.-optical;}
   // Thin dusty emission above the equatorial sheet.
   if(radial>1.7&&radial<6.3){float haze=exp(-abs(c.y)*32./max(radial,1.))*stepSize*.065;emission+=disk(c,tilt*ray)*haze*transmittance;}
  }
  vec3 exitPoint=center+(p+ray*180.)*radius;vec4 projected=viewProjection*vec4(exitPoint,1.);vec2 uv=projected.xy/max(.001,projected.w)*.5+.5;
  vec3 sky=texture2D(background,clamp(uv,.002,.998)).rgb;
  float deviation=length(ray-original);float photon=exp(-pow((length(cross(origin,original))-3.3)/.065,2.));
  vec3 color=sky*transmittance*(1.-captured)+emission+vec3(1.,.55,.2)*photon*.22*(1.-captured);
  // Preserve HDR emission until the final display transform.
  color=mix(color,color/(1.+color*.36),clamp(length(emission)*.2,0.,1.));float influence=1.-smoothstep(5.7,7.9,length(cross(origin,original)));vec3 undistorted=texture2D(background,gl_FragCoord.xy/resolution).rgb;color=mix(undistorted,color,influence);color=mix(color,vec3(.18,.23,.3),veil*.985);
  gl_FragColor=vec4(color,1.);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
 }`});
 const mesh=new T.Mesh(new T.SphereGeometry(1,40,24),material);mesh.name='supermassive-black-hole';mesh.scale.setScalar(HORIZON_RADIUS*8);mesh.frustumCulled=false;mesh.visible=false;mesh.renderOrder=4;scene.add(mesh);
 const glow=new T.PointLight('#ffb365',0,9000,1);glow.name='accretion-light';scene.add(glow);
 let scale=.5,enabled=false,rendering=false;
 const relative=new T.Vector3(),view=new T.Vector3(),frustum=new T.Frustum(),matrix=new T.Matrix4(),sphere=new T.Sphere();
 return{
  mesh,target,
  configure(quality:Quality,width:number,height:number){scale=quality==='High'?.8:quality==='Medium'?.55:.35;u.steps.value=quality==='High'?112:quality==='Medium'?80:52;target.setSize(Math.max(1,Math.round(width*scale)),Math.max(1,Math.round(height*scale)));u.resolution.value.set(width,height);},
  update(position:T.Vector3|null,observer:T.Vector3,time:number,veil:number){enabled=!!position;if(position)relative.copy(position).sub(observer);mesh.position.copy(relative);u.center.value.copy(relative);u.time.value=time;u.veil.value=veil;mesh.visible=enabled&&relative.length()<30000;glow.position.copy(relative).normalize().multiplyScalar(22);glow.intensity=enabled?Math.min(90,4e8/Math.max(1,relative.lengthSq())):0;},
  capture(renderer:T.WebGLRenderer,camera:T.Camera,vessel?:T.Object3D){
   if(!mesh.visible||rendering)return;camera.updateMatrixWorld();matrix.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);frustum.setFromProjectionMatrix(matrix);sphere.set(relative,HORIZON_RADIUS*8);if(!frustum.intersectsSphere(sphere))return;
   view.setFromMatrixPosition(camera.matrixWorld).sub(relative);if(view.length()<HORIZON_RADIUS*.99)return;
   const type=renderer.extensions.has('EXT_color_buffer_float')&&u.steps.value>=80?T.HalfFloatType:T.UnsignedByteType;if(target.texture.type!==type){target.dispose();target.texture.type=type;}
   rendering=true;const previous=renderer.getRenderTarget(),visible=vessel?.visible;mesh.visible=false;if(vessel)vessel.visible=false;
   try{renderer.setRenderTarget(target);renderer.clear();renderer.render(scene,camera);u.viewProjection.value.copy(matrix);}finally{renderer.setRenderTarget(previous);mesh.visible=true;if(vessel)vessel.visible=visible!;rendering=false;}
  },
  dispose(){mesh.removeFromParent();glow.removeFromParent();mesh.geometry.dispose();material.dispose();target.dispose();},
 };
}
