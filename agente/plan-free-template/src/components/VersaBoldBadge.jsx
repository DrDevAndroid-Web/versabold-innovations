import { useConfig } from '../hooks/useConfig.js';

// Siempre visible en PLAN FREE — no bypasseable por config del cliente
export default function VersaBoldBadge() {
  const { config } = useConfig();

  // Solo ocultar si el plan NO es free y versabold_branding es false
  // Para PLAN FREE: siempre se muestra sin importar el flag
  if (config.plan !== 'free' && config.versabold_branding === false) return null;

  return (
    <div className="vb-badge">
      <span className="vb-badge__text">
        Sitio web creado por{' '}
        <strong>VersaBold Innovations</strong>
      </span>
    </div>
  );
}
