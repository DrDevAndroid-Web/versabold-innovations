/* ============================================================
   HEADER COMPONENT — VersaBold WEB PRINCIPAL
   ============================================================ */

(function renderHeader() {
  const d = window.SITE_DATA;
  const ic = window.icon;

  const headerHTML = `
    <header id="site-header" class="site-header">
      <div class="container">
        <div class="header-inner">
          <a href="#" class="brand-logo" aria-label="VersaBold Innovations">
            <img src="assets/favicon.ico" alt="VersaBold logo" width="40" height="40">
            <div class="brand-name">
              <div class="brand-bold">VersaBold</div>
              <div class="brand-sub">Innovations</div>
            </div>
          </a>

          <nav class="main-nav" id="main-nav" aria-label="Navegación principal">
            <ul class="nav-list">
              ${d.nav.links.map(link => `
                <li>
                  <a href="${link.href}" class="nav-link">${link.label}</a>
                </li>
              `).join('')}
            </ul>
          </nav>

          <a href="${d.brand.whatsapp}" class="btn btn-primary btn-sm btn-header" target="_blank" rel="noopener noreferrer">
            📞 Contacto
          </a>

          <button
            id="nav-toggle"
            class="nav-toggle"
            aria-controls="main-nav"
            aria-label="Abrir menú de navegación"
            aria-expanded="false"
          >
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
        </div>
      </div>
    </header>
  `;

  const root = document.getElementById('header-root');
  if (root) root.innerHTML = headerHTML;

  // Mobile menu toggle
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isOpen);
      toggle.classList.toggle('is-open');
      nav.classList.toggle('nav-open');
      document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    });

    // Close nav when link clicked
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.classList.remove('is-open');
        nav.classList.remove('nav-open');
        document.body.style.overflow = 'auto';
      });
    });
  }

  // Sticky header shadow on scroll
  window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // Mobile menu show/hide on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && nav) {
      nav.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.classList.remove('is-open');
      document.body.style.overflow = 'auto';
    }
  });
})();
