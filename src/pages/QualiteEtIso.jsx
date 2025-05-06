import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import './TrainingPage.css';

function QualiteEtIso() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Qualité et ISO - MAG Consulting";
  }, []);

  return (
    <div className="training-wrapper">
      <Banner />
      <section className="training-section">
        <div className="section-content">
          <nav className="tracker">
            <Link to="/">Accueil</Link>
            <span>/</span>
            <Link to="/formations">Formations</Link>
            <span>/</span>
            Qualité et ISO
          </nav>
          <div className="course-box-grid">
            <Link to="#" className="course-card">
              <h3>Management de la qualité</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>Audit interne des systèmes de management</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>ISO 9001: Systèmes de management de la qualité</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>ISO 14001: Systèmes de management environnemental</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>ISO 45001: Systèmes de management de la santé et la sécurité au travail (S&ST)</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>ISO 21001: Systèmes de management des organismes d'éducation/formation</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>ISO 26000: Responsabilité sociétale</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>ISO 27001: Systèmes de management de la sécurité de l'information - Sécurité de l'information, cybersécurité et protection de la vie privée</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>ISO 31000: Management du risque</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>ISO 22301: Systèmes de management de la continuité d'activité - Sécurité et résilience</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>ISO 37001: Systèmes de management anti-corruption</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>ISO 22000: Management de la sécurité des denrées alimentaires</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>ISO 50001: Management de l'énergie</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QualiteEtIso;