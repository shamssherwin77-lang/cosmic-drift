import * as T from 'three';

const vertex = /* glsl */`
varying vec3 localPoint, surfaceNormal, worldPoint;
void main(){localPoint=position;worldPoint=(modelMatrix*vec4(position,1.)).xyz;surfaceNormal=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`;
const fragment = /* glsl */`
varying vec3 localPoint,surfaceNormal,worldPoint;
uniform vec3 baseColor,detailColor,lightDirection;
uniform float kind,alpha,seed;
float hash(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);}
float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+1.),f.x),f.y),f.z);}
void main(){
 if(alpha<.005)discard;
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
// Local region arrangements are blended; travel is always relative to the same ship position.
const arrangements = [
  [[-480,-45,-1500],[1250,380,-4300],[-2200,950,-8200],[500,1600,-12000],[2450,-500,-9200],[-700,850,-7900]],
  [[-540,-120,-1850],[1300,300,-4800],[-1450,420,-5700],[500,-90,-10800],[2600,700,-9600],[-850,900,-8200]],
  [[480,-100,-1800],[-1500,380,-3800],[1750,300,-6800],[-500,200,-10500],[3000,-500,-9600],[-1100,900,-8500]],
  [[-470,35,-1900],[1350,500,-4600],[-2000,-50,-7200],[700,120,-10500],[2400,-350,-8500],[-1000,850,-9200]],
  [[-800,-200,-3500],[1900,430,-6800],[-2600,150,-9000],[200,300,-12000],[2900,-500,-10000],[-1200,1000,-10500]],
].map(region => region.map(p => new T.Vector3(...p as [number,number,number])));
const radii = [[135,310,180,570,150,90],[150,310,190,500,170,100],[135,360,210,650,190,95],[160,340,210,580,170,100],[180,420,260,820,180,100]];
const palettes = [
  ['#315e9c','#9c8fbd','#77758e','#3a4d6a','#6a6c7c','#8b829c'],
  ['#276992','#8e9eae','#8b8e96','#31495f','#858d97','#6a849f'],
  ['#857260','#b5956e','#92877a','#655c54','#8a7a67','#b3a38b'],
  ['#2b7886','#7c9ba9','#7b8d94','#385765','#849b9e','#6f8e9f'],
  ['#46576e','#6d768b','#6c7180','#293c58','#6d788a','#56697f'],
].map(region=>region.map(color=>new T.Color(color)));
const detailPalettes = palettes.map(region=>region.map(color=>color.clone().lerp(new T.Color('#cfbd9c'),.38)));

export function createBodies(scene: T.Scene) {
  const group=new T.Group();group.name='regional-celestial-bodies';scene.add(group);
  const geometry=new T.SphereGeometry(1,32,20);
  const makeBody=(kind:number,index:number)=>{
    const material=new T.ShaderMaterial({uniforms:{baseColor:{value:palettes[0][index].clone()},detailColor:{value:detailPalettes[0][index].clone()},kind:{value:kind},alpha:{value:1},seed:{value:index*7.3+2.1},lightDirection:{value:index===3?new T.Vector3(-.85,.2,-.6):new T.Vector3(-.65,.4,index===1?.28:.75)}},vertexShader:vertex,fragmentShader:fragment,transparent:true,depthWrite:true});
    const mesh=new T.Mesh(geometry,material);mesh.renderOrder=4;mesh.userData.kind=kind>1.5?'rocky-body':'planet';group.add(mesh);return mesh;
  };
  const planets=[0,1,2,2,2,2].map((kind,i)=>makeBody(kind,i));
  const origins=arrangements[0].map(v=>v.clone());
  const sizes=radii[0].slice();
  const moons=[0,1,2].map((parent,i)=>{const mesh=makeBody(2,i+2);mesh.userData.kind='moon';return{mesh,parent,radius:[29,44,52][i]};});
  const ringMaterial=new T.ShaderMaterial({
    uniforms:{color:{value:new T.Color('#a5a091')},alpha:{value:1}},transparent:true,depthWrite:false,side:T.DoubleSide,
    vertexShader:'varying vec2 point;void main(){point=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader:`varying vec2 point;uniform vec3 color;uniform float alpha;void main(){float r=length(point);float edge=smoothstep(1.32,1.42,r)*(1.-smoothstep(2.05,2.2,r));float bands=.35+.25*sin(r*180.)+.2*sin(r*47.);gl_FragColor=vec4(color*.65,edge*max(.1,bands)*alpha);\n#include <tonemapping_fragment>\n#include <colorspace_fragment>\n}`,
  });
  const ring=new T.Mesh(new T.RingGeometry(1.32,2.2,64),ringMaterial);ring.rotation.set(1.12,.2,-.27);ring.renderOrder=5;group.add(ring);
  const rocksMaterial=new T.MeshStandardMaterial({color:'#76818c',roughness:1,metalness:0});
  const rocks=new T.InstancedMesh(new T.IcosahedronGeometry(1,0),rocksMaterial,72);rocks.name='distant-rock-cluster';group.add(rocks);
  const dummy=new T.Object3D();let seed=8353;const random=()=>{seed=seed*16807%2147483647;return(seed-1)/2147483646;};
  for(let i=0;i<72;i++){dummy.position.set((random()-.5)*700,(random()-.5)*180,(random()-.5)*450);dummy.rotation.set(random()*3,random()*3,random()*3);const scale=4+random()*10;dummy.scale.set(scale,scale*.7,scale*1.2);dummy.updateMatrix();rocks.setMatrixAt(i,dummy.matrix);}
  rocks.instanceMatrix.needsUpdate=true;rocks.computeBoundingSphere();
  const clusterOrigins=[new T.Vector3(-1000,80,-2800),new T.Vector3(1300,-180,-3600),new T.Vector3(-1700,-180,-4300),new T.Vector3(1600,80,-3900),new T.Vector3(-2200,-250,-6500)];
  const cluster=clusterOrigins[0].clone();let planetCount=6,moonCount=3;
  return {
    group,
    dispose(){rocks.dispose();},
    configure(quality:string){planetCount=quality==='Low'?4:6;moonCount=quality==='Low'?2:3;rocks.count=quality==='Low'?24:quality==='Medium'?48:72;},
    update(dt:number,time:number,region:number,position:T.Vector3){
      const a=1-Math.exp(-dt*.28);
      for(let i=0;i<planets.length;i++){
        const mesh=planets[i];origins[i].lerp(arrangements[region][i],a);sizes[i]=T.MathUtils.lerp(sizes[i],radii[region][i],a);
        mesh.visible=i<planetCount;mesh.position.copy(origins[i]).sub(position);mesh.scale.setScalar(sizes[i]);mesh.rotation.y=time*.002+i*.5;
        mesh.material.uniforms.baseColor.value.lerp(palettes[region][i],a);mesh.material.uniforms.detailColor.value.lerp(detailPalettes[region][i],a);
        mesh.material.uniforms.alpha.value=T.MathUtils.smoothstep(mesh.position.length()/sizes[i],1.05,1.4);
      }
      for(let i=0;i<moons.length;i++){
        const {mesh,parent,radius}=moons[i],planet=planets[parent];mesh.visible=i<moonCount;mesh.scale.setScalar(radius);
        mesh.position.copy(planet.position);mesh.position.x+=sizes[parent]*1.8;mesh.position.y+=sizes[parent]*.5;mesh.position.z+=sizes[parent]*.4;
        mesh.material.uniforms.alpha.value=planet.material.uniforms.alpha.value;
        mesh.material.uniforms.baseColor.value.lerp(palettes[region][2],a);mesh.material.uniforms.detailColor.value.lerp(detailPalettes[region][2],a);
      }
      ring.position.copy(planets[1].position);ring.scale.setScalar(sizes[1]);ringMaterial.uniforms.alpha.value=planets[1].material.uniforms.alpha.value;ringMaterial.uniforms.color.value.lerp(palettes[region][1],a);
      cluster.lerp(clusterOrigins[region],a);rocks.position.copy(cluster).sub(position);rocksMaterial.color.lerp(palettes[region][2],a);
    },
  };
}
