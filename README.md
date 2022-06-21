# de la Tierra - Jardinería y Macetas 
### Ecommerce - Proyecto educativo Final React JS - Descripción
Entrega final de la realización de un e-commerce basado en un emprendimiento real de Quilmes, Bs.As donde se realiza una aplicación SPA realizado enteramente con React JS con el propósito de dar una experiencia más fluida a los usuarios (únicamente cambiará el contenido de la aplicación de forma dinámica, dentro de una misma página).

Para ver la navegación del sitio (video/gif), descargar el archivo (80 MB) entrando a https://drive.google.com/drive/u/0/folders/1pNvIMe3AEWqtP_sBTZUYlBr7UIv-xv8K

El emprendimiento se llama "de la Tierra - Jardinería y Macetas" y el objeto de este sitio es mostrar los productos que la tienda tiene disponible y a la venta (se están utilizando imagénes que no son propias). El logo y la paleta de colores respeta los de la marca.

Tiene 3 grandes categorias: "Macetas", "Herramientas" & "Cesped y Riego". Todas son navegables. Al igual que el "Inicio" y el logo.

En cada una de las categorias se va filtrando por productos específicos de esa categoría y si clickeas sobre él, te lleva al detalle del mismo, con el precio y una breve descripción.

Cada item posee un contador con un stock limite y un botón que agrega la cantidad seleccionada al carrito, donde se carga el pedido y se genera la orden. El stock se actualiza mediante la Base de Datos provista por Firebase.

## Layout
Inicio: Durante la navegación en el sitio siempre se mostrará el la barra de navegación (NavBar) y el Pie de Página (Footerp). El logo de la página navega siempre al Home.
Categorias: filtran por tipo de producto mostrando solo los items de esa categoría.
Carrito: Si está vació, mostrará un mensaje con un botón para volver a la tienda/inicio. Si contiene productos, se muestra el precio total y un resumen/desglose de los items (descripción, item, precio, cantidad), los items se podrán eliminar. También se podrá vaciar el carrito o proceder a la compra
Checkout: Una vez elegidos los productos se procede a la finalización del pedido llenando un formulario que al enviarlo, genera un número de orden.

## Tecnologías utilizadas
React JS: Para la realización del sitio
React Router Dom: Para la navegación dinámica (SPA)
Bootstrap: Libreria Reactstrap para el NavBar y el diseño responsive
CSS3: Para definir estilos propios respetando la identidad de marca que es minimalista, moderna y de colores terrosos.
Firebase: Se utiliza FireStore para la Base de Datos.

## Deployment
https://delatierratienda.netlify.app/
