import { useState } from 'react';
import image_register from '../../assets/Home/code_handler.svg';
import './Register.css';
import { Link } from 'react-router-dom';
import { handleUpClick } from '../../utils/handleUpClick';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
  };

  return (
    <main className="container__register">
      <section className="sub__container">
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
            <label htmlFor="repeatPassword" className="register__label">
              Repetir contraseña
            </label>
            <input
              id="repeatPassword"
              className="register__input"
              type="password"
              placeholder="Ingrese nuevamente su contraseña"
              value={repeatPassword}
              onChange={handleRepeatPasswordChange}
              required
            />
            <button className="register__button" type="submit">
              Crear cuenta
            </button>
          </form>
          <div className="register__form-form">
            <hr className="line_divider" />
            <button className="registerGoogle_buttton" type="submit">
              Registrarse con Google
            </button>
            <p className="text__login">
              ¿Ya tienes una cuenta?
              <Link to={'/login'} onClick={handleUpClick}>
                <b>Inicia sesión</b>
              </Link>
            </p>
          </div>
        </section>
        <div className="register__right">
          <img src={image_register} alt="Imagen de registro" />
        </div>
      </section>
    </main>
  );
};

export default Register;
