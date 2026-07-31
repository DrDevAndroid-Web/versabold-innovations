import { useConfig } from '../hooks/useConfig.js';

// Renderiza children solo si la sección está en active_sections
export default function SectionGuard({ sectionKey, children }) {
  const { config } = useConfig();
  if (!config.active_sections?.includes(sectionKey)) return null;
  return children;
}
