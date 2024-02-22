import React, { useState } from 'react';
import '../css/LoginPage.css';
import TitleContainer from './TitleContainer';
import LoginForm from './LoginForm';
import ErrorMessage from './ErrorMessage';

const LoginPage = () => {
  const [error, setError] = useState(false);

  return (
    <div className="container">
      <TitleContainer />
      {error && <ErrorMessage />} {/* Renderiza ErrorMessage solo si hay error */}
      <LoginForm setError={setError} />
      <p>¿No tienes una cuenta? <a href="formulario.php">Regístrate</a></p>
    </div>
  );
};

export default LoginPage;