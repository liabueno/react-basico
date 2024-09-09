import React from 'react';
import './Menu.css';
 
function Menu() {
  return (
    <nav>
      <ul className="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">Sobre</a></li>
        <li><a href="/contact">Contato</a></li>
      </ul>
    </nav>
  );
}
 
export default Menu;