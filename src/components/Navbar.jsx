import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
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
          <div
            className="navbar-link dropdown"
            onMouseEnter={toggleDropdown}
            onMouseLeave={closeDropdown}
          >
            <NavLink to="/formations" className="navbar-link">
              Formations
            </NavLink>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <NavLink to="/formations/qualite-et-iso" className="dropdown-item" onClick={closeDropdown}>
                  Management de la qualité et Normes ISO
                </NavLink>
                <NavLink to="/formations/management-leadership" className="dropdown-item" onClick={closeDropdown}>
                  Management et Leadership
                </NavLink>
                <NavLink to="/formations/rh-et-competences" className="dropdown-item" onClick={closeDropdown}>
                  Ressources Humaines et Développement des Compétences
                </NavLink>
                <NavLink to="/formations/finance-comptabilite-gestion" className="dropdown-item" onClick={closeDropdown}>
                  Finance, Comptabilité et Gestion
                </NavLink>
                <NavLink to="/formations/it-et-systemes" className="dropdown-item" onClick={closeDropdown}>
                  Informatique et Systèmes d’Information (IT)
                </NavLink>
                <NavLink to="/formations/communication-developpement" className="dropdown-item" onClick={closeDropdown}>
                  Communication et Développement Personnel
                </NavLink>
                <NavLink to="/formations/marketing-relation-client" className="dropdown-item" onClick={closeDropdown}>
                  Commercial, Marketing et Relation Client
                </NavLink>
              </div>
            )}
          </div>
          <NavLink to="/etudes" className="navbar-link">
            Études
          </NavLink>
          <NavLink to="/conseil-accompagnement" className="navbar-link">
            Conseil et Accompagnement
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
            to="/formations" 
            className="mobile-link" 
            onClick={closeMobileMenu}
          >
            Formations
          </NavLink>
          <NavLink 
            to="/etudes" 
            className="mobile-link" 
            onClick={closeMobileMenu}
          >
            Études
          </NavLink>
          <NavLink 
            to="/conseil-accompagnement" 
            className="mobile-link" 
            onClick={closeMobileMenu}
          >
            Conseil et Accompagnement
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