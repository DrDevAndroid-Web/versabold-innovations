/* ============================================================
   SITE DATA — VersaBold Innovations
   Edita aquí para cambiar cualquier texto, imagen o precio.
   ============================================================ */

window.SITE_DATA = {

  brand: {
    name:     'VersaBold Innovations',
    tagline:  'Soluciones digitales para el crecimiento de tu negocio',
    phone:    '+53 56189395',
    email:    'vesaboldinnovations@gmail.com',
    location: 'Guantánamo, Cuba',
    whatsapp: 'https://wa.me/5356189395?text=Hola%20VersaBold%2C%20me%20gustar%C3%ADa%20iniciar%20un%20proyecto',
    facebook: 'https://www.facebook.com/versabold',
  },

  nav: {
    links: [
      { href: '#soluciones',  label: 'Soluciones' },
      { href: '#proceso',     label: 'Cómo trabajamos' },
      { href: '#faq',         label: 'Preguntas' },
      { href: '#contacto',    label: 'Contacto' },
    ],
    pillar_links: [
      { href: 'desarrollo-web/',         label: 'Páginas Web' },
      { href: 'control-inventario/',     label: 'Gestión de Negocio' },
      { href: 'apps-android/',           label: 'Apps Android' },
      { href: 'gestion-redes-sociales/', label: 'Redes Sociales' },
      { href: 'notificaciones-sms/',     label: 'Notificaciones SMS' },
    ],
  },

  /* ── HERO ──────────────────────────────────────────────── */
  hero: {
    eyebrow: 'Web · Software · Sistemas · Crecimiento',
    h1: 'Convertimos ideas en <em>soluciones digitales</em> que hacen crecer negocios.',
    lead: 'Diseñamos herramientas a medida para que tu negocio proyecte confianza, controle mejor su información y esté preparado para crecer.',
    cta_primary: {
      text: 'Iniciar proyecto',
      href: 'https://wa.me/5356189395?text=Hola%20VersaBold%2C%20me%20gustar%C3%ADa%20iniciar%20un%20proyecto',
    },
    cta_secondary: { text: 'Ver soluciones', href: '#soluciones' },
    proof: [
      { num: '01', label: 'Versatilidad' },
      { num: '02', label: 'Audacia' },
      { num: '03', label: 'Innovación' },
    ],
    tags: ['DIGITAL PRODUCTS', 'SMART SYSTEMS', 'WEB / ANDROID'],
  },

  /* ── VALUE STRIP ───────────────────────────────────────── */
  value_strip: {
    words: ['VERSATILE', 'BOLD', 'INNOVATIVE'],
    sub: 'Tecnología que se adapta. Soluciones que hacen crecer.',
  },

  /* ── SERVICIOS / PILLAR CARDS ──────────────────────────── */
  servicios: {
    eyebrow: 'Soluciones',
    h2: 'Cada necesidad tiene <em>su propia solución.</em>',
    sub: 'Elige el área que quieres mejorar. Cada servicio cuenta con su propia página, alcance y punto de partida.',
    items: [
      {
        n: '01', featured: true,
        title: 'Páginas Web Profesionales',
        image: 'assets/images/servicio-web.webp',
        desc: 'Tu negocio disponible 24/7. Desde una landing hasta un sitio completo con panel propio y dominio.',
        tags: ['Web', 'Hosting', 'Panel', 'SEO'],
        href: 'desarrollo-web/',
      },
      {
        n: '02',
        title: 'Gestión de Negocio',
        image: 'assets/images/servicio-gestion.webp',
        desc: 'Controla inventario, ventas, empleados y almacén. Desde un módulo básico hasta un sistema completo.',
        tags: ['Inventario', 'Stock', 'Reportes', 'Usuarios'],
        href: 'control-inventario/',
      },
      {
        n: '03',
        title: 'Aplicaciones Android',
        image: 'assets/images/servicio-android.webp',
        desc: 'Una app creada para tu forma de trabajar. Funciona offline, se instala directo, sin Play Store.',
        tags: ['Android', 'Offline', 'A medida', 'GPS'],
        href: 'apps-android/',
      },
      {
        n: '04',
        title: 'Gestión de Redes Sociales',
        image: 'assets/images/servicio-redes.webp',
        desc: 'Presencia constante en Facebook e Instagram sin que tengas que pensar qué publicar ni cuándo.',
        tags: ['Facebook', 'Instagram', 'Contenido', 'WhatsApp'],
        href: 'gestion-redes-sociales/',
      },
      {
        n: '05',
        title: 'Notificaciones SMS',
        image: 'assets/images/servicio-sms.webp',
        desc: 'Envía confirmaciones de pedido y campañas directamente al teléfono de tus clientes. Sin apps.',
        tags: ['SMS', 'Pedidos', 'Campañas', 'Automatización'],
        href: 'notificaciones-sms/',
      },
    ],
  },

  /* ── MANIFESTO ─────────────────────────────────────────── */
  manifesto: {
    eyebrow: 'Por qué VersaBold',
    image: 'assets/images/versabold-equipo.webp',
    h2: 'No adaptamos tu negocio al software. <em>Adaptamos la tecnología a tu negocio.</em>',
    body: 'VersaBold nace de tres ideas: la versatilidad para entender realidades distintas, la audacia para construir mejor y la innovación para convertir tecnología en crecimiento.',
    values: [
      { letter: 'V', name: 'Versatile',   desc: 'Nos adaptamos' },
      { letter: 'B', name: 'Bold',         desc: 'Rompemos límites' },
      { letter: '+', name: 'Innovative',   desc: 'Evolucionamos' },
    ],
  },

  /* ── PROCESO ───────────────────────────────────────────── */
  proceso: {
    eyebrow: 'Cómo trabajamos',
    h2: 'De una necesidad a una <em>solución real.</em>',
    steps: [
      { n: '01', title: 'Descubrimos',   text: 'Entendemos el problema, el negocio y el objetivo.',      image: 'assets/images/proceso-01.webp' },
      { n: '02', title: 'Diseñamos',     text: 'Definimos la experiencia y la solución adecuada.',        image: 'assets/images/proceso-02.webp' },
      { n: '03', title: 'Construimos',   text: 'Desarrollamos, probamos y optimizamos.',                  image: 'assets/images/proceso-03.webp' },
      { n: '04', title: 'Lanzamos',      text: 'Publicamos y dejamos todo listo para operar.',            image: 'assets/images/proceso-04.webp' },
      { n: '05', title: 'Evolucionamos', text: 'Medimos, mantenemos y escalamos contigo.',                image: 'assets/images/proceso-05.webp' },
    ],
  },

  /* ── TESTIMONIOS ───────────────────────────────────────── */
  testimonios: {
    eyebrow: 'Lo que dicen nuestros clientes',
    h2: 'Empresarios que <em>decidieron crecer.</em>',
    items: [
      {
        name: 'René Cobas',
        role: 'CEO',
        business: 'Byloz — Sistema Operativo de la Construcción',
        problem: 'Necesitaba una plataforma digital sólida para posicionar su sistema en el mercado.',
        solution: 'Desarrollo web + Sistema de gestión',
        result: 'Plataforma operativa y presencia profesional en internet',
        image: 'assets/images/testimonial-rene.webp',
        logo: 'assets/images/logo-byloz.webp',
        rating: 5,
      },
      {
        name: 'Darma Alcántara de la Cruz',
        role: 'Emprendedora',
        business: 'Negocio digital',
        problem: 'No tenía presencia en internet ni forma de que los clientes la encontraran.',
        solution: 'Página web profesional',
        result: 'Clientes nuevos llegando por internet desde el primer mes',
        image: 'assets/images/testimonial-darma.webp',
        rating: 5,
      },
      {
        name: 'Dairis Domínguez',
        role: 'Dueña',
        business: 'LalyRos',
        problem: 'Manejaba todo a mano y perdía ventas por desorden.',
        solution: 'Sistema de gestión de inventario',
        result: 'Control total de productos y ventas sin papeles',
        image: 'assets/images/testimonial-dairis.webp',
        rating: 5,
      },
    ],
  },

  /* ── LEAD MAGNET ───────────────────────────────────────── */
  lead_magnet: {
    badge: '🎁 Gratis para ti',
    h2: 'Descarga gratis la plantilla para controlar tu inventario',
    body: 'Déjanos tu nombre y correo y te enviamos la plantilla lista para usar, más el acceso a nuestro grupo de WhatsApp con recursos para tu negocio.',
    cta_text: 'Quiero mi plantilla',
    form_url: '#',
    whatsapp_url: 'https://chat.whatsapp.com/KmUw449Z8r96coa1TIn78J',
    disclaimer: 'Sin spam. Solo recursos útiles para tu negocio.',
    visual_emoji: '📊',
  },

  /* ── PLANES SMS ────────────────────────────────────────── */
  sms: {
    eyebrow: 'Notificaciones SMS',
    h2: 'Llega al teléfono de tus clientes <em>al instante.</em>',
    sub: 'Envía confirmaciones de pedido, avisos de entrega y campañas promocionales directamente por SMS. Sin apps, sin internet — solo mensajes que se leen.',
    plans: [
      {
        label: 'Bolsa Básica',
        count: '100',
        price: '1 000',
        unit: 'CUP',
        ideal: 'Ideal para negocios pequeños que envían avisos puntuales de pedidos a pocos clientes.',
        features: [
          'Confirmaciones de pedido automáticas',
          'Avisos de entrega y recogida',
          'Notificaciones personalizadas',
          'Panel de seguimiento de envíos',
        ],
        cta: 'Contratar',
        featured: false,
      },
      {
        label: 'Bolsa Estándar',
        count: '500',
        price: '4 500',
        unit: 'CUP',
        ideal: 'Para negocios con flujo constante de ventas que confirman pedidos automáticamente.',
        features: [
          'Todo lo de Básica',
          'Campañas a múltiples clientes',
          'Programación de mensajes',
          'Reportes de entrega',
        ],
        cta: 'Contratar',
        featured: true,
        badge: 'Más popular',
      },
      {
        label: 'Bolsa Avanzada',
        count: '1 000',
        price: '8 000',
        unit: 'CUP',
        ideal: 'Para negocios de alta rotación (comida, entregas) con campañas masivas frecuentes.',
        features: [
          'Todo lo de Estándar',
          'Campañas masivas ilimitadas',
          'Integración con sistema de pedidos',
          'Soporte prioritario',
        ],
        cta: 'Contratar',
        featured: false,
      },
    ],
    cta_href: 'https://wa.me/5356189395?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20SMS%20para%20mi%20negocio',
    note: 'Los SMS llegan a toda la red nacional. Vigencia 180 días desde la activación.',
  },

  /* ── FAQ ────────────────────────────────────────────────── */
  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Antes de <em>empezar.</em>',
    items: [
      {
        q: '¿Solo trabajan con empresas grandes?',
        a: 'No. Nos especializamos en pequeños y medianos negocios. De hecho, es donde mejor podemos ayudar: soluciones con impacto real sin complejidades innecesarias.',
      },
      {
        q: '¿Necesito saber de tecnología?',
        a: 'No. Nos encargamos de todo lo técnico y te explicamos cada decisión en lenguaje sencillo. Sin jerga, sin sorpresas.',
      },
      {
        q: '¿Pueden crear algo totalmente personalizado?',
        a: 'Sí, siempre. No vendemos plantillas de catálogo. Cada solución se diseña entendiendo tu negocio, tus procesos y tus objetivos.',
      },
      {
        q: '¿Tienen soporte después de entregar el proyecto?',
        a: 'Sí. Ofrecemos acompañamiento continuo según el tipo de solución. No desaparecemos una vez entregado el proyecto.',
      },
      {
        q: '¿Cuánto tarda un proyecto?',
        a: 'Depende del alcance. Una landing page puede estar lista en 2-3 semanas. Un sistema completo puede tomar 2-3 meses. En la primera consulta definimos el cronograma exacto.',
      },
      {
        q: '¿Cuál es el precio?',
        a: 'No hay precios fijos porque cada proyecto es distinto. Agendemos una conversación sin compromiso y preparamos un presupuesto claro para tu caso.',
      },
      {
        q: '¿Cómo funciona el servicio de SMS?',
        a: 'Compramos bolsas de SMS en zdSMS y te las ofrecemos como servicio llave en mano. Tú nos dices qué mensajes enviar y cuándo, nosotros lo ejecutamos y te damos seguimiento.',
      },
    ],
  },

  /* ── CTA FINAL ─────────────────────────────────────────── */
  cta_final: {
    eyebrow: 'Hablemos',
    h2: 'Tu negocio tiene potencial. <em>Construyámoslo juntos.</em>',
    body: 'Cuéntanos qué necesitas y encontraremos la solución adecuada para tu caso.',
    cta_text: 'Iniciar proyecto',
    cta_href: 'https://wa.me/5356189395?text=Hola%20VersaBold%2C%20me%20gustar%C3%ADa%20iniciar%20un%20proyecto',
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
      { text: 'Nosotros', href: '#nosotros' },
      { text: 'Contacto', href: '#contacto' },
    ],
    legal: [
      { text: 'Política de privacidad', href: 'politica-privacidad.html' },
      { text: 'Términos y condiciones', href: 'terminos-condiciones.html' },
    ],
  },
};
