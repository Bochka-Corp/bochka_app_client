import React from 'react';
import { Link } from 'react-router-dom';

function Header({ main }) {
  return (
    <header className="header">
      <div className={main ? 'header__container header__container_main' : 'header__container'}>
        <Link to="/" className={`${main ? 'header__logo header__logo_white' : 'header__logo header__logo_green'}`} />
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
