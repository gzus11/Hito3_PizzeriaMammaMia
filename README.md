# Pizzería Mamma Mia! - Hito 3 🍕

Este proyecto es una aplicación de React que simula una pizzería interactiva. El objetivo central de este tercer hito es implementar la **renderización dinámica** de componentes y la gestión de un **carrito de compras** funcional.

##  Funcionalidades del Hito

### 1. Renderización Dinámica de Catálogo
* El componente `<Home />` ya no usa tarjetas estáticas. Ahora recorre un arreglo de datos centralizado en `pizzas.js` para mostrar todos los productos disponibles.
* [cite_start]Se muestran 6 tarjetas de pizza utilizando el componente `<CardPizza />` mediante el método `.map()`.

### 2. Componente CardPizza
* Recibe información detallada (nombre, precio, imagen, ingredientes) a través de **props**.
* Los ingredientes se renderizan dinámicamente iterando sobre un sub-arreglo para generar una lista (`<li>`) por cada uno.

### 3. Carrito de Compras Interactivo
* Implementación del componente `<Cart />` para gestionar el pedido.
* **Control de cantidades:** Permite aumentar y disminuir la cantidad de unidades de cada pizza.
* **Eliminación lógica:** Si la cantidad de un producto llega a 0, este se elimina automáticamente del carrito.
* **Cálculo de Total:** El sistema calcula y muestra el total de la compra en tiempo real según los productos y cantidades seleccionadas.

##  Tecnologías Utilizadas

* **React.js**: Biblioteca principal para la interfaz de usuario.
* **Vite**: Herramienta de construcción y servidor de desarrollo.
* **Bootstrap**: Framework para el diseño responsivo y estilos rápidos.
* **Hooks (useState)**: Para el manejo del estado del carrito de compras.


## Estudiante
- Jesus Gonzalez