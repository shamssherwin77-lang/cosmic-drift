import * as T from 'three';

/** A filtered HDR-style lighting stage, generated locally and shared by every ship material. */
export function createCinema(renderer: T.WebGLRenderer, scene: T.Scene, ship: T.Group) {
  const canvas = document.createElement('canvas'); canvas.width = 512; canvas.height = 256;
  const ctx = canvas.getContext('2d')!;ctx.scale(.5,.5);
  const base = ctx.createLinearGradient(0,0,0,512);
  base.addColorStop(0,'#101b2a');base.addColorStop(.35,'#283c50');base.addColorStop(.56,'#151d29');base.addColorStop(1,'#020408');
  ctx.fillStyle=base;ctx.fillRect(0,0,1024,512);
  const glow=(x:number,y:number,r:number,color:string)=>{const gradient=ctx.createRadialGradient(x,y,0,x,y,r);gradient.addColorStop(0,color);gradient.addColorStop(.18,color+'99');gradient.addColorStop(1,color+'00');ctx.fillStyle=gradient;ctx.fillRect(x-r,y-r,r*2,r*2);};
  glow(225,155,155,'#c0cdd2');glow(770,200,100,'#dfb988');glow(495,265,160,'#456d87');
  ctx.fillStyle='#a9d6dc';ctx.globalAlpha=.38;ctx.fillRect(100,235,270,5);ctx.fillStyle='#e9b67f';ctx.fillRect(695,238,150,3);ctx.globalAlpha=1;
  const panorama = new T.CanvasTexture(canvas);panorama.mapping=T.EquirectangularReflectionMapping;panorama.colorSpace=T.SRGBColorSpace;
  let environment:T.WebGLRenderTarget|null=null;
  if(renderer.extensions.has('EXT_color_buffer_float')){const generator=new T.PMREMGenerator(renderer);generator.compileEquirectangularShader();environment=generator.fromEquirectangular(panorama);generator.dispose();scene.environment=environment.texture;}
  scene.environmentIntensity=.9;
  const screenBounce=new T.PointLight('#99cbd0',2.6,5,2);screenBounce.position.set(0,-.55,-1.7);ship.add(screenBounce);
  const warmFill=new T.PointLight('#eab784',1.1,3.5,2);warmFill.position.set(-1.6,-1.3,-.4);ship.add(warmFill);
  const practical=new T.PointLight('#f1d6ad',3.2,7,2);practical.position.set(.8,1.6,-.9);ship.add(practical);
  renderer.shadowMap.type=T.PCFSoftShadowMap;
  return {
    panorama,
    configure(high:boolean){renderer.shadowMap.enabled=high;},
    update(visible:boolean,meditation:boolean){screenBounce.visible=warmFill.visible=practical.visible=visible;screenBounce.intensity=meditation?1.1:2.6;practical.intensity=meditation?1.4:3.2;warmFill.intensity=meditation?.45:1.1;},
    dispose(){scene.environment=null;screenBounce.removeFromParent();warmFill.removeFromParent();practical.removeFromParent();environment?.dispose();panorama.dispose();},
  };
}
