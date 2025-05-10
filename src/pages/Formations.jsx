import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCertificate, FaUserTie, FaUsersCog, FaChartLine, FaLaptopCode, FaComments, FaHandshake } from 'react-icons/fa';
import Banner from '../components/Banner';
import './Formations.css';

function Formations() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Formations - MAG Consulting";
  }, []);

  return (
    <div className="formations-wrapper">
      <Banner />
      <section className="formations-section">
        <div className="section-content"><nav className="tracker">
                    <Link to="/">Accueil</Link>
                    <span>/</span>
                    Formation
                  </nav>
          <h2 className="section-title">Formation</h2>
          <p className="section-text">
            La société conçoit et dispense des formations professionnelles couvrant un large spectre de compétences clés pour les organisations. Les modules proposés touchent aux domaines managérial, financier, informatique (IT), commercial, juridique, communication, qualité, sécurité et bien-être au travail. Ces formations peuvent être inter ou intra-entreprise, certifiantes ou non, et sont adaptées aux besoins spécifiques des publics visés. L’approche pédagogique intègre des formats variés (présentiel, distanciel, blended learning) et peut inclure des dispositifs d’évaluation ou de validation des acquis. L’objectif est de renforcer durablement les performances individuelles et collectives au sein des structures accompagnées.
          </p>
          <div className="formations-grid">
            <Link to="/formations/qualite-et-iso" className="expertise-card">
              <div className="expertise-icon">
                <FaCertificate />
              </div>
              <h3>Management de la qualité et Normes ISO</h3>
              <p>Formations sur les systèmes de management et normes ISO pour optimiser la qualité et la conformité.</p>
            </Link>
            <Link to="/formations/management-leadership" className="expertise-card">
              <div className="expertise-icon">
                <FaUserTie />
              </div>
              <h3>Management et Leadership</h3>
              <p>Développez vos compétences en gestion et leadership pour guider vos équipes efficacement.</p>
            </Link>
            <Link to="/formations/rh-et-competences" className="expertise-card">
              <div className="expertise-icon">
                <FaUsersCog />
              </div>
              <h3>Ressources Humaines et Développement des Compétences</h3>
              <p>Programmes pour optimiser la gestion des talents et le développement professionnel.</p>
            </Link>
            <Link to="/formations/finance-comptabilite-gestion" className="expertise-card">
              <div className="expertise-icon">
                <FaChartLine />
              </div>
              <h3>Finance, Comptabilité et Gestion</h3>
              <p>Maîtrisez les outils financiers et de gestion pour une performance accrue.</p>
            </Link>
            <Link to="/formations/it-et-systemes" className="expertise-card">
              <div className="expertise-icon">
                <FaLaptopCode />
              </div>
              <h3>Informatique et Systèmes d’Information (IT)</h3>
              <p>Formations pour adopter les technologies numériques et sécuriser les systèmes d’information.</p>
            </Link>
            <Link to="/formations/communication-developpement" className="expertise-card">
              <div className="expertise-icon">
                <FaComments />
              </div>
              <h3>Communication et Développement Personnel</h3>
              <p>Améliorez vos compétences en communication et gestion émotionnelle.</p>
            </Link>
            <Link to="/formations/marketing-relation-client" className="expertise-card">
              <div className="expertise-icon">
                <FaHandshake />
              </div>
              <h3>Commercial, Marketing et Relation Client</h3>
              <p>Stratégies pour booster vos ventes et fidéliser vos clients.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Formations;