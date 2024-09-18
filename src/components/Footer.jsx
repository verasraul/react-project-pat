import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">© 2024 SuSu App</p>
      <div className="hamburger-menu">
        <div className="hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
