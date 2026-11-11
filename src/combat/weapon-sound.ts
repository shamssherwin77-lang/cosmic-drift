/** Short, precomputed sound-effect buffers. The music remains human-composed recordings. */
export function weaponBuffers(c:AudioContext){
 return Array.from({length:8},(_,kind)=>{
  const duration=[.11,.19,.065,.5,.28,.16,.2,.09][kind],buffer=c.createBuffer(1,Math.ceil(c.sampleRate*duration),c.sampleRate),data=buffer.getChannelData(0);let seed=731+kind,low=0,phase=0;
  for(let i=0;i<data.length;i++){const t=i/c.sampleRate,u=t/duration;seed=(Math.imul(seed,1664525)+1013904223)>>>0;const noise=seed/2147483648-1;low=low*.91+noise*.09;const attack=Math.min(1,t/.002),env=attack*Math.exp(-u*(kind===3?3:6))*(1-u);let sample=0;
   if(kind===0){phase+=(1800*Math.exp(-t*18)+260)/c.sampleRate;sample=Math.sin(phase*6.283)*.65+(noise-low)*.2;}
   else if(kind===1){phase+=(190+Math.sin(t*100)*55)/c.sampleRate;sample=Math.sin(phase*6.283)*.65+low*1.8+noise*.16;}
   else if(kind===2){sample=(noise-low)*.75+Math.sin(t*6.283*135)*.3+Math.sin(t*6.283*270)*.12;}
   else if(kind===3){sample=low*2.6+noise*.13+Math.sin(t*6.283*(75-t*50))*.35;}
   else if(kind===4){sample=low*3+noise*.4+Math.sin(t*6.283*(65-t*90))*.7;}
   else if(kind===5){sample=low*2+Math.sin(t*6.283*75)*.6;}
   else if(kind===6){sample=Math.sin(t*6.283*(320+t*2500))*.5+noise*.2;}
   else{sample=Math.sin(t*6.283*1250)*.4+Math.sin(t*6.283*1900)*.2;}
   data[i]=Math.tanh(sample)*env;
  }return buffer;
 });
}
