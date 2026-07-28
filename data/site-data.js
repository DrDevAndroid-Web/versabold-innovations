/* ============================================================
   SITE DATA — Content & Configuration for VersaBold WEB PRINCIPAL
   ============================================================ */

window.SITE_DATA = {
  brand: {
    name: 'VersaBold Innovations',
    tagline: 'Soluciones digitales para el crecimiento de tu negocio',
    phone: '+53 56189395',
    email: 'vesaboldinnovations@gmail.com',
    location: 'Guantánamo, Cuba',
    whatsapp: 'https://wa.me/5356189395',
    facebook: 'https://www.facebook.com/versabold',
  },

  nav: {
    links: [
      { href: '#servicios', label: 'Soluciones' },
      { href: '#proceso', label: 'Cómo trabajamos' },
      { href: '#proyectos', label: 'Proyectos' },
      { href: '#faq', label: 'Preguntas' },
    ],
  },

  /* ============================================================
     HERO SECTION
     ============================================================ */
  hero: {
    h1: 'Todo lo que tu negocio necesita para <em>crecer</em>, en un solo lugar.',
    intro: 'Creamos soluciones digitales y productos personalizados para ayudarte a vender más, optimizar tus procesos y ofrecer una mejor experiencia a tus clientes.',
    cta_primary: {
      text: '📞 Agenda una llamada sin compromiso',
      href: 'https://wa.me/5356189395?text=Hola%20VersaBold%2C%20me%20gustaría%20agendar%20una%20llamada%20sin%20compromiso',
      class: 'btn btn-primary btn-lg',
    },
    cta_secondary: {
      text: 'Conoce nuestras soluciones',
      href: '#servicios',
      class: 'btn btn-outline btn-lg',
    },
    trust_items: [
      'Soluciones a medida',
      'Atención personalizada',
      'Diseñado para pequeños y medianos negocios',
    ],
    image: {
      src: 'assets/images/hero-main.webp',
      alt: 'Equipo de VersaBold Innovations trabajando en proyectos digitales',
      width: 1200,
      height: 800,
    },
  },

  /* ============================================================
     PROBLEMA SECTION
     ============================================================ */
  problema: {
    label: 'Tu desafío',
    h2: 'Tu negocio puede estar perdiendo oportunidades sin darte cuenta.',
    intro: 'Muchos negocios tienen buenos productos, pero enfrentan problemas que frenan su crecimiento:',
    cards: [
      {
        title: 'Dependes solo de redes sociales',
        text: 'Tus clientes no siempre encuentran tu negocio cuando buscan soluciones.',
        image: 'assets/images/problem-redes-sociales.webp',
        alt: 'Problema: Dependencia de redes sociales',
        titleAttr: 'Dependencia de redes sociales para tu negocio',
      },
      {
        title: 'No tienes control completo de tu operación',
        text: 'Ventas, inventario y pedidos pueden convertirse en un caos.',
        image: 'assets/images/problem-control-operacion.webp',
        alt: 'Problema: Falta de control operacional',
        titleAttr: 'Falta de control en tu operación',
      },
      {
        title: 'Pierdes tiempo haciendo tareas manuales',
        text: 'Procesos repetitivos que podrían estar automatizados.',
        image: 'assets/images/problem-tareas-manuales.webp',
        alt: 'Problema: Tareas manuales repetitivas',
        titleAttr: 'Tareas manuales que consumen tiempo',
      },
      {
        title: 'Tus clientes esperan una experiencia más profesional',
        text: 'La forma en que presentas tu negocio influye en la decisión de compra.',
        image: 'assets/images/problem-experiencia-cliente.webp',
        alt: 'Problema: Falta de profesionalismo',
        titleAttr: 'Presentación poco profesional de tu negocio',
      },
    ],
  },

  /* ============================================================
     LEAD MAGNET — WHATSAPP GROUP
     ============================================================ */
  propuesta: {
    type: 'whatsapp-magnet',
    h2: 'Obtén una plantilla de Excel gratuita',
    intro: 'Únete a nuestro grupo de WhatsApp',
    subintro: 'Luego lo de unirse al grupo de WA para obtenerla',
    whatsappUrl: 'https://chat.whatsapp.com/KmUw449Z8r96coa1TIn78J',
    buttonText: 'Unirse al grupo de WhatsApp',
    disclaimer: 'La unión al grupo requiere autorización previa del administrador del mismo.',
  },

  /* ============================================================
     SERVICIOS / BENTO GRID SECTION
     ============================================================ */
  servicios: {
    label: 'Nuestras soluciones',
    h2: 'Soluciones diseñadas para impulsar tu crecimiento',
    items: [
      {
        image: 'assets/images/service-paginas-web.webp',
        title: '🌐 Páginas Web Profesionales',
        desc: 'Tu negocio disponible 24/7 con una presencia digital que genera confianza.',
        span: 'col-span-1',
      },
      {
        image: 'assets/images/service-tienda-virtual.webp',
        title: '🛒 Tiendas Virtuales',
        desc: 'Permite que tus clientes compren fácilmente desde cualquier lugar.',
        span: 'col-span-1',
      },
      {
        image: 'assets/images/service-apps-moviles.webp',
        title: '📱 Aplicaciones Móviles',
        desc: 'Conecta tu negocio con tus clientes directamente desde sus teléfonos.',
        span: 'col-span-1',
      },
      {
        image: 'assets/images/service-sistemas-gestion.webp',
        title: '📦 Sistemas de Gestión e Inventario',
        desc: 'Controla productos, ventas y operaciones desde un solo lugar.',
        span: 'col-span-1',
      },
      {
        image: 'assets/images/service-landing-pages.webp',
        title: '🎯 Landing Pages',
        desc: 'Convierte visitantes en clientes con páginas diseñadas para vender.',
        span: 'col-span-1',
      },
      {
        image: 'assets/images/service-impresion.webp',
        title: '🖨️ Impresión Creativa y Personalización',
        desc: 'Haz destacar tu marca con productos personalizados.',
        span: 'col-span-1',
      },
    ],
  },

  /* ============================================================
     PROCESO SECTION
     ============================================================ */
  proceso: {
    label: 'Nuestro método',
    h2: 'Un proceso claro, sin complicaciones',
    steps: [
      {
        number: '01',
        title: 'Analizamos tu necesidad',
        text: 'Entendemos tu negocio antes de recomendar una solución. Sin plantillas, sin suposiciones.',
        image: 'assets/images/service-paginas-web.webp',
        alt: 'Paso 1: Análisis de necesidades',
      },
      {
        number: '02',
        title: 'Diseñamos la propuesta',
        text: 'Creamos una solución adaptada a tus objetivos reales, no a los de otro negocio.',
        image: 'assets/images/service-tienda-virtual.webp',
        alt: 'Paso 2: Diseño de propuesta',
      },
      {
        number: '03',
        title: 'Desarrollamos y ajustamos',
        text: 'Trabajamos contigo en cada iteración hasta lograr exactamente el resultado esperado.',
        image: 'assets/images/service-apps-moviles.webp',
        alt: 'Paso 3: Desarrollo y ajustes',
      },
      {
        number: '04',
        title: 'Te acompañamos después del lanzamiento',
        text: 'No desaparecemos cuando entregamos el proyecto. Estamos cuando nos necesitas.',
        image: 'assets/images/service-sistemas-gestion.webp',
        alt: 'Paso 4: Acompañamiento post-lanzamiento',
      },
    ],
  },

  /* ============================================================
     DIFERENCIACION SECTION
     ============================================================ */
  diferenciacion: {
    label: 'Por qué elegirnos',
    h2: 'No vendemos tecnología. Creamos soluciones que funcionan para tu negocio.',
    comparison: [
      {
        problem: 'Plantillas genéricas',
        solution: 'Desarrollo personalizado',
      },
      {
        problem: 'Muchas herramientas separadas',
        solution: 'Soluciones integradas',
      },
      {
        problem: 'Lenguaje técnico',
        solution: 'Explicaciones claras',
      },
      {
        problem: 'Entrega y desaparecen',
        solution: 'Acompañamiento continuo',
      },
      {
        problem: 'Diseñado para grandes empresas',
        solution: 'Adaptado a negocios reales',
      },
    ],
  },

  /* ============================================================
     PROYECTOS / CASE STUDIES SECTION
     ============================================================ */
  proyectos: {
    label: 'Resultados reales',
    h2: 'Soluciones creadas para negocios reales',
    items: [
      {
        title: 'Sistema de inventario',
        image: 'assets/images/proyecto-inventario.webp',
        before: 'Pérdida de control',
        after: 'Operación organizada',
      },
      {
        title: 'Tienda online',
        image: 'assets/images/proyecto-tienda.webp',
        before: 'Solo ventas físicas',
        after: 'Nuevos canales de venta',
      },
      {
        title: 'Marca personalizada',
        image: 'assets/images/proyecto-marca.webp',
        before: 'Imagen poco profesional',
        after: 'Mayor presencia comercial',
      },
    ],
  },

  /* ============================================================
     TESTIMONIOS SECTION
     ============================================================ */
  testimonios: {
    label: 'Lo que dicen nuestros clientes',
    h2: 'Empresarios que decidieron crecer',
    items: [
      {
        name: 'María González',
        role: 'Propietaria de tienda de ropa',
        business: 'González Fashion Store',
        problem: 'Solo vendía presencialmente y no llegaba a más clientes',
        solution: 'Tienda virtual + Landing page',
        result: '3x aumento en ventas en 6 meses',
        image: 'assets/images/testimonial-1.webp',
        rating: 5,
      },
      {
        name: 'Carlos Mendoza',
        role: 'Gerente de operaciones',
        business: 'Distribuidora de alimentos',
        problem: 'Caos en inventario y pedidos manuales',
        solution: 'Sistema de gestión integrado',
        result: '80% menos tiempo en tareas administrativas',
        image: 'assets/images/testimonial-2.webp',
        rating: 5,
      },
      {
        name: 'Laura Rodríguez',
        role: 'Dueña de boutique',
        business: 'La Bella Boutique',
        problem: 'Imagen poco profesional en redes',
        solution: 'Rediseño web + Branding',
        result: '45% más consultas de clientes nuevos',
        image: 'assets/images/testimonial-3.webp',
        rating: 5,
      },
    ],
  },

  /* ============================================================
     FAQ SECTION
     ============================================================ */
  faq: {
    h2: 'Preguntas frecuentes',
    items: [
      {
        q: '¿Solo trabajan con empresas grandes?',
        a: 'No. Creamos soluciones adaptadas especialmente para pequeños y medianos negocios. De hecho, nos especializamos en ayudar a empresas como la tuya a crecer sin complejidades innecesarias.',
      },
      {
        q: '¿Necesito saber de tecnología?',
        a: 'No. Nosotros nos encargamos de toda la parte técnica y te explicamos todo de forma sencilla. No usamos jerga innecesaria.',
      },
      {
        q: '¿Pueden crear algo personalizado?',
        a: 'Sí, totalmente. Cada negocio tiene necesidades diferentes. No ofrecemos soluciones estándar de catálogo. Todo se diseña pensando en tu caso específico.',
      },
      {
        q: '¿Después de entregar el proyecto tengo soporte?',
        a: 'Sí. Ofrecemos acompañamiento continuo según el tipo de solución. No nos vamos cuando entregamos, sino que te acompañamos en todo el proceso.',
      },
      {
        q: '¿Cuánto tiempo toma un proyecto?',
        a: 'Depende del alcance. Desde una landing page (2-3 semanas) hasta un sistema completo (2-3 meses). En la primera consulta definimos el cronograma exacto.',
      },
      {
        q: '¿Cuál es el precio?',
        a: 'No tenemos precios fijos. Todo depende de la complejidad de tu solución. Agendemos una llamada para analizar tu caso y darte un presupuesto personalizado.',
      },
    ],
  },

  /* ============================================================
     CTA FINAL SECTION
     ============================================================ */
  cta_final: {
    h2: 'Tu negocio tiene potencial. Nosotros ayudamos a desarrollarlo.',
    intro: 'Cuéntanos qué necesitas y descubramos juntos cuál es la mejor solución para crecer.',
    cta: {
      text: '📞 Agenda una llamada sin compromiso',
      href: 'https://wa.me/5356189395?text=Hola%20VersaBold%2C%20me%20gustaría%20agendar%20una%20llamada%20sin%20compromiso',
      class: 'btn btn-primary btn-lg',
    },
    bgImage: 'assets/images/cta-bg.webp',
  },

  /* ============================================================
     FOOTER
     ============================================================ */
  footer: {
    servicios: [
      { text: 'Desarrollo web', href: '#servicios' },
      { text: 'Tiendas virtuales', href: '#servicios' },
      { text: 'Apps móviles', href: '#servicios' },
      { text: 'Sistemas empresariales', href: '#servicios' },
      { text: 'Landing pages', href: '#servicios' },
      { text: 'Impresión personalizada', href: '#servicios' },
    ],
    empresa: [
      { text: 'Nosotros', href: '#propuesta' },
      { text: 'Proyectos', href: '#proyectos' },
      { text: 'Testimonios', href: '#testimonios' },
      { text: 'Contacto', href: '#contacto' },
    ],
    legal: [
      { text: 'Política de privacidad', href: 'politica-privacidad.html' },
      { text: 'Términos y condiciones', href: 'terminos-condiciones.html' },
    ],
  },
};
