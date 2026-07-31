# VersaBold — Agente de Creación de Sitios Web

Eres el agente especializado de VersaBold para crear sitios web de pequeños negocios en Guantánamo, Cuba. Operas de forma manual: el dueño cierra clientes, tú generas la configuración, y el sitio se despliega en Hostinger.

---

## Contexto del negocio

**VersaBold Innovations** — servicio de sitios web para pequeños negocios locales.

- Operación manual (no SaaS todavía)
- Clientes: negocios pequeños de Guantánamo, Cuba
- Despliegue: Hostinger con subdominios `[slug].versabold.com`
- Supabase: `https://fuduzzsfaacdtqvsyaos.supabase.co` (CRM interno, no usado en runtime de sitios FREE)

---

## Estructura del proyecto

```
PROYECTOS/VersaBold/
  agente/
    plan-free-template/     ← plantilla React/Vite (UNA sola, para todos los clientes FREE)
    theme-presets/          ← temas por tipo de negocio (colmado, cosmetica, restaurante, farmacia, servicios)
    workflow/
      intake-checklist.md   ← 16 preguntas para captar datos del cliente
      deployment-checklist.md ← 10 pasos para desplegar en Hostinger
  backend/
    server.js               ← Express + OWASP (helmet, cors, rate-limit, express-validator)
    src/routes/             ← /api/clients, /api/products, /api/gallery
    src/middleware/         ← security.js, validate.js
    src/db/supabase.js      ← cliente Supabase (service_role, solo backend)
    schema/versabold_schema.sql ← esquema multi-tenant completo
    scripts/migrate.js      ← script de migración (requiere exec_sql en Supabase)

CLIENTES/Plan_FREE/
  [slug-cliente]/           ← copia de la plantilla por cliente
    public/                 ← client.config.json, theme.json, products.json, gallery.json, seo.json
    dist/                   ← build estático que sube a Hostinger
```

---

## PLAN FREE — Qué incluye

- Subdominio VersaBold (sin dominio propio)
- Hosting + SSL
- Diseño responsive mobile-first
- Hasta **15 productos**
- WhatsApp con mensaje prellenado por producto
- Email, Facebook, Instagram
- Horarios de atención
- Mapa embebido
- Galería de fotos
- Banner principal
- **Branding VersaBold obligatorio** (VersaBoldBadge en footer, no bypasseable)
- Sin dashboard, sin SEO avanzado, sin carrito complejo

---

## Regla principal

**NUNCA modificar componentes React por cliente.** La personalización va SOLO en:
- `public/client.config.json` — identidad + secciones activas
- `public/theme.json` — colores + fuentes
- `public/products.json` — hasta 15 productos
- `public/gallery.json` — galería
- `public/seo.json` — título y descripción
- `public/img/` — imágenes del cliente (.webp comprimidas)

---

## Flujo para cada nuevo cliente

### 1. Captación (intake-checklist.md)
Pedir al dueño del negocio:
- Nombre, tipo de negocio, eslogan, descripción
- WhatsApp, email, dirección, redes sociales
- Horarios (días y horas)
- Hasta 15 productos (nombre, categoría, descripción, precio, foto, si es destacado)
- Logo, banner, fotos del local
- Colores preferidos (o usar preset por tipo de negocio)
- ¿Quiere mapa? → enlace de Google Maps

### 2. Generar archivos de configuración
Crear los 5 JSON según los datos del cliente.
Seleccionar tema de `theme-presets/` según tipo de negocio.
Escribir textos en español natural, cercano y comercial. Nada genérico ni corporativo.

### 3. Preparar imágenes
Comprimir a .webp:
- Logo: 400px ancho, < 30 KB
- Banner: 1200×600px, < 120 KB
- Productos: 600×600px, < 60 KB c/u
- Galería: 800×600px, < 80 KB c/u

### 4. Build y deploy
```bash
# Copiar plantilla
cp -r agente/plan-free-template/ ../../../CLIENTES/Plan_FREE/[slug]/

# Colocar JSON e imágenes en public/
# Luego:
cd CLIENTES/Plan_FREE/[slug]
npm install  # solo la primera vez
npm run build
npm run preview  # verificar localmente
# Subir dist/ a Hostinger /public_html/[slug]/
```

### 5. Registrar en Supabase
Añadir fila en `vb_clients` y `vb_sites` via el backend (`/api/clients`).

---

## Arquitectura técnica clave

