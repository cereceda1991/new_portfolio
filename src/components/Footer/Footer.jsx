import { Link } from 'react-router-dom';
import Whatsapp from '../../assets/Home/icon-whatsapp.svg';
import './ButtonWsp.css';
import './Footer.css';

import { DataApi } from '../../api/DataApi';
import Sidebar from '../Sidebar/Sidebar';
import Subfooter from './Subfooter';

const Footer = () => {
  const languageData = DataApi();

  if (!languageData) {
    return <div>Cargando datos...</div>;
  }

  const { copyRightText } = languageData.footer;

  return (
    <>
      <Subfooter copyRightText={copyRightText} />
      <footer className="container__footer">
        <section className="button__whatsApp">
          <a
            href="https://wa.me/51928263103?text=Hola%20Max,%20vi%20tu%20trabajo%20y%20me%20gustar%C3%ADa%20saber%20mas%20sobre%20ti."
            className="btn__whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Whatsapp} alt="Contacto por WhatsApp" />
          </a>
        </section>
        <Sidebar />
      </footer>
    </>
  );
};

export default Footer;
