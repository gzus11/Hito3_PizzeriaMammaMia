import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validarLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Todos los campos son obligatorios."); 
      return;
    }
    if (password.length < 6) {
      alert("El password debe tener al menos 6 caracteres."); 
    } else {
      alert("Login exitoso!"); 
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: "500px" }}>
      <form onSubmit={validarLogin}>
        <h2>Login</h2>
        <div className="form-group mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;