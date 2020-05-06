import React from 'react';
import SocialLinks from '../SocialLinks';
import './Footer.css';

const Footer = props => {
  return (
    <footer>
      <div className="wrapper">
        <h3>THANKS FOR VISITING</h3>
        <p> {new Date().getFullYear()} Made for the SQL No SQL Project</p>
      </div>
    </footer>
  );
};

export default Footer;
