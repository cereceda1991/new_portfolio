import Slider from 'react-slick';
import { useRef } from 'react';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import shape from '../../assets/Shape.svg';

import './SliderTestimonial.css';

// eslint-disable-next-line react/prop-types
const SliderTestimonial = ({ testimonials }) => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
      <section className="testimonial__card">
        <Slider {...settings} ref={sliderRef}>
          {testimonials.map((testimonial) => (
            <section key={testimonial.id} className="testimonial_card">
              <section className="testimonial_content">
                <section className="testimonial_content-author">
                  <a
                    href={testimonial.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={testimonial.photoUrl} alt="profile" />
                  </a>
                </section>
                <section className="testimonial_content-testimonial">
                  <img src={shape} className="shape" alt="shape" />
                  <p>{testimonial.testimonial}</p>
                  <div className="testimonial__author">
                    <a
                      href={testimonial.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h5>{testimonial.name}</h5>
                    </a>
                    <img src={testimonial.country} alt="country" />
                  </div>
                  <p>{testimonial.position}</p>
                </section>
              </section>
            </section>
          ))}
        </Slider>
      </section>
      <section className="testimonial_buttons">
        <button className="row_testimonial-left" onClick={prevSlide}>
          <BsArrowLeft />
        </button>
        <button className="row_testimonial-right" onClick={nextSlide}>
          <BsArrowRight />
        </button>
      </section>
    </section>
  );
};

export default SliderTestimonial;
