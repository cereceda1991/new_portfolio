import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h3>
          <Link to="/">
            M<sub>C</sub>
          </Link>
        </h3>
      </div>
      <ul className={showMenu ? 'nav-links mobile' : 'nav-links'}>
        <li>
          <Link to="/">Inicio </Link>
        </li>
        <li>
          <Link to="/about">Sobre mi </Link>
        </li>
        <li>
          <Link to="/projects">Proyectos </Link>
        </li>
        <li>
          <Link to="/contact">Contacto </Link>
        </li>
      </ul>
      <li>
        <Link to="/register">
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
