/* eslint-disable react/prop-types */
const PersonalInfo = ({ name, aboutInfo }) => {
  return (
    <section className="info__personal">
      <h3>{name}</h3>
      <div className="aboutme__info">
        {aboutInfo.map((info, index) => (
          <p key={index}>{info}</p>
        ))}
      </div>
    </section>
  );
};

export default PersonalInfo;
