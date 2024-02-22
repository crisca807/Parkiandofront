import React from 'react';

const LoginForm = ({ setError }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí deberías tener tu lógica de validación o llamada a la API para el inicio de sesión
    
    // Simulando una respuesta de error
    const isError = false; // Cambia esto según la lógica de validación o la respuesta de la API

    setError(isError);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Correo Electrónico:</label>
      <input type="text" id="email" name="email" required />

      <label htmlFor="password">Contraseña:</label>
      <input type="password" id="password" name="password" required />

      <div className="forgot-password">
        <a href="restablecer_contraseña.php">¿Olvidaste tu contraseña?</a>
      </div>

      <button type="submit" className="btn">Iniciar Sesión</button>
    </form>
  );
};

export default LoginForm;