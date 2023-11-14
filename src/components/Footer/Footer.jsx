import { DataApi } from '../../api/DataApi';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import ButtonWhatsapp from '../ButtonWhatsapp/ButtonWhatsapp';
import { handleUpClick } from '../../utils/handleUpClick';

import './Footer.css';

const Footer = () => {
  const languageData = DataApi();

  if (!languageData) {
    return <div>Cargando datos...</div>;
  }

  const { slogan, copyRightText, footerColumns } = languageData.footer;

  const handleFooterItemClick = (sectionId) => {
    // Hacer scroll hacia la sección correspondiente
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="container__footer">
        <div className="footer__columns">
          <div className="logo">
            <h3>
              <Link to="/" onClick={handleUpClick}>
                M<sub>C</sub>
              </Link>
            </h3>
            <h5>{slogan}</h5>
          </div>
          {footerColumns.map((column, index) => (
            <div key={index} className="footer__column">
              <h5>{column.title}</h5>
              <ul>
                {column.links
                  ? column.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        {link.link.startsWith('http') ? (
                          <a
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.text}
                          </a>
                        ) : (
                          <Link
                            to={``}
                            onClick={() => handleFooterItemClick(link.link)}
                          >
                            {link.text}
                          </Link>
                        )}
                      </li>
                    ))
                  : column.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__row-copyright">
          <p>{copyRightText}</p>
        </div>
      </footer>
      <ButtonWhatsapp />
      <Sidebar />
    </>
  );
};

export default Footer;
