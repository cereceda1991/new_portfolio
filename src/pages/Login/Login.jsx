import { useState } from 'react';
import image_register from '../../assets/Home/code_handler.svg';
import { Link } from 'react-router-dom';

import './Login.css';
import { handleUpClick } from '../../utils/handleUpClick';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
  };

  return (
    <main className="container__register">
      <section className="sub__container-login">
        <div className="register__right">
          <img src={image_register} alt="Imagen de registro" />
        </div>
        <section className="register__left">
          <form className="register__form-form" onSubmit={handleSubmit}>
            <label htmlFor="email" className="register__label">
              Correo electrónico
            </label>
            <input
              id="email"
              className="register__input"
              type="email"
              placeholder="Ingrese su correo electrónico"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <label htmlFor="password" className="register__label">
              Contraseña
            </label>
            <input
              id="password"
              className="register__input"
              type="password"
              placeholder="Ingrese una contraseña"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <p className="recovery__password">
              ¿Olvidaste tu contraseña?
              <Link to={'/recovery'}>
                <b>Haz click aquí</b>
              </Link>
            </p>

            <button className="register__button" type="submit">
              Ingresar
            </button>
          </form>
          <div className="register__form-form">
            <hr className="line_divider" />
            <button className="registerGoogle_buttton" type="submit">
              Ingresar con Google
            </button>
            <p className="text__login">
              ¿No tienes cuenta?
              <Link to={'/register'} onClick={handleUpClick}>
                <b>Regístrate</b>
              </Link>
            </p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Login;
