// components/Menu.js
import { Link } from 'react-router-dom';
import { FaHome, FaRocket , FaPhone } from 'react-icons/fa';
import './Menu.css';

function Menu() {
  return (
    <nav>
      <ul className="menu">
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/nasa"><FaRocket /> NASA</Link></li>
        <li><Link to="/contact"><FaPhone /> Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
