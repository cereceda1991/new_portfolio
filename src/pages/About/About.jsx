import './About.css';

import { DataApi } from '../../api/DataApi';
import PersonalInfo from './PersonalInfo';

const About = () => {
  const languageData = DataApi();

  if (!languageData) {
    return <div>Cargando datos...</div>;
  }

  const { name, aboutInfo } = languageData.about;

  return (
    <main className="container__about">
      <PersonalInfo name={name} aboutInfo={aboutInfo} />
    </main>
  );
};

export default About;
