# Quick Edit Guide — VersaBold WEB PRINCIPAL

## Cambiar textos rápidamente

Todo está en **`data/site-data.js`**. No necesitas entender código — solo busca y reemplaza:

### 1. Cambiar nombre o email
```javascript
brand: {
  name: 'VersaBold Innovations',      // ← Tu nombre
  email: 'vesaboldinnovations@gmail.com', // ← Tu email
  phone: '+53 56189395',               // ← Tu teléfono
  whatsapp: 'https://wa.me/5356189395', // ← Tu WhatsApp
```

### 2. Cambiar títulos y textos de secciones
```javascript
hero: {
  h1: 'Todo lo que tu negocio necesita para crecer, en un solo lugar.',
  intro: 'Creamos soluciones digitales...',
}

problema: {
  h2: 'Tu negocio puede estar perdiendo oportunidades sin darte cuenta.',
}

servicios: {
  items: [
    { title: '🌐 Páginas Web Profesionales', ... },
    // ↑ Aquí editas cada servicio
  ]
}
```

### 3. Cambiar FAQ
```javascript
faq: {
  items: [
    {
      q: '¿Solo trabajan con empresas grandes?',  // ← La pregunta
      a: 'No. Creamos soluciones adaptadas...',   // ← La respuesta
    },
    // Agrega más items así
  ]
}
```

### 4. Cambiar testimonios
```javascript
testimonios: {
  items: [
    {
      name: 'María González',
      role: 'Propietaria de tienda',
      business: 'González Fashion Store',
      problem: 'Solo vendía presencialmente...',
      solution: 'Tienda virtual + Landing page',
      result: '3x aumento en ventas',
      image: 'assets/images/testimonial-1.webp',
      rating: 5,
    },
  ]
}
```

---

## Agregar imágenes

Una vez generadas con Higgsfield MCP:

1. **Guarda en:** `assets/images/`
2. **Nombre exacto:** (sin espacios, minúsculas)
   - `hero-main.webp`
   - `problem-redes-sociales.webp`
   - `service-paginas-web.webp`
   - etc.

3. **Ya aparecerán automáticamente** en el sitio (están referenciadas en `site-data.js`)

---

## Cambiar colores (opcional)

Edita `style.css` líneas 6-52 (sección `:root {}`):

```css
:root {
  /* Cambiar estos para un tema diferente */
  --clr-blue-700:  #0369A1;  /* ← Azul primario */
  --clr-orange-500:#F97316;  /* ← Naranja CTA */
  --clr-slate-900: #0F172A;  /* ← Navy fondo */
}
```

---

## Agregar o quitar secciones

### Para QUITAR una sección:
1. Comenta `<section>` en `index.html`
2. Comenta `render...()` en `scripts/content-renderer.js`
3. Elimina objeto en `data/site-data.js`

### Para AGREGAR una sección:
1. Agrega datos en `site-data.js`
2. Crea `render...()` en `scripts/content-renderer.js`
3. Agrega `<div id="...">` en `index.html`

---

## Cambiar estructura del header/footer

### Header (sticky)
Edita `components/header.js` — Cambiar logo, nav links, botón CTA.

### Footer
Edita `components/footer.js` — Cambiar columnas, links, contacto.

**Nota:** Ambos leen de `window.SITE_DATA.brand` y `window.SITE_DATA.nav`, así que los cambios en datos se reflejan automáticamente.

---

## Optimizar imágenes después de generar

Después de generar imágenes con Higgsfield:

```bash
# Convertir a WebP (mejor compresión)
cwebp hero-main.jpg -o hero-main.webp

# Optimizar WebP existente
cwebp -q 75 hero-main.webp -o hero-main-optimized.webp
```

O usar herramienta online: https://imageoptim.com

---

## Lazy loading y performance

Las imágenes ya tienen `loading="lazy"` — aparecerán solo cuando el usuario scroll las ve.

Scripts tienen `defer` — no bloquean parsing de HTML.

---

## Probar en móvil

1. Abre en navegador
2. Presiona `F12` (DevTools)
3. Click en el icono mobile (esquina superior izquierda)
4. Selecciona "iPhone 12" o similar

O accede desde tu teléfono usando IP local (si abres con servidor local).

---

## Ignorar secciones sin imágenes

Si no tienes lista una imagen, la sección seguirá funcionando — solo mostrará el `alt` text.

El sitio **no se rompe** por imágenes faltantes.

---

## Checkpoints rápidos

- [ ] Imágenes generadas en `assets/images/`
- [ ] Textos revisados en `site-data.js`
- [ ] Contacto actualizado (email, phone, WhatsApp)
- [ ] Testimonios reales o placeholders claros
- [ ] Colores corporativos (si necesitas cambiar)
- [ ] Probado en móvil (DevTools)

---

## Soporte

- **Documentación completa:** `README.md`
- **Archivo de contenido:** `data/site-data.js`
- **Prompts de imágenes:** `image-prompts.txt`

Cualquier error o pregunta: revisa `README.md` o edita con confianza — la estructura está diseñada para ser robusta.
