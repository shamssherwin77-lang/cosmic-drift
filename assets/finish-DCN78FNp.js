import{B as V,V as v}from"./index-4ZlloZ2a.js";const b=new v;function i(g,o,t,l,y,n){const m=2*Math.PI*y/4,p=Math.max(n-2*y,0),f=Math.PI/4;b.copy(o),b[l]=0,b.normalize();const e=.5*m/(m+p),x=1-b.angleTo(g)/f;return Math.sign(b[t])===1?x*e:p/(m+p)+e+e*(1-x)}class S extends V{constructor(o=1,t=1,l=1,y=2,n=.1){const m=y*2+1;if(n=Math.min(o/2,t/2,l/2,n),super(1,1,1,m,m,m),this.type="RoundedBoxGeometry",this.parameters={width:o,height:t,depth:l,segments:y,radius:n},m===1)return;const p=this.toNonIndexed();this.index=null,this.attributes.position=p.attributes.position,this.attributes.normal=p.attributes.normal,this.attributes.uv=p.attributes.uv;const f=new v,e=new v,x=new v(o,t,l).divideScalar(2).subScalar(n),h=this.attributes.position.array,u=this.attributes.normal.array,s=this.attributes.uv.array,U=h.length/6,a=new v,z=.5/m;for(let c=0,r=0;c<h.length;c+=3,r+=2)switch(f.fromArray(h,c),e.copy(f),e.x-=Math.sign(e.x)*z,e.y-=Math.sign(e.y)*z,e.z-=Math.sign(e.z)*z,e.normalize(),h[c+0]=x.x*Math.sign(f.x)+e.x*n,h[c+1]=x.y*Math.sign(f.y)+e.y*n,h[c+2]=x.z*Math.sign(f.z)+e.z*n,u[c+0]=e.x,u[c+1]=e.y,u[c+2]=e.z,Math.floor(c/U)){case 0:a.set(1,0,0),s[r+0]=i(a,e,"z","y",n,l),s[r+1]=1-i(a,e,"y","z",n,t);break;case 1:a.set(-1,0,0),s[r+0]=1-i(a,e,"z","y",n,l),s[r+1]=1-i(a,e,"y","z",n,t);break;case 2:a.set(0,1,0),s[r+0]=1-i(a,e,"x","z",n,o),s[r+1]=i(a,e,"z","x",n,l);break;case 3:a.set(0,-1,0),s[r+0]=1-i(a,e,"x","z",n,o),s[r+1]=1-i(a,e,"z","x",n,l);break;case 4:a.set(0,0,1),s[r+0]=1-i(a,e,"x","y",n,o),s[r+1]=1-i(a,e,"y","x",n,t);break;case 5:a.set(0,0,-1),s[r+0]=i(a,e,"x","y",n,o),s[r+1]=1-i(a,e,"y","x",n,t);break}}static fromJSON(o){return new S(o.width,o.height,o.depth,o.segments,o.radius)}}function w(g,o=1){return g.onBeforeCompile=t=>{t.uniforms.panelScale={value:o},t.vertexShader=`varying vec3 shipPoint,shipNormal;
`+t.vertexShader,t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
shipPoint=position;shipNormal=normal;`),t.fragmentShader=`varying vec3 shipPoint,shipNormal;uniform float panelScale;
`+t.fragmentShader,t.fragmentShader=t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
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
    `),t.fragmentShader=t.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=clamp(roughnessFactor+(grain-.5)*.035+brush*.012+seam*.14-edge*.055,.14,.96);`)},g.customProgramCacheKey=()=>"aether-machined-satin-v2",g}export{S as R,w as a};
