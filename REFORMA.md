
# VersaBold — Textos de mejora UX para atraer clientes

Oct 10, 2026 · @SEA STUDIOS FILMS

Este documento trae el texto listo para pegar en cada sección de versabold.com, en el mismo orden en que aparecen en la página. Todo lo que está entre corchetes, como **\[X negocios\]** o **\[precio\]**, es un dato real que debes completar tú: no publiques cifras inventadas. Si una cifra todavía no existe, elimina esa línea en vez de dejarla vaga.

Cada sección tiene tres partes: **Problema actual** (qué falla hoy), **Texto nuevo** (copiar y pegar) y **Notas de diseño** (cómo maquetarlo).

## 1. Hero (primera pantalla)

**Problema actual:** el titular "Convertimos ideas en soluciones digitales" sirve para cualquier agencia. Los indicadores "01 Versatilidad / 02 Audacia / 03 Innovación" hablan de VersaBold, no del cliente, y no hay ninguna prueba en la primera pantalla.

**Texto nuevo**

Etiqueta superior:

> PÁGINAS WEB · SISTEMAS DE GESTIÓN · APPS ANDROID

Titular (H1), opción A, enfocada en el resultado:

> Tu negocio, ordenado y vendiendo también por internet.

Titular (H1), opción B, enfocada en el dolor:

> Deja de perder ventas por desorden y por no estar en internet.

Subtítulo:

> Creamos páginas web, sistemas de inventario y apps Android a la medida de pequeños y medianos negocios en Cuba. Funcionan con tu forma de trabajar, incluso sin conexión, y te acompañamos después de la entrega.

Botón principal:

> Cuéntanos tu caso por WhatsApp ↗

Microtexto bajo el botón:

> Respuesta en menos de \[24 h\]. Primera consulta sin costo.

Botón secundario:

> Ver trabajos realizados ↓

Indicadores de prueba (reemplazan 01 Versatilidad / 02 Audacia / 03 Innovación):

| Cifra | Texto debajo |
| --- | --- |
| \[X\]+ | negocios atendidos |
| 2–3 semanas | para tener tu web lista |
| Soporte local | en Guantánamo, después de entregar |

**Notas de diseño**

- Sustituye la foto de stock por una captura real de un proyecto (por ejemplo, el sistema de Byloz en un portátil) o por una foto real del equipo.
- Pon un degradado oscuro a la izquierda para que el texto blanco tenga buen contraste.
- El botón secundario debe llevar al nuevo portafolio, no a Soluciones.
- Si todavía no tienes la cifra de negocios atendidos, usa "Sin plantillas: cada solución se hace a medida" como primer indicador.

## 2. Encabezado y menú

**Problema actual:** en anchos medianos (tablet, portátil pequeño) el botón "Iniciar proyecto" se estira como una barra naranja que ocupa todo el encabezado y el menú queda escondido en la hamburguesa. Parece un error de maquetación.

**Texto nuevo del menú** (en este orden):

> Soluciones · Trabajos · Cómo trabajamos · Precios · Preguntas

Botón del encabezado:

> Hablemos ↗

**Notas de diseño**

- Limita el ancho del botón: `width: auto; max-width: 180px; padding: 12px 20px;`.
- Muestra el menú completo desde 1024 px de ancho; por debajo, solo logo + botón + hamburguesa.
- Dentro de la hamburguesa, el botón de WhatsApp va al final y a todo el ancho.
- "Blog" solo debe aparecer en el menú si tiene al menos 3 artículos publicados.

## 3. Soluciones

**Problema actual:** los 5 servicios tienen el mismo peso, ninguno indica precio orientativo, todos los enlaces dicen "Ver solución completa" y la quinta tarjeta deja una casilla vacía en la cuadrícula.

**Texto nuevo**

Etiqueta: `SOLUCIONES`

Título (H2):

> ¿Qué quieres resolver en tu negocio?

Intro:

> Elige el problema que más te cuesta hoy. Cada solución se adapta a tu tamaño y presupuesto, y puedes empezar por un módulo y crecer después.

**Tarjetas** (el orden pone primero lo más rentable; ajústalo si tu servicio estrella es otro):

| # | Título | Texto | Precio orientativo | Enlace |
| --- | --- | --- | --- | --- |
| 1 | Sistema de inventario y ventas | Sabe en cada momento qué tienes, qué vendiste y cuánto ganaste. Sin libretas ni Excel desordenados. | Desde \[precio\] | Ver cómo funciona → |
| 2 | Página web profesional | Que te encuentren en Google y te escriban por WhatsApp. Lista en 2–3 semanas, con dominio y hosting incluidos. | Desde \[precio\] | Ver ejemplos de webs → |
| 3 | App Android a medida | Una app para tu equipo que funciona sin internet y se instala directo, sin Play Store. | Desde \[precio\] | Ver qué puede hacer → |
| 4 | Gestión de redes sociales | Publicamos por ti en Facebook e Instagram con contenido pensado para vender, no solo para llenar el muro. | Desde \[precio\]/mes | Ver planes → |
| 5 | Notificaciones SMS | Confirma pedidos y avisa de ofertas directo al teléfono de tus clientes. Sin que instalen nada. | Desde \[precio\] por \[X\] SMS | Ver cómo funciona → |

