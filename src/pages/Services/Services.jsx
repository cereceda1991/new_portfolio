import { DataApi } from '../../api/DataApi';
import ServicesCard from '../../components/Cards/ServicesCard';
import SliderServices from '../../components/Sliders/SliderServices';
import './Services.css';

const Services = () => {
  const languageData = DataApi();

  if (!languageData) {
    return <div>Cargando datos...</div>;
  }

  const { title, subtitle, services } = languageData.service;

  return (
    <section className="container__services">
      <h4>{title}</h4>
      <h3>{subtitle}</h3>
      <ServicesCard services={services} />
    </section>
  );
};

export default Services;