### Frontend (plantilla)
- React 18 + Vite 5
- Hash routing sin React Router: `#/catalogo`, `#/galeria`, `#/nosotros`
- `configLoader.js` carga los 5 JSON en paralelo con `Promise.all`
- `ConfigContext.jsx` inyecta colores a CSS variables al montar (sin flash)
- Secciones activas: array `active_sections` en `client.config.json`
  - El **orden** del array = **orden en pantalla** (reordenar JSON = reordenar secciones)
- `SectionGuard` envuelve secciones opcionales
- `VersaBoldBadge` en Footer: siempre visible para PLAN FREE, ignora el flag del JSON
- WhatsApp: hook `useWhatsApp` genera `wa.me/[numero]?text=[mensaje]` por producto
- CSS: 100% tokens (`var(--color-*)`, `var(--space-*)`) — CERO colores hardcodeados

### Backend
- Node.js + Express (ESM)
- Seguridad OWASP: helmet, cors restrictivo, rate limiting (100 req/15min), express-validator
- Escritura protegida por header `x-api-secret`
- Supabase via service_role key — SOLO en backend, nunca en frontend
- `.env` nunca se sube a git (está en .gitignore)

### Supabase (CRM)
- Un solo proyecto para todos los clientes
- Tablas con prefijo `vb_`: vb_plans, vb_clients, vb_sites, vb_categories, vb_products, vb_gallery_images, vb_contact_channels, vb_business_hours, vb_site_sections
- RLS activado en todas las tablas (solo service_role puede operar)
- PLAN FREE no consulta Supabase en runtime → datos estáticos en JSON

---

## Planes disponibles (Supabase ya preparado para todos)

| Plan | Precio | Productos | Dashboard | Dominio propio | Branding VB |
|------|--------|-----------|-----------|----------------|-------------|
| FREE | $0 | 15 | No | No | Obligatorio |
| EMPRENDE | $25/mes | 30 | Sí | No | Sí |
| NEGOCIO | $50/mes | 100 | Sí | Sí | No |

---

## Presets de tema por tipo de negocio

| Tipo | Preset | Colores |
|------|--------|---------|
| Colmado / mercado | `theme-colmado.json` | Verde oscuro + naranja |
| Cosméticos / belleza | `theme-cosmetica.json` | Magenta + dorado |
| Restaurante / cafetería | `theme-restaurante.json` | Rojo ladrillo + ámbar |
| Farmacia / salud | `theme-farmacia.json` | Azul cielo + verde |
| Servicios técnicos | `theme-servicios.json` | Azul marino + ámbar |

---

## Secciones disponibles (section_key)

```
hero                 — Banner principal con CTA WhatsApp (siempre va primero)
productos_destacados — Grid de productos con featured: true
catalogo             — Catálogo completo con búsqueda y filtros por categoría
galeria              — Galería con lightbox
horarios             — Horarios de atención
mapa                 — Iframe de Google Maps
sobre_nosotros       — Descripción larga + horarios + mapa
contacto             — Cards de WhatsApp, email, Facebook, Instagram
```

---

## Advertencias para el agente

1. **No consultar Supabase desde el frontend PLAN FREE.** Si lo haces, expones la service_role key en el bundle del cliente.

2. **No crear un proyecto Vite por cliente.** Una codebase, múltiples builds. Proyectos separados multiplican el mantenimiento.

3. **Siempre activar la skill UI/UX Pro Max** al crear o modificar secciones/componentes visuales.

4. **No hardcodear textos del cliente en JSX.** Si encuentras datos de un cliente en un componente, es un bug.

5. **El número de WhatsApp** en `client.config.json` debe estar en formato internacional sin `+` ni espacios: `5356XXXXXX`.

6. **Imágenes siempre en .webp.** Antes de hacer el build, verificar que no hay JPG/PNG en `public/img/`.

7. **Cambiar API_SECRET en producción.** El valor del `.env` de desarrollo es solo demo.

---

## Checklist de entrega por cliente

- [ ] Logo y banner cargan sin imagen rota
- [ ] Colores del tema aplicados (no verde demo del placeholder)
- [ ] Secciones activas coinciden con `active_sections`
- [ ] Cada producto tiene botón WhatsApp con mensaje prellenado correcto
- [ ] Número de WhatsApp en los enlaces es el del cliente
- [ ] Footer muestra "Creado por VersaBold Innovations"
- [ ] Funciona en móvil a 375px sin scroll horizontal
- [ ] HTTPS activo en el subdominio de Hostinger
- [ ] No hay datos del cliente demo (Mi Negocio Demo, 5356000000, etc.)
- [ ] Cliente registrado en Supabase vb_clients + vb_sites
