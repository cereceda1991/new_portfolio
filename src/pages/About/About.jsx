import { DataApi } from '../../api/DataApi';
import PersonalInfo from './PersonalInfo';

import './About.css';
import CounterSection from '../../components/CounterSection/CounterSection';
import EducationInfo from '../../components/EducationInfo/EducationInfo';

const About = () => {
  const languageData = DataApi();

  if (!languageData) {
    return <div>Cargando datos...</div>;
  }

  const { title, subtitle, aboutInfo, education, counterData } =
    languageData.about;

  return (
    <main className="container__about">
      <PersonalInfo title={title} subtitle={subtitle} aboutInfo={aboutInfo} />
      <CounterSection counterData={counterData} />
      <EducationInfo
        title={title}
        subtitle={subtitle}
        educationInfo={education}
      />
    </main>
  );
};

export default About;
