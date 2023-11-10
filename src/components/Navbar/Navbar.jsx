import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { handleUpClick } from '../../utils/handleUpClick';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleAboutClick = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectsClick = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h3>
          <Link to="/" onClick={handleUpClick}>
            M<sub>C</sub>
          </Link>
        </h3>
      </div>
      <ul className={showMenu ? 'nav-links mobile' : 'nav-links'}>
        <li onClick={handleUpClick}>Inicio</li>
        <li onClick={handleAboutClick}>Sobre mi</li>
        <li onClick={handleProjectsClick}>Proyectos</li>
        <li onClick={handleContactClick}>Contacto</li>
      </ul>
      <li>
        <Link to="/register" onClick={handleUpClick}>
          <button className="login-btn">Registrate</button>
        </Link>
      </li>
      <div className="menu-icon" onClick={handleMenuClick}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
