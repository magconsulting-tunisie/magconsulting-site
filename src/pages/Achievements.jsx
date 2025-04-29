import React from 'react';
import { Link } from 'react-router-dom';
import { FaCertificate, FaChalkboardTeacher, FaBookOpen, FaHandsHelping, FaProjectDiagram, FaUserTie, FaLeaf } from 'react-icons/fa';
import './Achievements.css';

function Achievements() {
  const achievements = [
    {
      icon: <FaCertificate />,
      title: "Mise en place de systèmes de management ISO",
      description: "Assistance technique pour la mise en place de systèmes de management conformes aux normes ISO (ISO 9001, ISO 14001, ISO 45001, ISO 31001, ISO 37001).",
      items: [
        "Réalisation de diagnostics organisationnels pour structures publiques et privées"
      ]
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Formations et Ateliers de Sensibilisation",
      description: "",
      items: [
        "Organisation d'ateliers de sensibilisation à la qualité, gestion environnementale, santé-sécurité au travail, management des risques et lutte contre la corruption",
        "Développement et animation de modules de formation spécialisés pour l'implémentation des systèmes de management ISO"
      ]
    },
    {
      icon: <FaBookOpen />,
      title: "Développement de Guides Méthodologiques",
      description: "",
      items: [
        "Élaboration de guides pour accompagner l'implantation des systèmes de qualité, environnement, santé-sécurité, risques, anticorruption et responsabilité sociétale"
      ]
    },
    {
      icon: <FaHandsHelping />,
      title: "Assistance à la Maîtrise d'Ouvrage",
      description: "",
      items: [
        "Appui aux collectivités locales tunisiennes, mauritaniennes et tchadiennes pour des projets d'assainissement",
        "Rédaction de cahiers des charges techniques pour les projets d'assainissement",
        "Organisation d'ateliers de sensibilisation à l'acceptabilité sociétale des projets"
      ]
    },
    {
      icon: <FaProjectDiagram />,
      title: "Projets majeurs",
      description: "",
      items: [
        "Projet de Développement Local Intégré (PDLI) — Bureau International du Travail (BIT): Diagnostic fonctionnel et financier de 21 communes dans 5 gouvernorats (Gafsa, Kebili, Tatouine, Kasserine, Jendouba). Élaboration de plans d'actions pour la mobilisation des ressources propres.",
        "Guide Pratique 'Baladiti' — Union Européenne: Création de 25 fiches pratiques pour la gestion financière communale. Développement d'une version papier et électronique enrichie (application mobile disponible sur Google Play Store et AppGallery).",
        "Formation au Contrôle Interne: Diagnostic des risques de gestion pour 8 communes pilotes. Organisation d'ateliers et formation pour 24 gouvernorats (contrôle de gestion)."
      ]
    },
    {
      icon: <FaUserTie />,
      title: "Coaching et Accompagnement Organisationnel",
      description: "",
      items: [
        "Élaboration du manuel des procédures de l'association Tunisian Youth Impact",
        "Élaboration du manuel de procédures de l'association ADFR"
      ]
    },
    {
      icon: <FaLeaf />,
      title: "Planification Locale et Changement Climatique",
      description: "",
      items: [
        "Accompagnement de 6 communes dans l'intégration du changement climatique dans leurs processus de planification locale",
        "Diagnostic des processus et facilitation d'ateliers participatifs"
      ]
    }
  ];

  return (
    <div className="achievements-wrapper">
      {/* Hero Section */}
      <section className="achievements-hero">
        <div className="achievements-hero-content">
          <h1>Nos Réalisations</h1>
          <p>
            Découvrez les succès et impacts concrets de MAG Consulting à travers nos divers projets 
            et accompagnements auprès de nos clients.
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="section-content">
          <h2 className="section-title">Nos Principales Réalisations</h2>
          <p className="section-text">
            Une sélection de nos projets les plus significatifs et des résultats tangibles obtenus 
            pour nos clients.
          </p>

          <div className="achievements-list">
            {achievements.map((achievement, index) => (
              <div className="achievement-card" key={index}>
                <div className="achievement-header">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <h3>{achievement.title}</h3>
                </div>
                {achievement.description && (
                  <p className="achievement-description">{achievement.description}</p>
                )}
                <ul className="achievement-items">
                  {achievement.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section">
        <div className="section-content">
          <h2 className="section-title">Nos Clients et Partenaires</h2>
          <p className="section-text">
            Nous avons eu le privilège de travailler avec des organisations prestigieuses:
          </p>
          
          <div className="clients-grid">
            <div className="client-category">
              <h3>Institutions Publiques</h3>
              <p>Ministères, Collectivités locales, Entreprises publiques</p>
            </div>
            <div className="client-category">
              <h3>Partenaires Internationaux</h3>
              <p>Union Européenne, BIT, GIZ, Expertise France</p>
            </div>
            <div className="client-category">
              <h3>Organisations de la Société Civile</h3>
              <p>ADFR, Tunisian Youth Impact, et autres OSC</p>
            </div>
          </div>
        </div>
      </section>
        
      {/* Call to Action Section */}
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
            Ou appelez-nous directement au <strong>+216 96 111 262</strong>
          </p>
        </div>
      </section>    
   
    </div>
  );
}

export default Achievements;