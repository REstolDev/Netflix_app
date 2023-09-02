# Clon de Página de Inicio de Netflix

Este proyecto es un clon de la página de inicio y la página de inicio de sesión de Netflix en dos idiomas, implementado utilizando HTML, SCSS (con la metodología BEM) y JavaScript. El objetivo de este README es proporcionar una descripción general del proyecto y cómo está estructurado.

## Contenido del Proyecto

El proyecto está estructurado de la siguiente manera:

- **index.html**: Este archivo contiene la estructura HTML de la página de inicio de Netflix en castellano.
- **login.html**: Este archivo contiene la estructura HTML de la página de inicio de sesión en castellano.
- 
- **/en**: Esta carpeta contiene la estructura HTML de las páginas en inglés.

- **scss/**: Esta carpeta contiene todos los archivos SCSS y la estructura de carpetas siguiendo la metodología BEM.
  - **imports/**: Esta carpeta contiene todos los imports SCSS .
   - **variables.scss**: Contiene variables SCSS para colores, fuentes, tamaños, etc.
   - **mixins.scss**: Contiene los mixins SCSS de tipografia, responsive y displays.
   - **reset.scss**: Contiene el reset SCSS.
  
 - **app.scss**: Archivo principal de estilos que importa todos los demás archivos SCSS y define el estilo global de la página de inicio.
 - **login.scss**: Archivo principal de estilos que importa todos los demás archivos SCSS y define el estilo global de la página de inicio de sesión.
  

- **app.js**: Archivo JavaScript principal que controla la funcionalidad de la página de inicio, como el cambio de idioma y la interacción con los elementos de la página  y validación instantanea de los dos formularios.
- **login.js**: Archivo JavaScript principal que controla la funcionalidad de la página de inicio de sesión, como el cambio de idioma, la interacción con los elementos de la página y validación instantanea del formularios

## Metodología BEM (Block Element Modifier)

Se ha utilizado la metodología BEM para nombrar clases CSS de manera semántica y consistente. Esto facilita el mantenimiento y la escalabilidad del proyecto. Las clases CSS deben seguir la convención BEM, que consiste en nombrar los bloques, elementos y modificadores de la siguiente manera:

- `.block`: Para bloques principales.
- `.block__element`: Para elementos dentro de un bloque.
- `.block--modifier`: Para modificadores de un bloque.

## Funcionalidad JavaScript

## app.js

Explicación del código JavaScript utilizado en  el archivo `app.js`. El código se encarga de diversas funcionalidades, incluyendo el control del idioma del navegador (deshabilitado), la selección de idioma, el acordeón de FAQ y la validación de un formulario de registro.

### Control del Idioma del Navegador del Cliente

Este bloque de código se encarga de detectar el idioma del navegador del cliente y redirigirlo a la página correspondiente en función de su idioma. Se utiliza el objeto `navigator.language` para obtener el idioma del navegador y `window.location.pathname` para obtener la URL actual. El código realiza las siguientes acciones:

- Si el idioma es inglés ("en-US" o "en-EN") y la página actual no está en inglés, redirige al usuario a la página en inglés.
- Si el idioma es español ("es-ES") y la página actual no está en español, redirige al usuario a la página en español.

La re-dirección se realiza mediante `window.location.href`.

>Esta parte del código esta deshabilitada porque entra en conflicto con la selección del idioma manual y se realizo a modo de práctica. Se puede reutilizar modificándose  añadiendo un ventana emergente donde se acepte el cambio de idioma en vez de realizarlo automáticamente.

## Selección de Idioma

Este bloque de código permite al usuario seleccionar el idioma deseado en un selector. Cuando el usuario cambia el idioma, se redirige a la página correspondiente en el idioma seleccionado. La funcionalidad se logra mediante el evento "change" en el selector y `window.location.href`.

### Control del Acordeón de FAQ

Este bloque de código habilita la interacción del usuario con un acordeón de preguntas frecuentes (FAQ). Cuando el usuario hace clic en un botón de pregunta, se muestra u oculta la respuesta correspondiente. Si una respuesta ya está visible y se hace clic en otra pregunta, la respuesta anterior se oculta. El acordeón se implementa utilizando clases CSS y se manipula mediante `classList`.

### Validación y Mensajes del Formulario de Registro

Este bloque de código se encarga de validar un formulario de registro. Realiza las siguientes validaciones:

- Validación de correo electrónico: Verifica si el correo electrónico cumple con un patrón válido utilizando una expresión regular. Si es válido, se muestra un mensaje de éxito. Si no, se muestra un mensaje de error.
- Validación de campos vacíos: Verifica si los campos están vacíos y muestra un mensaje de error si es necesario.
- Interacción con etiquetas y estilos: Agrega o quita clases y estilos CSS para proporcionar retroalimentación visual al usuario.


## login.js
El código JavaScript utilizado en la página de inicio de sesión del proyecto se encuentra en `login.js` . El código se encarga de la validación del formulario y la manipulación de la interfaz de usuario.

### Validación del Formulario

El código se encarga de validar los campos del formulario de inicio de sesión antes de permitir que el usuario envíe el formulario. Las validaciones incluyen:

#### Validación de Correo Electrónico y Contraseña

- Se utiliza una expresión regular para verificar si el correo electrónico y el psw cumple con un patrón válido.
- Si el correo electrónico es válido, se quitan las clases de "valFalse" y "valError", y se establece la validación en `true`.
- Si hay un error de validación, se aplican las clases correspondientes y se establece la validación en `false`.
- Si el input está en foco o el campo no está vacío se añade la clase active al label para desplazarla.



### Envío del Formulario

- Cuando el usuario hace clic en el botón "loginBtn", se evita el envío del formulario si los campos no están validados o se muestra una alerta y con event.preventDefault evitamos el envío en caso de  que los campos sean validos.

- Si hay un error de validación, se resalta el campo con un estilo de "valFalse", se pone en foco el input y se muestra un mensaje de error.

### Aprende Más

El formulario incluye un botón "Learn More" (Aprende Más) que permite al usuario ver o ocultar texto extendido. La funcionalidad se implementa de la siguiente manera:

- Cuando el usuario hace clic en el botón "learnMore", se activa o desactiva la visibilidad del elemento con el ID "captchaExtendedText".
- Si ya contiene la clase "visible", se quita para ocultar el texto extendido, y viceversa.



## Créditos

Este código fue desarrollado por Ramon Estol y forma parte de nuestro proyecto de página de inicio de sesión


## Cómo Ejecutar el Proyecto

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona este repositorio en tu máquina local: `git clone https://tu-repositorio.git`.
2. Abre el archivo `index.html` en tu navegador web para ver la página.

## Contribuciones

Si deseas contribuir a este proyecto, siéntete libre de crear una solicitud de extracción (Pull Request) con tus cambios. Asegúrate de seguir las pautas de estilo y estructura del proyecto.

## Créditos

Este proyecto fue creado por Ramon Estol y se inspira en la página de inicio de Netflix.

## Licencia

Este proyecto está bajo la Licencia GPL. 
