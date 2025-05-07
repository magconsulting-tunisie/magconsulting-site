import React from 'react';
import Banner from '../components/Banner'; // Import the Banner component
import './Partners.css'; // Import the CSS file
// Import logos from assets folder
import oidpLogo from '../assets/logo 1 OIDP.png';
import aisgLogo from '../assets/logo 2 aisg.png';
import isctLogo from '../assets/Logo 3 isct group.png';
import { Link } from 'react-router-dom';

function Partners() {
  const partners = [
    {
      id: 1,
      logo: oidpLogo,
      title: "L'Observatoire International de la Démocratie Participative « OIDP »"
    },
    {
      id: 2,
      logo: aisgLogo,
      title: "Institut Africain de Gouvernance Intelligente « AISG »"
    },
    {
      id: 3,
      logo: isctLogo,
      title: "International Standards Certification & Training Group « ISCT Group »"
    }
  ];

  return (
    <div className="partners-container">
      <Banner />
      
      <div className="partners-content">
        <header className="partners-header">
          <h1>Nos Partenaires</h1>
          <p>
            Nous collaborons avec divers partenaires pour renforcer nos initiatives et offrir des solutions innovantes.
          </p>
        </header>
        
        <section className="partners-list">
          {partners.map(partner => (
            <div key={partner.id} className="partner-card">
              <div className="logo-container">
                <img 
                  src={partner.logo} 
                  alt={`Logo ${partner.id}`} 
                  className="partner-logo"
                />
              </div>
              <h3 className="partner-title">
                {partner.title}
              </h3>
            </div>
          ))}
        </section>
       
      </div>
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Prêt à concrétiser votre projet?</h2>
          <p className="cta-text">Contactez-nous pour découvrir comment MAG Consulting peut vous accompagner vers le succès.</p>
          <div className="cta-buttons">
            <Link to="/contact">
              <button className="cta-button primary">Demander un devis</button>
            </Link>
          </div>
          <p className="cta-contact-info">
            Ou appelez-nous directement au <strong> (+216) 99727827 /  (+216) 74431511</strong>
          </p>
        </div>
      </section>
    </div>
    
  );
}

export default Partners;