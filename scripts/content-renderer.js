/* ============================================================
   CONTENT RENDERER — Renderiza dinámicamente todas las secciones
   ============================================================ */

(function renderContent() {
  const d = window.SITE_DATA;

  // ============================================================
  // HERO SECTION — SCROLL-DRIVEN ANIMATION
  // ============================================================
  function renderHero() {
    const heroInnerEl = document.querySelector('.hero-inner');
    if (!heroInnerEl) return;

    const h = d.hero;
    heroInnerEl.innerHTML = `
      ${h.badge ? `
      <div class="hero-badge" data-aos>
        ${window.icon('check', 16)}
        ${h.badge}
      </div>
      ` : ''}

      <h1 class="hero-h1" data-aos>${h.h1}</h1>
      <p class="hero-intro" data-aos>${h.intro}</p>

      <div class="hero-ctas" data-aos>
        <a href="${h.cta_primary.href}" class="${h.cta_primary.class}">
          ${h.cta_primary.text}
        </a>
        <a href="${h.cta_secondary.href}" class="${h.cta_secondary.class}">
          ${h.cta_secondary.text}
        </a>
      </div>

      <!-- Trust badges -->
      <div class="hero-trust-badges" data-aos>
        ${h.trust_items.map(item => `
          <div class="hero-trust-item">
            ${window.icon('check', 16)}
            <span>${item}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  // ============================================================
  // PROBLEMA SECTION
  // ============================================================
  function renderProblema() {
    const problemEl = document.getElementById('problem-grid');
    if (!problemEl) return;

    const p = d.problema;
    const grid = `
      <div class="problem-grid">
        ${p.cards.map((card, i) => `
          <div class="problem-card" data-aos>
            <img
              src="${card.image}"
              alt="${card.alt}"
              title="${card.titleAttr}"
              width="400"
              height="300"
              loading="lazy"
              class="problem-card-image"
            />
            <div class="problem-content">
              <h3 class="problem-title">${card.title}</h3>
              <p class="problem-text">${card.text}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    problemEl.innerHTML = grid;
  }

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
  // PROCESO SECTION
  // ============================================================
  function renderProceso() {
    const procEl = document.getElementById('process-steps');
    if (!procEl) return;

    const p = d.proceso;
    const steps = `
      <div class="process-fullscreen">
        ${p.steps.map((step, i) => `
          <div class="process-slide ${i % 2 === 1 ? 'slide-reverse' : ''}">
            <div class="slide-image">
              <img
                src="${step.image}"
                alt="${step.alt}"
                width="800"
                height="600"
                loading="lazy"
                class="slide-img"
              />
            </div>
            <div class="slide-content">
              <div class="slide-number">${step.number}</div>
              <h3 class="slide-title">${step.title}</h3>
              <p class="slide-desc">${step.text}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    procEl.innerHTML = steps;
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
    renderProblema();
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
