import React from 'react';
import logo from '../assets/logondf.png';
import bannerBg from '../assets/bannervide.png';
import './Banner.css';

function Banner() {
  return (
    <div className="banner-container">
      <img src={bannerBg} alt="Banner background" className="banner-background" />
      <div className="banner-content">
        <div className="left-half">
          <div className="logo-section">
            <img src={logo} alt="MAG Consulting Logo" className="logo" />
          </div>
          <div className="text-section">
            <h1>
              <span>Forger les compétences...</span>
              <span>Impulser les performances !</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="contact-info">
        <div className="contact-item">
          <div className="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="#e41e26">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <div className="contact-text">
            <div className="contact-label">Contact us</div>
            <div className="contact-value">+216 96 111 262</div>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#e41e26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7l-10 7L2 7" />
              <line x1="2" y1="7" x2="8" y2="12" />
              <line x1="16" y1="12" x2="22" y2="7" />
            </svg>
          </div>
          <div className="contact-text">
            <div className="contact-label">Mail</div>
            <div className="contact-value">magconsulting17@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;