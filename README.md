# VersaBold Innovations — WEB PRINCIPAL

Sitio web principal de VersaBold Innovations — Soluciones digitales para pequeños y medianos negocios.

## Contenido

**Carpeta:** `C:\Users\100270999\Documents\PRPOGRAMACION\VersaBold_Innovations\WEB PRINCIPAL`

### Archivos creados

#### Raíz
- `index.html` — Página HTML principal con todas las 11 secciones
- `style.css` — Estilos CSS (copiado de `gestion-inventario` + extensiones)
- `image-prompts.txt` — Prompts para generar imágenes y nombres de archivos

#### assets/
- `favicon.ico` — Logo de marca (copiado de `C:\Users\100270999\Downloads\favicon (2).ico`)
- `icons.js` — Iconos SVG (Lucide-style) y helper `window.icon()`
- `images/` — **Carpeta vacía** (aquí irán las imágenes generadas)

#### data/
- `site-data.js` — `window.SITE_DATA` con todo el contenido (11 secciones)

#### components/
- `header.js` — Header sticky con navegación y mobile hamburger
- `footer.js` — Footer 4 columnas (Servicios, Empresa, Contacto, Legal)

#### scripts/
- `content-renderer.js` — Renderiza dinámicamente todas las secciones
- `animations.js` — Scroll-triggered fade-in (IntersectionObserver)

---

## Próximos pasos

### 1. Generar imágenes
Lee `image-prompts.txt` para los prompts exactos de cada imagen.
- Usa Higgsfield MCP o similar para generar
- Guarda en `assets/images/` con nombres exactos
- Formato recomendado: `.webp`

### 2. Actualizar contenido (opcional)
Edita `data/site-data.js` si necesitas cambiar:
- Textos de secciones
- Datos de contacto
- Testimonios
- FAQ

### 3. Personalizar estilos (opcional)
`style.css` contiene todos los tokens. Personalizaciones están en `<style>` dentro de `index.html`.

### 4. Probar en navegador
```
Abre: file:///C:/Users/100270999/Documents/PRPOGRAMACION/VersaBold_Innovations/WEB%20PRINCIPAL/index.html
```

---

## Características implementadas

✅ **Responsive** — Mobile-first, breakpoints 375 / 768 / 1024 / 1440px  
✅ **Accessibility** — Skip link, semantic HTML, ARIA labels, focus rings  
✅ **Performance** — Lazy loading `loading="lazy"`, defer en scripts  
✅ **Dark mode ready** — Tokens CSS listos (puede agregarse media query)  
✅ **Animations** — Scroll-triggered fade-in con IntersectionObserver  
✅ **Mobile menu** — Hamburger toggle, cierra al hacer click en link  
✅ **FAQ accordion** — `<details>` nativo + chevron animation  
✅ **Design system** — Trust & Authority (mismo que gestion-inventario)

---

## Estructura de datos (site-data.js)

```javascript
window.SITE_DATA = {
  brand: { ... },
  nav: { links: [...] },
  hero: { ... },
  problema: { cards: [...] },
  propuesta: { ... },
  servicios: { items: [...] },
  proceso: { steps: [...] },
  diferenciacion: { comparison: [...] },
  proyectos: { items: [...] },
  testimonios: { items: [...] },
  faq: { items: [...] },
  cta_final: { ... },
  footer: { ... },
}
```

Todos los datos están centralizados en un único archivo. Para cambios, edita aquí.

---

## Color Palette (Trust & Authority)

| Token | Hex | Uso |
|-------|-----|-----|
| `--c-primary` | #0F172A | Navy — textos, headings |
| `--c-accent` | #0369A1 | Blue — links, focus |
| `--c-cta` | #F97316 | Orange — botones CTA primarios |
| `--c-bg` | #F8FAFC | Light slate — fondo |
| `--c-surface` | #FFFFFF | Blanco — cards |
| `--c-text` | #020617 | Casi negro — body text |

