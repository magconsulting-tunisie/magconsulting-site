import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import './Etudes.css';

function Etudes() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Études - MAG Consulting";
  }, []);

  return (
    <div className="etudes-wrapper">
      <Banner />
      <section className="etudes-section">
        <div className="section-content">
          <nav className="tracker">
            <Link to="/">Accueil</Link>
            <span>/</span>
            Études
          </nav>
          <p className="section-text">
            La société réalise des études stratégiques couvrant un large éventail de domaines tels que la formation, les ressources humaines, la finance, ou encore la gestion des organisations. Elle intervient dans l’analyse des besoins en compétences, la conduite de diagnostics RH et financiers, l’évaluation de l’impact des actions menées, ainsi que dans la veille réglementaire et sectorielle. Des études spécifiques peuvent aussi porter sur la performance économique, les risques, ou l’organisation des services. La cartographie des compétences et l’analyse des écarts permettent d’orienter efficacement les décisions d’investissement en ressources humaines et matérielles.
          </p>
          <div className="study-box-grid">
            <Link to="#" className="study-card">
              <h3>Ressources humaines et organisation du travail</h3>
            </Link>
            <Link to="#" className="study-card">
              <h3>Stratégie et gouvernance d’entreprise</h3>
            </Link>
            <Link to="#" className="study-card">
              <h3>Finance et gestion des risques</h3>
            </Link>
            <Link to="#" className="study-card">
              <h3>Marketing et comportement des consommateurs</h3>
            </Link>
            <Link to="#" className="study-card">
              <h3>Systèmes d’information et transformation digitale</h3>
            </Link>
            <Link to="#" className="study-card">
              <h3>Production, logistique et supply chain</h3>
            </Link>
            <Link to="#" className="study-card">
              <h3>Qualité, sécurité et environnement (QSE)</h3>
            </Link>
            <Link to="#" className="study-card">
              <h3>Innovation et développement durable</h3>
            </Link>
            <Link to="#" className="study-card">
              <h3>Relations sociales et climat interne</h3>
            </Link>
            <Link to="#" className="study-card">
              <h3>Conformité réglementaire et affaires juridiques</h3>
            </Link>
            <Link to="#" className="study-card">
              <h3>Performance économique et compétitivité</h3>
            </Link>
            <Link to="#" className="study-card">
              <h3>Responsabilité sociétale des entreprises (RSE)</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Etudes;