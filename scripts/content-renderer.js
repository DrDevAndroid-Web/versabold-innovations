/* ============================================================
   CONTENT RENDERER — Renderiza dinámicamente todas las secciones
   ============================================================ */

(function renderContent() {
  const d = window.SITE_DATA;

  // ============================================================
  // HERO SECTION — SCROLL-DRIVEN ANIMATION
  // ============================================================
  function renderHero() {
    const h = d.hero;

    // H1 (canvas-hero layout uses #hero-h1 div)
    const heroH1El = document.getElementById('hero-h1');
    if (heroH1El) {
      heroH1El.innerHTML = h.h1;
    }

    // CTAs
    const heroCtas = document.getElementById('hero-ctas');
    if (heroCtas) {
      heroCtas.innerHTML = `
        <a href="${h.cta_primary.href}" class="${h.cta_primary.class}" target="_blank" rel="noopener noreferrer">
          ${h.cta_primary.text}
        </a>
        <a href="${h.cta_secondary.href}" class="${h.cta_secondary.class}">
          ${h.cta_secondary.text}
        </a>
      `;
    }

  }

  // Problema section ahora está hardcodeada en el HTML (carrusel Bootstrap)

  // ============================================================
  // LEAD MAGNET — WHATSAPP GROUP
  // ============================================================
  function renderPropuesta() {
    const propEl = document.getElementById('propuesta-section');
    if (!propEl) return;

    const p = d.propuesta;
    propEl.innerHTML = `
      <div class="container">
        <div class="lead-magnet-wrapper" data-aos>
          <div class="lead-magnet-content">
            <h2 class="lead-magnet-title">${p.h2}</h2>
            <p class="lead-magnet-intro">${p.intro}</p>
            ${p.subintro ? `<p class="lead-magnet-subintro">${p.subintro}</p>` : ''}

            <a href="${p.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">
              ${window.icon('whatsapp', 20)}
              ${p.buttonText}
            </a>

            <p class="lead-magnet-disclaimer">${p.disclaimer}</p>
          </div>
        </div>
      </div>
    `;
  }

  // ============================================================
  // SERVICIOS / BENTO GRID SECTION
  // ============================================================
  function renderServicios() {
    const servEl = document.getElementById('services-grid');
    if (!servEl) return;

    const s = d.servicios;
    const grid = `
      <div class="services-grid">
        ${s.items.map(item => `
          <div class="service-card" data-aos>
            <img
              src="${item.image}"
              alt="${item.title}"
              width="600"
              height="400"
              loading="lazy"
              class="service-card-image"
            />
            <div class="service-content">
              <h3 class="service-title">${item.title}</h3>
              <p class="service-desc">${item.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    servEl.innerHTML = grid;
  }

  // ============================================================
  // PROCESO SECTION — scroll gallery
  // ============================================================
  function renderProceso() {
    const grid = document.getElementById('process-steps');
    const track = document.getElementById('proceso-track');
    if (!grid || !track) return;

    const steps = d.proceso.steps;
    const N = steps.length;

    // Set scroll-track height: N steps × 120vh
    track.style.height = `${N * 120}vh`;

    // Layout: [left%, top%, width%, height%] per card per active index
    // Active card = ~55% wide × 100% tall; others = ~(45%/3) wide × 50% tall
    const GAP = 1.2;
    function buildLayout(activeIdx) {
      // 4-column conceptual grid (same logic as scroll-gallery prototype)
      const cols = 4, rows = 2;
      const cellW = (100 - GAP * (cols - 1)) / cols;
      const cellH = (100 - GAP * (rows - 1)) / rows;

      // Active block positions cycling per index
      const activeCol = [0, 2, 0, 2][activeIdx] ?? 0;

      const aL = activeCol * (cellW + GAP);
      const aW = cellW * 2 + GAP;
      const layout = new Array(N);
      layout[activeIdx] = { l: aL, t: 0, w: aW, h: 100 };

      // Free 1×1 cells (columns NOT covered by active block)
      const freeCells = [];
      for (let c = 0; c < cols; c++) {
        if (c < activeCol || c >= activeCol + 2) {
          for (let r = 0; r < rows; r++) freeCells.push({ c, r });
        }
      }

      const others = steps.map((_, i) => i).filter(i => i !== activeIdx);
      others.forEach((idx, fi) => {
        const cell = freeCells[fi] ?? freeCells[freeCells.length - 1];
        layout[idx] = {
          l: cell.c * (cellW + GAP),
          t: cell.r * (cellH + GAP),
          w: cellW,
          h: cellH,
        };
      });
      return layout;
    }

    // Pre-compute all layouts
    const LAYOUTS = steps.map((_, i) => buildLayout(i));

    // Build card elements
    const cardEls = steps.map((step, i) => {
      const card = document.createElement('article');
      card.className = 'proceso-card';
      card.setAttribute('role', 'listitem');
      card.setAttribute('aria-label', step.title);

      card.innerHTML = `
        <img src="${step.image}" alt="${step.alt}" width="800" height="600" loading="${i === 0 ? 'eager' : 'lazy'}">
        <div class="proceso-copy">
          <span class="step-num">Paso ${step.number}</span>
          <h3 class="step-title">${step.title}</h3>
          <p class="step-desc">${step.text}</p>
        </div>`;

      grid.appendChild(card);
      return card;
    });

    // Dots — usa el contenedor ya en el HTML (fixed al viewport)
    const dotsContainer = document.getElementById('proceso-dots');

    const dotEls = steps.map((step, i) => {
      const btn = document.createElement('button');
      btn.className = 'proceso-dot';
      btn.setAttribute('aria-label', `Ir al paso ${i + 1}: ${step.title}`);
      btn.addEventListener('click', () => scrollToStep(i));
      dotsContainer.appendChild(btn);
      return btn;
    });

    // Apply layout
    let currentStep = -1;
    function applyStep(idx) {
      if (idx === currentStep) return;
      currentStep = idx;
      const layout = LAYOUTS[idx];
      cardEls.forEach((el, i) => {
        const r = layout[i];
        el.style.left    = `${r.l}%`;
        el.style.top     = `${r.t}%`;
        el.style.width   = `${r.w}%`;
        el.style.height  = `${r.h}%`;
        el.style.zIndex  = i === idx ? '10' : '1';
        el.style.opacity = i === idx ? '1' : '0.38';
        el.classList.toggle('is-active',   i === idx);
        el.classList.toggle('is-inactive', i !== idx);
      });
      dotEls.forEach((d, i) => d.classList.toggle('active', i === idx));
    }

    // Scroll to step
    function scrollToStep(idx) {
      const stepH = track.offsetHeight / N;
      window.scrollTo({ top: track.offsetTop + idx * stepH + stepH * 0.3, behavior: 'smooth' });
    }

    // Scroll listener
    function onProcesoScroll() {
      const trackTop    = track.offsetTop;
      const trackBottom = trackTop + track.offsetHeight;
      const scrollY     = window.scrollY;
      const vh          = window.innerHeight;

      // Mostrar dots solo mientras la sección está en pantalla
      const inView = scrollY + vh > trackTop && scrollY < trackBottom;
      dotsContainer.classList.toggle('visible', inView);

      const trackScroll = scrollY - trackTop;
      const stepH = track.offsetHeight / N;
      const raw   = trackScroll / stepH;
      const idx   = Math.max(0, Math.min(N - 1, Math.floor(raw)));
      applyStep(idx);
    }

    window.addEventListener('scroll', onProcesoScroll, { passive: true });

    // Init
    applyStep(0);
    onProcesoScroll();
  }

  // ============================================================
  // DIFERENCIACIÓN SECTION
  // ============================================================
  function renderDiferenciacion() {
    const diffEl = document.getElementById('comparison-table');
    if (!diffEl) return;

    const d_data = d.diferenciacion;
    const table = `
      <div class="comparison-table">
        ${d_data.comparison.map(row => `
          <div class="comparison-row">
            <div class="comparison-col col-problem">
              <span class="col-label">Antes</span>
              <p>${row.problem}</p>
            </div>
            <div class="comparison-arrow">
              ${window.icon('arrowRight', 24)}
            </div>
            <div class="comparison-col col-solution">
              <span class="col-label">Ahora</span>
              <p>${row.solution}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    diffEl.innerHTML = table;
  }

  // ============================================================
  // PROYECTOS SECTION
  // ============================================================
  function renderProyectos() {
    const projEl = document.getElementById('projects-grid');
    if (!projEl) return;

    const p = d.proyectos;
    const grid = `
      <div class="projects-grid">
        ${p.items.map(item => `
          <div class="project-card" data-aos>
            <img
              src="${item.image}"
              alt="${item.title}"
              width="600"
              height="400"
              loading="lazy"
              class="project-image"
            />
            <div class="project-body">
              <h3 class="project-title">${item.title}</h3>
              <div class="project-before-after">
                <div class="project-before">
                  <span class="label">Antes</span>
                  <p>${item.before}</p>
                </div>
                <span class="arrow">${window.icon('arrowRight', 20)}</span>
                <div class="project-after">
                  <span class="label">Después</span>
                  <p>${item.after}</p>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    projEl.innerHTML = grid;
  }

  // ============================================================
  // TESTIMONIOS SECTION
  // ============================================================
  function renderTestimonios() {
    const testEl = document.getElementById('testimonials-list');
    if (!testEl) return;

    const t = d.testimonios;
    const list = `
      <div class="testimonials-list">
        ${t.items.map(item => `
          <div class="testimonial-card" data-aos>
            <div class="testimonial-header">
              <img
                src="${item.image}"
                alt="${item.name}"
                width="60"
                height="60"
                class="author-avatar"
              />
              <div class="author-info">
                <div class="author-name">${item.name}</div>
                <div class="author-role">${item.business} • ${item.role}</div>
              </div>
            </div>

            <div class="stars">
              ${[...Array(item.rating)].map(() => window.icon('star', 16, 'star-filled')).join('')}
            </div>

            <div class="testimonial-text">
              <p><strong>Problema:</strong> ${item.problem}</p>
              <p><strong>Solución:</strong> ${item.solution}</p>
              <p><strong>Resultado:</strong> <em>${item.result}</em></p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    testEl.innerHTML = list;
  }

  // ============================================================
  // FAQ SECTION
  // ============================================================
  function renderFAQ() {
    const faqEl = document.getElementById('faq-list');
    if (!faqEl) return;

    const f = d.faq;
    const list = `
      <div class="faq-list">
        ${f.items.map((item, i) => `
          <details class="faq-item" data-faq-index="${i}">
            <summary class="faq-question">
              <span class="faq-question-text">${item.q}</span>
              ${window.icon('chevronDown', 20, 'faq-arrow')}
            </summary>
            <div class="faq-answer">
              <p>${item.a}</p>
            </div>
          </details>
        `).join('')}
      </div>
    `;
    faqEl.innerHTML = list;

    // Add event listeners to FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
      item.addEventListener('toggle', () => {
        const arrow = item.querySelector('.faq-arrow');
        if (arrow) {
          arrow.style.transform = item.open ? 'rotate(180deg)' : 'rotate(0deg)';
        }
      });
    });
  }

  // ============================================================
  // CTA FINAL SECTION
  // ============================================================
  function renderCTAFinal() {
    const ctaEl = document.querySelector('.cta-section');
    if (!ctaEl) return;

    const cta = d.cta_final;
    ctaEl.innerHTML = `
      <div class="cta-inner container" data-aos>
        <h2 class="cta-heading">${cta.h2}</h2>
        <p class="cta-sub">${cta.intro}</p>
        <div class="cta-actions">
          <a href="${cta.cta.href}" class="${cta.cta.class}">
            ${cta.cta.text}
          </a>
        </div>
      </div>
    `;

    // Set background image if provided
    if (cta.bgImage) {
      ctaEl.style.backgroundImage = `url('${cta.bgImage}')`;
      ctaEl.style.backgroundSize = 'cover';
      ctaEl.style.backgroundPosition = 'center';
    }
  }

  // ============================================================
  // CALL ALL RENDERERS
  // ============================================================
  function init() {
    renderHero();
    renderPropuesta();
    renderServicios();
    renderProceso();
    renderDiferenciacion();
    renderProyectos();
    renderTestimonios();
    renderFAQ();
    renderCTAFinal();

    // Trigger AOS animation setup after rendering
    if (window.setupAOS) window.setupAOS();
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
