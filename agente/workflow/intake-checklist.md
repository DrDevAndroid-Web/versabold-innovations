# VersaBold — Checklist de Captación de Cliente (PLAN FREE)

Usar este checklist en la primera conversación con el cliente (WhatsApp, llamada o en persona).
Con estos datos se generan los 5 archivos JSON del sitio.

---

## Datos del negocio

- [ ] **Nombre completo del negocio**
  > Ejemplo: "Colmado El Buen Precio"

- [ ] **Tipo de negocio**
  > Opciones: colmado, cosméticos/belleza, restaurante/cafetería, farmacia, servicios técnicos, otro (especificar)
  > Esto determina el preset de tema visual a usar.

- [ ] **Eslogan o frase del negocio** *(opcional)*
  > Ejemplo: "Lo que necesitas, siempre disponible"

- [ ] **Descripción breve del negocio** (1–2 oraciones)
  > Para la sección hero y el SEO.

- [ ] **Descripción larga** *(opcional, para la página Nosotros)*
  > Quién son, cuánto tiempo llevan, qué los hace diferentes.

---

## Contacto

- [ ] **Número de WhatsApp** (con código de país)
  > Formato: 5356XXXXXX (sin +, sin espacios)
  > ⚠️ Este número recibe TODOS los pedidos del sitio.

- [ ] **Correo electrónico** *(opcional)*

- [ ] **Dirección exacta**
  > Calle, número, entre calles, municipio.

- [ ] **Enlace de Facebook** *(si tiene)*
  > Pegar el enlace completo de la página/perfil.

- [ ] **Enlace de Instagram** *(si tiene)*

---

## Horarios

- [ ] **¿Qué días atienden?** y **¿en qué horario?**
  > Ejemplo: Lunes a Sábado de 8:00 AM a 8:00 PM

- [ ] **¿El domingo tienen horario diferente?**
  > Ejemplo: Domingo de 10:00 AM a 2:00 PM / Cerrado

---

## Productos o servicios (máx 15 para PLAN FREE)

Para cada producto o servicio pedir:

| # | Nombre | Categoría | Descripción breve | Precio (CUP) | Foto disponible | Destacado (S/N) |
|---|--------|-----------|-------------------|--------------|-----------------|-----------------|
| 1 | | | | | | |
| 2 | | | | | | |
| ... | | | | | | |

> **Nota:** Los productos "destacados" aparecen en la página principal. Máximo 4–6 destacados.

---

## Fotos e imágenes

- [ ] **Logo del negocio** (PNG o JPG, mejor con fondo transparente)
  > Si no tiene, VersaBold puede crear uno básico o usar texto.

- [ ] **Foto de banner/portada** (la imagen grande del inicio)
  > Idealmente foto del local, del producto estrella, o del equipo.

- [ ] **Fotos de productos** (una por producto si es posible)

- [ ] **Fotos del local/galería** (1–6 fotos del espacio o del trabajo)

### Especificaciones de imágenes antes de subir:
- Logo: máx 400px ancho, < 30 KB, formato .webp
- Banner: 1200×600px, < 120 KB, formato .webp
- Productos: 600×600px, < 60 KB c/u, formato .webp
- Galería: 800×600px, < 80 KB c/u, formato .webp

---

## Visual

- [ ] **¿Tiene colores preferidos?**
  > Si no tiene preferencia, usar el preset estándar para su tipo de negocio.

- [ ] **¿Tiene preferencia de estilo?**
  > Moderno, elegante/femenino, robusto/masculino, minimalista

---

## Mapa

- [ ] **¿Quiere que aparezca un mapa de su ubicación?**
  > Si sí: buscar el negocio en Google Maps y copiar el enlace de "Compartir".
  > Si no aparece en Maps, usar la dirección como búsqueda.

---

## Secciones del sitio

Marcar las secciones que aplican para este negocio:

- [ ] Hero (presentación con banner) — **siempre activo**
- [ ] Productos destacados en home
- [ ] Catálogo completo (con buscador)
- [ ] Galería de fotos
- [ ] Horarios de atención
- [ ] Mapa de ubicación
- [ ] Sobre nosotros
- [ ] Contacto (WhatsApp, email, redes)

> El orden de las secciones marcadas determina cómo aparecen en el sitio.

---

## Al finalizar este checklist:

1. Crear `client.config.json` con todos los datos.
2. Seleccionar `theme.json` del preset correspondiente (o personalizar colores).
3. Llenar `products.json` con los productos.
4. Llenar `gallery.json` si hay fotos del local.
5. Generar `seo.json` con título y descripción para Google.
6. Comprimir y renombrar todas las imágenes a `.webp`.
7. Copiar la plantilla y hacer el build.
