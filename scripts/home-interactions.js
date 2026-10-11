/* ============================================================
   HOME INTERACTIONS — VersaBold Innovations
   El contenido del home vive en index.html (HTML estático, indexable).
   Este script solo da comportamiento a los carruseles.
   ============================================================ */

(function homeInteractions() {

  /* Carrusel con autoavance: pausa al pasar el ratón por encima */
  function setupCarousel({ wrap, slides, dots, prev, next, interval = 4000 }) {
    if (!wrap || !slides.length) return;
    let current = 0;

    function goTo(n) {
      slides[current].classList.remove('active');
      if (slides[current].hasAttribute('aria-hidden')) slides[current].setAttribute('aria-hidden', 'true');
      dots[current]?.classList.remove('active');
      current = (n + slides.length) % slides.length;
      slides[current].classList.add('active');
      if (slides[current].hasAttribute('aria-hidden')) slides[current].setAttribute('aria-hidden', 'false');
      dots[current]?.classList.add('active');
    }

    dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
    prev?.addEventListener('click', () => goTo(current - 1));
    next?.addEventListener('click', () => goTo(current + 1));

    let timer = setInterval(() => goTo(current + 1), interval);
    wrap.addEventListener('mouseenter', () => clearInterval(timer));
    wrap.addEventListener('mouseleave', () => { timer = setInterval(() => goTo(current + 1), interval); });
  }

  function init() {
    // Proceso: "Cómo trabajamos"
    const proceso = document.getElementById('proceso-carousel');
    setupCarousel({
      wrap:   proceso,
      slides: proceso ? [...proceso.querySelectorAll('.proceso-slide')] : [],
      dots:   proceso ? [...proceso.querySelectorAll('.proceso-dot')] : [],
    });

    // Lead magnet: guía de la plantilla
    const lm = document.querySelector('.lm-slider-wrap');
    setupCarousel({
      wrap:   lm,
      slides: lm ? [...lm.querySelectorAll('.lm-slide')] : [],
      dots:   lm ? [...lm.querySelectorAll('.lm-dot')] : [],
      prev:   document.getElementById('lm-prev'),
      next:   document.getElementById('lm-next'),
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
