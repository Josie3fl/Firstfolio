import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Josie Borges</div>
      <ul className="navbar-menu">
        <li><a href="#aboutme">About Me</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#resume">Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;