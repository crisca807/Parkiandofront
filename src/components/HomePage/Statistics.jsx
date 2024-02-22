import React from 'react';
import '../css/styles.css';

const Statistics = () => {
  return (
    <section className="statistics">
      <div className="statistics__container container">
        <article className="statistics__item">
          <h3 className="statistics__title">Con nosotros</h3>
          <p className="paragraph">Tu Economía y Seguridad en un Solo Lugar</p>
        </article>

        <article className="statistics__item">
          <h3 className="statistics__title">Confianza</h3>
          <p className="paragraph">Comodidad en Cualquier Momento del Día</p>
        </article>

        <article className="statistics__item">
          <h3 className="statistics__title">Seguro</h3>
          <p className="paragraph">Tu Refugio Seguro para Estacionar</p>
        </article>

        <a href="http://localhost/parkiando/formulario.php" className="statistics__cta">Ingresa Ahora</a>
      </div>
    </section>
  );
};

export default Statistics;
