import React from 'react';
import '../css/HomePage.css';
import precioJustoImage from '../assets/preciojusto.png';
import todoElTiempoImage from '../assets/todoeltiempo.png';
import seguroImage from '../assets/seguro.png';

const Learn = () => {
  return (
    <section className="learn container" id="aprender">
      <h2 className="subtitle">¿Qué encontrarás en Parkiando?</h2>

      <div className="learn__articles">

        <article className="learn__article">

          <img src={precioJustoImage} className="learn__img" alt="Precio Justo" />
          <h2 className="learn__title">Económico</h2>
          <p className="paragraph">Nuestras tarifas nunca varían, tendrás la confianza de reservar al mismo precio.</p>

        </article>

        <article className="learn__article">

          <img src={todoElTiempoImage} className="learn__img" alt="Todo el Tiempo" />
          <h2 className="learn__title">¡Estamos las 24 horas!</h2>
          <p className="paragraph">Cada vez que necesites realizar una reservación, estaremos disponibles para ti.</p>

        </article>

        <article className="learn__article">

          <img src={seguroImage} className="learn__img" alt="Seguro" />
          <h2 className="learn__title">¡Seguro!</h2>
          <p className="paragraph">Tus datos siempre estarán seguros ante cualquier establecimiento.</p>

        </article>

      </div>
    </section>
  );
};

export default Learn;
