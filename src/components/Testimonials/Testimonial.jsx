import { DataApi } from '../../api/DataApi';
import SliderTestimonial from '../Sliders/SliderTestimonial';

import './Testimonial.css';

const Testimonial = () => {
  const languageData = DataApi();

  if (!languageData) {
    return <div>Cargando datos...</div>;
  }

  const { title, subtitle, testimonials } = languageData.testimonial;

  return (
    <section className="container__testimonial">
      <h4>{title}</h4>
      <h3>{subtitle}</h3>
      <SliderTestimonial testimonials={testimonials} />
    </section>
  );
};

export default Testimonial;
