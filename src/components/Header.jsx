import { NavLink } from "react-router-dom";
import { assetUrl } from "../utils/assets";
import "../styles/header.scss";

function Header() {
  return (
    <header className="header">
      <img
        src={assetUrl("images/_Header.webp")}
        alt="Logo Kasa"
        className="header-logo"
        width="210"
        height="68"
        loading="eager"
        fetchPriority="high"
        decoding="async"
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