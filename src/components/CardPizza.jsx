const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100 shadow-sm">
      {/* Imagen de la pizza */}
      <img src={img} className="card-img-top" alt={name} />
      
      <div className="card-body">
        {/* Nombre de la pizza */}
        <h5 className="card-title fw-bold text-center mb-3">Pizza {name}</h5>
        <hr />
        
        {/* Lista de ingredientes */}
        <div className="text-center">
          <p className="card-text fw-light mb-1">Ingredientes:</p>
          <p className="card-text">
            🍕 {ingredients.join(", ")}
          </p>
        </div>
      </div>

      <div className="card-footer bg-white border-top-0">
        {/* Precio con formato de moneda chilena */}
        <h4 className="text-center fw-bold mb-3">
          Precio: ${price.toLocaleString('es-CL')}
        </h4>
        
        {/* Botones de acción */}
        <div className="d-flex justify-content-around mb-2">
          <button className="btn btn-outline-dark btn-sm">
            Ver Más 👀
          </button>
          <button className="btn btn-dark btn-sm">
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;