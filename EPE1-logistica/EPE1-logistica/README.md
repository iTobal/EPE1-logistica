# RutaControl — EPE1 Desarrollo Full Stack IPCHILE

Prototipo web interactivo para apoyar operaciones de logística de última milla. El proyecto fue desarrollado con **HTML5**, **CSS3** y **JavaScript**, sin servidor ni base de datos. Toda la información es temporal y vive solamente mientras la página está abierta.

## Archivos

| Archivo | Responsabilidad |
|---|---|
| `index.html` | Estructura semántica, controles y tarjetas numeradas. |
| `styles.css` | Presentación visual, estados, grilla y adaptación móvil. |
| `app.js` | Eventos, variables, cálculos y modificaciones del DOM. |
| `README.md` | Descripción y guía resumida del proyecto. |
| `.gitignore` | Archivos que Git no debe versionar. |

## Interacciones implementadas

1. Actualización de mensaje operativo mediante `click`.
2. Cambio entre ruta disponible y pausada mediante variable booleana y clases CSS.
3. Contador de paquetes con suma y resta.
4. Mostrar y ocultar detalle de una ruta.
5. Vista previa de texto en tiempo real, con limpieza del campo.
6. Selección de zona, conversión numérica y cálculo de entregas exitosas.
7. Control `range` con porcentaje textual y barra de progreso.
8. Creación y eliminación dinámica de tareas mediante nodos del DOM.
9. Filtrado de una colección visible usando un campo de búsqueda.
10. Formulario con `preventDefault()`, validación y mensajes en la propia página.

## Ejecución local

No se necesita `npm install`. Basta con abrir `index.html` directamente en el navegador. También se puede ejecutar un servidor local con:

```bash
python3 -m http.server 5500
```

Luego se visita `http://localhost:5500`.

## Git y publicación

La guía completa para crear el repositorio, realizar commits, trabajar en una rama, abrir un Pull Request y activar GitHub Pages está en `GUIA_ENTREGA.md`.

## Pruebas manuales recomendadas

- Pulsar cada botón y comprobar que cambia el contenido o el estilo esperado.
- Escribir una nota y verificar el reflejo inmediato.
- Cambiar zona y porcentaje, y comprobar el cálculo.
- Mover la barra de progreso.
- Agregar una tarea y eliminarla.
- Buscar `pendiente`, `Valentina` y un texto inexistente.
- Enviar el formulario vacío y luego enviarlo con datos válidos.
- Abrir la consola del navegador y confirmar que no aparecen errores rojos.
