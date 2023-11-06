import { FiSend } from 'react-icons/fi';

import './Subfooter.css';
import { Link } from 'react-router-dom';
const Subfooter = ({ copyRightText }) => {
  return (
    <footer className="container__footer">
      <section className="footer__row">
        <div className="footer__column double_width">
          <div className="footer__logo">
            <p>
              Mejoramos la vida de las personas y las relaciones humanas a
              través de nuestra dedicación a la excelencia. Creemos en la
              importancia de compartir conocimiento y reconocer logros. ¡Únete a
              nosotros y obtén actualizaciones, noticias y apoyo excepcionales!*
            </p>
            <p>
              Ingresa tu correo electrónico para recibir las últimas noticias,
              soporte, y para aprovechar al máximo nuestra plataforma.
            </p>
            <form>
              <input
                type="email"
                placeholder="Ingresa tu correo electrónico aquí"
              />
              <button type="submit">
                <FiSend />
              </button>
            </form>
          </div>
        </div>
        <div className="footer__column">
          <h4>Enlaces</h4>
          <ul>
            <li>Sobre mí</li>
            <li>Proyectos</li>
            <li>Galería</li>
            <li>Contacto</li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>Soporte</h4>
          <ul>
            <li>Documentación</li>
            <li>Foros</li>
            <li>Packs de Idioma</li>
            <li>Estado de Lanzamiento</li>
            <li>Opiniones</li>
          </ul>
        </div>
        <div className="footer__column double_width">
          <h4>Información de Contacto</h4>
          <p>Correo Electrónico: cereceda1991@gmail.com</p>
          <p>Contacto: +51 928 263 103</p>
          <p>
            <b>HORARIO DE ATENCIÓN</b>
          </p>
          <p>Lun - Vier: 9.00 am - 6.00 pm</p>
        </div>
      </section>
      <section className="footer__row-copyright">
        <p>{copyRightText}</p>
      </section>
    </footer>
  );
};

export default Subfooter;
