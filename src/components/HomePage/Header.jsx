import React from 'react';
import logo from '../assets/loguito.svg'; // Ajusta la ruta según tu estructura de proyecto
import menuIcon from '../assets/menu.svg'; // Ajusta la ruta según tu estructura de proyecto
import '../css/styles.css';
const Header = () => {
  return (
    <header className="hero">
      <nav className="nav container container--hero">
        <img src={logo} className="nav__logo" alt="Logo" />
        <ul className="nav__list">
          <li className="nav__item">
            <a href="http://localhost/parkiando/iniciar_sesion.php" className="nav__link">iniciar sesion</a>
          </li>
          <li className="nav__item">
            <a href="#nosotros" className="nav__link">Sobre Nosotros</a>
          </li>
          <li className="nav__item">
            <a href="http://localhost/parkiando/no_inicio.php" className="nav__link">busca parking</a>
          </li>
          <li className="nav__item">
            <a href="no_inicio.php" className="nav__link">Ofrecer parking</a>
          </li>
          <li className="nav__item">
            <a href="#footer" className="nav__link">contactanos</a>
          </li>
        </ul>
        <img src={menuIcon} className="nav__menu" alt="Menu" />
      </nav>
      {/* Sección del héroe */}
    </header>
  );
};

export default Header;
