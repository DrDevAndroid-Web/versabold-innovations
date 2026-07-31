import { useConfig } from './useConfig.js';

export function useWhatsApp() {
  const { config } = useConfig();

  function buildProductLink(product) {
    const msg = product.whatsapp_message ||
      `Hola, me interesa: ${product.name}${product.price ? ` — $${product.price}` : ''}`;
    return `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(msg)}`;
  }

  function buildGeneralLink(text) {
    const msg = text || `Hola, me interesa obtener información sobre ${config.business_name}`;
    return `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(msg)}`;
  }

  return { buildProductLink, buildGeneralLink };
}
