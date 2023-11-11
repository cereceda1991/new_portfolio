import { useState } from 'react';
import { FaMapMarkedAlt, FaPhone, FaEnvelopeOpen } from 'react-icons/fa';
import './ContactForm.css';
import ButtonModern from '../ButtonModern/ButtonModern';
import { ContactFormPropTypes } from '../../utils/prop-types';

const ContactForm = ({ cards, contactInfo, form }) => {
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
    console.log(formData);
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
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={form.inputName.placeholder}
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
              placeholder={form.inputEmail.placeholder}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={form.inputMessage.placeholder}
              required
            />
          </div>
          <ButtonModern type="submit" content={form.submitButton} />
        </form>
      </section>
    </main>
  );
};

ContactForm.propTypes = ContactFormPropTypes;

export default ContactForm;
