import Typewriter from 'typewriter-effect';

import { DataApi } from '../../api/DataApi';
import ButtonModern from '../../components/ButtonModern/ButtonModern';
import About from '../About/About';
import Contact from '../Contact/Contact';
import './Home.css';
import Projects from '../Projects/Projects';
import { useRef } from 'react';
import Testimonial from '../../components/Testimonials/Testimonial';
import Services from '../Services/Services';

const Home = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const testimonialRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
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
        <section className="home__info" id="home">
          <h4>{welcome}</h4>
          <h1>
            <span className="section__name">
              {title.word1.map((letter, index) => (
                <span key={index} className="letter__name">
                  {letter.letter}
                </span>
              ))}
            </span>
            <span className="section__name">
              {title.word2.map((letter, index) => (
                <span key={index} className="letter__name">
                  {letter.letter}
                </span>
              ))}
            </span>
            <span className="section__name">
              {title.word3.map((letter, index) => (
                <span key={index} className="letter__name">
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
          <h5 onClick={scrollToContact}>
            <ButtonModern content={buttonText} />
          </h5>
        </section>
      </main>
      <section ref={aboutRef} id="about">
        <About />
      </section>
      <section ref={servicesRef} id="services">
        <Services />
      </section>
      <section ref={projectsRef} id="projects">
        <Projects />
      </section>
      <section ref={testimonialRef} id="testimonials">
        <Testimonial />
      </section>
      <section ref={contactRef} id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