**Sexta tarjeta** (rellena la casilla vacía; fondo azul oscuro, texto blanco, botón naranja):

> **¿No sabes cuál necesitas?**
>
> Cuéntanos cómo trabajas hoy y en una conversación de 15 minutos te decimos por dónde empezar. Sin compromiso.
>
> Botón: Pedir diagnóstico gratis ↗

**Notas de diseño**

- Las tarjetas 1 y 2 pueden ocupar más ancho (2 columnas) y las otras 3 ir en una fila de 3.
- El precio va justo encima del enlace, en negrita y en color azul de marca.
- Las etiquetas (Web, Hosting, Panel…) se pueden quitar: no aportan decisión y añaden ruido.
- Si prefieres no publicar precios, usa al menos "Planes adaptados a pequeños negocios" y deja el precio en la FAQ.

## 4. Portafolio (sección nueva)

**Problema actual:** no existe. Es el cambio de mayor impacto: quien va a pagar por una web o un sistema quiere ver uno que ya funcione. Colócala justo después de Soluciones.

**Texto nuevo**

Etiqueta: `TRABAJOS REALIZADOS`

Título (H2):

> Proyectos reales, funcionando hoy.

Intro:

> No mostramos maquetas: estos son sistemas y páginas que nuestros clientes usan todos los días.

**Estructura de cada tarjeta de caso** (repetir 3 veces):

> &#91;Captura grande del proyecto\]
>
> **\[Nombre del cliente\]** · \[Tipo de negocio\]
>
> **El reto:** \[una frase con el problema\].
>
> **Lo que hicimos:** \[servicio entregado\].
>
> **Resultado:** \[una cifra concreta\].
>
> Enlace: Ver proyecto en vivo ↗

**Caso 1, Byloz** (ejemplo rellenado; confirma los datos):

> **Byloz** · Software para empresas de construcción
>
> **El reto:** lanzar al mercado un sistema de gestión con una presencia web a la altura del producto.
>
> **Lo que hicimos:** sitio web corporativo + plataforma de gestión.
>
> **Resultado:** \[p. ej., plataforma en uso por X empresas / X usuarios activos\].

**Caso 2, LalyRos:**

> **LalyRos** · Comercio minorista
>
> **El reto:** todo el inventario se llevaba a mano y se perdían ventas por desorden.
>
> **Lo que hicimos:** sistema de inventario y ventas.
>
> **Resultado:** \[p. ej., cierre de caja de X horas a X minutos / X productos controlados\].

**Caso 3, negocio de Darma Alcántara:**

> **\[Nombre del negocio\]** · Negocio digital
>
> **El reto:** no tenía presencia en internet y los clientes no la encontraban.
>
> **Lo que hicimos:** página web profesional.
>
> **Resultado:** \[p. ej., X clientes nuevos por WhatsApp en el primer mes\].

**Notas de diseño**

- Las capturas tienen que ser reales y nítidas, mostradas dentro de un marco de portátil o móvil.
- Si un cliente no permite mostrar su nombre, usa "Tienda de ropa en Guantánamo" en vez de inventar.
- Si aún no tienes cifras, pide a cada cliente un dato antes de publicar: es una llamada de 5 minutos.

## 5. Testimonios

**Problema actual:** las 3 fotos no cargan (los archivos `testimonial-rene.webp`, `testimonial-darma.webp` y `testimonial-dairis.webp` dan error) y en su lugar se ve el texto "René", "Darma", "Dairis". Los resultados no tienen cifras y no hay ninguna cita en palabras del cliente.

**Corrección técnica:** sube de nuevo las 3 imágenes a `/assets/images/` con esos nombres exactos. Si no tienes fotos, usa un círculo con las iniciales (RC, DA, DD) sobre fondo azul de marca.

**Texto nuevo**

Etiqueta: `LO QUE DICEN NUESTROS CLIENTES`

Título (H2):

> Negocios que ya trabajan con VersaBold.

**Estructura de cada testimonio:** primero la cita entre comillas (lo más visible), después nombre, cargo y negocio, y abajo el resultado en una línea.

