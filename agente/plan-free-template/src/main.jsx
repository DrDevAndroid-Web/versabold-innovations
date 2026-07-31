import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { loadClientConfig } from './api/configLoader.js';
import { ConfigProvider } from './context/ConfigContext.jsx';
import App from './App.jsx';
import './styles/base.css';

function applySEO(seo) {
  if (seo.title)       document.title = seo.title;
  if (seo.description) document.querySelector('meta[name="description"]').content = seo.description;
  if (seo.title)       document.querySelector('meta[property="og:title"]').content = seo.title;
  if (seo.description) document.querySelector('meta[property="og:description"]').content = seo.description;
  if (seo.og_image)    document.querySelector('meta[property="og:image"]').content = seo.og_image;
  if (seo.canonical) {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = seo.canonical;
  }
}

loadClientConfig()
  .then(data => {
    applySEO(data.seo);
    // Ocultar spinner de carga
    const loading = document.getElementById('app-loading');
    if (loading) loading.remove();

    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <ConfigProvider data={data}>
          <App />
        </ConfigProvider>
      </StrictMode>
    );
  })
  .catch(err => {
    console.error('Error cargando configuración del cliente:', err);
    document.getElementById('app-loading').textContent =
      'Error cargando el sitio. Por favor recarga la página.';
  });
