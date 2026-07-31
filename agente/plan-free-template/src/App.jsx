import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Catalogo from './pages/Catalogo.jsx';
import Galeria from './pages/Galeria.jsx';
import NosotrosPage from './pages/NosotrosPage.jsx';

// Rutas disponibles como hash: #/catalogo, #/galeria, #/nosotros
// Página principal: / o sin hash
const RUTAS_VALIDAS = ['home', 'catalogo', 'galeria', 'nosotros'];

function obtenerRutaDesdeHash() {
  const hash = window.location.hash.replace('#/', '').split('?')[0];
  return RUTAS_VALIDAS.includes(hash) ? hash : 'home';
}

export default function App() {
  const [ruta, setRuta] = useState(obtenerRutaDesdeHash);

  useEffect(() => {
    function onHashChange() {
      const nueva = obtenerRutaDesdeHash();
      setRuta(nueva);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  function navegar(key) {
    if (key === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = `/${key}`;
    }
    setRuta(key);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const paginas = {
    home:     <Home onNavegar={navegar} />,
    catalogo: <Catalogo />,
    galeria:  <Galeria />,
    nosotros: <NosotrosPage />,
  };

  return (
    <>
      {/* Skip link — accesibilidad teclado */}
      <a href="#main-content" className="skip-link">Saltar al contenido principal</a>

      <Header onNavegar={navegar} rutaActual={ruta} />

      {paginas[ruta] ?? paginas.home}

      <Footer onNavegar={navegar} />
    </>
  );
}
