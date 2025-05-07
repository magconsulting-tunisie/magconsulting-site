import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
            <span>MAG Consulting</span>
          </div>
          <p>Forger les compétences...<br />Impulser les performances !</p>
        </div>
        
        <div className="footer-column">
          <h3>Liens rapides</h3>
          <ul className="footer-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/formations">Formation</Link></li>
            <li><Link to="/etudes">Études</Link></li>
            <li><Link to="/conseil-accompagnement">Conseil et Accompagnement</Link></li>
            <li><Link to="/projets">Nos projets et réalisations</Link></li>
            <li><Link to="/partenaires">Nos partenaires</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Email: magconsulting17@gmail.com</p>
          <p>Téléphone:</p>
          <p>Bureau : (+216) 74431511</p>
          <p>Mobile : (+216) 99727827</p>
          <p>Adresse: Avenue 5 aôut - Résidence Youssef - 3002 Sfax Tunisie</p>
        </div>
      </div>
      
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} MAG Consulting. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;