import { useConfig } from '../hooks/useConfig.js';
import { useWhatsApp } from '../hooks/useWhatsApp.js';
import HorariosSection from '../sections/HorariosSection.jsx';
import MapaSection from '../sections/MapaSection.jsx';
import SectionGuard from '../components/SectionGuard.jsx';

export default function NosotrosPage() {
  const { config } = useConfig();
  const { buildGeneralLink } = useWhatsApp();

  return (
    <main id="main-content">
      <section className="section nosotros" aria-labelledby="nosotros-heading">
        <div className="container">
          {config.logo && (
            <img
              src={config.logo}
              alt={`Logo de ${config.business_name}`}
              className="nosotros__logo"
              width="96"
              height="96"
            />
          )}
          <h1 id="nosotros-heading" className="nosotros__title">{config.business_name}</h1>
          {config.slogan && <p className="nosotros__slogan">{config.slogan}</p>}
          {config.long_description && (
            <p className="nosotros__desc">{config.long_description}</p>
          )}
          {!config.long_description && config.short_description && (
            <p className="nosotros__desc">{config.short_description}</p>
          )}
          <a
            href={buildGeneralLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </section>

      <SectionGuard sectionKey="horarios">
        <HorariosSection />
      </SectionGuard>

      <SectionGuard sectionKey="mapa">
        <MapaSection />
      </SectionGuard>
    </main>
  );
}
