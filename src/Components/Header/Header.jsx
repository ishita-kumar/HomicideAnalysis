import React from 'react';
import './Header.css';

const Header = props => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <h1>
         <span>Homicide Analysis</span>
        </h1>
        <div className="buttons">
          {/* <a href="#projects">my portfolio</a> */}
         
        </div>
      </div>
    </header>
  );
};

export default Header;
