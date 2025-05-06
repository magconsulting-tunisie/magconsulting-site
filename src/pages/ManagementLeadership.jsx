import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import './TrainingPage.css';

function ManagementLeadership() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Management et Leadership - MAG Consulting";
  }, []);

  return (
    <div className="training-wrapper">
      <Banner />
      <section className="training-section">
        <div className="section-content">
          <nav className="tracker">
            <Link to="/formations">Formations</Link>
            <span>/</span>
            Management et Leadership
          </nav>
          <div className="course-box-grid">
            <Link to="#" className="course-card">
              <i className="fas fa-crown"></i>
              <h3>Leadership et posture managériale</h3>
            </Link>
            <Link to="#" className="course-card">
              <i className="fas fa-chess-board"></i>
              <h3>Planification stratégique et opérationnelle</h3>
            </Link>
            <Link to="#" className="course-card">
              <i className="fas fa-exchange-alt"></i>
              <h3>Conduite du changement</h3>
            </Link>
            <Link to="#" className="course-card">
              <i className="fas fa-comments"></i>
              <h3>Gestion de conflits et communication managériale</h3>
            </Link>
            <Link to="#" className="course-card">
              <i className="fas fa-project-diagram"></i>
              <h3>Management de projet</h3>
            </Link>
            <Link to="#" className="course-card">
              <i className="fas fa-tasks"></i>
              <h3>Management agile de projet (SCRUM)</h3>
            </Link>
            <Link to="#" className="course-card">
              <i className="fas fa-clock"></i>
              <h3>Gestion du temps et des priorités</h3>
            </Link>
            <Link to="#" className="course-card">
              <i className="fas fa-balance-scale"></i>
              <h3>Prise de décision managériale</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ManagementLeadership;