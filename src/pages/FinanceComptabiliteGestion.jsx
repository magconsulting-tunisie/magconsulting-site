import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import './TrainingPage.css';

function FinanceComptabiliteGestion() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Finance, Comptabilité et Gestion - MAG Consulting";
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
            Finance, Comptabilité et Gestion
          </nav>
          <div className="course-box-grid">
            <Link to="#" className="course-card">
              <i className="fas fa-book"></i>
              <h3>Comptabilité générale</h3>
            </Link>
            <Link to="#" className="course-card">
              <i className="fas fa-chart-pie"></i>
              <h3>Analyse financière et lecture de bilan</h3>
            </Link>
            <Link to="#" className="course-card">
              <i className="fas fa-wallet"></i>
              <h3>Gestion budgétaire</h3>
            </Link>
            <Link to="#" className="course-card">
              <i className="fas fa-clipboard-check"></i>
              <h3>Contrôle de gestion</h3>
            </Link>
            <Link to="#" className="course-card">
              <i className="fas fa-tachometer-alt"></i>
              <h3>Tableaux de bord et indicateurs de performance</h3>
            </Link>
            <Link to="#" className="course-card">
              <i className="fas fa-file-invoice-dollar"></i>
              <h3>Fiscalité des entreprises</h3>
            </Link>
            <Link to="#" className="course-card">
              <i className="fas fa-money-bill-wave"></i>
              <h3>Financement et trésorerie</h3>
            </Link>
            <Link to="#" className="course-card">
              <i className="fas fa-search-dollar"></i>
              <h3>Audit interne</h3>
            </Link>
            <Link to="#" className="course-card">
              <i className="fas fa-shield-alt"></i>
              <h3>Contrôle interne</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FinanceComptabiliteGestion;