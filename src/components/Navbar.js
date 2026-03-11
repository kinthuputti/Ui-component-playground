import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="nav-logo">UI Playground</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Components</li>
      </ul>
    </nav>
  );
};

export default Navbar;