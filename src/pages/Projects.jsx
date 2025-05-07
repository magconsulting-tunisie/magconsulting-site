import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import './Projects.css';

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Projets - MAG Consulting";
  }, []);

  return (
    <div className="projects-wrapper">
      <Banner />
      <section className="projects-section">
        <div className="section-content">
          <nav className="tracker">
            <Link to="/">Accueil</Link>
            <span>/</span>
            Projets
          </nav>
          
          <h1 className="section-title">Nos Projets et Réalisations</h1>
          
          <p className="section-text">
            Découvrez nos initiatives et réalisations dans divers domaines, visant à renforcer les capacités organisationnelles et territoriales à travers la Tunisie et au-delà.
          </p>
          
          <div className="projects-grid">
            {/* Systèmes de Management et Normes ISO */}
            <div className="project-card">
              <div className="card-header">
                <i className="fas fa-certificate"></i>
                <h2>Systèmes de Management et Normes ISO</h2>
              </div>
              <ul className="project-list">
                <li>Réalisation de diagnostics organisationnels dans des structures privées et publiques en Tunisie, Mauritanie et Tchad selon les normes ISO 9001, ISO 14001, ISO 45001, ISO 31000, ISO 37001.</li>
                <li>Organisation d'ateliers de sensibilisation à la qualité, à la gestion environnementale, à la santé-sécurité au travail, à la gestion des risques et à l'anticorruption dans plusieurs pays d'Afrique du Nord et subsaharienne.</li>
                <li>Développement et animation de formations sur la mise en œuvre des systèmes de management ISO, principalement en Tunisie et en Mauritanie.</li>
                <li>Élaboration de guides méthodologiques pour les administrations et entreprises tunisiennes, mauritaniennes et tchadiennes.</li>
              </ul>
            </div>

            {/* Gouvernance locale et Finances publiques */}
            <div className="project-card">
              <div className="card-header">
                <i className="fas fa-landmark"></i>
                <h2>Gouvernance locale et Finances publiques</h2>
              </div>
              <ul className="project-list">
                <li>Diagnostic fonctionnel et financier de 21 communes tunisiennes dans cinq gouvernorats.</li>
                <li>Élaboration de plans d'action pour renforcer l'autonomie financière des collectivités territoriales tunisiennes.</li>
                <li>Conception du guide pratique destiné aux élus et agents communaux tunisiens, distribué à 350 communes tunisiennes.</li>
                <li>Élaboration d'un plan de formation et d'un catalogue sur la gestion des investissements publics pour une institution de coopération internationale active en Tunisie.</li>
              </ul>
            </div>

            {/* Contrôle interne et gestion des risques */}
            <div className="project-card">
              <div className="card-header">
                <i className="fas fa-shield-alt"></i>
                <h2>Contrôle interne et gestion des risques</h2>
              </div>
              <ul className="project-list">
                <li>Diagnostic des risques des processus de gestion dans 8 communes pilotes tunisiennes.</li>
                <li>Ateliers de sensibilisation au contrôle interne dans les collectivités locales tunisiennes.</li>
                <li>Formation de cadres des 24 gouvernorats tunisiens en matière de contrôle de gestion.</li>
                <li>Rédaction d'un guide méthodologique à l'usage des administrations locales tunisiennes.</li>
              </ul>
            </div>

            {/* Planification territoriale et climat */}
            <div className="project-card">
              <div className="card-header">
                <i className="fas fa-map-marked-alt"></i>
                <h2>Planification territoriale et climat</h2>
              </div>
              <ul className="project-list">
                <li>Accompagnement de 6 communes tunisiennes dans la planification territoriale sensible aux changements climatiques.</li>
                <li>Diagnostics des pratiques de planification en Tunisie.</li>
                <li>Élaboration de méthodologies adaptées aux enjeux climatiques en Tunisie.</li>
                <li>Animation d'ateliers participatifs locaux pour soutenir les processus de planification locale.</li>
              </ul>
            </div>

            {/* Ingénierie de projets d'assainissement et acceptabilité sociétale */}
            <div className="project-card">
              <div className="card-header">
                <i className="fas fa-water"></i>
                <h2>Ingénierie de projets d'assainissement et acceptabilité sociétale</h2>
              </div>
              <ul className="project-list">
                <li>Appui à la rédaction des cahiers des charges techniques pour des projets d'assainissement en Tunisie, Mauritanie et Tchad.</li>
                <li>Organisation d'ateliers de sensibilisation à l'acceptabilité sociétale des projets dans les collectivités locales en Tunisie.</li>
                <li>Développement d'une formation à destination des élus et cadres municipaux en Tunisie et en Mauritanie.</li>
                <li>Rédaction d'un guide pour intégrer l'acceptabilité sociétale dans les projets d'assainissement communal en Tunisie.</li>
              </ul>
            </div>

            {/* Procédures et structuration organisationnelle */}
            <div className="project-card">
              <div className="card-header">
                <i className="fas fa-sitemap"></i>
                <h2>Procédures et structuration organisationnelle</h2>
              </div>
              <ul className="project-list">
                <li>Coaching pour l'élaboration du manuel des procédures de deux associations tunisiennes.</li>
                <li>Appui à la formalisation des processus internes associatifs en Tunisie.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;