import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { handleUpClick } from '../../utils/handleUpClick';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { DataApi } from '../../api/DataApi';

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
        <li onClick={handleUpClick}>{links[0].text}</li>
        <li onClick={handleAboutClick}>{links[1].text}</li>
        <li onClick={handleProjectsClick}>{links[2].text}</li>
        <li onClick={handleContactClick}>{links[3].text}</li>
      </ul>
      <LanguageSelector />
      <div className="menu-icon" onClick={handleMenuClick}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
