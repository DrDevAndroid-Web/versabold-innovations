/* ============================================================
   CONTENT RENDERER — VersaBold Innovations
   Renderiza dinámicamente las secciones del home desde SITE_DATA
   ============================================================ */

(function renderContent() {
  const d  = window.SITE_DATA;
  const ic = window.icon;

  /* ── HERO ──────────────────────────────────────────────── */
  function renderHero() {
    const el = document.getElementById('hero-root');
    if (!el) return;
    const h = d.hero;

    el.innerHTML = `
      <section class="hero" id="inicio">
        <div class="hero-visual">
          <img src="assets/images/hero-main.webp" alt="Negocio digital en Guantánamo — VersaBold Innovations" class="hero-img" loading="eager">
          <div class="hero-img-overlay"></div>
        </div>
        <div class="hero-copy reveal">
          <p class="eyebrow">${h.eyebrow}</p>
          <h1>${h.h1}</h1>
          <p class="hero-lead">${h.lead}</p>
          <div class="hero-actions">
            <a href="${h.cta_primary.href}" class="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
              ${h.cta_primary.text} ↗
            </a>
            <a href="${h.cta_secondary.href}" class="text-link">
              ${h.cta_secondary.text} <span>↓</span>
            </a>
          </div>
          <div class="hero-proof" aria-label="Valores de VersaBold">
            ${h.proof.map(p => `<div><b>${p.num}</b><span>${p.label}</span></div>`).join('')}
          </div>
        </div>
      </section>
    `;
  }

  /* ── VALUE STRIP ───────────────────────────────────────── */
  function renderValueStrip() {
    const el = document.getElementById('value-strip-root');
    if (!el) return;
    const vs = d.value_strip;
    el.innerHTML = `
      <div class="value-strip" aria-label="Propuesta de valor">
        <p>${vs.words.join(' <span class="vs-accent">×</span> ')}</p>
        <p class="vs-sub">${vs.sub}</p>
      </div>
    `;
  }

  /* ── SERVICIOS ─────────────────────────────────────────── */
  function renderServicios() {
    const el = document.getElementById('servicios-root');
    if (!el) return;
    const s = d.servicios;

    el.innerHTML = `
      <section class="section services-section" id="soluciones">
        <div class="container">
          <div class="section-heading reveal">
            <div>
              <p class="eyebrow">${s.eyebrow}</p>
              <h2>${s.h2}</h2>
            </div>
            <p>${s.sub}</p>
          </div>
          <div class="service-grid">
            ${s.items.map(item => `
              <a href="${item.href}" class="service-card reveal ${item.featured ? 'featured' : ''}">
                <div class="service-num">${item.n}</div>
                <div class="service-img-wrap">
                  <img src="${item.image}" alt="${item.title}" loading="lazy" width="400" height="220">
                </div>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <div class="service-tags">
                  ${item.tags.map(t => `<span>${t}</span>`).join('')}
                </div>
                <span class="service-card-link">Ver solución completa <span>↗</span></span>
              </a>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  /* ── MANIFESTO ─────────────────────────────────────────── */
  function renderManifesto() {
    const el = document.getElementById('manifesto-root');
    if (!el) return;
    const m = d.manifesto;

    el.innerHTML = `
      <section class="manifesto" id="nosotros">
        <div class="manifesto-img-wrap" aria-hidden="true">
          <img src="${m.image}" alt="" loading="lazy">
        </div>
        <div class="manifesto-copy reveal">
          <p class="eyebrow light">${m.eyebrow}</p>
          <h2>${m.h2}</h2>
          <p>${m.body}</p>
          <div class="manifesto-values">
            ${m.values.map(v => `
              <div>
                <b>${v.letter}</b>
                <span>
                  <strong>${v.name}</strong>
                  <em>${v.desc}</em>
                </span>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  /* ── PROCESO ───────────────────────────────────────────── */
  function renderProceso() {
    const el = document.getElementById('proceso-root');
    if (!el) return;
    const p = d.proceso;

    el.innerHTML = `
      <section class="section proceso-section" id="proceso">
        <div class="container">
          <div class="section-heading centered reveal">
            <div>
              <p class="eyebrow">${p.eyebrow}</p>
              <h2>${p.h2}</h2>
            </div>
          </div>
          <div class="proceso-carousel" id="proceso-carousel">
            ${p.steps.map((s, i) => `
              <div class="proceso-slide ${i === 0 ? 'active' : ''}" data-index="${i}">
                <div class="proceso-slide-img">
                  <img src="${s.image}" alt="${s.title}" loading="${i === 0 ? 'eager' : 'lazy'}">
                </div>
                <div class="proceso-slide-copy">
                  <b>${s.n}</b>
                  <h3>${s.title}</h3>
                  <p>${s.text}</p>
                </div>
              </div>
            `).join('')}
            <div class="proceso-dots">
              ${p.steps.map((_, i) => `<button class="proceso-dot ${i === 0 ? 'active' : ''}" data-dot="${i}" aria-label="Paso ${i+1}"></button>`).join('')}
            </div>
          </div>
        </div>
      </section>
    `;

    let current = 0;
    const slides = el.querySelectorAll('.proceso-slide');
    const dots   = el.querySelectorAll('.proceso-dot');

    function goTo(idx) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = idx;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    }

    dots.forEach(dot => dot.addEventListener('click', () => goTo(Number(dot.dataset.dot))));

    const carousel = el.querySelector('.proceso-carousel');
    let timer = setInterval(() => goTo((current + 1) % slides.length), 4000);
    carousel.addEventListener('mouseenter', () => clearInterval(timer));
    carousel.addEventListener('mouseleave', () => {
      timer = setInterval(() => goTo((current + 1) % slides.length), 4000);
    });
  }

  /* ── TESTIMONIOS ───────────────────────────────────────── */
  function renderTestimonios() {
    const el = document.getElementById('testimonios-root');
    if (!el) return;
    const t = d.testimonios;
    const stars = n => Array.from({length: n}, () => ic('star', 14, 'icon-star')).join('');

    el.innerHTML = `
      <section class="section testimonials-section" id="testimonios">
        <div class="container">
          <div class="section-heading centered reveal">
            <div>
              <p class="eyebrow">${t.eyebrow}</p>
              <h2>${t.h2}</h2>
            </div>
          </div>
          <div class="testimonials-grid">
            ${t.items.map(item => `
              <div class="testimonial-card reveal">
                <div class="testimonial-header">
                  <img src="${item.image}" alt="${item.name}" width="52" height="52" class="author-avatar" loading="lazy">
                  <div>
                    <div class="author-name">${item.name}</div>
                    <div class="author-role">${item.business} · ${item.role}</div>
                  </div>
                </div>
                <div class="stars">${stars(item.rating)}</div>
                <div class="testimonial-body">
                  <p><strong>Problema:</strong> ${item.problem}</p>
                  <p><strong>Solución:</strong> ${item.solution}</p>
                </div>
                <div class="testimonial-result">↑ ${item.result}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  /* ── LEAD MAGNET ───────────────────────────────────────── */
  function renderLeadMagnet() {
    const el = document.getElementById('lead-magnet-root');
    if (!el) return;
    const lm = d.lead_magnet;

    el.innerHTML = `
      <section class="lead-magnet-section" id="lead-magnet">
        <div class="container">
          <div class="lead-magnet-inner">
            <div class="reveal">
              <div class="lead-magnet-badge">${lm.badge}</div>
              <h2>${lm.h2}</h2>
              <p>${lm.body}</p>
              <a href="${lm.form_url}" class="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
                ${lm.cta_text} ↗
              </a>
              <p class="lead-magnet-disclaimer">${lm.disclaimer}</p>
            </div>
            <div class="lead-magnet-visual reveal" aria-hidden="true">
              ${lm.visual_emoji}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  /* ── FAQ ────────────────────────────────────────────────── */
  function renderFAQ() {
    const el = document.getElementById('faq-root');
    if (!el) return;
    const f = d.faq;

    el.innerHTML = `
      <section class="section" id="faq">
        <div class="container">
          <div class="section-heading centered reveal">
            <div>
              <p class="eyebrow">${f.eyebrow}</p>
              <h2>${f.h2}</h2>
            </div>
          </div>
          <div class="faq-list">
            ${f.items.map(item => `
              <details class="faq-item reveal">
                <summary class="faq-question">
                  <span>${item.q}</span>
                  <span class="faq-toggle">+</span>
                </summary>
                <div class="faq-answer"><p>${item.a}</p></div>
              </details>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  /* ── CTA FINAL ─────────────────────────────────────────── */
  function renderCTAFinal() {
    const el = document.getElementById('cta-root');
    if (!el) return;
    const c = d.cta_final;

    el.innerHTML = `
      <section class="cta-section" id="contacto">
        <div class="cta-grid-bg" aria-hidden="true"></div>
        <div class="cta-copy reveal">
          <p class="eyebrow">${c.eyebrow}</p>
          <h2>${c.h2}</h2>
          <p>${c.body}</p>
          <a href="${c.cta_href}" class="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
            ${c.cta_text} ↗
          </a>
        </div>
        <div class="cta-mark" aria-hidden="true">V</div>
      </section>
    `;
  }

  /* ── INIT ───────────────────────────────────────────────── */
  function init() {
    renderHero();
    renderValueStrip();
    renderServicios();
    renderManifesto();
    renderProceso();
    renderTestimonios();
    renderLeadMagnet();
    renderFAQ();
    renderCTAFinal();
    if (window.setupReveal) window.setupReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
