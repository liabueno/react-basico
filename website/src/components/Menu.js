// components/Menu.js
import { Link } from 'react-router-dom';
import { FaHome, FaRocket , FaPhone } from 'react-icons/fa';
import './Menu.css';

function Menu() {
  return (
    <nav>
      <ul className="menu">
        <li><Link to="/"><img src='/logo.png' class="logo"></img></Link></li>
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/nasa"><FaRocket /> APOD</Link></li>
        <li><Link to="/contact"><FaPhone /> Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
