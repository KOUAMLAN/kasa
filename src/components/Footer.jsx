import { assetUrl } from "../utils/assets";
import "../styles/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img src={assetUrl("images/logo-footer.png")} alt="Kasa" className="footer-logo" />
      <p>Kasa © 2025. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;