import { useConfig } from '../hooks/useConfig.js';
import { useWhatsApp } from '../hooks/useWhatsApp.js';

export default function ProductosDestacados({ onNavegar }) {
  const { products } = useConfig();
  const { buildProductLink } = useWhatsApp();

  const destacados = products.filter(p => p.featured && p.available);
  if (destacados.length === 0) return null;

  return (
    <section className="section productos-destacados" aria-labelledby="destacados-heading">
      <div className="container">
        <h2 id="destacados-heading" className="section__title">Lo más pedido</h2>
        <p className="section__subtitle">Nuestros productos favoritos, disponibles para ti</p>

        <ul className="productos-grid" role="list">
          {destacados.map(producto => (
            <li key={producto.id} className="producto-card">
              {producto.image && (
                <div className="producto-card__img-wrapper">
                  <img
                    src={producto.image}
                    alt={producto.name}
                    className="producto-card__img"
                    loading="lazy"
                    width="300"
                    height="300"
                  />
                </div>
              )}
              <div className="producto-card__body">
                <span className="producto-card__category">{producto.category}</span>
                <h3 className="producto-card__name">{producto.name}</h3>
                {producto.description && (
                  <p className="producto-card__desc">{producto.description}</p>
                )}
                {producto.price > 0 && (
                  <p className="producto-card__price">
                    <strong>${producto.price} CUP</strong>
                  </p>
                )}
                <a
                  href={buildProductLink(producto)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--full"
                  aria-label={`Pedir ${producto.name} por WhatsApp`}
                >
                  Pedir por WhatsApp
                </a>
              </div>
            </li>
          ))}
        </ul>

        {onNavegar && (
          <div className="section__cta">
            <button className="btn btn--outline" onClick={() => onNavegar('catalogo')}>
              Ver todos los productos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
