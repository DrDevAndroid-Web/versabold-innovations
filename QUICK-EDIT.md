# Quick Edit Guide — VersaBold web principal

## Dónde está cada texto

| Quiero cambiar… | Edito |
|---|---|
| Textos del home (hero, soluciones, proceso, testimonios, plantilla, FAQ, cierre) | `index.html` — cada sección está marcada con un comentario `<!-- ── NOMBRE ── -->` |
| Una página de servicio | `<servicio>/index.html` (`desarrollo-web/`, `control-inventario/`, `apps-android/`, `gestion-redes-sociales/`, `notificaciones-sms/`, `versa-inventario/`) |
| Menú del header | `data/site-data.js` → `nav` |
| Columnas del footer | `data/site-data.js` → `footer` |
| Email, teléfono, WhatsApp, Facebook | `data/site-data.js` → `brand` (y el bloque JSON-LD al inicio de `index.html`) |
| Tarjetas del portafolio (`/proyectos/`) | `data/site-data.js` → `proyectos` |

El contenido del home está escrito directamente en el HTML para que Google lo lea sin ejecutar JavaScript. No lo vuelvas a mover a `site-data.js`.

## Agregar o quitar una sección del home

- **Quitar:** borra el bloque `<section>…</section>` en `index.html`.
- **Agregar:** copia una sección parecida dentro de `<main>` y cambia los textos. Usa las clases existentes (`section`, `section-heading`, `reveal`…).

Los dos carruseles del home (proceso y plantilla) se activan solos desde `scripts/home-interactions.js` mientras mantengan sus clases (`.proceso-slide`/`.proceso-dot`, `.lm-slide`/`.lm-dot`).

## Agregar una página nueva

1. Copia una página de servicio, por ejemplo `apps-android/index.html`, a una carpeta nueva en kebab-case.
2. Cambia `<title>`, `meta description` (máx. ~155 caracteres), `og:url`, `og:image` y `<link rel="canonical">`.
3. Añade la URL a `sitemap.xml`.

## Imágenes

Guarda en `assets/images/` en formato `.webp`, con nombre en minúsculas y sin espacios. Siempre con `alt` descriptivo.

## Caché

Al cambiar un `.css` o `.js`, sube su `?v=` en los HTML que lo cargan (el servidor los cachea un año).

## Publicar

- **Producción (versabold.com):** Hostinger. Sube también `.htaccess` (redirecciones www, https e `index.html`).
- **Testing:** proyecto Vercel `versabold-innovations`.
