import { useState } from 'react';
import { FaMapMarkedAlt, FaPhone, FaEnvelopeOpen } from 'react-icons/fa';
import './ContactForm.css';
import ButtonModern from '../ButtonModern/ButtonModern';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del formulario
    console.log(formData);
  };

  return (
    <main className="container_contactForm">
      <section className="container_contactForm-left">
        <div className="card_form">
          <FaMapMarkedAlt className="icon" />
          <div className="card-content">
            <h4>Ubicación</h4>
            <p>Comas, Lima, Perú</p>
          </div>
        </div>
        <div className="card_form">
          <FaPhone className="icon" />
          <div className="card-content">
            <h4>Hacer una llamada</h4>
            <p>+51 928 263 103</p>
          </div>
        </div>
        <div className="card_form">
          <FaEnvelopeOpen className="icon" />
          <div className="card-content">
            <h4>Enviar Correo</h4>
            <a href="mailto:cereceda1991@gmail.com">
              <p>cereceda1991@gmail.com</p>
            </a>
          </div>
        </div>
      </section>
      <section className="container_contactForm-right">
        <h5>Contacto</h5>
        <p>
          Si deseas obtener más información sobre mis proyectos y servicios, no
          dudes en contactarme utilizando el formulario de contacto o a través
          de mis redes sociales. Estoy disponible para responder a tus preguntas
          y brindarte la información que necesitas.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              pattern="[A-Za-z\s]+"
              title="Por favor, ingresa solo letras o espacios"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ingresa tu nombre"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingresa tu correo"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Ingresa tu mensaje...."
              required
            />
          </div>
          <ButtonModern type="submit" content="Enviar Mensaje" />
        </form>
      </section>
    </main>
  );
}

export default ContactForm;
