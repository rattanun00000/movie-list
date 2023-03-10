import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-info">
          <div className="contact-title">Contact</div>
          <div className="contact-info">
            -Rattanun901@gmail.com<div>-0931322492</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
