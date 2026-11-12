const gyms = {
 1:['3 vidas adicionales','Se puedan ver los pokemones','Mejor ratio de shiny','Una vida menos','Solo puedes usar 5 pokemones','Quitar caramelos raros','El pc cura'],
 2:['Sin limite de nivel','Dificultad fácil','No puedes ver la barra de vida','Solo puedes usar ataques fisicos','No puedes cambiar de Pokémon','Porcentaje de shiny a muy alta','Porcentaje de radiantes a muy alta','Se repite la ruleta'],
 3:['Sin limite de nivel','Dificultad fácil','No puedes ver la barra de vida','Solo puedes usar ataques fisicos','No puedes cambiar de Pokémon','Porcentaje de shiny a muy alta','Porcentaje de radiantes a muy alta','Se repite la ruleta'],
 4:['Sin limite de nivel','Dificultad fácil','No puedes ver la barra de vida','Solo puedes usar ataques fisicos','No puedes cambiar de Pokémon','Porcentaje de shiny a muy alta','Porcentaje de radiantes a muy alta','Se repite la ruleta'],
 5:['Sin limite de nivel','Dificultad fácil','No puedes ver la barra de vida','Solo puedes usar ataques fisicos','No puedes cambiar de Pokémon','Porcentaje de shiny a muy alta','Porcentaje de radiantes a muy alta','Se repite la ruleta'],
 6:['Los pokemones se pueden ver','Ratio de shiny bajo','Legendario y singulares','No puedes usar ningún objeto ','No	puedes usar mecanicas','Ratio de radiante alto','Ratio de shiny alto','Tira de nuevo','Se termina la ruleta','Modo caos'],
 7:['Los pokemones se pueden ver','Ratio de shiny bajo','Legendario y singulares','No puedes usar ningún objeto ','No	puedes usar mecanicas','Ratio de radiante alto','Ratio de shiny alto','Tira de nuevo','Se termina la ruleta','Modo caos'],
 8:['Los pokemones se pueden ver','Ratio de shiny bajo','Legendario y singulares','No puedes usar ningún objeto ','No	puedes usar mecanicas','Ratio de radiante alto','Ratio de shiny alto','Tira de nuevo','Se termina la ruleta','Modo caos'],
 9:['Los pokemones se pueden ver','Ratio de shiny bajo','Legendario y singulares','No puedes usar ningún objeto ','No	puedes usar mecanicas','Ratio de radiante alto','Ratio de shiny alto','Tira de nuevo','Se termina la ruleta','Modo caos'],
 10:['Usa 4 pokemones en las batallas ','No se pueden usar ningún objeto','Se termina la ruleta','Tienes vidas ilimitadas','Tira de nuevo','Cambia todo el equipo','Puedes vender caramelos']
};

const wheelEl = document.getElementById('wheel');
const gymSelect = document.getElementById('gymSelect');
const optionsList = document.getElementById('optionsList');
const spinBtn = document.getElementById('spinBtn');
const currentGym = document.getElementById('currentGym');
const currentResult = document.getElementById('currentResult');
const speed = document.getElementById('speed');
const previewBtn = document.getElementById('previewBtn');
const resetBtn = document.getElementById('resetBtn');

let segments=[];
let rotating=false;
let currentAngle=0;

function buildWheel(g){
 wheelEl.innerHTML='';
 segments=gyms[g].slice();
 const c=segments.length;
 const slice=360/c;

 for(let i=0;i<c;i++){
   const seg=document.createElement('div');
   seg.className='segment';
   seg.style.width='210px';
   seg.style.height='420px';
   seg.style.transform=`rotate(${i*slice}deg) skewY(${90-slice}deg) translate(-100%,-50%)`;
   seg.style.background=`rgba(255,255,255,${0.02+(i%2)*0.02})`;
   const t=document.createElement('div');
   t.style.transform=`skewY(${slice-90}deg) rotate(${slice/2}deg)`;
   t.style.width='240px';
   t.style.fontSize='13px';
   t.style.fontWeight='600';
   t.textContent=segments[i];
   seg.appendChild(t);
   wheelEl.appendChild(seg);
 }
 renderList(g);
}

function renderList(g){
 optionsList.innerHTML='';
 gyms[g].forEach((o,i)=>{
   const p=document.createElement('p');
   p.textContent=`${i+1}. ${o}`;
   optionsList.appendChild(p);
 });
}

function pickIndex(angle,count){
 const a=((angle%360)+360)%360;
 const slice=360/count;
 const idx=Math.floor(((360-a+slice/2)%360)/slice);
 return idx%count;
}

function spin(){
 if(rotating)return;
 rotating=true;
 const g=parseInt(gymSelect.value);
 const count=gyms[g].length;
 const spins=Math.floor(Math.random()*6)+6;
 const extra=Math.random()*360;
 const s=parseInt(speed.value);
 const duration=2000+(7-s)*500;
 const finalAngle=currentAngle+spins*360+extra;

 wheelEl.style.transition=`transform ${duration}ms cubic-bezier(.15,.9,.1,1)`;
 wheelEl.style.transform=`rotate(${finalAngle}deg)`;

 setTimeout(()=>{
   const idx=pickIndex(finalAngle,count);
   const result=gyms[g][idx];
   currentResult.textContent=`Resultado: ${result}`;
   const slice=360/count;
   currentAngle=360-(idx*slice+slice/2);
   wheelEl.style.transition='none';
   wheelEl.style.transform=`rotate(${currentAngle}deg)`;
   setTimeout(()=>wheelEl.style.transition='',20);
   rotating=false;
 },duration+40);
}

gymSelect.addEventListener('change',()=>{
 let g=parseInt(gymSelect.value);
 currentGym.textContent=`Tirada`;
 currentResult.textContent='Listo para Sufrir';
 buildWheel(g);
});

spinBtn.addEventListener('click',spin);
previewBtn.addEventListener('click',()=>renderList(parseInt(gymSelect.value)));
resetBtn.addEventListener('click',()=>{currentAngle=0;wheelEl.style.transform='rotate(0deg)';});

buildWheel(1);
