import React from 'react';
import twitterIcon from '../assets/twitter.svg'; // Importa la imagen de Twitter
import instagramIcon from '../assets/instagram.svg'; // Importa la imagen de Instagram
import youtubeIcon from '../assets/youtube.svg'; // Importa la imagen de YouTube
import '../css/HomePage.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <section className="footer__container container">
        <h2 className="subtitle">Contáctanos</h2>
        <ul className="footer__contact">
          <li className="footer__item">
            <a href="#" className="footer__link">
              <img src={twitterIcon} className="footer__img" alt="Twitter" />
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              <img src={instagramIcon} className="footer__img" alt="Instagram" />
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              <img src={youtubeIcon} className="footer__img" alt="YouTube" />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;

