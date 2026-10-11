/* ============================================================
   SITE DATA — VersaBold Innovations
   Datos compartidos: header, footer y portafolio (/proyectos/).
   El contenido del home está en index.html.
   ============================================================ */

window.SITE_DATA = {

  brand: {
    name:     'VersaBold Innovations',
    tagline:  'Soluciones digitales para el crecimiento de tu negocio',
    phone:    '+5356189395',
    email:    'soporte@versabold.com',
    location: 'Operamos 100% online · Atención en español',
    whatsapp: 'https://wa.me/5356189395?text=Hola%20VersaBold%2C%20me%20gustar%C3%ADa%20iniciar%20un%20proyecto',
    facebook: 'https://www.facebook.com/versabold',
  },

  nav: {
    links: [
      { href: '#soluciones',  label: 'Soluciones' },
      { href: 'proyectos/',   label: 'Proyectos' },
      { href: '#proceso',     label: 'Cómo trabajamos' },
      { href: '#faq',         label: 'Preguntas' },
      { href: '#contacto',    label: 'Contacto' },
      { href: 'blog/',        label: 'Blog' },
    ],
    pillar_links: [
      { href: 'desarrollo-web/',         label: 'Páginas Web' },
      { href: 'control-inventario/',     label: 'Gestión de Negocio' },
      { href: 'apps-android/',           label: 'Apps Android' },
      { href: 'gestion-redes-sociales/', label: 'Redes Sociales' },
      { href: 'notificaciones-sms/',     label: 'Notificaciones SMS' },
    ],
  },

  /* ── PROYECTOS (portafolio) ────────────────────────────── */
  proyectos: {
    eyebrow: 'Portafolio',
    h2: 'Proyectos que llevan <em>nuestro sello.</em>',
    sub: 'Productos propios y plataformas desarrolladas para clientes y aliados. Una selección en crecimiento.',
    items: [
      {
        slug: 'biloz',
        name: 'Biloz',
        tagline: 'Sistema Operativo de la Construcción',
        description: 'App web y móvil para gestionar obras: proyectos, etapas, tareas, materiales, libro de obra, fotos y sincronización offline.',
        category: 'Producto propio',
        image: 'assets/images/proyecto-biloz-hero.webp',
        href: 'biloz/',
        external: false,
        featured: true,
      },
      {
        slug: 'monarcas',
        name: 'Proyecto Social Monarcas',
        tagline: 'Acompañamiento emocional oncológico',
        description: 'Plataforma para una ONG que brinda apoyo integral a mujeres con cáncer en el oriente de Cuba, con talleres, tertulias y prótesis artesanales.',
        category: 'Cliente · ONG',
        image: 'assets/images/proyecto-monarcas.png',
        href: 'https://proyecto-monarcas-guantanamo.vercel.app',
        external: true,
      },
      {
        slug: 'ready-express-now',
        name: 'Ready Express Now',
        tagline: 'Envíos de alimentos desde el extranjero',
        description: 'E-commerce para enviar combos de alimentos esenciales a Cuba con pago en Zelle o TocoPay y entrega a domicilio garantizada.',
        category: 'Cliente · E-commerce',
        image: 'assets/images/proyecto-ready-express.png',
        href: 'https://www.readyexpressnow.com',
        external: true,
      },
      {
        slug: 'yenisart',
        name: "Yeni's Art",
        tagline: 'Salón de estética y formación profesional',
        description: 'Sitio para un salón especializado en microblading, micropigmentación y extensiones, además de formación profesional en técnicas de belleza.',
        category: 'Cliente · Servicios',
        image: 'assets/images/proyecto-yenisart.png',
        href: 'https://yenisart-frontend.vercel.app',
        external: true,
      },
    ],
  },

  /* ── FOOTER ─────────────────────────────────────────────── */
  footer: {
    servicios: [
      { text: 'Páginas Web',        href: 'desarrollo-web/' },
      { text: 'Gestión de Negocio', href: 'control-inventario/' },
      { text: 'Apps Android',       href: 'apps-android/' },
      { text: 'Redes Sociales',     href: 'gestion-redes-sociales/' },
      { text: 'Notificaciones SMS', href: 'notificaciones-sms/' },
    ],
    empresa: [
      { text: 'Inicio',   href: '#inicio' },
      { text: 'Proyectos', href: 'proyectos/' },
      { text: 'Nosotros', href: '#nosotros' },
      { text: 'Contacto', href: '#contacto' },
    ],
    legal: [
      { text: 'Política de privacidad', href: 'politica-privacidad.html' },
      { text: 'Términos y condiciones', href: 'terminos-condiciones.html' },
    ],
  },
};
