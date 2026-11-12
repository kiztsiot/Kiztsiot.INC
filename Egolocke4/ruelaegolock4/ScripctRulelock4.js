/* ─── DATA ─── */
const gyms = {
  1:  ['3 vidas adicionales','Una vida menos.','No se puede usar caramelos raros hasta el primer gimnasio','Solo puedes usar 5 pokemones hasta el primer gimnasio','1 vida adicional'],
  2:  ['Puedes tener hasta 2 niveles mas del líder.','Debes usar solo ataques físicos y sí no tienes ataques especiales. ','No puedes cambiar de pokémon en la batalla.','Repite la ruleta. ','Termina la ruleta.','No se descuentan las vidas cuando muere un pokémon.','Un pokémon muerto cuenta 2 vidas menos.'],
  3:  ['Puedes tener hasta 2 niveles mas del líder.','Debes usar solo ataques físicos y sí no tienes ataques especiales. ','No puedes cambiar de pokémon en la batalla.','Repite la ruleta. ','Termina la ruleta.','No se descuentan las vidas cuando muere un pokémon.','Un pokémon muerto cuenta 2 vidas menos.'],
  4:  ['Puedes tener hasta un nivel mas del lider','Termina la ruleta','Solo puedes usar ataques que hagan daño','No puedes usar curas que curen estados','Un vida mas ','Tira de nuevo.'],
  5:  ['Puedes tener hasta un nivel mas del lider','Termina la ruleta','Solo puedes usar ataques que hagan daño','No puedes usar curas que curen estados','Un vida mas ','Tira de nuevo.'],
  6:  ['Tira de nuevo.','Termina la ruleta.','No pierdes vida cuando muere un pokémon.','Solo puedes usar pokemones de doble tipo.'],
  7:  ['Tira de nuevo.','Termina la ruleta.','No pierdes vida cuando muere un pokémon.','Solo puedes usar pokemones de doble tipo.'],
  8:  ['No puedes usar ningún objeto en el combate. ','Tira de nuevo. ','Se termina la ruleta. ','Solo puedes usar pokémons doble tipo.','Solo puedes usar pokémons fuertes.','El pokémon no muere pero la vida se descuenta.','La vida no se descuenta pero el pokémon muere.','El pokémon vive y vida no se descuenta.'],
  9:  ['No puedes usar ningún objeto en el combate. ','Tira de nuevo. ','Se termina la ruleta. ','Solo puedes usar pokémons doble tipo.','Solo puedes usar pokémons fuertes.','El pokémon no muere pero la vida se descuenta.','La vida no se descuenta pero el pokémon muere.','El pokémon vive y vida no se descuenta.'],
  10: ['Usa 4 pokémons en las batallas. ','No se pueden usar ningún objeto. ','Se termina la ruleta. ','Tienes vidas ilimitadas. ','Tira de nuevo. ','Tira de nuevo. ','Cambia todo el equipo (y si no tienes pokémons en el pc gira de nuevo).'],
  11: ['Tira de nuevo.','PERDISTE','Recuperas todas las vidas, pero empiezas de nuevo','Obtienes 5 vidas extras','Recuperas todas las vidas']
};

/* ─── COLOUR PALETTES per gym ─── */
const palettes = {
  1:  [['#5b4045','#7a555c'],['#2d6b44','#3e8f5d'],['#1b3a6b','#254f94'],['#6b2020','#8f3535'],['#3d5c2b','#527a3a'],['#5c3d6b','#7a529a'],['#1e5868','#297a8f']],
  2:  [['#4115c0','#815bed'],['#4917d8','#9c7ef1'],['#3b13ae','#7349ec'],['#531fe7','#b6a0f5'],['#4516ca','#8e6cef'],['#4b18dc','#a98ff3'],['#3e13b5','#7950ec'],['#4e19e6','#ae96f4']], // Volador
  3:  [['#5b660e','#8d9d16'],['#677310','#9eb019'],['#535c0d','#859415'],['#717e12','#aec21b'],['#606b0f','#95a617'],['#697510','#a6b91a'],['#56600e','#889815'],['#6e7a11','#a9bd1b']], // Bicho
  4:  [['#60603f','#959461'],['#6d6c47','#a2a171'],['#585739','#8c8b5c'],['#77764e','#aead83'],['#666543','#9d9b68'],['#6e6e48','#a8a77a'],['#5b5a3c','#908f5e'],['#74734c','#aaa97e']], // Normal
  5:  [['#3f3053','#624a80'],['#47365e','#6d538f'],['#3a2c4c','#5c4679'],['#4e3b67','#795b9f'],['#433258','#684e88'],['#48375f','#735797'],['#3c2d4f','#5e477c'],['#4c3964','#75599a']], // Fantasma
  6:  [['#6b1916','#a52722'],['#781d19','#b82c26'],['#611714','#9b2520'],['#841f1b','#cc302a'],['#711b17','#af2924'],['#7a1d19','#c22e28'],['#651815','#9f2621'],['#801e1a','#c62f29']], // Lucha
  7:  [['#57577f','#9494b6'],['#626290','#ababc6'],['#4f4f74','#8989ae'],['#6d6d9c','#c3c3d6'],['#5b5b86','#a0a0be'],['#636392','#b7b7ce'],['#525278','#8d8db2'],['#686898','#bcbcd1']], // Acero
  8:  [['#369490','#6ecac6'],['#3ca7a2','#89d4d1'],['#318783','#60c5c1'],['#42b7b2','#a3dedb'],['#399c98','#7bcfcb'],['#3daaa5','#96d9d6'],['#338c88','#65c7c3'],['#40b2ad','#9bdbd8']], // Hielo
  9:  [['#3202a5','#4f08fb'],['#3803ba','#6426fc'],['#2d0296','#4904f0'],['#3e03cc','#7a44fc'],['#3503ae','#5a17fc'],['#3903bd','#6f35fc'],['#2f029c','#4a04f6'],['#3c03c6','#733bfc']], // Dragón
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