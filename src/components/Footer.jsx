
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
                  <p>Expertise, conseil et formation de qualité pour répondre à vos défis depuis 2019.</p>
                </div>
                
                <div className="footer-column">
                  <h3>Liens rapides</h3>
                  <ul className="footer-links">
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </div>
                
                <div className="footer-column">
                  <h3>Contact</h3>
                  <p>Email: magconsulting17@gmail.com</p>
                  <p>Téléphone: +216 96 111 262</p>
                  <p>Adresse: SFAX, Rue Mahdia</p>
                </div>
              </div>
              
              <div className="footer-copyright">
                <p>&copy; {new Date().getFullYear()} MAG Consulting. Tous droits réservés.</p>
              </div>
            </footer>
    );
  }
  
  export default Footer;
  