> "\[Frase real del cliente, 1–2 líneas. Pídesela por WhatsApp: ¿qué cambió en tu negocio desde que usas el sistema?\]"
>
> **Dairis Domínguez** · Dueña de LalyRos
>
> ↑ \[Resultado con cifra: p. ej., "Ahora cierra el inventario en 10 minutos, antes le tomaba una tarde"\]

Ejemplos de preguntas para conseguir una cita real (envíalas por WhatsApp):

1. ¿Cómo trabajabas antes de tener el sistema o la web?
2. ¿Qué es lo que más ha cambiado desde entonces?
3. ¿Se lo recomendarías a otro negocio? ¿Por qué?

**Notas de diseño**

- Quita las 5 estrellas: puestas por la propia empresa no generan confianza.
- Si consigues un video corto del cliente (20–30 s, grabado con el móvil), ponlo en el lugar del primer testimonio: es la prueba más fuerte.
- Con el portafolio nuevo, los testimonios pueden ir integrados dentro de cada caso en vez de en una sección aparte.

## 6. Por qué VersaBold

**Problema actual:** las tarjetas V / B / + ("Nos adaptamos", "Rompemos límites", "Evolucionamos") tienen poco contraste y no dicen nada que un cliente pueda comprobar. La foto de equipo parece de stock.

**Texto nuevo**

Etiqueta: `POR QUÉ VERSABOLD`

Título (H2), puedes mantener el actual porque es bueno:

> No adaptamos tu negocio al software. Adaptamos la tecnología a tu negocio.

Texto:

> Conocemos cómo funciona un negocio en Cuba: conexión que va y viene, procesos que cambian y poco tiempo para aprender sistemas complicados. Por eso diseñamos herramientas simples, que funcionan en tu realidad.

**4 diferenciadores** (sustituyen las tarjetas V / B / +; confirma que cada uno es cierto antes de publicarlo):

| Icono | Título | Texto |
| --- | --- | --- |
| Wi-Fi tachado | Funciona sin internet | Tus sistemas y apps siguen trabajando aunque se caiga la conexión, y se sincronizan cuando vuelve. |
| Persona | Te explicamos todo | Te entregamos el sistema funcionando y formamos a tu equipo, sin jerga técnica. |
| Llave inglesa | Soporte después de entregar | Seguimos contigo: ajustes, dudas y mejoras. No desaparecemos cuando termina el proyecto. |
| Ubicación | Equipo local | Estamos en Guantánamo. Puedes escribirnos por WhatsApp y hablar con quien hizo tu sistema. |

**Notas de diseño**

- Cambia la foto de stock por una foto real del equipo, aunque sea con el móvil y buena luz. Si no la tienes, quítala: es mejor sin foto que con una que parece falsa.
- Sube el contraste de las tarjetas: texto blanco al 90 % sobre azul oscuro, título en 18 px y texto en 15 px como mínimo.
- El lema "VERSATILE × BOLD × INNOVATIVE" en inglés puede quedarse solo en el logo o en el pie; en el cuerpo de la web usa español.

## 7. Cómo trabajamos

**Problema actual:** los 5 pasos están en un carrusel con una foto grande, así que solo se ve uno a la vez y el visitante no entiende el proceso completo.

**Texto nuevo**

Etiqueta: `CÓMO TRABAJAMOS`

Título (H2):

> De tu idea a tu sistema funcionando, en 5 pasos.

**Los 5 pasos** (en una sola fila horizontal en escritorio, vertical en móvil):

1. **Conversamos** (día 1). Nos cuentas por WhatsApp cómo trabajas hoy y qué te frena. Sin costo.
2. **Te proponemos** (2–3 días). Recibes una propuesta clara: qué haremos, en cuánto tiempo y a qué precio.
3. **Construimos** (según el proyecto). Te mostramos avances cada semana para que opines antes de terminar.
4. **Entregamos y te enseñamos.** Lo dejamos funcionando y formamos a tu equipo para usarlo.
5. **Te acompañamos.** Soporte, ajustes y mejoras a medida que tu negocio crece.

Botón al final de la sección:

> Empezar por el paso 1 ↗

**Notas de diseño**

- Quita el carrusel y la foto grande; usa una línea que une 5 círculos numerados.
- Confirma los plazos de los pasos 1 y 2 antes de publicarlos: deben ser los que de verdad cumples.

## 8. Plantilla gratis

**Problema actual:** el carrusel de 6 imágenes de la plantilla alarga mucho la página, que mide unos 9.300 px. Además, el texto pide nombre y correo pero promete un grupo de WhatsApp: son dos mensajes distintos.

**Texto nuevo** (bloque compacto en 2 columnas: texto a la izquierda, una sola imagen de la plantilla a la derecha):

Etiqueta:

> GRATIS PARA TU NEGOCIO

Título (H2):

> Controla tu inventario hoy mismo, gratis.

