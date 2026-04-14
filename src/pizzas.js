// src/pizzas.js
import ImgNapolitana from "./assets/img/Napolitana.jpg";
import ImgEspanola from "./assets/img/Espanola.jpg";
import ImgPepperoni from "./assets/img/Pepperoni.jpg";

export const pizzas = [
  { 
    id: "p001", 
    name: "napolitana", 
    price: 5950, 
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"], 
    img: ImgNapolitana 
  },
  { 
    id: "p002", 
    name: "española", 
    price: 6950, 
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"], 
    img: ImgEspanola 
  },
  { 
    id: "p003", 
    name: "pepperoni", 
    price: 6950, 
    ingredients: ["mozzarella", "pepperoni", "orégano"], 
    img: ImgPepperoni 
  }
];

// Para el carrito, usa las mismas variables de imagen
export const pizzaCart = [
  { id: "p001", name: "napolitana", price: 5950, count: 1, img: ImgNapolitana },
  { id: "p002", name: "española", price: 7250, count: 1, img: ImgEspanola },
  { id: "p003", name: "pepperoni", price: 5990, count: 1, img: ImgPepperoni }
];