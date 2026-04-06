const Header = () => {
  return (
    <header className="header-container text-white text-center d-flex flex-column justify-content-center align-items-center" 
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1500&q=80")',
        height: '30vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <h1 className="display-4 fw-bold">¡Pizzería Mamma Mia!</h1>
      <p className="lead">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      <hr className="my-2 w-50 border-light" />
    </header>
  );
};

export default Header;