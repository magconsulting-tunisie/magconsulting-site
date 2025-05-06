import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import './TrainingPage.css';

function ItEtSystemes() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Informatique et Systèmes d’Information (IT) - MAG Consulting";
  }, []);

  return (
    <div className="training-wrapper">
      <Banner />
      <section className="training-section">
        <div className="section-content">
          <nav className="tracker">
            <Link to="/formations">Formations</Link>
            <span>/</span>
            Informatique et Systèmes d’Information (IT)
          </nav>
          <div className="course-box-grid">
            <Link to="#" className="course-card">
              <h3>Bureautique (Word, Excel, PowerPoint, Outlook)</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>Excel avancé, macros et VBA</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>Sécurité informatique et protection des données</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>Développement web</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>Logiciels de gestion (ERP, CRM)</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>Transformation digitale et outils collaboratifs</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ItEtSystemes;