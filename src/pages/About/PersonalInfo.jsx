import photo from '../../assets/Home/foto-home.webp';
import Halo from '../../components/Halo/Halo';
import './PersonalInfo.css';

// eslint-disable-next-line react/prop-types
const PersonalInfo = ({ title, subtitle, aboutInfo }) => {
  return (
    <section className="info__personal">
      <div className="info__personal--image">
        <Halo />
        <img src={photo} alt="about_photo" />
      </div>
      <div className="info__personal--content">
        <h4 className="info__personal--title">{title}</h4>
        <h3>{subtitle}</h3>
        <div className="info__personal--details">
          {aboutInfo.map((info, index) => (
            <p key={index} className="info__personal--paragraph">
              {info}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
