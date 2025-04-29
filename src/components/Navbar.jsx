import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span>MAGConsulting</span>
        </Link>
        
        <div className="navbar-links">
          <NavLink to="/" className="navbar-link" end>
            Accueil
          </NavLink>
          <NavLink to="/services" className="navbar-link">
            Services
          </NavLink>
          <NavLink to="/achievements" className="navbar-link">
           Réalisations clés 
          </NavLink>
          <NavLink to="/contact" className="navbar-link">
            Contact
          </NavLink>
        </div>
        
        <button 
          className="navbar-mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} 
        onClick={closeMobileMenu}
      ></div>
      
      <div 
        className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mobile-menu-links">
          <NavLink 
            to="/" 
            className="mobile-link" 
            onClick={closeMobileMenu}
            end
          >
            Accueil
          </NavLink>
          <NavLink 
            to="/services" 
            className="mobile-link" 
            onClick={closeMobileMenu}
          >
            Services
          </NavLink>
          <NavLink 
            to="/achievements" 
            className="mobile-link" 
            onClick={closeMobileMenu}
          >
            Réalisations clés 
          </NavLink>
          <NavLink 
            to="/contact" 
            className="mobile-link" 
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;