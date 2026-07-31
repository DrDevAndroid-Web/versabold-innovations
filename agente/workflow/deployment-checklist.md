# VersaBold — Checklist de Despliegue (PLAN FREE)

Completar en orden. El objetivo es tener el sitio en vivo en menos de 30 minutos.

---

## Paso 1 — Preparar el directorio del cliente (2 min)

```
Copiar: agente/plan-free-template/  →  CLIENTES/Plan_FREE/[slug-cliente]/
```

Renombrar el slug en `client.config.json` si es necesario.

---

## Paso 2 — Colocar los archivos de configuración (10 min)

Copiar en `CLIENTES/Plan_FREE/[slug-cliente]/public/`:

- [ ] `client.config.json` — datos del negocio
- [ ] `theme.json` — colores y tipografía
- [ ] `products.json` — hasta 15 productos
- [ ] `gallery.json` — galería (si aplica)
- [ ] `seo.json` — título y descripción

Copiar imágenes en `public/img/`:

- [ ] `logo.webp` — logo del negocio
- [ ] `banner.webp` — imagen de portada
- [ ] `products/` — carpeta con fotos de productos
- [ ] `gallery/` — carpeta con fotos del local

---

## Paso 3 — Build (1 min)

```bash
cd CLIENTES/Plan_FREE/[slug-cliente]
npm install   # solo la primera vez
npm run build
```

Output: carpeta `dist/`

---

## Paso 4 — Preview local (3 min)

```bash
npm run preview
```

Abrir `http://localhost:4173` y verificar:

### Contenido
- [ ] Logo carga correctamente (no aparece imagen rota)
- [ ] Nombre del negocio correcto en header y footer
- [ ] Colores del tema aplicados — NO aparecen los colores por defecto (verde oscuro de demo)
- [ ] Banner principal visible y con buen aspecto en móvil
- [ ] Secciones activas coinciden con las marcadas en `active_sections`
- [ ] Todos los productos aparecen con imagen, nombre y precio
- [ ] Fotos de galería cargan (si aplica)
- [ ] Horarios mostrados correctamente
- [ ] Mapa embebido carga (si aplica)

### Funcionalidad
- [ ] Cada botón "Pedir por WhatsApp" abre WhatsApp con mensaje prellenado correcto
- [ ] El número de WhatsApp en los enlaces es el del cliente (NO el demo: 5356000000)
- [ ] Links de Facebook/Instagram apuntan a la página correcta
- [ ] Email es correcto
- [ ] Menú de navegación funciona en móvil (hamburguesa)
- [ ] Hash routing funciona: `/catalogo`, `/galeria`, `/nosotros`

### Branding
- [ ] Footer muestra "Sitio web creado por VersaBold Innovations"
- [ ] NO aparecen datos del cliente demo ("Mi Negocio Demo", "demo@ejemplo.com", etc.)

### Mobile (redimensionar a 375px en DevTools)
- [ ] No hay scroll horizontal
- [ ] Textos legibles sin zoom
- [ ] Botones tienen tamaño suficiente (mínimo 44px)
- [ ] Hero se ve bien en móvil

---

## Paso 5 — Subir a Hostinger (5 min)

Subir contenido de `dist/` a Hostinger:

**Via File Manager de Hostinger:**
1. Ir a hPanel → Archivos → Administrador de archivos
2. Navegar a `/public_html/`
3. Crear carpeta con el slug: `[slug-cliente]`
4. Subir TODO el contenido de `dist/` dentro de esa carpeta

**Via FTP (FileZilla):**
- Host: tu-dominio.com (o IP del servidor)
- Ruta remota: `/public_html/[slug-cliente]/`
- Subir contenido de `dist/`

---

## Paso 6 — Configurar subdominio en Hostinger (3 min)

1. hPanel → Dominios → Subdominios
2. Crear: `[slug-cliente].versabold.com`
3. Document Root: `/public_html/[slug-cliente]`
4. Guardar

---

## Paso 7 — Activar SSL (2 min)

1. hPanel → Seguridad → SSL/TLS
2. Buscar `[slug-cliente].versabold.com`
3. Instalar certificado SSL (Let's Encrypt — gratuito)
4. Esperar 1–3 minutos

---

## Paso 8 — Verificación final en producción (3 min)

Abrir `https://[slug-cliente].versabold.com`:

- [ ] Sitio carga con HTTPS (candado verde)
- [ ] No redirige a HTTP
- [ ] Velocidad de carga aceptable en móvil (< 3 segundos)
- [ ] WhatsApp links funcionan desde el móvil real

---

## Paso 9 — Registrar en Supabase (2 min)

Añadir el cliente a la tabla `vb_clients` via el backend:

```bash
curl -X POST https://tu-backend.com/api/clients \
  -H "Content-Type: application/json" \
  -H "x-api-secret: TU_API_SECRET" \
  -d '{
    "client_id": "[slug-cliente]",
    "business_name": "Nombre del Negocio",
    "slug": "[slug-cliente]",
    "plan_id": "free",
    "business_type": "colmado",
    "owner_name": "Nombre del Dueño",
    "owner_phone": "5356XXXXXX"
  }'
```

Añadir el sitio a `vb_sites`:
```bash
curl -X POST https://tu-backend.com/api/sites \
  -H "Content-Type: application/json" \
  -H "x-api-secret: TU_API_SECRET" \
  -d '{
    "client_id": "UUID_DEL_CLIENTE",
    "subdomain": "[slug-cliente]",
    "hostinger_path": "/public_html/[slug-cliente]",
    "status": "live",
    "last_deployed_at": "2026-01-01T00:00:00Z"
  }'
```

---

## Paso 10 — Entregar al cliente

Enviar por WhatsApp o email:

```
¡Tu sitio ya está en línea! 🎉

🌐 https://[slug-cliente].versabold.com

Lo que incluye tu PLAN FREE:
✅ Subdominio VersaBold
✅ SSL (https)
✅ Diseño responsive
✅ [N] productos
✅ Pedidos por WhatsApp
✅ Galería de fotos
✅ Horarios y mapa

Para actualizar productos o fotos, contáctame por aquí.
— VersaBold Innovations
```

---

## Notas de despliegue (guardar como deployment-notes.md en la carpeta del cliente)

```markdown
# Cliente: [Nombre del Negocio]
- slug: [slug-cliente]
- Plan: FREE
- Fecha alta: YYYY-MM-DD
- Subdominio: [slug-cliente].versabold.com
- Hostinger: /public_html/[slug-cliente]/
- WhatsApp cliente: +53 XXXXXXXX
- Email cliente: correo@ejemplo.com
- Próxima revisión: YYYY-MM-DD
- Notas: [observaciones especiales]
```
