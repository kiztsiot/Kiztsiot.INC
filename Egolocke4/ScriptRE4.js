  // ── Smooth scroll fix (override built-in scrollTo) ──
    function goTo(id) {
      const el = document.getElementById(id);
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }

    // ── News Carousel ──
    const slides = document.querySelectorAll('.news-slide');
    const dotsContainer = document.getElementById('newsDots');
    let current = 0;

    slides.forEach((_, i) => {
      const d = document.createElement('div');
      d.className = 'news-dot' + (i === 0 ? ' active' : '');
      d.onclick = () => goToSlide(i);
      dotsContainer.appendChild(d);
    });

    function goToSlide(n) {
      slides[current].classList.remove('active');
      dotsContainer.children[current].classList.remove('active');
      current = (n + slides.length) % slides.length;
      slides[current].classList.add('active');
      dotsContainer.children[current].classList.add('active');
    }

    function nextNews() { goToSlide(current + 1); }
    function prevNews() { goToSlide(current - 1); }

    // Auto-advance news
    setInterval(nextNews, 6000);