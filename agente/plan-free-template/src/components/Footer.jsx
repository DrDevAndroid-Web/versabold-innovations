import { useConfig } from '../hooks/useConfig.js';
import { useWhatsApp } from '../hooks/useWhatsApp.js';
import VersaBoldBadge from './VersaBoldBadge.jsx';

export default function Footer({ onNavegar }) {
  const { config } = useConfig();
  const { buildGeneralLink } = useWhatsApp();

  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">

        {/* Columna marca */}
        <div className="footer__brand">
          {config.logo && (
            <img src={config.logo} alt={`Logo ${config.business_name}`} className="footer__logo" width="48" height="48" />
          )}
          <p className="footer__business-name">{config.business_name}</p>
          {config.slogan && <p className="footer__slogan">{config.slogan}</p>}
        </div>

        {/* Columna contacto */}
        <div className="footer__contact">
          <h3 className="footer__heading">Contacto</h3>
          <ul className="footer__list" role="list">
            {config.whatsapp && (
              <li>
                <a href={buildGeneralLink()} target="_blank" rel="noopener noreferrer" className="footer__link">
                  WhatsApp
                </a>
              </li>
            )}
            {config.email && (
              <li>
                <a href={`mailto:${config.email}`} className="footer__link">
                  {config.email}
                </a>
              </li>
            )}
            {config.address && (
              <li>
                <span className="footer__text">{config.address}</span>
              </li>
            )}
          </ul>
        </div>

        {/* Columna redes sociales */}
        {(config.social_links?.facebook || config.social_links?.instagram) && (
          <div className="footer__social">
            <h3 className="footer__heading">Síguenos</h3>
            <ul className="footer__list" role="list">
              {config.social_links.facebook && (
                <li>
                  <a href={config.social_links.facebook} target="_blank" rel="noopener noreferrer" className="footer__link">
                    Facebook
                  </a>
                </li>
              )}
              {config.social_links.instagram && (
                <li>
                  <a href={config.social_links.instagram} target="_blank" rel="noopener noreferrer" className="footer__link">
                    Instagram
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Línea de copyright + branding VersaBold obligatorio */}
      <div className="footer__bottom">
        <p className="footer__copy">© {year} {config.business_name}. Todos los derechos reservados.</p>
        {/* VersaBoldBadge: branding obligatorio para PLAN FREE, renderizado fuera de cualquier guard */}
        <VersaBoldBadge />
      </div>
    </footer>
  );
}
