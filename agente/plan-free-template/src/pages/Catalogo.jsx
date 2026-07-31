import { useState, useMemo } from 'react';
import { useConfig } from '../hooks/useConfig.js';
import { useWhatsApp } from '../hooks/useWhatsApp.js';

export default function Catalogo() {
  const { products } = useConfig();
  const { buildProductLink } = useWhatsApp();
  const [categoriaActiva, setCategoriaActiva] = useState('todas');
  const [busqueda, setBusqueda] = useState('');

  const categorias = useMemo(() => {
    const set = new Set(products.map(p => p.category).filter(Boolean));
    return ['todas', ...set];
  }, [products]);

  const productosFiltrados = useMemo(() => {
    return products.filter(p => {
      if (!p.available) return false;
      if (categoriaActiva !== 'todas' && p.category !== categoriaActiva) return false;
      if (busqueda) {
        const q = busqueda.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
        const nombre = p.name.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
        if (!nombre.includes(q)) return false;
      }
      return true;
    });
  }, [products, categoriaActiva, busqueda]);

  return (
    <main id="main-content" className="catalogo">
      <div className="container">
        <h1 className="catalogo__title">Nuestros productos</h1>

        {/* Buscador */}
        <div className="catalogo__search">
          <label htmlFor="busqueda-input" className="sr-only">Buscar producto</label>
          <input
            id="busqueda-input"
            type="search"
            className="input catalogo__input"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
            inputMode="search"
            aria-label="Buscar producto"
          />
        </div>

        {/* Filtros de categoría */}
        {categorias.length > 2 && (
          <div className="catalogo__filtros" role="group" aria-label="Filtrar por categoría">
            {categorias.map(cat => (
              <button
                key={cat}
                className={`chip${categoriaActiva === cat ? ' chip--active' : ''}`}
                onClick={() => setCategoriaActiva(cat)}
                aria-pressed={categoriaActiva === cat}
              >
                {cat === 'todas' ? 'Todos' : cat}
              </button>
            ))}
          </div>
        )}

        {/* Grid de productos */}
        {productosFiltrados.length > 0 ? (
          <ul className="productos-grid" role="list" aria-live="polite" aria-label="Lista de productos">
            {productosFiltrados.map(producto => (
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
                    {producto.featured && (
                      <span className="producto-card__badge" aria-label="Producto destacado">Destacado</span>
                    )}
                  </div>
                )}
                <div className="producto-card__body">
                  {producto.category && (
                    <span className="producto-card__category">{producto.category}</span>
                  )}
                  <h2 className="producto-card__name">{producto.name}</h2>
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
        ) : (
          <p className="catalogo__empty" role="status">
            No encontramos productos con esa búsqueda.
          </p>
        )}
      </div>
    </main>
  );
}
