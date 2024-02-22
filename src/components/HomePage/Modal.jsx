import React from 'react';
import '../css/styles.css';

const Modal = () => {
  return (
    <section className="modal">
      <div className="modal__container">
        <article className="modal__texts">
          <h2 className="modal__title">¿Quieres registrar tu establecimiento para ofrecerlo al público?</h2>
          <p className="modal__paragraph">¿Deseas ofrecer tu servicio parqueadero y no sabes donde?, ¡estás en el lugar correcto! con Parkiando puedes registrarte y ofrecer la mejor experiencia posible . <span className="modal__messages">¡Unete a nuestra familia!
          </span></p>
          <a href="http://localhost/parkiando/formulario.php" className="modal__cta">registrate</a>
        </article>
        <figure className="modal__figure">
          <img src="./assets/promo.svg" className="modal__hostinger" alt="Promo" />
        </figure>
        <button className="modal__close">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "#FFF"}}>
            <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Modal;
