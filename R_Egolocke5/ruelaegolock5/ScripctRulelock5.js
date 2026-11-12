/* ─── DATA ─── */
const gyms = {
  1:  ['3 vidas adicionales','Se puedan ver los pokemones','Mejor ratio de shiny','Una vida menos','Solo puedes usar 5 pokemones','Quitar caramelos raros','El pc cura'],
  2:  ['Sin limite de nivel','Dificultad fácil','No puedes ver la barra de vida','Solo puedes usar ataques fisicos','No puedes cambiar de Pokémon','Porcentaje de shiny a muy alta','Porcentaje de radiantes a muy alta','Se repite la ruleta'],
  3:  ['Sin limite de nivel','Dificultad fácil','No puedes ver la barra de vida','Solo puedes usar ataques fisicos','No puedes cambiar de Pokémon','Porcentaje de shiny a muy alta','Porcentaje de radiantes a muy alta','Se repite la ruleta'],
  4:  ['Sin limite de nivel','Dificultad fácil','No puedes ver la barra de vida','Solo puedes usar ataques fisicos','No puedes cambiar de Pokémon','Porcentaje de shiny a muy alta','Porcentaje de radiantes a muy alta','Se repite la ruleta'],
  5:  ['Sin limite de nivel','Dificultad fácil','No puedes ver la barra de vida','Solo puedes usar ataques fisicos','No puedes cambiar de Pokémon','Porcentaje de shiny a muy alta','Porcentaje de radiantes a muy alta','Se repite la ruleta'],
  6:  ['Los pokemones se pueden ver','Ratio de shiny bajo','Legendario y singulares','No puedes usar ningún objeto','No puedes usar mecánicas','Ratio de radiante alto','Ratio de shiny alto','Tira de nuevo','Se termina la ruleta','Modo caos'],
  7:  ['Los pokemones se pueden ver','Ratio de shiny bajo','Legendario y singulares','No puedes usar ningún objeto','No puedes usar mecánicas','Ratio de radiante alto','Ratio de shiny alto','Tira de nuevo','Se termina la ruleta','Modo caos'],
  8:  ['Los pokemones se pueden ver','Ratio de shiny bajo','Legendario y singulares','No puedes usar ningún objeto','No puedes usar mecánicas','Ratio de radiante alto','Ratio de shiny alto','Tira de nuevo','Se termina la ruleta','Modo caos'],
  9:  ['Los pokemones se pueden ver','Ratio de shiny bajo','Legendario y singulares','No puedes usar ningún objeto','No puedes usar mecánicas','Ratio de radiante alto','Ratio de shiny alto','Tira de nuevo','Se termina la ruleta','Modo caos'],
  10: ['Usa 4 pokemones en las batallas','No se pueden usar ningún objeto','Se termina la ruleta','Tienes vidas ilimitadas','Tira de nuevo','Cambia todo el equipo','Puedes vender caramelos']
};

