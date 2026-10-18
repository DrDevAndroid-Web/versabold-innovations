# VersaBold Innovations — web principal

Sitio público de VersaBold Innovations (versabold.com): soluciones digitales para pequeños y medianos negocios.

**Stack:** HTML, CSS y JS vanilla, sin build. **Producción:** Hostinger (LiteSpeed, usa `.htaccess`). **Testing:** Vercel, proyecto `versabold-innovations` (usa `vercel.json`).

Guía para editar textos: [`QUICK-EDIT.md`](QUICK-EDIT.md).

## Estructura

| Ruta | Qué es |
|---|---|
| `index.html` | Home. El contenido está escrito en el HTML (indexable sin JS). |
| `desarrollo-web/`, `control-inventario/`, `apps-android/`, `gestion-redes-sociales/`, `notificaciones-sms/` | Páginas pilar de cada servicio |
| `branding/` | Página pilar de branding, identidad visual y diseño gráfico |
| `versa-inventario/` | Página de producto de Versa-Inventario |
| `versa-inventario/demo/` | Demo web del producto (IndexedDB, datos locales, `noindex`) |
| `proyectos/`, `proyectos/biloz/` | Portafolio y casos |
| `blog/` | Blog; los posts vienen de `api.versabold.com/api/blog` |
| `politica-privacidad.html`, `terminos-condiciones.html` | Legales |
| `components/header.js`, `components/footer.js` | Header y footer compartidos, generados con JS |
| `data/site-data.js` | Datos compartidos: `brand`, `nav`, `footer`, `proyectos` |
| `scripts/home-interactions.js` | Carruseles del home |
| `scripts/animations.js` | Aparición al hacer scroll (`.reveal`) |
| `scripts/chat-widget.js` | Chat conectado a `api.versabold.com/api/chat` |
| `style.css`, `pillar-page.css`, `projects-page.css`, `legal.css`, `blog/blog.css` | Estilos |
| `sitemap.xml`, `robots.txt`, `.htaccess` | SEO y servidor |

## Orden de scripts

`assets/icons.js` → `data/site-data.js` → `components/header.js` → `components/footer.js` → scripts propios de la página → `scripts/animations.js`. El header y el footer leen `window.SITE_DATA`, así que `site-data.js` debe cargarse antes y sin `defer`.

## SEO

Cada página indexable lleva `title`, `meta description` (≤ 155 caracteres), `canonical` absoluto con barra final, `og:*` y un solo `h1`. Los enlaces internos apuntan a carpetas (`/servicio/`), nunca a `index.html`. Al crear una página, añádela a `sitemap.xml`.

## Paleta (Trust & Authority)

| Token | Hex | Uso |
|---|---|---|
| `--c-primary` | #0F172A | Navy: textos, headings |
| `--c-accent` | #0369A1 | Azul: links, focus |
| `--c-cta` | #F97316 | Naranja: botones CTA |
| `--c-bg` | #F8FAFC | Fondo |
| `--c-surface` | #FFFFFF | Cards |

## Probar en local

```bash
python -m http.server 5500
```

Abre `http://localhost:5500`. La demo de Versa-Inventario necesita servidor (módulos ES e IndexedDB no funcionan con `file://`).

## Compatibilidad

Últimas 2 versiones de Chrome, Firefox, Safari y Edge; iOS Safari y Chrome Android. IE11 no soportado.
