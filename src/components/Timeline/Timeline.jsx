import { Chrono } from 'react-chrono';
import './Timeline.css';

const data = [
  {
    title: 'Desarrollo del Sistema de Gestión de E-Commerce',
    cardTitle: 'Desarrollador Full Stack',
    cardDetailedText:
      'Dirigí el equipo en el desarrollo de un sistema de gestión de comercio electrónico utilizando React, Node.js y MongoDB. El proyecto aumentó las ventas en un 40% en el primer trimestre.',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://ejemplo.com/imagen_proyecto1.jpg',
      },
    },
  },
  {
    title: 'Contribuciones a Proyecto Open Source',
    cardTitle: 'Desarrollador Colaborador',
    cardDetailedText:
      'Realicé contribuciones significativas al proyecto de código abierto XYZ, implementando nuevas funcionalidades y corrigiendo errores críticos. Mis contribuciones fueron integradas en la versión principal del proyecto.',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://ejemplo.com/imagen_proyecto2.jpg',
      },
    },
  },
  {
    title: 'Certificación en Desarrollo Web Avanzado',
    cardTitle: 'Desarrollador Full Stack Certificado',
    cardDetailedText:
      'Obtuve la certificación en Desarrollo Web Avanzado, destacando conocimientos en tecnologías como React, Express, y bases de datos NoSQL.btuve la certificación en Desarrollo Web Avanzado, destacando conocimientos en tecnologías como React, Express, y bases de datos NoSQL',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://ejemplo.com/certificado.jpg',
      },
    },
  },
];

const Timeline = () => {
  return (
    <div className="timeline__container">
      <Chrono
        items={data}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: '#ef6d58',
          secondary: '#333',
          cardBgColor: 'transparent',
          titleColor: '#fff7',
          cardTitleColor: '#ef6d58',
          titleColorActive: '#fff',
          cardSubtitleColor: 'white',
          cardDetailsColor: 'white',
          cardMediaBgColor: 'red',
        }}
        cardHeight={300}
        mediaHeight={150}
        contentDetailsHeight={80}
        readMore={true}
        timelinePointShape="square"
        timelinePointDimension={30}
        slideShow
        slideItemDuration={5000}
        navigatorPosition="top"
        navigatorMarginTop={20}
      />
    </div>
  );
};

export default Timeline;
