import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import './TrainingPage.css';

function RhEtCompetences() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Ressources Humaines et Développement des Compétences - MAG Consulting";
  }, []);

  return (
    <div className="training-wrapper">
      <Banner />
      <section className="training-section">
        <div className="section-content">
          <nav className="tracker">
            <Link to="/formations">Formations</Link>
            <span>/</span>
            Ressources Humaines et Développement des Compétences
          </nav>
          <div className="course-box-grid">
            <Link to="#" className="course-card">
              <h3>Recrutement et intégration</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>Évaluation des performances RH</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>GPEC (Gestion prévisionnelle des emplois et compétences)</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>Formation de formateurs</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>Ingénierie pédagogique</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>Gestion des carrières et mobilité interne</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>QVT (Qualité de Vie au Travail) et prévention des RPS (Risques Psychosociaux)</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RhEtCompetences;