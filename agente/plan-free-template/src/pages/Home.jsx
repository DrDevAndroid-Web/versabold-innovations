import { useConfig } from '../hooks/useConfig.js';
import HeroSection from '../sections/HeroSection.jsx';
import ProductosDestacados from '../sections/ProductosDestacados.jsx';
import GaleriaSection from '../sections/GaleriaSection.jsx';
import HorariosSection from '../sections/HorariosSection.jsx';
import MapaSection from '../sections/MapaSection.jsx';
import ContactoSection from '../sections/ContactoSection.jsx';
import SobreNosotrosSection from './NosotrosPage.jsx';
import SectionGuard from '../components/SectionGuard.jsx';

// Registro completo de secciones disponibles
// El orden en active_sections del JSON determina el orden en pantalla
const SECTION_REGISTRY = {
  hero:                 HeroSection,
  productos_destacados: ProductosDestacados,
  galeria:              GaleriaSection,
  horarios:             HorariosSection,
  mapa:                 MapaSection,
  contacto:             ContactoSection,
  sobre_nosotros:       SobreNosotrosSection,
};

export default function Home({ onNavegar }) {
  const { config } = useConfig();

  return (
    <main id="main-content">
      {config.active_sections.map(key => {
        const Section = SECTION_REGISTRY[key];
        if (!Section) return null;
        // hero no necesita SectionGuard (siempre la primera sección de home)
        if (key === 'hero') return <Section key={key} onNavegar={onNavegar} />;
        return (
          <SectionGuard key={key} sectionKey={key}>
            <Section onNavegar={onNavegar} />
          </SectionGuard>
        );
      })}
    </main>
  );
}
