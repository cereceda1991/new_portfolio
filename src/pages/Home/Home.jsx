import Typewriter from 'typewriter-effect';

import { DataApi } from '../../api/DataApi';
import ButtonModern from '../../components/ButtonModern/ButtonModern';
import About from '../About/About';
import Contact from '../Contact/Contact';
import './Home.css';
import Projects from '../Projects/Projects';
import { useRef } from 'react';

const Home = () => {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const languageData = DataApi();

  if (!languageData) {
    return <div>Cargando datos...</div>;
  }

  // Accede a la información del idioma en tu componente
  const { welcome, title, typewriterStrings, description, buttonText } =
    languageData.home;

  return (
    <>
      <main className="container__home">
        <section className="home__info">
          <h4>{welcome}</h4>
          <h1>
            <span className="word">
              {title.word1.map((letter, index) => (
                <span key={index} className={letter.className}>
                  {letter.letter}
                </span>
              ))}
            </span>
            <span className="word">
              {title.word2.map((letter, index) => (
                <span key={index} className={letter.className}>
                  {letter.letter}
                </span>
              ))}
            </span>
            <span className="word">
              {title.word3.map((letter, index) => (
                <span key={index} className={letter.className}>
                  {letter.letter}
                </span>
              ))}
            </span>
          </h1>
          <h3>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                typeSpeed: 90,
                backSpeed: 90,
                strings: typewriterStrings,
              }}
            />
          </h3>
          <p>{description}</p>
          <h4 onClick={scrollToProjects}>
            <ButtonModern content={buttonText} />
          </h4>
        </section>
      </main>
      <About />
      <section ref={projectsRef} id="projects">
        <Projects />
      </section>
      <Contact />
    </>
  );
};

export default Home;
