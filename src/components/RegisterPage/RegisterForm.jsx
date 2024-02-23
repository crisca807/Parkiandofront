import React from 'react';
import '../css/RegisterPage.css';

const RegisterForm = () => {
  return (
    <form method="POST" action="agregar_usuario.php">
      <label htmlFor="Nombre">Nombre:</label>
      <input type="text" name="Nombre" placeholder="Ingrese su nombre" required />

      <label htmlFor="Apellido">Apellido:</label>
      <input type="text" name="Apellido" placeholder="Ingrese su apellido" required />

      <label htmlFor="CorreoElectronico">Correo Electrónico:</label>
      <input type="email" name="CorreoElectronico" placeholder="Ingrese su correo electrónico" required />

      <label htmlFor="Contraseña">Contraseña:</label>
      <input type="password" name="Contraseña" placeholder="Ingrese la contraseña" required />

      <label>Tipo de Usuario:</label>
      <input type="radio" name="TipoUsuario" value="cliente" checked /> Cliente
      <input type="radio" name="TipoUsuario" value="administrador" /> Administrador

      <input type="submit" value="Registrar Usuario" />
    </form>
  );
};

export default RegisterForm;