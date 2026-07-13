import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>EcoTrack</h3>
          <p>Building a greener future with smart technology.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>contact@ecotrack.com</p>
          <p>+91 98765 43210</p>
          <div className="footer-socials">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaEnvelope />
          </div>
        </div>
      </div>
      <p className="footer-bottom">© 2026 EcoTrack. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;