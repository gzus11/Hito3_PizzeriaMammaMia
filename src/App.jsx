import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
// import Home from "./components/Home"; 
// import LoginPage from "./components/Login";
// import RegisterPage from "./components/Register";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Navbar />
      <main className="flex-grow-1">
         {/*<Home />*/} 
         {/*Se puedes ir intercambiando estos dos: RegisterPage y LoginPage para probarlos */}
         {/*<RegisterPage />*/} 
         {/*<LoginPage />*/} 
        <Cart />
      </main>
      <Footer />
    </div>
  );
};

export default App;