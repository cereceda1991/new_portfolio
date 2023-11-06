import SliderProjects from '../../components/Projects/SliderProjects';
import './Projects.css';

const Projects = () => {
  return (
    <section className="container__projects">
      <h4>Proyectos</h4>
      <h3>Explora mis proyectos más recientes</h3>
      <SliderProjects />
    </section>
  );
};

export default Projects;
