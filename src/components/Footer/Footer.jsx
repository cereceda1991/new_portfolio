import './Footer.css';

import { DataApi } from '../../api/DataApi';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import ButtonWhatsapp from '../ButtonWhatsapp/ButtonWhatsapp';
import { handleUpClick } from '../../utils/handleUpClick';

const Footer = () => {
  const languageData = DataApi();

  if (!languageData) {
    return <div>Cargando datos...</div>;
  }

  const { copyRightText } = languageData.footer;

  return (
    <>
      <footer className="container__footer">
        <div className="footer__columns">
          <div className="logo">
            <h3>
              <Link to="/" onClick={handleUpClick}>
                M<sub>C</sub>
              </Link>
            </h3>
            <h5>Creando experiencias digitales</h5>
          </div>
          <div className="footer__column">
            <h5>Enlaces del Sitio</h5>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Sobre mí</Link>
              </li>
              <li>
                <Link to="/projects">Proyectos</Link>
              </li>
              <li>
                <Link to="/gallery">Galería</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h5>Recursos Gratuitos</h5>
            <ul>
              <li>Imágenes</li>
              <li>Iconos</li>
              <li>Diseños en Figma</li>
              <li>Generadores con IA</li>
            </ul>
          </div>
          <div className="footer__column">
            <h5>Información de Contacto</h5>
            <ul>
              <li>Correo electrónico: cereceda1991@gmail.com</li>
              <li>Celular: +51 928 263 103</li>
              <li>
                <b>HORARIO DE ATENCIÓN</b>
              </li>
              <li>Lun - Vie: 9.00 am - 6.00 pm</li>
            </ul>
          </div>
        </div>
        <div className="footer__row-copyright">
          <p>{copyRightText}</p>
        </div>
      </footer>
      <ButtonWhatsapp />
      <Sidebar />
    </>
  );
};

export default Footer;
