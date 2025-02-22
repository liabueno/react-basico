import { Link } from 'react-router-dom';
import { FaHome, FaRocket , FaPhone } from 'react-icons/fa';
import './Menu.css';

function Menu() {
  return (
    <nav>
      <ul className="menu">
        <li><Link to="/"><img src='/logo.png' className="logo"></img></Link></li>
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/apod"><FaRocket /> APOD</Link></li>
        <li><Link to="/contact"><FaPhone /> Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
