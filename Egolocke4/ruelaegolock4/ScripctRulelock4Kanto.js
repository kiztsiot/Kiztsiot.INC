/* ─── DATA ─── */
const gyms = {
  1:  ['2 vidas adicionales','Una vida más.','Tira de nuevo.','Tira de nuevo.','No puedes usar objetos.'],
  // 1° — Roca
  2: ['Se termina la ruleta.','Solo puedes usar 4 pokemones','No puedes usar pokémones doble tipo.','Tira de nuevo.','Tira de nuevo.'],
  // 2° — Agua
  3: ['Se termina la ruleta.','Solo puedes usar 4 pokemones','No puedes usar pokémones doble tipo.','Tira de nuevo.','Tira de nuevo.'],
  // 3° — Eléctrico
  4: ['Se termina la ruleta.','Tira de nuevo.','Una vida más.','Ningún pokemon muere.','Solo puedes usar pokémons con 2 niveles menos del líder.','Tira de nuevo.'],
  // 4° — Planta
  5: ['Se termina la ruleta.','Tira de nuevo.','Una vida más.','Ningún pokemon muere.','Solo puedes usar pokémons con 2 niveles menos del líder.','Solo puedes usar pokémons de una sola región.','Tira de nuevo.'],
  // 5° — Veneno
  6: ['Se termina la ruleta.','No puedes usar MO.','No puedes usar pokémons con buenas estadísticas','2 vidas más.','1 vida más.','Tira de nuevo.','Tira de nuevo.'],
  // 6° — Psíquico
  7: ['Se termina la ruleta.','No puedes usar MO.','No puedes usar pokémons con buenas estadísticas','2 vidas más.','1 vida más.','Tira de nuevo.','Tira de nuevo.'],
  // 7° — Fuego
  8: ['Se termina la ruleta.','Solo puedes usar ataques físicos.','Solo puedes usar ataques especiales.','Tira de nuevo.','Tira de nuevo.'],
  // 8° — Tierra
  9: ['Se termina la ruleta.','Solo puedes usar ataques físicos.','Solo puedes usar ataques especiales.','Tira de nuevo.','Tira de nuevo.'],
  // Rojo
  10: ['Usa 3 pokémons en las batallas.','Se termina la ruleta.','Tienes vidas 3 extra..','Tira de nuevo.','Tira de nuevo.','Cambia todo el equipo.'],
  11: ['Tira de nuevo.','PERDISTE','Recuperas todas las vidas, pero empiezas de nuevo','Obtienes 5 vidas extras','Recuperas todas las vidas']
};

/* ─── COLOUR PALETTES per gym (ajustadas al tipo real de cada gimnasio de Kanto) ─── */
const palettes = {
  1:  [['#5b4045','#7a555c'],['#2d6b44','#3e8f5d'],['#1b3a6b','#254f94'],['#6b2020','#8f3535'],['#3d5c2b','#527a3a'],['#5c3d6b','#7a529a'],['#1e5868','#297a8f']],
  2:  [['#847328','#c1a83b'],['#93802d','#c8b14c'],['#796a25','#b49d37'],['#9e8a30','#ccb758'],['#8c7a2b','#c6ad42'],['#97832e','#cab351'],['#817027','#b8a038'],['#a69032','#ceb95e']], // Roca
  3:  [['#1652e1','#789cf2'],['#2962ea','#97b3f5'],['#154bcf','#628bef'],['#3c70ec','#adc3f7'],['#1d59e9','#87a7f3'],['#3067ea','#a0b9f6'],['#1650db','#6890f0'],['#4979ed','#b6caf8']], // Agua
  4:  [['#cea607','#f8d33e'],['#e5b908','#f9da5b'],['#bd9806','#f8cf2a'],['#f6c708','#fade6f'],['#dab007','#f9d74d'],['#ebbd08','#fadc64'],['#c8a207','#f8d030'],['#f7c913','#fae078']], // Eléctrico
  5:  [['#539930','#80cb5b'],['#5daa36','#91d270'],['#4c8d2c','#75c74c'],['#63b73a','#9cd77f'],['#58a233','#88cf65'],['#5faf37','#96d476'],['#51952f','#78c850'],['#68c03c','#a1d985']], // Planta
  6:  [['#732e73','#a843a8'],['#803380','#b74bb7'],['#6a2a6a','#9d3f9d'],['#8a378a','#bb56bb'],['#7a317a','#b046b0'],['#833483','#b950b9'],['#702d70','#a040a0'],['#903a90','#bd5bbd']], // Veneno
  7:  [['#e80a4c','#f96893'],['#f5185a','#fa88aa'],['#d50946','#f85283'],['#f62b68','#fb9fbb'],['#f50b51','#f9789f'],['#f61e5f','#fa92b1'],['#e2094a','#f85888'],['#f73871','#fba9c1']], // Psíquico
  8:  [['#c1590e','#f1883d'],['#d76310','#f39958'],['#b1510d','#f07d2b'],['#e76a11','#f4a46b'],['#cc5e0f','#f2904b'],['#dc6510','#f49e60'],['#bc560e','#f08030'],['#ee7015','#f5a973']], // Fuego
  9:  [['#c49a28','#e3c676'],['#d5a932','#e8d191'],['#b48e25','#dfbe63'],['#d8b042','#ecd9a4'],['#cfa32a','#e6cb83'],['#d6ac37','#ead499'],['#be9627','#e0c068'],['#dab54d','#eedcac']], // Tierra
  10: [['#7a0000','#b00000'],['#5a0000','#8a0000'],['#4a0000','#7a0000'],['#600000','#9a0000'],['#500000','#800000'],['#6a0000','#a00000'],['#3e0000','#6e0000']],
  11:  [['#60603f','#959461'],['#6d6c47','#a2a171'],['#585739','#8c8b5c'],['#77764e','#aead83'],['#666543','#9d9b68'],['#6e6e48','#a8a77a'],['#5b5a3c','#908f5e'],['#74734c','#aaa97e']], // Normal
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
    const maxW  = R - 84;   // deja libre el centro (hub)
    const words = segments[i].split(' ');
    const availH = slice * (R * 0.62) * 0.9;   // alto disponible en el sector
    let fontSize = 12, lines = [];
    for (; fontSize >= 8; fontSize--) {
      ctx.font = `700 ${fontSize}px 'Exo 2', sans-serif`;
      lines = [];
      let cur = '';
      words.forEach(w => {
        const test = cur ? cur + ' ' + w : w;
        if (ctx.measureText(test).width > maxW && cur) { lines.push(cur); cur = w; }
        else cur = test;
      });
      if (cur) lines.push(cur);
      if (lines.length * (fontSize + 2) <= availH) break;
    }
    const lh = fontSize + 2;
    const y0 = -((lines.length - 1) * lh) / 2;
    lines.forEach((ln, k) => ctx.fillText(ln.trim(), R - 28, y0 + k * lh));
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
  // top of wheel (pointer) is at canvas angle 3PI/2 (i.e. -PI/2)
  // normalise finalAngle so we know which segment is at top
  const norm   = ((finalAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  let atTop    = (3 * Math.PI / 2 - norm) % (2 * Math.PI);
  if (atTop < 0) atTop += 2 * Math.PI;
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