import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">SS.</NavLink>

        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink></li>
          <li><NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink></li>
          <li><NavLink to="/skills" onClick={() => setIsOpen(false)}>Skills</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
