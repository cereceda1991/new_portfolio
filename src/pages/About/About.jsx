import { DataApi } from '../../api/DataApi';
import PersonalInfo from './PersonalInfo';

import './About.css';

const About = () => {
  const languageData = DataApi();

  if (!languageData) {
    return <div>Cargando datos...</div>;
  }

  const { title, subtitle, aboutInfo } = languageData.about;

  return (
    <main className="container__about">
      <PersonalInfo title={title} subtitle={subtitle} aboutInfo={aboutInfo} />
    </main>
  );
};

export default About;
