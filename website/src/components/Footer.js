import { FaInstagram, FaTiktok, FaFacebook  } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
        <FaTiktok className="social-icon" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="social-icon" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook  className="social-icon" />
      </a>
    </footer>
  );
}

export default Footer;
