# Guía completa de entrega — EPE1 Desarrollo Full Stack IPCHILE

## 1. Qué se entrega

La carpeta contiene un prototipo de operaciones logísticas llamado **RutaControl**. Su objetivo es demostrar diez formas de interacción con JavaScript y el DOM, sin utilizar base de datos ni servidor.

La estructura mínima solicitada por la evaluación está completa:

| Requisito | Archivo o evidencia |
|---|---|
| HTML5 | `index.html` |
| CSS separado | `styles.css` |
| JavaScript separado | `app.js` |
| Explicación | `README.md` y esta guía |
| Exclusiones de Git | `.gitignore` |
| Historial | Commits de Git |
| Trabajo en rama | Rama `feature/interacciones` |
| Integración | Pull Request hacia `main` |
| Publicación | GitHub Pages |

> **Importante:** los nombres deben escribirse exactamente como aparecen. En Linux y Git, `app.js` y `App.js` no son necesariamente el mismo archivo.

## 2. Conceptos básicos antes de comenzar

**Carpeta:** lugar del computador donde se guardan los archivos.

**Archivo:** documento individual, por ejemplo `index.html`.

**HTML:** lenguaje que define la estructura y el contenido de la página.

**CSS:** lenguaje que define colores, tamaños, espacios y distribución visual.

**JavaScript:** lenguaje que responde a los eventos del usuario y modifica la página.

**Git:** programa que registra versiones del proyecto en el computador.

**Repositorio:** carpeta controlada por Git.

**GitHub:** sitio web donde se guarda una copia remota del repositorio.

**Rama:** línea de trabajo separada. `main` representa la versión principal.

**Commit:** fotografía guardada del estado del proyecto, acompañada de un mensaje.

**Pull Request:** solicitud para incorporar el contenido de una rama a otra.

**GitHub Pages:** servicio de GitHub que publica un sitio web estático.

## 3. Qué instalar en Windows

Si ya tienes estos programas, puedes saltar al punto 4.

1. Abre el navegador.
2. Busca `Visual Studio Code descargar`.
3. Entra al sitio oficial de Visual Studio Code y descarga la versión para Windows.
4. Ejecuta el instalador.
5. Acepta la licencia.
6. Mantén las opciones predeterminadas y termina la instalación.
7. Busca `Git for Windows descargar`.
8. Entra al sitio oficial de Git y descarga Git for Windows.
9. Ejecuta el instalador.
10. Mantén las opciones recomendadas presionando **Next** hasta terminar.
11. Reinicia Visual Studio Code si estaba abierto.

También se puede utilizar el Bloc de notas, pero Visual Studio Code permite ver mejor la estructura y los errores.

## 4. Copiar el proyecto al computador

1. Descarga o copia la carpeta `EPE1-logistica`.
2. Guarda la carpeta en un lugar fácil de encontrar, por ejemplo `Documentos`.
3. Abre Visual Studio Code.
4. En el menú superior selecciona **File > Open Folder**.
5. Selecciona la carpeta `EPE1-logistica`.
6. En el panel izquierdo deben aparecer `index.html`, `styles.css`, `app.js`, `README.md`, `GUIA_ENTREGA.md` y `.gitignore`.
7. Si no aparece `.gitignore`, abre la configuración de Visual Studio Code y activa la opción para mostrar archivos ocultos.

## 5. Abrir y probar la página

### Método sencillo

1. Abre la carpeta con el explorador de archivos.
2. Haz doble clic en `index.html`.
3. Se abrirá la página en el navegador.
4. Prueba las diez tarjetas.

### Método recomendado con servidor local

Este método se parece más a una página real y evita algunos problemas del navegador.

1. En Visual Studio Code selecciona **Terminal > New Terminal**.
2. Escribe el comando siguiente y presiona Enter:

```bash
python3 -m http.server 5500
```

3. No cierres esa terminal mientras haces la prueba.
4. Abre el navegador.
5. Escribe `http://localhost:5500` en la barra de direcciones.
6. Presiona Enter.
7. Para detener el servidor, vuelve a la terminal y presiona `Ctrl + C`.

## 6. Probar cada interacción una por una

### Tarjeta 01

1. Busca **Actualizar mensaje**.
2. Presiona el botón.
3. El texto debe cambiar y mostrar la hora de actualización.

### Tarjeta 02

1. Busca **Alternar disponibilidad**.
2. Presiona **Pausar ruta**.
3. El bloque debe cambiar a color amarillo y decir **Ruta pausada**.
4. Presiona nuevamente para volver a **Ruta disponible**.

### Tarjeta 03

1. Presiona el botón `+`.
2. El contador debe aumentar de 24 a 25.
3. Presiona el botón `−`.
4. El contador debe disminuir.

### Tarjeta 04

1. Presiona **Mostrar detalle**.
2. Debe aparecer la ruta R-204.
3. El texto del botón debe cambiar a **Ocultar detalle**.
4. Presiona de nuevo para ocultarlo.

### Tarjeta 05

