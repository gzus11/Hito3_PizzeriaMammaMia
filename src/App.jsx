import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
//import Home from "./components/Home";
//import RegisterPage from "./components/Register";
import LoginPage from "./components/Login";

const App = () => {
  return (
    <div>
      <Navbar />
      {/*<Home /> */}
      {/*Se puedes ir intercambiando estos dos: RegisterPage y LoginPage para probarlos */}
      {/*<RegisterPage />*/} 
      <LoginPage />
      <Footer />
    </div>
  );
};

export default App;