Todos heredan de `:root {}` en `style.css`.

---

## Script Load Order

1. `icons.js` (sin defer) — setup `window.ICONS` y `window.icon()`
2. `site-data.js` (defer) — setup `window.SITE_DATA`
3. `header.js` (defer) — renderiza header
4. `footer.js` (defer) — renderiza footer
5. `content-renderer.js` (defer) — renderiza secciones
6. `animations.js` (defer) — setup IntersectionObserver

---

## FAQ sobre desarrollo

**P: ¿Cómo cambio un texto?**  
R: Edita `data/site-data.js` y recarga la página (no requiere rebuild).

**P: ¿Cómo agrego una sección nueva?**  
R: 
1. Agrega datos en `site-data.js`
2. Crea un `renderXXX()` en `content-renderer.js`
3. Agrega `<div id="xxx-slot"></div>` en `index.html`

**P: ¿Cómo cambio el favicon?**  
R: Reemplaza `assets/favicon.ico` (mismo nombre y ruta).

**P: ¿Por qué no hay imágenes?**  
R: Las imágenes deben generarse según los prompts en `image-prompts.txt`.

**P: ¿Funciona offline?**  
R: Sí, abrelal con `file://` (no requiere servidor).

---

## Compatibilidad

- ✅ Chrome, Firefox, Safari, Edge (últimas 2 versiones)
- ✅ iOS Safari, Chrome Mobile
- ✅ Android Chrome
- ⚠️ IE11 no soportado (usa `const`, `arrow functions`, etc.)

---

## Optimizaciones aplicadas

| Aspecto | Implementado |
|--------|--------------|
| **Tipografía** | Google Fonts preload + display=swap |
| **Imágenes** | lazy loading, webp recomendado |
| **CSS** | Tokens centralizados, BEM naming |
| **JS** | Vanilla (sin frameworks), modular |
| **Animation** | transform + opacity only, 150-300ms |
| **Accesibilidad** | WCAG AAA target (4.5:1 contrast) |

---

## Git & Versioning

Archivos en este directorio:
- `index.html` — HTML esqueleto + inline styles
- `style.css` — Base design system
- `assets/` — Favicon (pequeño) + scripts ligeros
- `data/` — Contenido
- `components/` — Módulos JS reutilizables
- `scripts/` — Lógica de rendering

**TODO (después de generar imágenes):**
- Agregar `assets/images/` al `.gitignore` (archivos pesados)
- O commit con imágenes optimizadas si quieres versionarlas

---

## Contacto & Datos

Actualizados en `site-data.js`:
- **Email:** vesaboldinnovations@gmail.com
- **Phone:** +53 56189395
- **WhatsApp:** https://wa.me/5356189395
- **Location:** Guantánamo, Cuba
- **Facebook:** https://www.facebook.com/versabold

Cambios: Edita `data/site-data.js` → `brand` object.

---

## 🆕 Actualizaciones Recientes

✅ **Ubicación actualizada:** Colombia → Guantánamo, Cuba  
✅ **Páginas legales:** Política de Privacidad y Términos y Condiciones (adaptadas)  
✅ **Links en navegación:** Footer + header vinculan a páginas legales  
✅ **CTA buttons funcionales:** Abren WhatsApp con mensaje pre-llenado  
✅ **GitHub repo:** Inicializado y listo para Vercel  
✅ **Lead magnet:** Grupo WhatsApp + plantilla Excel gratuita  
✅ **Hero animation:** Scroll-driven con 240 frames suave  
✅ **Proceso fullscreen:** Slides 100vh con animaciones fluidas  

---

**Creado:** 15 de Julio de 2026  
**Actualizado:** 16 de Julio de 2026  
**Stack:** Vanilla HTML/CSS/JS, Design System: Trust & Authority  
**Status:** Listo para conectar con Vercel y launchear
