import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

/** Fitted Meridian exterior in ship space. Passenger gaze never moves the vessel. */
export function createHull(ship:T.Group){
 const group=new T.Group();group.name='meridian-exterior';group.userData.status='loading';ship.add(group);
 const geometries=new Set<T.BufferGeometry>(),materials=new Set<T.Material>(),textures=new Set<T.Texture>();
 const variants=new Map<T.Material,T.MeshBasicMaterial>(),meshes:{mesh:T.Mesh;original:T.Material|T.Material[]}[]=[],emissions:{material:T.MeshStandardMaterial;base:number;light:T.MeshBasicMaterial}[]=[];
 let disposed=false,economical=false,visible=true,speed=0;
 let fallback:ReturnType<typeof import('./hull-legacy').createHull>|undefined;
 function configure(performance:boolean){economical=performance;for(const item of meshes)item.mesh.material=economical?(Array.isArray(item.original)?item.original.map(m=>variants.get(m)??m):variants.get(item.original)??item.original):item.original;}
 function release(){geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>{(t.image as {close?:()=>void}|undefined)?.close?.();t.dispose();});}
 const ready=new GLTFLoader().loadAsync(`${import.meta.env.BASE_URL}models/meridian-exterior.glb`).then(gltf=>{
  gltf.scene.traverse(o=>{if(!(o instanceof T.Mesh))return;geometries.add(o.geometry);o.castShadow=false;o.receiveShadow=false;o.frustumCulled=false;
   for(const material of Array.isArray(o.material)?o.material:[o.material]){
    materials.add(material);for(const value of Object.values(material))if(value instanceof T.Texture)textures.add(value);
    if(!(material instanceof T.MeshStandardMaterial))continue;
    material.envMapIntensity=1.1;
    const emissive=material.emissiveIntensity>0&&material.emissive.getHex()!==0;
    const basic=new T.MeshBasicMaterial({map:material.map,color:emissive?material.emissive:material.color,side:material.side,toneMapped:!emissive});variants.set(material,basic);materials.add(basic);
    if(emissive){material.emissiveIntensity=Math.min(2,material.emissiveIntensity);emissions.push({material,base:material.emissiveIntensity,light:basic});}
   }
   meshes.push({mesh:o,original:o.material});
  });
  if(disposed){release();return;}
  group.add(gltf.scene);group.userData.status='ready';configure(economical);
  group.userData.triangles=meshes.reduce((n,{mesh})=>n+(mesh.geometry.index?.count??mesh.geometry.attributes.position.count)/3,0);
 }).catch(async()=>{if(disposed)return;const legacy=await import('./hull-legacy');if(disposed)return;fallback=legacy.createHull(group);fallback.update(visible,speed);group.userData.status='fallback';});
 return{group,ready,configure,
  update(show:boolean,velocity:number){visible=show;speed=velocity;group.visible=show;fallback?.update(show,velocity);const thrust=.65+T.MathUtils.clamp(Math.abs(velocity)/1200,0,1)*.35;for(const e of emissions){e.material.emissiveIntensity=e.base*thrust;e.light.color.copy(e.material.emissive).multiplyScalar(thrust);}},
  dispose(){if(disposed)return;disposed=true;fallback?.dispose();release();group.removeFromParent();},
 };
}
