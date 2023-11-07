import { FiSend } from 'react-icons/fi';
import './Subfooter.css';

const Subfooter = ({ copyRightText }) => {
  return (
    <footer className="container__footer">
      <section className="footer__row">
        <div className="footer__column double_width">
          <div className="footer__logo">
            <p>
              ¡Únete a nuestra comunidad y mantente informado! Introduce tu
              correo electrónico para acceder a las últimas noticias, recibir
              soporte y ser el primero en conocer nuestras últimas
              publicaciones. Mantente al día con las últimas novedades para
              descubrir contenido exclusivo y oportunidades especiales. ¡No te
              pierdas nada, suscríbete hoy!
            </p>
            <form>
              <input
                type="email"
                placeholder="Ingresa tu correo electrónico aquí"
                required
              />
              <button type="submit">
                <FiSend />
              </button>
            </form>
          </div>
        </div>
        <div className="footer__column">
          <h4>Enlaces del Sitio</h4>
          <ul>
            <li>Sobre mí</li>
            <li>Proyectos</li>
            <li>Galería</li>
            <li>Contacto</li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>Recursos</h4>
          <ul>
            <li>Imagenes</li>
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
