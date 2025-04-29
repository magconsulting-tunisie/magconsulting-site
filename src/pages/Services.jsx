import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaClipboardCheck, FaChalkboardTeacher, FaHandsHelping, FaBook, FaMoneyBillWave, FaShieldAlt, FaUserTie, FaLeaf } from 'react-icons/fa';
import './Services.css';

function Services() {
  const services = [
    {
      icon: <FaChartLine />,
      title: "Mise en place de systèmes de management ISO",
      description: "Implémentation des normes ISO 9001, ISO 14001 et autres pour améliorer la qualité et la performance environnementale de votre organisation."
    },
    {
      icon: <FaClipboardCheck />,
      title: "Diagnostic organisationnel et évaluation de conformité",
      description: "Analyse approfondie de votre structure et vérification de conformité aux réglementations en vigueur."
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Formations spécialisées et ateliers de sensibilisation",
      description: "Programmes de formation sur mesure pour renforcer les compétences de vos équipes."
    },
    {
      icon: <FaHandsHelping />,
      title: "Assistance à la maîtrise d'ouvrage (collectivités locales)",
      description: "Accompagnement technique des collectivités dans la gestion et le suivi de leurs projets."
    },
    {
      icon: <FaBook />,
      title: "Élaboration de guides méthodologiques",
      description: "Création de documents de référence pour standardiser les processus et bonnes pratiques."
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Appui à la mobilisation des ressources propres",
      description: "Stratégies pour optimiser la génération et la gestion des ressources internes."
    },
    {
      icon: <FaShieldAlt />,
      title: "Développement de dispositifs de contrôle interne",
      description: "Mise en place de systèmes de contrôle pour sécuriser vos processus et opérations."
    },
    {
      icon: <FaUserTie />,
      title: "Coaching organisationnel et élaboration de manuels de procédures",
      description: "Accompagnement personnalisé et documentation des processus clés de votre organisation."
    },
    {
      icon: <FaLeaf />,
      title: "Planification locale sensible aux changements climatiques",
      description: "Intégration des enjeux climatiques dans les stratégies de développement local."
    }
  ];

  return (
    <div className="services-wrapper">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Nos Services Professionnels</h1>
          <p>
            MAG Consulting offre une gamme complète de services spécialisés pour répondre aux défis 
            complexes des organisations publiques et privées.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="section-content">
          <h2 className="section-title">Nos Domaines d'Expertise</h2>
          <p className="section-text">
            Découvrez notre offre de services conçue pour accompagner votre organisation vers l'excellence opérationnelle.
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="methodology-section">
        <div className="section-content">
          <h2 className="section-title">Notre Approche Méthodologique</h2>
          <div className="methodology-steps">
            <div className="methodology-step">
              <div className="step-number">1</div>
              <h3>Diagnostic Initial</h3>
              <p>Analyse approfondie de votre situation actuelle et identification des besoins.</p>
            </div>
            <div className="methodology-step">
              <div className="step-number">2</div>
              <h3>Conception Sur Mesure</h3>
              <p>Élaboration de solutions adaptées à vos spécificités organisationnelles.</p>
            </div>
            <div className="methodology-step">
              <div className="step-number">3</div>
              <h3>Mise en Œuvre</h3>
              <p>Accompagnement dans l'implémentation des solutions retenues.</p>
            </div>
            <div className="methodology-step">
              <div className="step-number">4</div>
              <h3>Évaluation et Pérennisation</h3>
              <p>Mesure des résultats et transfert de compétences pour une autonomie durable.</p>
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

export default Services;