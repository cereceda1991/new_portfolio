import { DataApi } from '../../api/DataApi';
import PersonalInfo from './PersonalInfo';

import './About.css';
import CounterSection from '../../components/CounterSection/CounterSection';
import EducationInfo from '../../components/EducationInfo/EducationInfo';
import Timeline from '../../components/Timeline/Timeline';

const About = () => {
  const languageData = DataApi();

  if (!languageData) {
    return <div>Cargando datos...</div>;
  }

  const { title, subtitle, aboutInfo, education } = languageData.about;

  return (
    <main className="container__about">
      <PersonalInfo title={title} subtitle={subtitle} aboutInfo={aboutInfo} />
      <CounterSection />
      <EducationInfo
        title={title}
        subtitle={subtitle}
        educationInfo={education}
      />
      <Timeline />
    </main>
  );
};

export default About;
