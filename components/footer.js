/* ============================================================
   FOOTER COMPONENT — VersaBold WEB PRINCIPAL
   ============================================================ */

(function renderFooter() {
  const d = window.SITE_DATA;
  const ic = window.icon;
  const year = new Date().getFullYear();

  const footerHTML = `
    <footer class="site-footer">
      <div class="footer-main container">
        <!-- Columna: Marca -->
        <div class="footer-nav-group">
          <div class="footer-brand">
            <div class="footer-logo">
              <img src="assets/favicon.ico" alt="VersaBold logo" width="36" height="36">
            </div>
            <div class="footer-brand-name">${d.brand.name}</div>
            <div class="footer-tagline">${d.brand.tagline}</div>
            <a href="${d.brand.whatsapp}" class="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
              ${ic('whatsapp', 16)} Contáctanos
            </a>
          </div>
        </div>

        <!-- Columna: Servicios -->
        <div class="footer-nav-group">
          <div class="footer-heading">Soluciones</div>
          <ul class="footer-links">
            ${d.footer.servicios.map(link => `
              <li><a href="${link.href}" class="footer-link">${link.text}</a></li>
            `).join('')}
          </ul>
        </div>

        <!-- Columna: Empresa -->
        <div class="footer-nav-group">
          <div class="footer-heading">Empresa</div>
          <ul class="footer-links">
            ${d.footer.empresa.map(link => `
              <li><a href="${link.href}" class="footer-link">${link.text}</a></li>
            `).join('')}
          </ul>
        </div>

        <!-- Columna: Contacto -->
        <div class="footer-nav-group" id="contacto">
          <div class="footer-heading">Contacto</div>
          <ul class="contact-list">
            <li class="contact-item">
              ${ic('phone', 16)}
              <a href="tel:${d.brand.phone}">${d.brand.phone}</a>
            </li>
            <li class="contact-item">
              ${ic('mail', 16)}
              <a href="mailto:${d.brand.email}">${d.brand.email}</a>
            </li>
            <li class="contact-item">
              ${ic('mapPin', 16)}
              <span>${d.brand.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="container">
          <p class="footer-copy">&copy; ${year} ${d.brand.name}. Todos los derechos reservados.</p>
          <nav class="footer-legal">
            ${d.footer.legal.map(link => `
              <a href="${link.href}" class="footer-legal-link">${link.text}</a>
            `).join('')}
          </nav>
        </div>
      </div>
    </footer>
  `;

  const root = document.getElementById('footer-root');
  if (root) root.innerHTML = footerHTML;
})();
