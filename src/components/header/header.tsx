import React from 'react';
import logoMesto from '../../images/logo.svg';
import './header.css';

const Header = () => {
  return (
    <header className="header root__section">
      <img src={logoMesto} alt="mesto logo" className="logo"/>
    </header>
  )

}

export default Header;