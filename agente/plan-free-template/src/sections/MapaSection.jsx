import { useConfig } from '../hooks/useConfig.js';

export default function MapaSection() {
  const { config } = useConfig();

  if (!config.map_url) return null;

  // Convertir URL de Google Maps a URL de embed si es necesario
  function toEmbedUrl(url) {
    if (url.includes('/embed')) return url;
    // URL tipo: https://maps.google.com/?q=...
    const q = url.match(/[?&]q=([^&]+)/)?.[1];
    if (q) return `https://maps.google.com/maps?q=${q}&output=embed`;
    // URL tipo: https://goo.gl/maps/... — no se puede convertir automáticamente; usar tal cual
    return url;
  }

  return (
    <section className="section mapa" aria-labelledby="mapa-heading">
      <div className="container">
        <h2 id="mapa-heading" className="section__title">Dónde estamos</h2>
        {config.address && (
          <p className="mapa__address">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="icon icon--sm">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            {config.address}
          </p>
        )}
      </div>

      <div className="mapa__embed-wrapper" aria-label="Mapa de ubicación">
        <iframe
          src={toEmbedUrl(config.map_url)}
          className="mapa__embed"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Ubicación de ${config.business_name}`}
          width="100%"
          height="350"
        />
      </div>
    </section>
  );
}
