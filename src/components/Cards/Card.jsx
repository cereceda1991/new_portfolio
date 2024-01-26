import { CardPropTypes } from '../../utils/prop-types';
import ButtonModern from '../ButtonModern/ButtonModern';
import './Card.css';

const Card = ({ title, content, imageUrl, icon, buttonText }) => {
  const handleContactClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="service_card">
      <div className="service_card-header">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="service_card-content">
        <div className="service_card-icon">{icon}</div>
        <h3 className="service_card-title">{title}</h3>
        <p>{content}</p>
        <h5 onClick={handleContactClick}>
          <ButtonModern content={buttonText} />
        </h5>
      </div>
    </div>
  );
};

Card.propTypes = CardPropTypes;

export default Card;