/* ─── COLOUR PALETTES per gym ─── */
const palettes = {
  1:  [['#5b4045','#7a555c'],['#2d6b44','#3e8f5d'],['#1b3a6b','#254f94'],['#6b2020','#8f3535'],['#3d5c2b','#527a3a'],['#5c3d6b','#7a529a'],['#1e5868','#297a8f']],
  2:  [['#5a4a30','#7a6440'],['#2b4e6b','#3a6990'],['#4a2b6b','#633a90'],['#6b2b2b','#904040'],['#2b5a3a','#3a7a50'],['#4a5a1a','#657a25'],['#1a4a5a','#25657a'],['#5a1a2b','#7a2540']],
  3:  [['#5a4a30','#7a6440'],['#2b4e6b','#3a6990'],['#4a2b6b','#633a90'],['#6b2b2b','#904040'],['#2b5a3a','#3a7a50'],['#4a5a1a','#657a25'],['#1a4a5a','#25657a'],['#5a1a2b','#7a2540']],
  4:  [['#4a3b1a','#7a6228'],['#6b3300','#9a4a00'],['#2b5a1a','#3e7a25'],['#1a3b5a','#25527a'],['#5a1a1a','#7a2525'],['#3b1a5a','#52257a'],['#1a5a4a','#257a65'],['#5a4a1a','#7a6528']],
  5:  [['#6b3000','#9a4500'],['#5a1a00','#7a2800'],['#3b2000','#5a3200'],['#6b1a00','#9a2800'],['#4a2500','#6b3800'],['#5a3000','#7a4500'],['#3b1800','#5a2800'],['#6b2800','#9a3e00']],
  6:  [['#505050','#6e6e6e'],['#4a4a4a','#686868'],['#424242','#5e5e5e'],['#3c3c3c','#585858'],['#585858','#727272'],['#464646','#626262'],['#4e4e4e','#6a6a6a'],['#3a3a3a','#545454'],['#525252','#6e6e6e'],['#484848','#646464']],
  7:  [['#1a3a6b','#254f94'],['#0f2a5a','#1a3d80'],['#1a2a5a','#253d80'],['#0a2050','#142d70'],['#152a60','#1e3e87'],['#0f1e50','#1a2e70'],['#1a3060','#253f82'],['#0a1a48','#142668'],['#152560','#1e3485'],['#0f2060','#1a2e87']],
  8:  [['#6b007a','#9a00ab'],['#5a006b','#800099'],['#4a0058','#6b0080'],['#3a004a','#550068'],['#580070','#7a00a0'],['#480060','#680090'],['#3e0055','#580078'],['#500068','#700096'],['#450060','#620088'],['#540070','#760099']],
  9:  [['#0a2a6b','#1040a0'],['#0a2060','#1035e0'],['#051850','#0a2bc0'],['#051060','#0a2090'],['#0a1a70','#1030b0'],['#050e58','#0a1ea0'],['#0a1860','#1028a8'],['#050c50','#0a1a90'],['#081560','#1025b0'],['#060f55','#0c1f98']],
  10: [['#7a0000','#b00000'],['#5a0000','#8a0000'],['#4a0000','#7a0000'],['#600000','#9a0000'],['#500000','#800000'],['#6a0000','#a00000'],['#3e0000','#6e0000']]
};

/* ─── CANVAS WHEEL ─── */
const canvas = document.getElementById('wheel');
const ctx    = canvas.getContext('2d');
const CX = canvas.width / 2;
const CY = canvas.height / 2;
const R  = CX - 2; // radius

let currentAngle = 0;  // radians, accumulated
let rotating = false;
let animId = null;
let segments = [];
let segColors = [];

function buildWheel(gymId) {
  segments  = gyms[gymId].slice();
  segColors = palettes[gymId] || palettes[1];
  drawWheel(currentAngle);
  renderList(gymId, -1);
}

function drawWheel(angleRad) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const n     = segments.length;
  const slice = (2 * Math.PI) / n;

  for (let i = 0; i < n; i++) {
    const startA = angleRad + i * slice;
    const endA   = startA + slice;
    const pair   = segColors[i % segColors.length];

    /* segment fill */
    const grad = ctx.createRadialGradient(CX, CY, 20, CX, CY, R);
    grad.addColorStop(0, pair[1]);
    grad.addColorStop(1, pair[0]);
    ctx.beginPath();
    ctx.moveTo(CX, CY);
    ctx.arc(CX, CY, R, startA, endA);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    /* divider */
    ctx.beginPath();
    ctx.moveTo(CX, CY);
    ctx.arc(CX, CY, R, startA, endA);
    ctx.closePath();
    ctx.strokeStyle = 'rgba(255,255,255,0.22)';
    ctx.lineWidth   = 2;
    ctx.stroke();

    /* text */
    ctx.save();
    ctx.translate(CX, CY);
    ctx.rotate(startA + slice / 2);
    ctx.textAlign    = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillStyle    = 'rgba(255,255,255,0.95)';
    ctx.shadowColor  = 'rgba(0,0,0,0.8)';
    ctx.shadowBlur   = 4;
    const maxW = R - 48;
    const words = segments[i].split(' ');
    let fontSize = 12;
    ctx.font = `700 ${fontSize}px 'Exo 2', sans-serif`;
    while (ctx.measureText(segments[i]).width > maxW && fontSize > 7) {
      fontSize--;
      ctx.font = `700 ${fontSize}px 'Exo 2', sans-serif`;
    }
    // wrap into up to 2 lines if needed
    if (ctx.measureText(segments[i]).width > maxW) {
      const mid = Math.ceil(words.length / 2);
      const l1  = words.slice(0, mid).join(' ');
      const l2  = words.slice(mid).join(' ');
      ctx.fillText(l1, R - 28, -7);
      ctx.fillText(l2, R - 28,  7);
    } else {
      ctx.fillText(segments[i], R - 28, 0);
    }
    ctx.restore();
  }

  /* inner shadow circle */
  const inner = ctx.createRadialGradient(CX, CY, R * 0.08, CX, CY, R * 0.18);
  inner.addColorStop(0, 'rgba(0,0,0,0.6)');
  inner.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.beginPath();
  ctx.arc(CX, CY, R * 0.20, 0, 2 * Math.PI);
  ctx.fillStyle = inner;
  ctx.fill();
}

