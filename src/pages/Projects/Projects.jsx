import { DataApi } from '../../api/DataApi';
import SliderProjects from '../../components/Sliders/SliderProjects';
import './Projects.css';

const Projects = () => {
  const languageData = DataApi();

  if (!languageData) {
    return <div>Cargando datos...</div>;
  }

  const { title, subtitle, projects } = languageData.project;

  return (
    <section className="container__projects">
      <h4>{title}</h4>
      <h3>{subtitle}</h3>
      <SliderProjects projects={projects} />
    </section>
  );
};

export default Projects;
