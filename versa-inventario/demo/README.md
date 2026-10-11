# Versa-Inventario - modelo web mobile-first

Prototipo web independiente para integrarse posteriormente en la página principal de Versa-Inventario.

## Tecnologías

- HTML semántico.
- CSS responsive mobile-first.
- Vanilla JavaScript, sin framework.
- IndexedDB para datos locales de prueba.

## Ejecutar localmente

Desde la carpeta `web-demo` usa un servidor estático. Por ejemplo:

```bash
python -m http.server 5500
```

Después abre `http://localhost:5500`.

No se recomienda abrir `index.html` directamente con `file://`, porque algunos navegadores restringen módulos ES y IndexedDB en ese contexto.

## Qué incluye la demo

- Selector de rol: Dueño o Dependiente.
- Dueño: Inicio, alta/edición/búsqueda de productos, existencias, entradas, pasar a venta, pérdidas, área de venta, etiquetas QR con búsqueda y selección múltiple, ofertas con precios actuales, cobros por transferencia, cierres, reportes con gráficos y detalles, usuarios, sincronización y ayuda.
- Dependiente: venta con búsqueda, escáner de demostración, carrito, efectivo/transferencia/mixto, abrir y cerrar caja, cierre diario de existencias, sincronización y ayuda.
- Visita guiada inicial por rol con progreso y opción «Saltar guía».
- Datos de prueba persistentes en IndexedDB: productos, movimientos, ventas, ofertas, turnos, cierres, etiquetas y usuarios.
- Diseño responsive mobile-first.

## Integración futura

El prototipo no usa Supabase ni credenciales reales. La futura integración puede sustituir las funciones `readAll`, `put` y `reloadData` por un repositorio remoto, manteniendo la misma interfaz de la aplicación. Para incrustarlo en la página principal se puede publicar esta carpeta como ruta `/versa-inventario-demo/` o cargarla mediante un `iframe`.

La guía aparece la primera vez que se abre el modelo. «Saltar guía» la desactiva para ese navegador; para verla de nuevo se puede borrar el almacenamiento del sitio `versa_inventario_demo` desde las herramientas del navegador.
