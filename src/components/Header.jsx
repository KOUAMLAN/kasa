import { NavLink } from "react-router-dom";
import { assetUrl } from "../utils/assets";
import "../styles/header.scss";

function Header() {
  return (
    <header className="header">
      <img src={assetUrl("images/_Header.png")} alt="Kasa" className="header-logo" />
      <nav>
        <NavLink to="/" className="nav-link">Accueil</NavLink>
        <NavLink to="/about" className="nav-link">À propos</NavLink>
      </nav>
    </header>
  );
}
export default Header;
