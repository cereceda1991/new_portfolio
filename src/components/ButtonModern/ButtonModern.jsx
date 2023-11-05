import "./ButttonModern.css";

// eslint-disable-next-line react/prop-types
const ButtonModern = ({ content }) => {
  return (
    <button className="buttton__modern" type="submit">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {content}
    </button>
  );
};

export default ButtonModern;
