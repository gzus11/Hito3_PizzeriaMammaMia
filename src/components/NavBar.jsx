const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
      <div className="container">
        <a className="navbar-brand" href="#">Pizzería Mamma Mia!</a>
        <div className="navbar-nav me-auto">
          <button className="btn btn-outline-light btn-sm mx-1">🍕 Home</button>
          {/* Aquí usarás lógica de JS para mostrar botones según el token */}
          {token ? (
            <>
              <button className="btn btn-outline-light btn-sm mx-1">🔓 Profile</button>
              <button className="btn btn-outline-light btn-sm mx-1">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light btn-sm mx-1">🔐 Login</button>
              <button className="btn btn-outline-light btn-sm mx-1">🔐 Register</button>
            </>
          )}
        </div>
        <div className="navbar-text">
          <button className="btn btn-outline-info btn-sm">🛒 Total: ${total.toLocaleString('es-CL')}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;