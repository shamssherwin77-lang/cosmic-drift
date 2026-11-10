import {Euler,Quaternion,Vector3} from 'three';

export const HULL_LENGTH=18000;
export type ShellPatch={id:string;t0:number;t1:number;a0:number;a1:number;layer:number;thickness:number;offset?:Vector3;turn?:Quaternion;pivot?:Vector3};
function hash(x:number,y:number,z:number){let n=Math.imul(x,374761393)^Math.imul(y,668265263)^Math.imul(z,2147483647);n=Math.imul(n^(n>>>13),1274126177);return((n^(n>>>16))>>>0)/4294967295;}
export function relicNoise(x:number,y:number,z:number){const i=Math.floor(x),j=Math.floor(y),k=Math.floor(z),fx=x-i,fy=y-j,fz=z-k,u=fx*fx*(3-2*fx),v=fy*fy*(3-2*fy),w=fz*fz*(3-2*fz);const mix=(a:number,b:number,t:number)=>a+(b-a)*t;return mix(mix(mix(hash(i,j,k),hash(i+1,j,k),u),mix(hash(i,j+1,k),hash(i+1,j+1,k),u),v),mix(mix(hash(i,j,k+1),hash(i+1,j,k+1),u),mix(hash(i,j+1,k+1),hash(i+1,j+1,k+1),u),v),w);}
export function hullAxis(t:number,out=new Vector3()){return out.set(-2600*Math.sin(t*1.6)-800*t*t,2100*Math.sin(t*2.2)+600*t,t*HULL_LENGTH);}
export function hullSection(t:number,layer=0){const envelope=Math.pow(Math.max(.015,1-t*t),.85);return[(520+5450*envelope)*(1+layer),(370+2310*envelope)*(1+layer)];}
function relief(t:number,a:number){const x=Math.cos(a),y=Math.sin(a);return(relicNoise(t*2.7,x*2.4+9,y*2.4)-.5)*630+(relicNoise(t*13,x*12,y*12+21)-.5)*180+(relicNoise(t*55,x*48+44,y*48)-.5)*38;}
export function shellPoint(t:number,a:number,layer=0,out=new Vector3()){hullAxis(t,out);const [w,h]=hullSection(t,layer),d=relief(t,a);out.x+=(w+d)*Math.cos(a);out.y+=(h+d*.58)*Math.sin(a);return out;}
export function tornRange(patch:ShellPatch,a:number){const tear=(relicNoise(Math.cos(a)*9,Math.sin(a)*9,patch.t0*13+7)-.5)*.055;return[patch.t0+tear,patch.t1+tear*.8];}
export const HULL_PATCHES:ShellPatch[]=[
 {id:'port mantle',t0:-.94,t1:.74,a0:2.24,a1:4.84,layer:0,thickness:190},
 {id:'starboard mantle',t0:-.86,t1:.72,a0:5.39,a1:7.19,layer:0,thickness:170},
 {id:'ventral strata',t0:-.72,t1:.69,a0:4.4,a1:5.9,layer:.07,thickness:120},
 {id:'rear crown',t0:-.96,t1:-.55,a0:.61,a1:2.45,layer:.025,thickness:160},
 {id:'severed forward crown',t0:.57,t1:.74,a0:.66,a1:2.34,layer:.025,thickness:170},
 {id:'inner port skin',t0:-.8,t1:.64,a0:2.49,a1:4.65,layer:-.16,thickness:100},
 {id:'inner starboard skin',t0:-.72,t1:.66,a0:5.5,a1:7.02,layer:-.13,thickness:100},
];
export const DETACHED_PATCHES:ShellPatch[]=[
 {id:'peeled dorsal continent',t0:-.27,t1:.25,a0:.92,a1:2.18,layer:.025,thickness:170,offset:new Vector3(7900,4900,-1500),turn:new Quaternion().setFromEuler(new Euler(.28,-.4,.22)),pivot:shellPoint(-.01,1.55,.025)},
 {id:'separated prow',t0:.83,t1:.995,a0:.18,a1:5.8,layer:0,thickness:190,offset:new Vector3(-4700,1500,4800),turn:new Quaternion().setFromEuler(new Euler(-.18,.28,-.12)),pivot:hullAxis(.91)},
 {id:'shed inner lamina',t0:-.64,t1:-.24,a0:2.64,a1:3.85,layer:-.13,thickness:110,offset:new Vector3(-5200,-1800,-2100),turn:new Quaternion().setFromEuler(new Euler(.15,.26,.3)),pivot:shellPoint(-.44,3.25,-.13)},
];
export function toFragment(point:Vector3,patch:ShellPatch){if(patch.turn&&patch.pivot&&patch.offset)point.sub(patch.pivot).applyQuaternion(patch.turn).add(patch.pivot).add(patch.offset);return point;}
export function fromFragment(point:Vector3,patch:ShellPatch){if(patch.turn&&patch.pivot&&patch.offset)point.sub(patch.offset).sub(patch.pivot).applyQuaternion(patch.turn.clone().invert()).add(patch.pivot);return point;}
export const RELIC_SITES=[
 {id:'resonance',name:'The sealed resonance chamber',point:hullAxis(-.33).add(new Vector3(380,1150,0)),range:1250},
 {id:'archive',name:'The suspended archive',point:hullAxis(.28).add(new Vector3(-720,1050,0)),range:1150},
 {id:'throat',name:'The blind passage',point:hullAxis(.02).add(new Vector3(4250,80,0)),range:1000},
];
export function shellDistance(point:Vector3,patch:ShellPatch){const p=fromFragment(point.clone(),patch),t=p.z/HULL_LENGTH;if(t<patch.t0-.04||t>patch.t1+.04)return Infinity;const axis=hullAxis(t),[w,h]=hullSection(t,patch.layer),x=p.x-axis.x,y=p.y-axis.y;let a=Math.atan2(y/h,x/w);if(a<0)a+=Math.PI*2;if(a<patch.a0)a+=Math.PI*2;if(a<patch.a0||a>patch.a1)return Infinity;
 for(let i=0;i<3;i++){const d=relief(t,a);let next=Math.atan2(y/(h+d*.58),x/(w+d));if(next<0)next+=Math.PI*2;if(next<patch.a0)next+=Math.PI*2;a=next;}
 const [lo,hi]=tornRange(patch,a);if(t<lo||t>hi)return Infinity;const surface=shellPoint(t,a,patch.layer),rx=surface.x-axis.x,ry=surface.y-axis.y,r=Math.hypot(x,y),boundary=Math.hypot(rx,ry),normal=new Vector3(Math.cos(a)/w,Math.sin(a)/h,0).normalize(),radial=new Vector3(x,y,0).normalize();return Math.abs(r-boundary)*Math.max(.4,normal.dot(radial))-patch.thickness/2;
}
