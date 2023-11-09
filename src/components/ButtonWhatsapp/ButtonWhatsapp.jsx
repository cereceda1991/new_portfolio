import Whatsapp from '../../assets/Home/icon-whatsapp.svg';
import './ButtonWhatsapp.css';

const ButtonWhatsapp = () => {
  return (
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
  );
};

export default ButtonWhatsapp;
