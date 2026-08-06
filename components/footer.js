/* ============================================================
   FOOTER — VersaBold Innovations
   ============================================================ */

(function renderFooter() {
  const d = window.SITE_DATA;
  const ic = window.icon;
  const year = new Date().getFullYear();

  const html = `
    <footer class="site-footer" id="contacto">
      <div class="footer-main container">

        <!-- Marca -->
        <div class="footer-brand-block">
          <div class="footer-logo">
            <img src="assets/favicon.ico" alt="" width="38" height="38">
            <span>
              <b>VersaBold</b>
              <small>Innovations</small>
            </span>
          </div>
          <p class="footer-tagline">${d.brand.tagline}</p>
          <a href="${d.brand.whatsapp}" class="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
            ${ic('whatsapp', 15)} Contáctanos
          </a>
        </div>

        <!-- Soluciones -->
        <div>
          <p class="footer-heading">Soluciones</p>
          <ul class="footer-links">
            ${d.footer.servicios.map(l => `<li><a href="${l.href}" class="footer-link">${l.text}</a></li>`).join('')}
          </ul>
        </div>

        <!-- Empresa -->
        <div>
          <p class="footer-heading">Empresa</p>
          <ul class="footer-links">
            ${d.footer.empresa.map(l => `<li><a href="${l.href}" class="footer-link">${l.text}</a></li>`).join('')}
          </ul>
        </div>

        <!-- Contacto -->
        <div>
          <p class="footer-heading">Contacto</p>
          <ul class="contact-list">
            <li class="contact-item">
              ${ic('phone', 15, 'icon')}
              <a href="tel:${d.brand.phone}">${d.brand.phone}</a>
            </li>
            <li class="contact-item">
              ${ic('mail', 15, 'icon')}
              <a href="mailto:${d.brand.email}">${d.brand.email}</a>
            </li>
            <li class="contact-item">
              ${ic('mapPin', 15, 'icon')}
              <span>${d.brand.location}</span>
            </li>
          </ul>
        </div>

      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-inner container">
          <span class="footer-copy">&copy; ${year} ${d.brand.name}. Todos los derechos reservados.</span>
          <nav class="footer-legal">
            ${d.footer.legal.map(l => `<a href="${l.href}">${l.text}</a>`).join('')}
          </nav>
        </div>
      </div>
    </footer>
  `;

  const root = document.getElementById('footer-root');
  if (root) root.innerHTML = html;
})();