Texto:

> Descarga la misma plantilla que usamos para empezar con nuestros clientes: entradas, salidas y existencias en un solo archivo, lista para usar.

Tres puntos con check:

- Funciona en Excel y en el móvil
- Instrucciones paso a paso incluidas
- Sin registrarte en ninguna plataforma

Botón:

> Recibir la plantilla por WhatsApp ↗

Microtexto:

> Te la enviamos al momento. Sin spam.

**Notas de diseño**

- Quita el carrusel: deja una sola imagen de la pestaña "Inventario" con un ligero giro 3D.
- Elige un canal: WhatsApp convierte mejor en Cuba y ya es el canal de tus otros botones. Si mantienes el correo, cambia el texto del botón a "Enviar a mi correo".
- Mensaje prellenado de WhatsApp sugerido: "Hola VersaBold, quiero la plantilla gratis de inventario". Así sabes de dónde viene cada contacto.

## 9. Preguntas frecuentes

**Problema actual:** las respuestas son buenas, pero la de precio no da ninguna referencia, y es la pregunta que más frena una decisión. Faltan preguntas sobre forma de pago y conexión.

**Respuesta nueva a "¿Cuál es el precio?":**

> Depende de lo que necesites, pero para que tengas una idea: una página web empieza desde \[precio\], un sistema de inventario desde \[precio\] y una app Android desde \[precio\]. En la primera conversación te damos un precio cerrado, sin sorpresas después.

**Preguntas nuevas** (añádelas; confirma cada respuesta):

**¿Cómo puedo pagar?**

> Aceptamos \[CUP / MLC / transferencia / efectivo\]. Normalmente se paga un \[X\] % al empezar y el resto al entregar.

**¿Qué pasa si se va la conexión?**

> Nuestros sistemas y apps están pensados para seguir funcionando sin internet. Los datos se guardan en el dispositivo y se sincronizan cuando vuelve la conexión.

**¿La web y los datos son míos?**

> Sí. El dominio se registra a tu nombre y la información de tu negocio es tuya. Si algún día decides cambiar de proveedor, te la entregamos.

**¿Puedo empezar con algo pequeño?**

> Claro. Muchos clientes empiezan con un módulo de inventario o una landing page y agregan funciones cuando el negocio lo pide.

**Notas de diseño**

- Pon la pregunta de precio en segundo lugar, no al final.
- Debajo de la última pregunta: "¿Tienes otra duda? Escríbenos por WhatsApp ↗".

## 10. Cierre, pie de página y ajustes técnicos

**Llamada final (sección "Hablemos")**

Etiqueta: `HABLEMOS`

Título (H2):

> ¿Listo para ordenar y hacer crecer tu negocio?

Texto:

> Escríbenos por WhatsApp, cuéntanos qué te está costando hoy y en menos de \[24 h\] te decimos cómo lo resolveríamos y cuánto costaría.

Botón:

> Escribir por WhatsApp ↗

Debajo del botón, en texto pequeño:

> O llámanos al +53 56189395

**Pie de página**

- Cambia el correo visible de `soporte@versabold.com` a `hola@versabold.com` o `ventas@versabold.com` para contactos nuevos. Deja "soporte" solo para clientes.
- Haz que el teléfono y el correo sean clicables: `tel:+5356189395` y `mailto:`.
- Texto bajo el logo: "Páginas web, sistemas y apps para negocios en Cuba."

**Botón de chat flotante**

- Hoy tapa "Términos y condiciones" en el pie. Añade `padding-bottom: 96px` al pie o sube el botón cuando el pie sea visible.
- Usa el icono oficial de WhatsApp en el botón flotante: hoy es una burbuja genérica y no se entiende a dónde lleva.

**Animaciones al hacer scroll**

- Hoy los títulos y textos aparecen casi transparentes hasta que termina la animación. Con conexión lenta pueden quedar ilegibles.
- Ajuste: empieza en `opacity: 0.6` en vez de `0`, dura como máximo 400 ms y respeta `prefers-reduced-motion`.

**Texto alternativo de imágenes** (3 imágenes no lo tienen):

| Imagen | Texto alternativo sugerido |
| --- | --- |
| Foto de René Cobas | René Cobas, CEO de Byloz |
| Foto de Darma Alcántara | Darma Alcántara de la Cruz, emprendedora |
| Foto de Dairis Domínguez | Dairis Domínguez, dueña de LalyRos |

**Orden final recomendado de la página**

1. Hero con pruebas
2. Soluciones (5 tarjetas + diagnóstico)
3. Portafolio (nuevo)
4. Testimonios
5. Por qué VersaBold
6. Cómo trabajamos
7. Plantilla gratis (compacta)
8. Preguntas frecuentes
9. Llamada final
