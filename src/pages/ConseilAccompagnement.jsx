import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import './ConseilAccompagnement.css';

function ConseilAccompagnement() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Conseil et Accompagnement - MAG Consulting";
  }, []);

  return (
    <div className="conseil-wrapper">
      <Banner />
      <section className="conseil-section">
        <div className="section-content">
          <nav className="tracker">
            <Link to="/">Accueil</Link>
            <span>/</span>
            Conseil et Accompagnement
          </nav>
          <h2 className="section-title">Conseil et Accompagnement</h2>
          <p className="section-text">
            La société offre un accompagnement global aux personnes et aux institutions, combinant coaching, tutorat, mentorat, et appui à la transformation. Elle assiste également ses clients dans la conception de plans de formation, le montage de dossiers de financement, et la préparation à des certifications ISO. En complément, elle propose un accompagnement administratif renforcé, incluant l’aide à la régularisation de dossiers complexes auprès des administrations fiscales, sociales, douanières ou autres organismes publics, afin de garantir la conformité réglementaire et faciliter l’accès aux droits ou aux dispositifs d’appui.
          </p>
          <div className="conseil-box-grid">
            <Link to="#" className="conseil-card">
              <i className="fas fa-chess-king"></i>
              <h3>Stratégie d’entreprise et transformation organisationnelle</h3>
            </Link>
            <Link to="#" className="conseil-card">
              <i className="fas fa-users"></i>
              <h3>Gestion des ressources humaines et conduite du changement</h3>
            </Link>
            <Link to="#" className="conseil-card">
              <i className="fas fa-graduation-cap"></i>
              <h3>Développement des compétences et ingénierie de formation</h3>
            </Link>
            <Link to="#" className="conseil-card">
              <i className="fas fa-calculator"></i>
              <h3>Optimisation financière, fiscale et comptable</h3>
            </Link>
            <Link to="#" className="conseil-card">
              <i className="fas fa-digital-tachograph"></i>
              <h3>Digitalisation et transformation numérique</h3>
            </Link>
            <Link to="#" className="conseil-card">
              <i className="fas fa-shield-alt"></i>
              <h3>Management de la qualité, des risques et de la conformité</h3>
            </Link>
            <Link to="#" className="conseil-card">
              <i className="fas fa-folder-open"></i>
              <h3>Accompagnement administratif et régularisation de dossiers</h3>
            </Link>
            <Link to="#" className="conseil-card">
              <i className="fas fa-gavel"></i>
              <h3>Accompagnement juridique et réglementaire</h3>
            </Link>
            <Link to="#" className="conseil-card">
              <i className="fas fa-bullhorn"></i>
              <h3>Marketing, développement commercial et relation client</h3>
            </Link>
            <Link to="#" className="conseil-card">
              <i className="fas fa-leaf"></i>
              <h3>Responsabilité sociétale des entreprises (RSE) et développement durable</h3>
            </Link>
            <Link to="#" className="conseil-card">
              <i className="fas fa-chalkboard-teacher"></i>
              <h3>Coaching professionnel, mentoring et tutorat</h3>
            </Link>
            <Link to="#" className="conseil-card">
              <i className="fas fa-rocket"></i>
              <h3>Innovation, performance et gestion de projets</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ConseilAccompagnement;