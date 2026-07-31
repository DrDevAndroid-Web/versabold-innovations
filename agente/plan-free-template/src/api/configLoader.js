const BASE = import.meta.env.BASE_URL;

export async function loadClientConfig() {
  const [config, theme, products, gallery, seo] = await Promise.all([
    fetch(`${BASE}client.config.json`).then(r => r.json()),
    fetch(`${BASE}theme.json`).then(r => r.json()),
    fetch(`${BASE}products.json`).then(r => r.json()),
    fetch(`${BASE}gallery.json`).then(r => r.json()),
    fetch(`${BASE}seo.json`).then(r => r.json()),
  ]);
  return { config, theme, products, gallery, seo };
}
