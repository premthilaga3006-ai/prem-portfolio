import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="text-gradient">Prem Kumar R</span>
          </div>
          <div className="footer-links">
            <a href="https://github.com/premthilaga3006-ai" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/premkumar-engineering" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Prem Kumar R. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
