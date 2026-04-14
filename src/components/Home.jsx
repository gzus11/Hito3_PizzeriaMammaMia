import { pizzas } from "../pizzas";
import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row">
          {/* Renderización dinámica de tarjetas  */}
          {pizzas.map((pizza) => (
            <div className="col-12 col-md-4 mb-4" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;