import './Blog.css';
import image1 from '../../assets/Blog/1.png';
import image2 from '../../assets/Blog/2.png';
import image3 from '../../assets/Blog/3.png';
import image4 from '../../assets/Blog/4.png';
import image5 from '../../assets/Blog/5.png';

import Cardblog from '../Cardblog/Cardblog';

const Blog = () => {
  return (
    <section className="container__popular">
      <h4>Proyectos</h4>
      <h3>Explora mis proyectos más recientes</h3>
      <section className="card_container">
        <Cardblog
          imagePath={image1}
          subtitle="Free Certify - Proyecto Código Abierto"
          content="Free-Certify es un proyecto full stack desarrollado con la pila MERN. Se trata de un proyecto de código abierto en el que he estado trabajando como freelancer. Su objetivo principal es simplificar la generación masiva y gratuita de certificados."
        />
        <Cardblog
          imagePath={image2}
          subtitle="Intedsur - Empresa de Servicios Eléctricos "
          content="Intedsur es un proyecto de desarrollo frontend en colaboración con un diseñador UI/UX. Se trata de un proyecto simple creado para un cliente específico, enfocado únicamente en la parte visual y la experiencia del usuario."
        />
        <Cardblog
          imagePath={image3}
          subtitle="Inventra - Gestión Inteligente de Inventarios"
          content="Inventra es un proyecto full stack desarrollado con la pila MERN. Su objetivo principal es simplificar y agilizar la gestión de inventarios. Esta solución integral abarca desde el almacenamiento de datos hasta la interfaz de usuario, permitiendo una gestión eficiente y detallada de inventarios."
        />
        <Cardblog
          imagePath={image4}
          subtitle="CookMeal - Recetas de Cocina Generadas con IA"
          content="CookMeal es una aplicación que utiliza tecnologías como React, Tailwind y Next.js en el frontend, junto con MongoDB, Mongoose, Express y Node.js en el backend. Su enfoque se centra en generar recetas a través de la API de OpenAI, brindando una experiencia culinaria única y deliciosa."
        />
        <Cardblog
          imagePath={image5}
          subtitle="Verbify - Plataforma Educativa de Inglés"
          content="Verbify es una plataforma educativa enfocada en cursos de inglés, reconocida por su enfoque en el aprendizaje interactivo. Utiliza tecnologías como React, Next.js y CSS en el frontend para proporcionar una experiencia de usuario fluida. En el backend, se emplean Node.js, Express y MongoDB para una gestión eficiente de datos y creación de API, garantizando un almacenamiento escalable."
        />
      </section>
    </section>
  );
};

export default Blog;
