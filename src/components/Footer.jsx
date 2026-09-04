import FooterLogo from "../assets/images/logo-footer.webp";
import "../styles/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img
        src={FooterLogo}
        alt="Logo Kasa"
        className="footer-logo"
        width="180"
        height="59"
        loading="lazy"
        decoding="async"
      />

      <p>Kasa © 2025. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;