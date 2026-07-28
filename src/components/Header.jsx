import { NavLink } from "react-router-dom";
import HeaderLogo from "../assets/images/Header.webp";
import "../styles/header.scss";

function Header() {
  return (
    <header className="header">
      <img
        src={HeaderLogo}
        alt="Logo Kasa"
        width="210"
        height="68"
        className="header-logo"
      />

      <nav>
        <NavLink to="/" className="nav-link">
          Accueil
        </NavLink>

        <NavLink to="/about" className="nav-link">
          À propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;