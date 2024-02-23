import React from 'react';
import '../css/HomePage.css';
import loguito from '../assets/loguito.png';

const About = () => {
  return (
    <section className="about" id="nosotros">
      <article className="about__container container">
        <figure className="about__figure">
          <img src={loguito} className="about__img" alt="Loguito" />
        </figure>
        <div className="about__texts">
          <h2 className="subtitle">¡SOMOS PARKIANDO!</h2>
          <p className="paragraph">Imagina poder acceder a un estacionamiento sin estrés, con solo unos pocos toques en tu teléfono. Con Parkiando, esa es precisamente la experiencia que te ofrecemos. Nuestra plataforma te brinda la libertad de explorar en tiempo real la disponibilidad de espacios de estacionamiento en tu área, sin dar vueltas inútiles. No más ansiedad por encontrar un lugar adecuado.</p>
        </div>
      </article>
    </section>
  );
};

export default About;