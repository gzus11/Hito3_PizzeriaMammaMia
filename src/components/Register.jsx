import { useState } from "react";

const RegisterPage = () => {
  // Estados para los inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Función para manejar el envío del formulario
  const validarDatos = (e) => {
    e.preventDefault();

    // Validaciones mínimas
    if (!email || !password || !confirmPassword) {
      alert("Todos los campos son obligatorios."); 
      return;
    }
    if (password.length < 6) {
      alert("El password debe tener al menos 6 caracteres."); 
      return;
    }
    if (password !== confirmPassword) {
      alert("El password y la confirmación deben ser iguales."); 
      return;
    }

    alert("¡Registro exitoso!");
  };

  return (
    <div className="container my-5" style={{ maxWidth: "500px" }}>
      <form className="formulario" onSubmit={validarDatos}>
        <h2>Register</h2>
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
        <div className="form-group mb-3">
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default RegisterPage;