/* ─── SPIN LOGIC ─── */
function pickIndex(finalAngle, count) {
  const slice  = (2 * Math.PI) / count;
  // top of wheel is -PI/2; pointer sits at top
  // normalise finalAngle so we know which segment is at top
  const norm   = ((finalAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  const atTop  = (2 * Math.PI - norm + Math.PI / 2) % (2 * Math.PI);
  return Math.floor(atTop / slice) % count;
}

function spin() {
  if (rotating) return;
  rotating = true;

  const gymId  = parseInt(document.getElementById('gymSelect').value);
  const count  = segments.length;
  const spv    = parseInt(document.getElementById('speed').value);
  const spins  = Math.floor(Math.random() * 6) + 6;
  const extra  = Math.random() * 2 * Math.PI;
  const totalR = spins * 2 * Math.PI + extra;
  const durationMs = 2200 + (7 - spv) * 450;

  const startAngle = currentAngle;
  const endAngle   = startAngle + totalR;
  const startTime  = performance.now();

  function easeOut(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function frame(now) {
    const elapsed = now - startTime;
    const t       = Math.min(elapsed / durationMs, 1);
    const angle   = startAngle + totalR * easeOut(t);
    drawWheel(angle);

    if (t < 1) {
      animId = requestAnimationFrame(frame);
    } else {
      currentAngle = endAngle;
      drawWheel(currentAngle);

      const idx    = pickIndex(currentAngle, count);
      const result = segments[idx];
      const el     = document.getElementById('currentResult');
      el.textContent = `✨ ${result}`;
      el.classList.remove('celebrating');
      void el.offsetWidth;
      el.classList.add('celebrating');

      renderList(gymId, idx);
      rotating = false;
    }
  }

  animId = requestAnimationFrame(frame);
}

/* ─── LIST ─── */
function renderList(gymId, highlight) {
  const list = document.getElementById('optionsList');
  list.innerHTML = '';
  gyms[gymId].forEach((o, i) => {
    const p = document.createElement('p');
    p.textContent = `${i + 1}. ${o}`;
    if (i === highlight) p.classList.add('highlight');
    list.appendChild(p);
  });
}

/* ─── EVENTS ─── */
document.getElementById('gymSelect').addEventListener('change', () => {
  const g = parseInt(document.getElementById('gymSelect').value);
  document.getElementById('currentGym').textContent = document.getElementById('gymSelect').selectedOptions[0].text.split('—')[0].trim();
  document.getElementById('currentResult').textContent = 'Listo para girar';
  currentAngle = 0;
  buildWheel(g);
  document.getElementById('listWrap').style.display = 'none';
});

document.getElementById('spinBtn').addEventListener('click', spin);

document.getElementById('previewBtn').addEventListener('click', () => {
  const lw = document.getElementById('listWrap');
  lw.style.display = lw.style.display === 'none' ? 'block' : 'none';
  renderList(parseInt(document.getElementById('gymSelect').value), -1);
});

document.getElementById('resetBtn').addEventListener('click', () => {
  if (animId) cancelAnimationFrame(animId);
  rotating = false;
  currentAngle = 0;
  drawWheel(0);
  document.getElementById('currentResult').textContent = 'Listo para girar';
});

document.getElementById('speed').addEventListener('input', function() {
  document.getElementById('speedLabel').textContent = this.value;
});

/* ─── INIT ─── */
buildWheel(1);