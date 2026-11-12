// Carrusel de Noticias
let currentSlide = 0;
 
function initNews() {
  const slides = document.querySelectorAll('.news-slide');
  const dotsContainer = document.getElementById('newsDots');
  if (!slides.length || !dotsContainer) return;
 
  dotsContainer.innerHTML = '';
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'news-dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  });
 
  showSlide(0);
}
 
function showSlide(index) {
  const slides = document.querySelectorAll('.news-slide');
  const dots = document.querySelectorAll('.news-dot');
  if (!slides.length) return;
 
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
 
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}
 
function goToSlide(index) { showSlide(index); }
function nextNews() { showSlide(currentSlide + 1); }
function prevNews() { showSlide(currentSlide - 1); }
 
document.addEventListener('DOMContentLoaded', () => {
  initNews();
  setInterval(() => nextNews(), 6000);
});
 
 
// servicios API

async function cargarServicios() {
  const container = document.getElementById("servicesContainer");

  if (!container) return;

  container.innerHTML = "<p>Cargando servicios...</p>";

  try {
    const response = await fetch("https://ciisa.coningenio.cl/v1/services/", {
      headers: {
        Authorization: "Bearer ciisa"
      }
    });

    const data = await response.json();

    if (!data || !data.data) {
      throw new Error("Datos inválidos");
    }

    container.innerHTML = "";

    data.data.forEach(servicio => {
      const div = document.createElement("div");
      div.classList.add("card");

      div.innerHTML = `
        <h3>${servicio.titulo}</h3>
        <p>${servicio.descripcion}</p>
      `;

      container.appendChild(div);
    });

  } catch (error) {
    console.error("Error cargando servicios:", error);
    container.innerHTML = "<p>Error al cargar servicios</p>";
  }
}



//  nosotros API

async function cargarNosotros() {
  const container = document.getElementById("aboutContainer");

  if (!container) return;

  container.innerHTML = "<p>Cargando información...</p>";

  try {
    const response = await fetch("https://ciisa.coningenio.cl/v1/about-us/", {
      headers: {
        Authorization: "Bearer ciisa"
      }
    });

    const data = await response.json();

    if (!data || !data.data) {
      throw new Error("Datos inválidos");
    }

    const info = data.data;

    container.innerHTML = `
      <h3>Misión</h3>
      <p>${info.mision}</p>

      <h3>Visión</h3>
      <p>${info.vision}</p>

      <h3>Valores</h3>
      <p>${info.valores}</p>
    `;

  } catch (error) {
    console.error("Error cargando nosotros:", error);
    container.innerHTML = "<p>Error al cargar información</p>";
  }
}
