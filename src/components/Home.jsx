import ImgNapolitana from "../assets/img/Napolitana.jpg"
import ImgEspanola from "../assets/img/Espanola.jpg"
import ImgPepperoni from "../assets/img/Pepperoni.jpg"
import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row">
          {/* Pizza 1: Napolitana */}
          <div className="col-12 col-md-4 mb-4">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img={ImgNapolitana}
            />
          </div>

          {/* Pizza 2: Española */}
          <div className="col-12 col-md-4 mb-4">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
              img={ImgEspanola}
            />
          </div>

          {/* Pizza 3: Pepperoni */}
          <div className="col-12 col-md-4 mb-4">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img={ImgPepperoni}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;