import { useState } from 'react';
import { useConfig } from '../hooks/useConfig.js';

export default function GaleriaSection() {
  const { gallery } = useConfig();
  const [activa, setActiva] = useState(null);

  const items = gallery.filter(g => g.url);
  if (items.length === 0) return null;

  return (
    <section className="section galeria" aria-labelledby="galeria-heading">
      <div className="container">
        <h2 id="galeria-heading" className="section__title">Galería</h2>
        <p className="section__subtitle">Conoce nuestro espacio y lo que hacemos</p>

        <ul className="galeria-grid" role="list">
          {items.map(img => (
            <li key={img.id}>
              <button
                className="galeria-item"
                onClick={() => setActiva(img)}
                aria-label={`Ver imagen: ${img.alt || 'Foto del negocio'}`}
              >
                <img
                  src={img.url}
                  alt={img.alt || 'Foto del negocio'}
                  className="galeria-item__img"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Lightbox sencillo */}
      {activa && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada"
          onClick={() => setActiva(null)}
        >
          <button
            className="lightbox__close"
            onClick={() => setActiva(null)}
            aria-label="Cerrar imagen"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={activa.url}
            alt={activa.alt || 'Foto del negocio'}
            className="lightbox__img"
            onClick={e => e.stopPropagation()}
          />
          {activa.caption && (
            <p className="lightbox__caption" onClick={e => e.stopPropagation()}>
              {activa.caption}
            </p>
          )}
        </div>
      )}
    </section>
  );
}