1. Haz clic en el campo **Nota temporal**.
2. Escribe cualquier frase.
3. La frase debe aparecer inmediatamente en **Vista previa**.
4. Presiona **Limpiar nota**.
5. El campo y la vista previa deben volver al estado inicial.

### Tarjeta 06

1. Selecciona una zona.
2. Escribe una tasa entre 0 y 100.
3. Presiona **Calcular**.
4. Debe aparecer el número de entregas exitosas.
5. El código convierte los valores con `Number()` antes de calcular.

### Tarjeta 07

1. Mueve el control horizontal.
2. El porcentaje debe cambiar.
3. El ancho de la barra azul debe cambiar junto con él.

### Tarjeta 08

1. Escribe una tarea.
2. Presiona **Agregar**.
3. La tarea debe aparecer como un nuevo elemento de lista.
4. Presiona **Eliminar** junto a una tarea.
5. La tarea debe desaparecer.

### Tarjeta 09

1. Escribe `pendiente`.
2. Debe quedar visible solamente el despacho pendiente.
3. Escribe `Valentina`.
4. Debe quedar visible el registro de Valentina.
5. Escribe una palabra inexistente.
6. Debe aparecer **No se encontraron despachos**.
7. Borra el texto para recuperar todos los despachos.

### Tarjeta 10

1. Presiona **Registrar incidencia** sin completar campos.
2. Debe aparecer un mensaje de error.
3. Selecciona un tipo de incidencia.
4. Escribe un detalle de al menos diez caracteres.
5. Envía nuevamente el formulario.
6. Debe aparecer el mensaje de validación correcta.
7. La página no debe recargarse porque se utiliza `preventDefault()`.

## 7. Revisar errores de JavaScript

1. Abre la página.
2. Presiona `F12` o `Ctrl + Shift + I`.
3. Busca la pestaña **Console**.
4. Si aparece un mensaje rojo, revisa la línea indicada en `app.js`.
5. Actualiza la página con `Ctrl + R`.
6. Después de probar todo, la consola debe quedar sin errores rojos.

Los mensajes informativos amarillos no necesariamente son errores. El criterio importante es que no existan errores rojos producidos por el proyecto.

## 8. Inicializar Git por primera vez

Abre una terminal dentro de la carpeta del proyecto. La forma más segura es hacer clic derecho sobre la carpeta y elegir **Open in Terminal**, o abrir la terminal de Visual Studio Code.

Comprueba que estás en la carpeta correcta:

```bash
pwd
```

En Windows puede mostrar una ruta como `C:/Users/TuNombre/Documents/EPE1-logistica`.

Lista los archivos:

```bash
ls
```

En PowerShell también funciona:

```powershell
dir
```

Inicializa Git:

```bash
git init
```

Configura tu nombre, reemplazando el texto de ejemplo:

```bash
git config --global user.name "Tu Nombre"
```

Configura tu correo de GitHub:

```bash
git config --global user.email "tu-correo@example.com"
```

Comprueba la configuración:

```bash
git config --global --list
```

## 9. Crear el primer commit

Mira el estado del proyecto:

```bash
git status
```

Agrega todos los archivos:

```bash
git add .
```

Crea el primer commit:

```bash
git commit -m "feat: crea prototipo inicial de operaciones logisticas"
```

Comprueba el historial:

```bash
git log --oneline
```

Debe aparecer al menos un commit.

## 10. Crear una rama de trabajo

La evaluación solicita evidenciar una rama distinta de `main`.

Crea la rama:

```bash
git switch -c feature/interacciones
```

Si tu versión de Git no reconoce `switch`, utiliza:

```bash
git checkout -b feature/interacciones
```

Comprueba la rama actual:

```bash
git branch
```

La rama activa aparecerá con un asterisco.

Haz una modificación pequeña y real, por ejemplo revisa un texto de `README.md` o agrega una mejora a la interfaz. Después guarda y ejecuta:

```bash
git add .
git commit -m "feat: completa interacciones del panel"
```

Revisa que existan dos commits:

```bash
git log --oneline --all --decorate
```

## 11. Crear el repositorio en GitHub

