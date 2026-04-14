const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title text-capitalize">Pizza {name}</h5>
        <hr />
        <p className="text-center mb-1">🍕 Ingredientes:</p>
        <ul className="text-center list-unstyled">
          {/* Renderización dinámica de ingredientes  */}
          {ingredients.map((ing, index) => (
            <li key={index} style={{ fontSize: "0.8rem" }}>{ing}</li>
          ))}
        </ul>
        <hr />
        <h4 className="text-center mb-3">Precio: ${price.toLocaleString('es-CL')}</h4>
        <div className="d-flex justify-content-around">
          <button className="btn btn-outline-dark btn-sm shadow-sm">Ver más 👀</button>
          <button className="btn btn-dark btn-sm shadow-sm">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;