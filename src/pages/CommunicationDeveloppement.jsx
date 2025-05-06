import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import './TrainingPage.css';

function CommunicationDeveloppement() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Communication et Développement Personnel - MAG Consulting";
  }, []);

  return (
    <div className="training-wrapper">
      <Banner />
      <section className="training-section">
        <div className="section-content">
          <nav className="tracker">
            <Link to="/formations">Formations</Link>
            <span>/</span>
            Communication et Développement Personnel
          </nav>
          <div className="course-box-grid">
            <Link to="#" className="course-card">
              <i className="fas fa-comment"></i>
              <h3>Communication professionnelle</h3>
            </Link>
            <Link to="#" className="course-card">
              <i className="fas fa-microphone"></i>
              <h3>Prise de parole en public et éloquence</h3>
            </Link>
            <Link to="#" className="course-card">
              <i className="fas fa-heartbeat"></i>
              <h3>Gestion du stress et des émotions</h3>
            </Link>
            <Link to="#" className="course-card">
              <i className="fas fa-brain"></i>
              <h3>Intelligence émotionnelle au travail</h3>
            </Link>
            <Link to="#" className="course-card">
              <i className="fas fa-ear-listen"></i>
              <h3>Écoute active et communication non-violente</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CommunicationDeveloppement;