1. Entra a [https://github.com](https://github.com).
2. Inicia sesión.
3. En la esquina superior derecha presiona el signo `+`.
4. Selecciona **New repository**.
5. En **Repository name** escribe, por ejemplo, `EPE1-logistica`.
6. Agrega una descripción breve.
7. Selecciona **Public**, porque GitHub Pages se revisará públicamente.
8. No marques **Add a README file**, porque ya existe un README local.
9. No agregues `.gitignore` desde GitHub, porque ya existe uno local.
10. Presiona **Create repository**.
11. Copia la dirección HTTPS del repositorio. Será parecida a `https://github.com/TU-USUARIO/EPE1-logistica.git`.

## 12. Conectar el proyecto local con GitHub

En la terminal, reemplaza `TU-USUARIO` por tu usuario real:

```bash
git remote add origin https://github.com/TU-USUARIO/EPE1-logistica.git
```

Comprueba la conexión guardada:

```bash
git remote -v
```

Cambia a `main` y sube la versión inicial:

```bash
git switch main
git push -u origin main
```

Si GitHub pide autenticación, utiliza el método que GitHub te indique. Las contraseñas normales ya no se utilizan para operaciones Git por HTTPS; puede solicitar un navegador, GitHub CLI o un token.

## 13. Subir la rama de trabajo

Sube la rama:

```bash
git push -u origin feature/interacciones
```

Entra al repositorio en GitHub. Debería aparecer un aviso para comparar la rama y crear un Pull Request.

## 14. Crear el Pull Request

1. Presiona **Compare & pull request**.
2. Verifica que la rama base sea `main`.
3. Verifica que la rama comparada sea `feature/interacciones`.
4. Escribe como título: `Integra interacciones del panel logístico`.
5. En la descripción explica que se incorporan las diez interacciones JavaScript.
6. Presiona **Create pull request**.
7. Revisa que el Pull Request muestre los archivos modificados.
8. Si no hay errores, presiona **Merge pull request**.
9. Presiona **Confirm merge**.
10. Opcionalmente elimina la rama desde GitHub después del merge, pero conserva la evidencia de que existió el Pull Request.

Actualiza tu copia local:

```bash
git switch main
git pull origin main
```

## 15. Activar GitHub Pages

1. Entra al repositorio de GitHub.
2. Presiona la pestaña **Settings**.
3. En el menú izquierdo selecciona **Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. En la rama selecciona `main`.
6. En la carpeta selecciona `/ (root)`.
7. Presiona **Save**.
8. Espera unos minutos.
9. Recarga la sección **Pages**.
10. GitHub mostrará una dirección parecida a:

```text
https://TU-USUARIO.github.io/EPE1-logistica/
```

11. Abre esa dirección en una ventana privada o en otro navegador.
12. Prueba nuevamente las diez interacciones.

## 16. Si GitHub Pages muestra una página en blanco

Revisa estos puntos en orden:

1. Confirma que el archivo se llama exactamente `index.html`.
2. Confirma que `index.html`, `styles.css` y `app.js` están en la raíz del repositorio, no dentro de otra carpeta.
3. Abre el código de `index.html` y confirma que contiene `href="styles.css"`.
4. Confirma que contiene `src="app.js"`.
5. Revisa que los nombres estén escritos en minúsculas.
6. Espera unos minutos después de cada cambio.
7. Haz una recarga fuerte con `Ctrl + Shift + R`.
8. Abre la consola del navegador para detectar errores.

## 17. Comandos finales de comprobación

Ejecuta:

```bash
git status
git branch
git log --oneline --all --decorate
git remote -v
```

Antes de entregar, debes poder demostrar lo siguiente:

| Evidencia | Qué mostrar |
|---|---|
| Archivos | La carpeta con los cinco archivos mínimos. |
| Funcionamiento | La URL de GitHub Pages abierta y operativa. |
| Historial | `git log` con tres o más commits recomendados. |
| Rama | `feature/interacciones` en GitHub o en el historial. |
| Pull Request | PR creado y fusionado hacia `main`. |
| Repositorio | Enlace público al repositorio GitHub. |

## 18. Enlaces que debes entregar

Completa tus datos en los siguientes formatos:

```text
Repositorio GitHub:
https://github.com/TU-USUARIO/EPE1-logistica

GitHub Pages:
https://TU-USUARIO.github.io/EPE1-logistica/

Pull Request:
https://github.com/TU-USUARIO/EPE1-logistica/pull/1
```

No inventes estos enlaces. Copia las direcciones reales desde tu navegador.

## 19. Correspondencia con la rúbrica

| Criterio | Cómo lo cubre el proyecto |
|---|---|
| Aplicación del caso | La interfaz usa estados, paquetes, rutas, despachos, tareas e incidencias. |
| HTML5 y CSS | Existe separación clara, estructura semántica, IDs únicos y diseño responsivo. |
| Interacciones 01 a 05 | Mensaje, estado, contador, detalle y vista previa. |
| Interacciones 06 a 10 | Cálculo, rango, nodos, filtro y formulario validado. |
| DOM y comentarios | `app.js` explica selección, eventos y modificaciones; `index.html` separa cada sección. |
| Git y repositorio | Se indican commits, remoto y publicación en GitHub. |
| Rama y Pull Request | Se utiliza `feature/interacciones` y se integra a `main`. |
| Publicación | Se activa GitHub Pages desde `main` y `/ (root)`. |

## 20. Lista final antes de entregar

- [ ] La página abre sin instalar dependencias.
- [ ] Las diez tarjetas están numeradas del 01 al 10.
- [ ] Los diez ejercicios funcionan sin recargar.
- [ ] No hay errores rojos en la consola.
- [ ] Existen `index.html`, `styles.css`, `app.js`, `README.md` y `.gitignore`.
- [ ] Hay al menos tres commits descriptivos.
- [ ] Existe una rama distinta de `main`.
- [ ] Existe un Pull Request hacia `main`.
- [ ] El Pull Request fue fusionado.
- [ ] GitHub Pages abre la versión final.
- [ ] Se entregan el repositorio, la URL publicada y el enlace del Pull Request.
