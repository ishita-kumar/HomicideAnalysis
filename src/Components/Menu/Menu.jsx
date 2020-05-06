import React from 'react';
import SocialLinks from '../SocialLinks';
import './Menu.css';

const Menu = props => {
  return (
    <div className={`menu-container ${props.showMenu}`}>
      <div className="overlay" />
      <div className="menu-items">
        <ul>
          <li>
            <a href="#welcome-section" onClick={props.toggleMenu}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" onClick={props.toggleMenu}>
              ABOUT PROJECT
            </a>
          </li>
          <li>
            <a href="#projects" onClick={props.toggleMenu}>
              ANALYSIS
            </a>
          </li>
          <li>
            <a href="#contact" onClick={props.toggleMenu}>
              TEAM            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
