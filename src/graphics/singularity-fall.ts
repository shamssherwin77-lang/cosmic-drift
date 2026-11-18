import * as T from 'three';
import type {FallReading} from '../singularity-fall';
/** A separate, bounded-cost interior pass. The hull is rendered above it, never sampled into the lens. */
export function createFallVisuals(cabin:T.Group,hull:T.Group,sky:T.Texture){
 const backdrop=new T.Scene(),eye=new T.Camera(),u={sky:{value:sky},elapsed:{value:0},strain:{value:0},aspect:{value:1},reduced:{value:0}};
 const geometry=new T.PlaneGeometry(2,2),material=new T.ShaderMaterial({uniforms:u,depthTest:false,depthWrite:false,
  vertexShader:'varying vec2 v;void main(){v=uv;gl_Position=vec4(position.xy,0.,1.);}',
  fragmentShader:`varying vec2 v;uniform sampler2D sky;uniform float elapsed,strain,aspect,reduced;
  float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.54);}
  void main(){vec2 p=(v-.5)*vec2(aspect,1.)*2.;float r=length(p),a=atan(p.y,p.x),s=strain;
   float twist=(1.-reduced*.75)*s*.22*sin(r*3.-elapsed*.3);vec2 ray=vec2(cos(a+twist),sin(a+twist));
   vec2 uv=.5+ray*(.22+.22/(r+.2+s*.4));vec3 realSky=texture2D(sky,clamp(uv,.005,.995)).rgb;
   float radius=mix(.78,.25,s),width=mix(.12,.023,s);float ring=exp(-pow((r-radius)/width,2.));
   float glow=exp(-pow((r-radius)/(.22-s*.13),2.))*.2;
   float streak=pow(max(0.,sin(a*86.+1./(r+.15)*7.-elapsed*.8)),30.)*smoothstep(.12,.8,r)*s;
   float dust=hash(floor(vec2(a*170.,r*450.-elapsed*18.)))*.025*s;
   vec3 tint=mix(vec3(1.2,.51,.14),vec3(.35,.62,1.1),s);
   vec3 color=vec3(.002,.004,.011)+realSky*(ring*1.5+glow)+tint*(ring*.8+glow*.4+streak*.22+dust);
   color*=1.-smoothstep(1.0,2.4,r)*.65;gl_FragColor=vec4(color,1.);
   #include <tonemapping_fragment>
   #include <colorspace_fragment>
  }`});
 const quad=new T.Mesh(geometry,material);quad.frustumCulled=false;backdrop.add(quad);
 const fragments=new T.Group();fragments.name='tidal-hull-ribbons';const positions:number[]=[],colors:number[]=[];let seed=71;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 for(let i=0;i<38;i++){const a=random()*Math.PI*2,r=2+random()*5,z=-4-random()*55,w=.02+random()*.1,l=1+random()*5,x=Math.cos(a)*r,y=Math.sin(a)*r*.6;positions.push(x-w,y,z,x+w,y,z,x*.7,y*.7,z-l);const c=.13+random()*.15;for(let j=0;j<3;j++)colors.push(c,c*1.15,c*1.3);}
 const shardGeometry=new T.BufferGeometry();shardGeometry.setAttribute('position',new T.Float32BufferAttribute(positions,3));shardGeometry.setAttribute('color',new T.Float32BufferAttribute(colors,3));const shardMaterial=new T.MeshBasicMaterial({vertexColors:true,side:T.DoubleSide});fragments.add(new T.Mesh(shardGeometry,shardMaterial));fragments.visible=false;
 let active=false;
 function reset(){if(!active)return;active=false;cabin.scale.set(1,1,1);hull.scale.set(1,1,1);fragments.removeFromParent();}
 return{
  apply(reading:FallReading,ship:T.Group,camera:T.PerspectiveCamera,reduced:boolean,visible:boolean){
   if(reading.phase==='idle'){reset();if(camera.fov!==68){camera.fov=68;camera.updateProjectionMatrix();}return;}
   active=true;const strain=reading.strain*(reduced?.48:1),narrow=1-strain*.67;
   cabin.scale.set(narrow,1-strain*.48,1+strain*9);hull.scale.set(narrow,1-strain*.48,1+strain*9);
   cabin.visible=visible&&reading.blackout<.96;hull.visible=visible&&reading.blackout<.96;
   if(!fragments.parent)camera.add(fragments);fragments.visible=visible&&reading.strain>.72&&reading.blackout<.98;fragments.position.z=-reading.strain*16;fragments.scale.set(1-reading.strain*.5,1-reading.strain*.4,1+reading.strain*2);
   u.elapsed.value=reading.elapsed;u.strain.value=reading.strain;u.reduced.value=reduced?1:0;
   camera.fov=68+(reduced?8:24)*reading.strain;camera.updateProjectionMatrix();
   if(!reduced){camera.position.x+=Math.sin(reading.elapsed*13)*reading.strain*.012;camera.position.y+=Math.sin(reading.elapsed*17)*reading.strain*.01;}
   ship.traverse(o=>o.layers.enable(1));
  },
  render(renderer:T.WebGLRenderer,scene:T.Scene,camera:T.PerspectiveCamera){
   const mask=camera.layers.mask,auto=renderer.autoClear,target=renderer.getRenderTarget(),background=scene.background;
   scene.traverse(o=>{if(o instanceof T.Light)o.layers.enable(1);});u.aspect.value=camera.aspect;
   try{renderer.setRenderTarget(null);renderer.autoClear=true;renderer.render(backdrop,eye);renderer.autoClear=false;renderer.clearDepth();scene.background=null;camera.layers.set(1);renderer.render(scene,camera);}
   finally{camera.layers.mask=mask;scene.background=background;renderer.autoClear=auto;renderer.setRenderTarget(target);}
  },
  reset,
  dispose(){reset();geometry.dispose();material.dispose();shardGeometry.dispose();shardMaterial.dispose();},
 };
}
