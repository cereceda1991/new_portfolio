import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { useRef } from 'react';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import './SliderProjects.css';

const SliderProjects = ({ projects }) => {
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
          {projects.map((project) => (
            <section key={project.id} className="slider_card">
              <section className="card_content">
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  <img src={project.imagePath} alt="Blog" />
                </a>
                <div className="card_text">
                  <h4>{project.title}</h4>
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
