/* ============================================================
   HERO SCROLL ANIMATION — Canvas-based 3D frame scrubbing
   Technique from prueba_3d: sticky scroll + canvas cover render
   ============================================================ */

(function initHeroAnimation() {
  'use strict';

  const TOTAL  = 240;
  const BASE   = 'assets/images/hero_images/frame_';
  const EXT    = '.webp';

  // DOM
  const canvas       = document.getElementById('hero-canvas');
  const heroScroll   = document.getElementById('hero-scroll');
  const progressLine = document.getElementById('progress-line');
  const scrollHint   = document.getElementById('scroll-hint');
  const ldFill       = document.getElementById('vb-ld-fill');
  const ldPct        = document.getElementById('vb-ld-pct');
  const loadingEl    = document.getElementById('vb-loading');
  const eyebrow      = document.getElementById('hero-eyebrow');
  const heroH1       = document.getElementById('hero-h1');
  const heroSub      = document.querySelector('.hero-sub');
  const heroCtas     = document.getElementById('hero-ctas');

  if (!canvas || !heroScroll) return;

  const ctx    = canvas.getContext('2d');
  const frames = new Array(TOTAL);
  let loaded   = 0;
  let current  = 0;
  let ready    = false;

  function pad(n) { return String(n).padStart(5, '0'); }

  function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    if (ready) drawFrame(current);
  }

  // Cover-mode canvas render (same aspect-ratio technique as prueba_3d)
  function drawFrame(idx) {
    const img = frames[idx];
    if (!img || !img.complete || img.naturalWidth === 0) return;
    const cw = canvas.width, ch = canvas.height;
    const iw = img.naturalWidth, ih = img.naturalHeight;
    const scale = Math.max(cw / iw, ch / ih);
    const w = iw * scale, h = ih * scale;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
  }

  function showHeroText() {
    if (eyebrow)  eyebrow.classList.add('vis');
    if (heroH1)   heroH1.classList.add('vis');
    if (heroSub)  heroSub.classList.add('vis');
    if (heroCtas) heroCtas.classList.add('vis');
  }

  // ── Load all frames with progress bar ──────────────────────
  function onFrameLoad() {
    loaded++;
    const pct = Math.round((loaded / TOTAL) * 100);
    if (ldFill) ldFill.style.width = pct + '%';
    if (ldPct)  ldPct.textContent  = pct + ' %';

    if (loaded === TOTAL) {
      ready = true;
      drawFrame(0);
      if (loadingEl) loadingEl.classList.add('out');
      showHeroText();
    }
  }

  for (let i = 0; i < TOTAL; i++) {
    const img = new Image();
    img.src     = BASE + pad(i + 1) + EXT;
    img.onload  = onFrameLoad;
    img.onerror = onFrameLoad;
    frames[i]   = img;
  }

  // ── Scroll handler ──────────────────────────────────────────
  function onScroll() {
    const sectionH = heroScroll.offsetHeight - window.innerHeight;
    const rawProg  = Math.min(Math.max(window.scrollY / sectionH, 0), 1);

    const idx = Math.min(Math.floor(rawProg * TOTAL), TOTAL - 1);
    if (idx !== current) {
      current = idx;
      if (ready) drawFrame(current);
    }

    if (progressLine) progressLine.style.width = (rawProg * 100) + '%';
    if (scrollHint)   scrollHint.classList.toggle('gone', window.scrollY > 80);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  onScroll();
})();
