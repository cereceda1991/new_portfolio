import { Link } from 'react-router-dom';

// Importaciones de componentes y estilos
import Typewriter from 'typewriter-effect';
import './Home.css';

import { DataApi } from '../../api/DataApi';
import ButtonModern from '../../components/ButtonModern/ButtonModern';
import About from '../About/About';
import CounterSection from '../../components/CounterSection/CounterSection';
import Blog from '../../components/Blog/Blog';

const Home = () => {
  const handleUpClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <h5>{welcome}</h5>
          <h2>
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
          </h2>

          <h4>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                typeSpeed: 90,
                backSpeed: 90,
                strings: typewriterStrings,
              }}
            />
          </h4>
          <p>{description}</p>
          <h4>
            <Link to="/projects" onClick={handleUpClick}>
              <ButtonModern content={buttonText} />
            </Link>
          </h4>
        </section>
      </main>
      <About />
      <CounterSection />
      <Blog />
    </>
  );
};

export default Home;
