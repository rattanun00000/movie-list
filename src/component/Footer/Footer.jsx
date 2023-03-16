import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-info">
          <div className="contact-title">Contact</div>
          <div>
            <ul className="contact-info">
              <li className="contact-info-text">
                <GitHubIcon /> https://github.com/rattanun00000
              </li>
              <li className="contact-info-text">
                <EmailIcon /> Rattanun901@gmail.com
              </li>
              <li className="contact-info-text">
                <LocalPhoneIcon /> 0931322492
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
