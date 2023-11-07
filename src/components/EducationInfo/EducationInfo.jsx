import photo from '../../assets/Home/code_handler.svg';
import './EducationInfo.css';

const EducationInfo = ({ educationInfo }) => {
  console.log(educationInfo);

  return (
    <section className="info__education">
      <div className="info__education--content">
        <h4 className="info__education--title">{educationInfo.title}</h4>
        <h3>{educationInfo.subtitle}</h3>
        <div className="info__education--details">
          {educationInfo.institutions.map((info, index) => (
            <div key={index}>
              <a href={info.link} target="_blank" rel="noopener noreferrer">
                <img className="institution__logo" src={info.logo} alt="logo" />
              </a>
              <p>{info.degree}</p>
              <p>{info.date}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="info__education--image">
        <img src={photo} alt="about_photo" />
      </div>
    </section>
  );
};

export default EducationInfo;
