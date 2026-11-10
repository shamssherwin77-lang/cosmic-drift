import * as T from 'three';

/** Ship-mounted exploration lamp. Range is in game units, independent of hull materials. */
export function createSearchlight(ship:T.Group){
 const light=new T.SpotLight('#e1edff',18,7000,Math.PI/5,.65,0);
 light.name='ship-searchlight';
 // Ahead of the cockpit and nose so the pilot's own dashboard stays dark.
 light.position.set(0,-.7,-12);
 light.target.position.set(0,-.7,-3000);
 light.visible=false;
 // One direct light, no extra shadow pass on mobile.
 light.castShadow=false;
 ship.add(light,light.target);
 return{light,update(enabled:boolean){light.visible=enabled;},dispose(){light.removeFromParent();light.target.removeFromParent();light.dispose();}};
}
