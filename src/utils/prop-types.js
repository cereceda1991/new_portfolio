import PropTypes from 'prop-types';

export const CounterPropTypes = {
  initialValue: PropTypes.number.isRequired,
  incrementValue: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

export const ContactFormPropTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  contactInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    inputName: PropTypes.shape({
      title: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }).isRequired,
    inputEmail: PropTypes.shape({
      placeholder: PropTypes.string.isRequired,
    }).isRequired,
    inputMessage: PropTypes.shape({
      placeholder: PropTypes.string.isRequired,
    }).isRequired,
    submitButton: PropTypes.string.isRequired,
  }).isRequired,
};

export const CardPropTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};
