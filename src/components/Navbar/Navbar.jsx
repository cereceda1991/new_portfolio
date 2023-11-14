import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { handleUpClick } from '../../utils/handleUpClick';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { DataApi } from '../../api/DataApi';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    // Solo cerrar el menú en dispositivos móviles
    if (window.innerWidth <= 768) {
      setShowMenu(!showMenu);
    }
  };

  const executeFunctionAndToggleMenu = (func) => {
    func();
    handleMenuClick();
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

  const languageData = DataApi();

  if (!languageData) {
    return <div>Cargando datos...</div>;
  }

  const { links } = languageData.navbar;

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
        <li onClick={() => executeFunctionAndToggleMenu(handleUpClick)}>
          {links[0].text}
        </li>
        <li onClick={() => executeFunctionAndToggleMenu(handleAboutClick)}>
          {links[1].text}
        </li>
        <li onClick={() => executeFunctionAndToggleMenu(handleProjectsClick)}>
          {links[2].text}
        </li>
        <li onClick={() => executeFunctionAndToggleMenu(handleContactClick)}>
          {links[3].text}
        </li>
      </ul>
      <LanguageSelector />
      <div className="menu-icon" onClick={handleMenuClick}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
