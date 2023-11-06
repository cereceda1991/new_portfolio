import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { useRef } from 'react';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import './SliderProjects.css';

import image1 from '../../assets/Blog/1.png';
import image2 from '../../assets/Blog/2.png';
import image3 from '../../assets/Blog/3.png';
import image4 from '../../assets/Blog/4.png';
import image5 from '../../assets/Blog/5.png';

const projectData = [
  {
    id: 1,
    imagePath: image1,
    subtitle: 'Free Certify - Proyecto Código Abierto',
    link: 'https://free-certify.vercel.app/',
    content:
      'Free-Certify es un proyecto full stack desarrollado con la pila MERN. Se trata de un proyecto de código abierto en el que he estado trabajando como freelancer. Su objetivo principal es simplificar la generación masiva y gratuita de certificados.',
  },
  {
    id: 2,
    imagePath: image2,
    subtitle: 'Intedsur - Empresa de Servicios Eléctricos ',
    link: 'https://intedsur.vercel.app/',

    content:
      'Intedsur es un proyecto de desarrollo frontend en colaboración con un diseñador UI/UX. Se trata de un proyecto simple creado para un cliente específico, enfocado únicamente en la parte visual y la experiencia del usuario.',
  },
  {
    id: 3,
    imagePath: image3,
    subtitle: 'Inventra - Gestión Inteligente de Inventarios',
    link: 'https://inventra-pe.vercel.app/',

    content:
      'Inventra es un proyecto full stack desarrollado con la pila MERN. Su objetivo principal es simplificar y agilizar la gestión de inventarios. Esta solución integral abarca desde el almacenamiento de datos hasta la interfaz de usuario, permitiendo una gestión eficiente y detallada de inventarios.',
  },
  {
    id: 4,
    imagePath: image4,
    subtitle: 'CookMeal - Recetas de Cocina Generadas con IA',
    link: 'https://cookmeal.vercel.app/',

    content:
      'CookMeal es una aplicación que utiliza tecnologías como React, Tailwind y Next.js en el frontend, junto con MongoDB, Mongoose, Express y Node.js en el backend. Su enfoque se centra en generar recetas a través de la API de OpenAI, brindando una experiencia culinaria única y deliciosa.',
  },
  {
    id: 5,
    imagePath: image5,
    subtitle: 'Verbify - Plataforma Educativa de Inglés',
    link: 'https://verbify.vercel.app/',

    content:
      'Verbify es una plataforma educativa enfocada en cursos de inglés, reconocida por su enfoque en el aprendizaje interactivo. Utiliza tecnologías como React, Next.js y CSS en el frontend para proporcionar una experiencia de usuario fluida. En el backend, se emplean Node.js, Express y MongoDB para una gestión eficiente de datos y creación de API, garantizando un almacenamiento escalable.',
  },
];

const SliderProjects = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <section>
      <section className="cards_header">
        <button className="row_left" onClick={prevSlide}>
          <MdOutlineArrowBackIos />
        </button>
        <button className="row_right" onClick={nextSlide}>
          <MdOutlineArrowForwardIos />
        </button>
      </section>
      <section className="cards_container">
        <Slider {...settings} ref={sliderRef}>
          {projectData.map((project) => (
            <section key={project.id} className="slider_card">
              <section className="card_content">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img src={project.imagePath} alt="Blog" />
                </a>
                <div className="card_text">
                  <h4>{project.subtitle}</h4>
                  <p>{project.content}</p>
                </div>
              </section>
            </section>
          ))}
        </Slider>
      </section>
    </section>
  );
};

export default SliderProjects;
