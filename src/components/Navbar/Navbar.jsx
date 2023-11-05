import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h3>MC</h3>
        <p>Developer</p>
      </div>
      <ul className={showMenu ? "nav-links mobile" : "nav-links"}>
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
        <Link to="/login">
          <button className="login-btn">Iniciar Sesión</button>
        </Link>
      </li>

      <div className="menu-icon" onClick={handleMenuClick}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
