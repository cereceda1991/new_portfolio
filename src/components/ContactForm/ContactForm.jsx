import { useState } from 'react';
import { FaMapMarkedAlt, FaPhone, FaEnvelopeOpen } from 'react-icons/fa';
import './ContactForm.css';
import ButtonModern from '../ButtonModern/ButtonModern';
import { ContactFormPropTypes } from '../../utils/prop-types';
import { sendMail } from '../../api/services/send-mail/sendMail';
import showDialog from '../../utils/showDialog';

const ContactForm = ({ cards, contactInfo, form, contentDialog }) => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await sendMail(formData);

      if (response.status === 'success') {
        await showDialog(
          contentDialog.title,
          contentDialog.text,
          contentDialog.icon,
          contentDialog.confirmButtonColor,
          contentDialog.confirmButtonText,
          contentDialog.cancelButtonText
        );
      }
      // Restablecer los campos del formulario después del envío exitoso
      setFormData({
        fullname: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending mail:', error);

      if (error.errors) {
        setErrors(error.errors);
      } else {
        setErrors({
          general: error.message || 'Error en la solicitud',
        });
      }
    }
  };

  const iconComponents = {
    FaMapMarkedAlt: <FaMapMarkedAlt size={30} />,
    FaPhone: <FaPhone size={30} />,
    FaEnvelopeOpen: <FaEnvelopeOpen size={30} />,
  };

  return (
    <main className="container_contactForm">
      <section className="container_contactForm-left">
        {cards.map((card) => (
          <div key={card.id} className="card_form">
            {iconComponents[card.icon]}
            <div className="card-content">
              <h4>{card.title}</h4>
              <p>{card.content}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="container_contactForm-right">
        <h5>{contactInfo.title}</h5>
        <p>{contactInfo.content}</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              pattern="[A-Za-z\s]+"
              title={form.inputName.title}
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder={form.inputName.placeholder}
            />
            {errors.fullname && (
              <div className="error-message">{errors.fullname[0]}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={form.inputEmail.placeholder}
            />
            {errors.email && (
              <div className="error-message">{errors.email[0]}</div>
            )}
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={form.inputMessage.placeholder}
            />
            {errors.message && (
              <div className="error-message">{errors.message[0]}</div>
            )}
          </div>
          <ButtonModern type="submit" content={form.submitButton} />
          {errors.general && (
            <div className="error-message">{errors.general}</div>
          )}
        </form>
      </section>
    </main>
  );
};

ContactForm.propTypes = ContactFormPropTypes;

export default ContactForm;
