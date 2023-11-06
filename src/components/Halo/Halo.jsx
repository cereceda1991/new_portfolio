import {
  FaReact,
  FaAngular,
  FaVuejs,
  FaNode,
  FaPython,
  FaJava,
} from 'react-icons/fa';
import './Halo.css';

const Halo = () => {
  return (
    <section className="halo-container">
      <div className="icon-container">
        <FaReact className="icon react" />
      </div>
      <div className="icon-container">
        <FaAngular className="icon angular" />
      </div>
      <div className="icon-container">
        <FaVuejs className="icon vue" />
      </div>
      <div className="icon-container">
        <FaNode className="icon node" />
      </div>
      <div className="icon-container">
        <FaPython className="icon python" />
      </div>
      <div className="icon-container">
        <FaJava className="icon java" />
      </div>
    </section>
  );
};

export default Halo;
