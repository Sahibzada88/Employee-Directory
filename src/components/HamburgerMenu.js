// src/components/HamburgerMenu/HamburgerMenu.js
import React, { useState } from 'react';

function HamburgerMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setSubmenuOpen(false); // Close submenu when main menu toggles
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <div className="hamburger-menu">
      <button onClick={toggleMenu} className="hamburger-icon">
        {isMenuOpen ? '✕' : '☰'}
      </button>
      {isMenuOpen && (
        <nav className="hamburger-nav">
          <ul>
            <li><a href="#home" className="menu-item">Home</a></li>
            <li><a href="#about" className="menu-item">About</a></li>
            <li>
              <button onClick={toggleSubmenu} className="submenu-btn">
                Services
              </button>
              {isSubmenuOpen && (
                <ul className="submenu">
                  <li><a href="#web-dev" className="menu-item">Web Development</a></li>
                  <li><a href="#design" className="menu-item">Design</a></li>
                </ul>
              )}
            </li>
            <li><a href="#contact" className="menu-item">Contact</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default HamburgerMenu;
