import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">
          Bochka
        </h1>
        <div className="header__buttons">
          <div className="header__icon" />
          <Link to="/login" className="header__link">
            Войти
          </Link>
          <Link to="/register" className="header__link">
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
