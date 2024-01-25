import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { useRef } from 'react';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import './SliderProjects.css';

const SliderServices = ({ services }) => {
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

  const handleContactClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
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
          {services.map((service) => (
            <section key={service.id} className="slider_card">
              <section className="card_content">
                <a href={service.demoUrl} target="_blank" rel="noreferrer">
                  <img src={service.imagePath} alt="Blog" />
                </a>
                <div className="card_text">
                  <h4>{service.title}</h4>
                  <p>{service.content}</p>
                </div>
                <button
                  className="buttton__modern"
                  onClick={handleContactClick}
                >
                  {service.buttonText}
                </button>
              </section>
            </section>
          ))}
        </Slider>
      </section>
    </section>
  );
};

export default SliderServices;
