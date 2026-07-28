import { assetUrl } from "../utils/assets";
import "../styles/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img
        src={assetUrl("images/logo-footer.webp")}
        alt="Logo Kasa"
        className="footer-logo"
        width="122"
        height="40"
        loading="lazy"
        decoding="async"
      />

      <p>Kasa © 2025. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;