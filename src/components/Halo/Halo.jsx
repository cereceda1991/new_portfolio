import { BiLogoMongodb } from 'react-icons/bi';
import { GrMysql } from 'react-icons/gr';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa6';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { SiPostgresql } from 'react-icons/si';
import { FaLaravel } from 'react-icons/fa';

import './Halo.css';

const Halo = () => {
  return (
    <section className="halo-container">
      <div className="icon-container">
        <FaReact className="icon react" />
      </div>
      <div className="icon-container">
        <FaNodeJs className="icon node" />
      </div>
      <div className="icon-container">
        <FaLaravel className="icon laravel" />
      </div>
      <div className="icon-container">
        <BiLogoMongodb className="icon mongo" />
      </div>
      <div className="icon-container">
        <GrMysql className="icon mysql" />
      </div>
      <div className="icon-container">
        <SiPostgresql className="icon postgres" />
      </div>
      <div className="icon-container">
        <FaGitAlt className="icon git" />
      </div>
      <div className="icon-container">
        <BiLogoTailwindCss className="icon tailwind" />
      </div>
    </section>
  );
};

export default Halo;
