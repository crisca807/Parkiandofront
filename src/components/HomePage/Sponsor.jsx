import React from 'react';
import '../css/HomePage.css';
import parqueoImage from '../assets/parqueo.jpg'; // Importa la imagen correctamente

const Sponsor = () => {
  return (
    <section className="sponsor" id="sponsor">
      <div className="sponsor__main container">
        <article className="sponsor__texts">
          <h1 className="subtitle">Puedes ofrecer tu servicio con nosotros</h1>
          <p className="paragraph">Con Parkiando, no solo obtienes la comodidad de encontrar estacionamiento económico, seguro y disponible las 24 horas del día, sino que también tienes la emocionante oportunidad de ofrecer tu propio establecimiento para que otros se beneficien de tu espacio. Imagina compartir tu lugar con la creciente comunidad de Parkiando, donde conductores ávidos de comodidad y seguridad pueden aprovechar tu espacio y, al mismo tiempo, generar ingresos adicionales para ti. Únete a nosotros y descubre cómo Parkiando transforma no solo la forma en que estacionas, sino también la manera en que compartes y aprovechas tu lugar en la ciudad.</p>
          <a href="http://localhost/parkiando/no_inicio.php" className="sponsor__cta">Agrega tu parking</a>
        </article>
        <figure className="sponsor__figure">
          {/* Utiliza la variable parqueoImage como el src de la imagen */}
          <img src={parqueoImage} className="sponsor__img" alt="Parqueo" />
        </figure>
      </div>
    </section>
  );
};

export default Sponsor;
