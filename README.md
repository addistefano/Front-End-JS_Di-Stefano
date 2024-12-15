<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/800px-Samsung_Logo.svg.png" alt="CoderHouse"  height="100"/>
</p>

# Mi eCommerce - Samsung Store

Bienvenido a **Mi eCommerce**, una tienda online especializada en la venta de los últimos modelos de celulares Samsung Galaxy. Este proyecto está diseñado para ofrecer una experiencia de compra moderna, con una interfaz atractiva y funcional que facilita la navegación y la adquisición de productos de la marca Samsung.

## Descripción

Este sitio web permite a los usuarios:
- Explorar una amplia variedad de modelos de celulares Samsung.
- Revisar información detallada de cada producto.
- Leer reseñas de otros clientes que han adquirido productos en la tienda.
- Comunicarse con el equipo de atención al cliente a través de un formulario de contacto.
- Ubicar la tienda física mediante un mapa interactivo de Google Maps.

## Estructura del Proyecto

El proyecto está organizado dentro de una carpeta `assets` que contiene:

- **css/**: Archivo de estilos principales (`styles.css`).
- **js/**: Archivo JavaScript principal (`script.js`) que incluye toda la lógica dinámica de navegación.
Además de los scripts individuales por cada página, tanto `index.js` como `contact.js`.
- **img/**: Imágenes utilizadas para los productos y el diseño general del sitio.

Además, consta de:
- **`index.html`**: La página principal que estructura el contenido general.
- **`contacto.html`**: Página para el formulario de contacto.

### Detalles del Proyecto

### 📂 `index.html`

Archivo HTML principal del proyecto, que contiene:
- **Header**: Menú de navegación creado dinámicamente con JavaScript, utilizando datos almacenados en un arreglo.
- **Sección Home**: Introducción a la tienda con un video destacado.
- **Sección Productos**: Catálogo de celulares Samsung, con una presentación visual y botón de compra para cada modelo.
- **Sección Reseñas**: Opiniones de clientes generadas dinámicamente a partir de datos JSON obtenidos mediante `fetch()`.
- **Sección Contacto**: Formulario de contacto en `contacto.html` con redirección y validación básica.
- **Footer**: Pie de página generado dinámicamente con JavaScript, incluyendo el año dinámico y enlaces a redes sociales.

### 📂 `css/styles.css`

Archivo principal de estilos con:
- **Diseño responsivo**: Adaptación para dispositivos móviles y escritorio.
- **Animaciones CSS**: Efectos de hover en botones y transiciones suaves.
- **Flexbox y Grid**: Uso de estas técnicas para estructurar el diseño de manera eficiente.
- **Fuentes personalizadas**: Uso de Google Fonts para una tipografía moderna y legible.

### 📂 `js/script.js`

Archivo JavaScript que contiene:
- **Navbar dinámico**: Generado mediante un bucle que utiliza datos de un array.
- **Footer dinámico**: Incluye el año dinámico calculado con `Date` y los enlaces a redes sociales generados a partir de un array.

### 📂 `js/index.js`
- **Fetch a API REST**: Obtiene datos desde un archivo JSON local (`resenias.json`) y también de la [API de MercadoLibre](https://api.mercadolibre.com/sites/MLA/search?q=Samsung), para mostrar productos Samsung en el catálogo.
- **Manipulación del DOM**: Creación dinámica de elementos como las tarjetas de productos y reseñas.


## Tecnologías Utilizadas

- **HTML5**: Estructura y organización del contenido.
- **CSS3**: Estilos y diseño responsivo.
- **JavaScript (ES6+)**: Lógica dinámica y manipúlación del DOM.
- **Google Fonts**: Fuente Roboto para mejorar la legibilidad.
- **Font Awesome**: Íconos de redes sociales y elementos decorativos.
- **Formspree**: Servicio para la gestión del formulario de contacto.
- **Google Maps Embed API**: Para la inserción del mapa de ubicación.

## Cumplimiento de Objetivos

El proyecto cumple con los siguientes requisitos:

1. **Estructura HTML avanzada**:
   - Uso de etiquetas semánticas como `<header>`, `<nav>`, `<section>`, `<footer>`.

2. **Estilos CSS avanzados**:
   - Diseño responsivo con Flexbox y Grid.
   - Animaciones CSS para mejorar la experiencia del usuario.

3. **JavaScript**:
   - Creación dinámica de elementos como navbar, reseñas y footer.
   - Manipulación del DOM e integración de datos JSON.
   - Consumo de una API REST mediante `fetch()`.

4. **Accesibilidad y SEO**:
   - Atributos `alt` para imágenes y `aria-label` en enlaces.

5. **Control de Versiones y Documentación**:
   - Proyecto subido a GitHub con un historial de commits que documentan el progreso.

## Configuración del Proyecto

1. Clonar el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/addistefano/Front-End-JS_Di-Stefano.git
   ```

2. Abrir `index.html` en tu navegador para visualizar el sitio.

## Próximos Pasos

- **Integración de un carrito de compras** para que los usuarios puedan gestionar sus pedidos.
- **Implementación de un sistema de pago en línea**.
- **Base de datos de usuarios y pedidos** para mejorar la personalización y seguimiento de compras.

---

## Créditos

- Proyecto desarrollado por Alejandro Di Stefano.
- Fotografías de productos e íconos de Font Awesome y Google Fonts.
- Video de YouTube para mejorar la experiencia de usuario.

---

¡Gracias por visitar **Mi eCommerce**!


