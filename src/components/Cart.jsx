import { useState } from "react";
import { pizzaCart } from "../pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart); // Hook useState para el carrito [cite: 6, 99]

  const updateCount = (id, step) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, count: item.count + step } : item
    ).filter(item => item.count > 0)); // Elimina si la cantidad es 0 [cite: 6, 96]
  };

  const total = cart.reduce((acc, item) => acc + (item.price * item.count), 0); // Cálculo del total [cite: 6, 97]

  return (
    <div className="container mt-5 p-4 bg-white rounded shadow-sm" style={{ maxWidth: "800px" }}>
      <h3 className="mb-4">Detalles del pedido:</h3>
      {cart.map((item) => (
        <div key={item.id} className="d-flex align-items-center py-3 border-bottom">
          <img src={item.img} alt={item.name} style={{ width: "80px" }} className="rounded" />
          <h6 className="flex-grow-1 ms-3 text-capitalize">{item.name}</h6>
          <p className="mb-0 me-3 fw-bold">${(item.price * item.count).toLocaleString('es-CL')}</p>
          <button className="btn btn-outline-danger btn-sm px-3" onClick={() => updateCount(item.id, -1)}>-</button>
          <span className="mx-3 fw-bold">{item.count}</span>
          <button className="btn btn-outline-primary btn-sm px-3" onClick={() => updateCount(item.id, 1)}>+</button>
        </div>
      ))}
      <div className="mt-4 pt-3 border-top">
        <h4 className="fw-bold">Total: ${total.toLocaleString('es-CL')}</h4>
        <button className="btn btn-dark w-100 mt-3 py-2 shadow">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;