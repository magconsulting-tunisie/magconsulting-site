import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import './TrainingPage.css';

function MarketingRelationClient() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Commercial, Marketing et Relation Client - MAG Consulting";
  }, []);

  return (
    <div className="training-wrapper">
      <Banner />
      <section className="training-section">
        <div className="section-content">
          <nav className="tracker">
            <Link to="/formations">Formations</Link>
            <span>/</span>
            Commercial, Marketing et Relation Client
          </nav>
          <div className="course-box-grid">
            <Link to="#" className="course-card">
              <h3>Techniques de vente et négociation</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>Fidélisation et satisfaction client</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>Marketing digital (SEO, réseaux sociaux, emailing)</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>Stratégie marketing</h3>
            </Link>
            <Link to="#" className="course-card">
              <h3>Gestion de la relation client</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MarketingRelationClient;