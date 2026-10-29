import * as T from 'three';
import { bindFlightInput, FlightController, type ControlSettings } from './controls';
export const regions=[{name:'Violet Nebula',subtitle:'THE PERSEUS ARM',color:'#ae80f0',second:'#316ea4',density:1},{name:'Stellar Ocean',subtitle:'AN ENDLESS SEA OF LIGHT',color:'#70bfe2',second:'#294276',density:.65},{name:'Golden Core',subtitle:'THE HEART OF THE GALAXY',color:'#efbd75',second:'#9f566f',density:1.4},{name:'Cosmic Clouds',subtitle:'WHERE THE STARS ARE BORN',color:'#7dcab9',second:'#7367ba',density:1.1},{name:'Deep Silence',subtitle:'FAR FROM EVERYTHING',color:'#576585',second:'#17243e',density:.16}];
export type Flight={mode:string;speed:number;paused:boolean;region:number;quality:string;reduced:boolean;motion:number;cockpit:boolean;started:boolean;blocked:boolean;sensitivity:number;touchSensitivity:number;invertMouseX:boolean;invertMouseY:boolean};
export function createScene(el:HTMLDivElement,get:()=>Flight, controller:FlightController, joystick:HTMLElement){
 const renderer=new T.WebGLRenderer({antialias:true,alpha:false});renderer.setClearColor('#03050d');el.appendChild(renderer.domElement);
 const scene=new T.Scene(),camera=new T.PerspectiveCamera(68,1,.1,2200);const ship=new T.Group();ship.position.z=5;ship.add(camera);scene.add(ship);
 const clock=new T.Clock();const uniforms={time:{value:0},tint:{value:new T.Color(regions[0].color)},second:{value:new T.Color(regions[0].second)},density:{value:1}};
 let seed=7123;const rand=()=>{seed=(seed*16807)%2147483647;return(seed-1)/2147483646;};
 const n=24000,pos=new Float32Array(n*3),sizes=new Float32Array(n),colors=new Float32Array(n*3);
 for(let i=0;i<n;i++){pos[i*3]=(rand()-.5)*1900;pos[i*3+1]=(rand()-.5)*1200;pos[i*3+2]=-rand()*1900; sizes[i]=.6+Math.pow(rand(),8)*4;const c=new T.Color().setHSL(.52+rand()*.24,.1+rand()*.4,.55+rand()*.45);c.toArray(colors,i*3);}
 const geo=new T.BufferGeometry();geo.setAttribute('position',new T.BufferAttribute(pos,3));geo.setAttribute('size',new T.BufferAttribute(sizes,1));geo.setAttribute('color',new T.BufferAttribute(colors,3));
 const stars=new T.Points(geo,new T.ShaderMaterial({vertexColors:true,transparent:true,depthWrite:false,blending:T.AdditiveBlending,uniforms:{offset:{value:new T.Vector3()}},vertexShader:`attribute float size; varying vec3 vColor; uniform vec3 offset; void main(){vColor=color; vec3 p=position-offset;p.x=mod(p.x+950.,1900.)-950.;p.y=mod(p.y+600.,1200.)-600.;p.z=mod(p.z+950.,1900.)-950.;vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;gl_PointSize=clamp(size*210./max(10.,-mv.z),.7,9.);}`,fragmentShader:`varying vec3 vColor;void main(){float d=length(gl_PointCoord-.5);float a=exp(-d*d*24.);gl_FragColor=vec4(vColor,a);}`}));scene.add(stars);
 const nebulaGeo=new T.PlaneGeometry(1600,1000);
 const nebulaMat=new T.ShaderMaterial({transparent:true,depthWrite:false,blending:T.AdditiveBlending,side:T.DoubleSide,uniforms,vertexShader:`varying vec2 uvv;void main(){uvv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 uvv;uniform float time;uniform vec3 tint,second;uniform float density;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*noise(p);p=p*2.07+3.1;a*=.5;}return v;}
 void main(){vec2 p=(uvv-.5)*vec2(3.2,2.);float f=fbm(p*3.+fbm(p*2.+time*.007)*2.);float ribbon=exp(-pow((p.y-sin(p.x*1.6)*.22+f*.4)*2.6,2.));float edge=smoothstep(.52,.12,length(uvv-.5));float a=pow(f,2.)*ribbon*edge*density;vec3 c=mix(second,tint,fbm(p*4.+5.));gl_FragColor=vec4(c*1.35,a*.7);}`});
 const clouds=new T.Group();for(let i=0;i<7;i++){const m=new T.Mesh(nebulaGeo,nebulaMat);m.position.set((i%3-1)*160,(i%2-.5)*130,-500-i*155);m.rotation.z=.24+i*.48;clouds.add(m);}scene.add(clouds);
 const planet=new T.Mesh(new T.SphereGeometry(36,48,32),new T.MeshStandardMaterial({color:'#465671',roughness:.95,metalness:.15}));planet.position.set(295,-125,-720);scene.add(planet);scene.add(new T.HemisphereLight('#bfa2e8','#080b15',1.6));const light=new T.DirectionalLight('#c5c9ff',3);light.position.set(-3,4,1);scene.add(light);
 const cockpit=new T.Group();ship.add(cockpit);const metal=new T.MeshStandardMaterial({color:'#141c24',metalness:.7,roughness:.4});const glow=new T.MeshBasicMaterial({color:'#80c5c4'});
 function bar(x:number,y:number,z:number,w:number,h:number,d:number,rot=0){const m=new T.Mesh(new T.BoxGeometry(w,h,d),metal);m.position.set(x,y,z);m.rotation.z=rot;cockpit.add(m);}
 bar(0,-1.63,-2.1,7,.45,.5);bar(-2.55,0,-2.4,.09,4,.2,-.2);bar(2.55,0,-2.4,.09,4,.2,.2);bar(0,1.75,-2.4,7,.12,.25);
 const strip=new T.Mesh(new T.BoxGeometry(5.7,.012,.05),glow);strip.position.set(0,-1.405,-2.05);cockpit.add(strip);
 let frame=0,quality='';
 const settings=():ControlSettings=>get();
 const input=bindFlightInput(renderer.domElement,joystick,controller,settings);
 const resize=()=>{camera.aspect=el.clientWidth/el.clientHeight;camera.updateProjectionMatrix();renderer.setSize(el.clientWidth,el.clientHeight);};window.addEventListener('resize',resize);resize();
 const animate=()=>{frame=requestAnimationFrame(animate);const delta=clock.getDelta(),dt=delta>.25?0:Math.min(delta,.1),s=get();input.sync();controller.step(dt,s);if(s.quality!==quality){quality=s.quality;renderer.setPixelRatio(Math.min(devicePixelRatio,quality==='High'?2:quality==='Medium'?1.4:1));resize();geo.setDrawRange(0,quality==='Low'?6000:quality==='Medium'?14000:n);}
 const r=regions[s.region];uniforms.tint.value.lerp(new T.Color(r.color),dt*.35);uniforms.second.value.lerp(new T.Color(r.second),dt*.35);uniforms.density.value=T.MathUtils.damp(uniforms.density.value,r.density, .5,dt);
 if(!s.paused){uniforms.time.value+=dt;
 (stars.material as T.ShaderMaterial).uniforms.offset.value.copy(controller.position);
 ship.quaternion.copy(controller.shipQuaternion);camera.quaternion.copy(controller.lookQuaternion);
 clouds.position.copy(controller.position).negate();clouds.position.z+=Math.sin(uniforms.time.value*.02)*45;
 planet.position.set(295,-125,-720).sub(controller.position);}
 cockpit.visible=s.cockpit;glow.color.copy(uniforms.tint.value).multiplyScalar(s.mode==='Meditation'?.2:.7);renderer.render(scene,camera);};animate();
 return()=>{cancelAnimationFrame(frame);input.dispose();window.removeEventListener('resize',resize);scene.traverse(o=>{if(o instanceof T.Mesh||o instanceof T.Points){o.geometry.dispose();const mats=Array.isArray(o.material)?o.material:[o.material];mats.forEach(m=>m.dispose());}});renderer.dispose();renderer.domElement.remove();};
}
