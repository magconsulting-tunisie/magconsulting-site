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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && 
          !event.target.closest('.mobile-menu') && 
          !event.target.closest('.navbar-mobile-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

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
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} 
           onClick={toggleMobileMenu}></div>
      
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-links">
          <NavLink 
            to="/" 
            className="mobile-link" 
            onClick={toggleMobileMenu}
            end
          >
            Accueil
          </NavLink>
          <NavLink 
            to="/services" 
            className="mobile-link" 
            onClick={toggleMobileMenu}
          >
            Services
          </NavLink>
          <NavLink 
            to="/achievements" 
            className="mobile-link" 
            onClick={toggleMobileMenu}
          >
            Réalisations clés 
          </NavLink>
          <NavLink 
            to="/contact" 
            className="mobile-link" 
            onClick={toggleMobileMenu}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;