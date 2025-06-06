import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Kasa" height="40" className="logo" />
      </Link>
      <nav>
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/about">À propos</NavLink>
      </nav>
    </header>
  );
}
export default Header;
