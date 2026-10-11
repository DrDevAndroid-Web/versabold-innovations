/* ============================================================
   HEADER — VersaBold Innovations
   Mobile nav: <details>/<summary> nativo (sin JS extra)
   Sticky con sombra en scroll
   ============================================================ */

(function renderHeader() {
  const d = window.SITE_DATA;

  // Detect depth by counting '../' prefixes in the main stylesheet link
  const styleLink = document.querySelector('link[href*="style.css"]');
  const styleHref = styleLink ? styleLink.getAttribute('href') : '';
  const depthMatch = styleHref.match(/^(\.\.\/)+/);
  const base = depthMatch ? depthMatch[0] : '';
  const home = base || './';  // "/" o "../": nunca enlazar a index.html (duplica la home)

  const resolveNavHref = (href) =>
    href.startsWith('#') ? `${home}${href}` : `${base}${href}`;

  const pillarMenu = d.nav.pillar_links
    .map(l => `<a href="${base}${l.href}" role="menuitem">${l.label}</a>`)
    .join('');

  const desktopLinks = d.nav.links
    .map(l => l.dropdown
      ? `<div class="nav-dropdown">
          <button type="button" class="nav-link nav-dropdown-toggle" aria-expanded="false" aria-haspopup="true">
            ${l.label} <span class="nav-caret" aria-hidden="true">▾</span>
          </button>
          <div class="nav-dropdown-menu" role="menu">
            ${pillarMenu}
            <a href="${resolveNavHref(l.href)}" class="nav-dropdown-all" role="menuitem">Ver todas las soluciones →</a>
          </div>
        </div>`
      : `<a href="${resolveNavHref(l.href)}" class="nav-link">${l.label}</a>`)
    .join('');

  const mobileLinks = [
    ...d.nav.links.map(l => ({ ...l, href: resolveNavHref(l.href) })),
    { href: '#', label: '─────────', disabled: true },
    ...d.nav.pillar_links.map(l => ({ ...l, href: `${base}${l.href}` })),
  ]
    .map(l => l.disabled
      ? `<span style="color:rgba(0,0,0,.18);font-size:.6rem;letter-spacing:.12em;padding:.4rem 1rem;display:block">SOLUCIONES</span>`
      : `<a href="${l.href}">${l.label}</a>`)
    .join('');

  const html = `
    <header class="site-header" id="site-header">
      <div class="container">
        <div class="header-inner">

          <a href="${home}" class="brand" aria-label="VersaBold Innovations — Inicio">
            <img src="${base}assets/images/logo.png" alt="" width="40" height="40">
            <span class="brand-copy">
              <b>VersaBold</b>
              <small>Innovations</small>
            </span>
          </a>

          <nav class="desktop-nav" aria-label="Navegación principal">
            ${desktopLinks}
          </nav>

          <a href="${d.brand.whatsapp}" class="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
            Iniciar proyecto ↗
          </a>

          <details class="mobile-nav">
            <summary aria-label="Abrir menú">
              <span></span>
              <span></span>
              <span></span>
            </summary>
            <div class="mobile-panel">
              ${mobileLinks}
            </div>
          </details>

        </div>
      </div>
    </header>
  `;

  const root = document.getElementById('header-root');
  if (root) root.innerHTML = html;

  // Sticky shadow on scroll
  window.addEventListener('scroll', () => {
    const h = document.getElementById('site-header');
    if (h) h.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Close mobile panel when a link is clicked
  document.addEventListener('click', e => {
    const panel = document.querySelector('.mobile-nav');
    if (!panel) return;
    if (e.target.matches('.mobile-panel a')) panel.removeAttribute('open');
  });

  // Soluciones dropdown: hover lo abre por CSS; click/tap y teclado con aria-expanded
  const dropdown = document.querySelector('.nav-dropdown');
  if (dropdown) {
    const toggle = dropdown.querySelector('.nav-dropdown-toggle');
    const setOpen = open => {
      dropdown.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    };
    toggle.addEventListener('click', () => setOpen(!dropdown.classList.contains('open')));
    document.addEventListener('click', e => { if (!dropdown.contains(e.target)) setOpen(false); });
    dropdown.addEventListener('keydown', e => {
      if (e.key === 'Escape') { setOpen(false); toggle.focus(); }
    });
    dropdown.addEventListener('focusout', e => {
      if (!dropdown.contains(e.relatedTarget)) setOpen(false);
    });
  }
})();
