import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <section className="login">
      <div className="login__container">
        <h1 className="login__title">
          Регистрация
        </h1>
        <form className="login__form">
          <span className="login__label">
            Ваше имя
          </span>
          <input className="login__input" type="email" placeholder="Богдан" />
          <span className="login__label">
            Email
          </span>
          <input className="login__input" type="email" placeholder="username@gmail.com" />
          <span className="login__label">
            Пароль
          </span>
          <input className="login__input" type="password" placeholder="********" />
          <button className="login__submit" type="submit">
            Регистрация
          </button>
          <p className="login__text">
            Есть аккаунт?
            {' '}
            <Link to="/login" className="login__link">Войти</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Register;
