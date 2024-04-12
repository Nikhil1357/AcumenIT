import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__separator"></div>
      <div className="footer__content">
        <div className="footer__logo">
          <img src="acumen_it_logo.png" alt="Company Logo" />
        </div>
        <div className="footer__social">
          <a href="https://www.facebook.com"><FaFacebook /></a>
          <a href="https://www.twitter.com"><FaTwitter /></a>
          <a href="https://www.instagram.com"><FaInstagram /></a>
          <a href="https://www.linkedin.com"><FaLinkedin /></a>
        </div>
        <div className="footer__address">
          <p>123 College Street, City Name</p>
          <p>State, Country - 123456</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
