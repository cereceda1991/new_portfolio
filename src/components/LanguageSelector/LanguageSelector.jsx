import { useDispatch } from 'react-redux';
import './LanguageSelector.css';
import data_en from '../../languages/data_en.json';
import data_es from '../../languages/data_es.json';
import { BiWorld } from 'react-icons/bi';
import { IoLanguageSharp } from 'react-icons/io5';
import { setLanguageData } from '../../store/languageSlice';

const LanguageSelector = () => {
  const dispatch = useDispatch();

  const handleLanguageChange = (language) => {
    let data;

    switch (language) {
      case 'en':
        data = data_en;
        break;
      case 'es':
        data = data_es;
        break;
      default:
        data = null;
        break;
    }

    if (data) {
      dispatch(setLanguageData(data));
    }
  };

  return (
    <div className="language__selector">
      <div className="language__dropdown">
        <BiWorld />
        <IoLanguageSharp />
        <select
          className="language__select"
          onChange={(event) => handleLanguageChange(event.target.value)}
        >
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>
    </div>
  );
};

export default LanguageSelector;
