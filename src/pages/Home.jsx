import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBullseye, FaEye, FaHeart, FaCertificate, FaHandshake, FaLaptopCode, FaChartLine, FaUsersCog, FaUserTie, FaFolderOpen, FaChessBoard, FaBuilding, FaLandmark, FaBalanceScale, FaCity } from 'react-icons/fa';
import Banner from '../components/Banner';
import bureau1 from '../assets/bureau1.png';
import bureau2 from '../assets/bureau2.png';
import bureau3 from '../assets/bureau3.png';
import bannera from '../assets/bannera.jpg';
import bannerb from '../assets/bannerb.jpeg';
import logoGiz from '../assets/logo-giz.png';
import heinrich from '../assets/heinrich.png';
import cilg from '../assets/CILG.jpg';
import expertiseFrance from '../assets/expertise france.png';
import unionEuropeenne from '../assets/union europeenne.png';
import conservatoireLittoral from '../assets/Conservatoire_du_littoral.png';
import youthTunisianImpact from '../assets/youth-tunisian-impact.png';
import adfr from '../assets/adfr.png';
import './Home.css';

function Home() {
  const [swiperLoaded, setSwiperLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "MAG Consulting - Tunisie";

    // Dynamically load Swiper CSS
    const swiperCss = document.createElement('link');
    swiperCss.rel = 'stylesheet';
    swiperCss.href = 'https://unpkg.com/swiper/swiper-bundle.min.css';
    document.head.appendChild(swiperCss);

    // Dynamically load Swiper JS
    const swiperScript = document.createElement('script');
    swiperScript.src = 'https://unpkg.com/swiper/swiper-bundle.min.js';
    swiperScript.async = true;
    swiperScript.onload = () => {
      // Initialize Swiper after the script is loaded
      if (window.Swiper) {
        new window.Swiper('.swiper-container', {
          slidesPerView: 'auto',
          spaceBetween: 40,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          },
        });
        setSwiperLoaded(true);
      }
    };
    document.body.appendChild(swiperScript);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(swiperCss);
      document.body.removeChild(swiperScript);
    };
  }, []);

  return (
    <div className="home-wrapper">
      <Banner />
      
      <section className="presentation-section">
        <div className="full-width-content">
          <h2 className="section-title">Présentation de MAG Consulting</h2>
          <p className="section-text">
            Depuis sa création en 2019, MAG Consulting s'impose comme un acteur clé du développement des compétences. 
            Forte de son expertise pointue en étude, conseil, expertise et formation, notre société accompagne ses clients dans 
            leur quête de performance et d'innovation continue. Grâce à une équipe interne hautement qualifiée et un réseau
            d'experts externes de premier plan, nous offrons des solutions agiles et sur-mesure, permettant un développement 
            rapide, durable et adapté aux enjeux spécifiques de chaque organisation.
          </p>
        </div>
        
        <div className="presentation-columns">
          <div className="expertise-cards-container">
            <div className="expertise-card">
              <div className="expertise-icon">
                <FaBullseye />
              </div>
              <h3>Notre Mission</h3>
              <p>Renforcer durablement les compétences des individus et des organisations en proposant des solutions de formation, de conseil et d'accompagnement sur mesure, adaptées aux enjeux économiques, humains et technologiques d'aujourd'hui et de demain.</p>
            </div>
            
            <div className="expertise-card">
              <div className="expertise-icon">
                <FaEye />
              </div>
              <h3>Notre Vision</h3>
              <p>Devenir un acteur de référence mondiale dans le développement des organisations et des individus, inspirant une culture d'apprentissage continu et contribuant à l'émergence et l'essor d'entreprises performantes, responsables et résilientes dans les pays africains, arabes et francophones.</p>
            </div>
            
            <div className="expertise-card">
              <div className="expertise-icon">
                <FaHeart />
              </div>
              <h3>Nos Valeurs</h3>
              <p>
                <strong>Excellence :</strong> Offrir des services de haute qualité basés sur l'expertise, l'innovation et l'engagement.<br />
                <strong>Impact :</strong> Créer de la valeur concrète et mesurable pour nos bénéficiaires, au service du développement personnel et collectif.<br />
                <strong>Éthique :</strong> Agir avec intégrité, transparence et responsabilité dans toutes nos actions.
              </p>
            </div>
          </div>
          
          <div className="image-gallery">
            <img 
              src={bureau1} 
              alt="Office view 1" 
              className="gallery-image"
            />
            <img 
              src={bureau2} 
              alt="Office view 2" 
              className="gallery-image"
            />
            <img 
              src={bureau3} 
              alt="Office view 3" 
              className="gallery-image"
            />
          </div>
        </div>
      </section>
      
      <section className="intervention-section">
        <div className="section-content">
          <h2 className="section-title">Nos services</h2>
          <p className="section-text">
            MAG Consulting est en mesure d'aborder des problématiques complexes dans les secteurs réglementaires, 
            la maîtrise d'ouvrage, et la gestion privée et publique.
          </p>
          
          <div className="intervention-cards">
            <div className="intervention-card">
              <Link to="/formations" className="view-more-button">
                <h3>Formation</h3>
                <p>Renforcement des capacités et développement des compétences à travers des programmes sur mesure.</p>
              </Link>
            </div>
            
            <div className="intervention-card">
              <Link to="/etudes" className="view-more-button">
                <h3>Études</h3>
                <p>Analyses approfondies et diagnostics pour orienter vos projets et stratégies.</p>
              </Link>
            </div>
            
            <div className="intervention-card">
              <Link to="/conseil-accompagnement" className="view-more-button">
                <h3>Conseils et accompagnement</h3>
                <p>Assistance stratégique et opérationnelle pour optimiser vos performances et atteindre vos objectifs.</p>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="image-gallery">
          <img 
            src={bannera} 
            alt="Intervention area 1" 
            className="gallery-image"
          />
          <img 
            src={bannerb} 
            alt="Intervention area 2" 
            className="gallery-image"
          />
        </div>
      </section>
      
      <section className="expertise-section">
        <div className="section-content">
          <h2 className="section-title">Nos domaines d’expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="expertise-icon">
                <FaCertificate />
              </div>
              <h3>Management de la qualité ISO</h3>
              <p>Mise en place et optimisation des systèmes de management conformes aux normes ISO.</p>
            </div>
            
            <div className="expertise-card">
              <div className="expertise-icon">
                <FaHandshake />
              </div>
              <h3>Marketing et Relation Client</h3>
              <p>Stratégies pour renforcer la fidélité client et optimiser l’expérience utilisateur.</p>
            </div>
            
            <div className="expertise-card">
              <div className="expertise-icon">
                <FaLaptopCode />
              </div>
              <h3>IT et Transformation Digitale</h3>
              <p>Accompagnement dans l’adoption de solutions numériques pour une performance accrue.</p>
            </div>
            
            <div className="expertise-card">
              <div className="expertise-icon">
                <FaChartLine />
              </div>
              <h3>Finance et Audit</h3>
              <p>Gestion financière, audits internes et optimisation des ressources.</p>
            </div>
            
            <div className="expertise-card">
              <div className="expertise-icon">
                <FaUsersCog />
              </div>
              <h3>Ressources Humaines et Développement des Compétences</h3>
              <p>Programmes pour attirer, former et retenir les talents.</p>
            </div>
            
            <div className="expertise-card">
              <div className="expertise-icon">
                <FaUserTie />
              </div>
              <h3>Management et Leadership</h3>
              <p>Formations pour développer des compétences en gestion et leadership.</p>
            </div>
            
            <div className="expertise-card">
              <div className="expertise-icon">
                <FaFolderOpen />
              </div>
              <h3>Accompagnement et régularisation de dossiers administratifs</h3>
              <p>Assistance dans la gestion et la conformité des démarches administratives.</p>
            </div>
            
            <div className="expertise-card">
              <div className="expertise-icon">
                <FaChessBoard />
              </div>
              <h3>Stratégie et Gouvernance</h3>
              <p>Élaboration de stratégies et renforcement des structures de gouvernance.</p>
            </div>
            
            <div className="expertise-card">
              <div className="expertise-icon">
                <FaBuilding />
              </div>
              <h3>Développement Institutionnel et Personnel</h3>
              <p>Solutions pour un développement durable des institutions et des individus.</p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">
                <FaLandmark />
              </div>
              <h3>Management Public</h3>
              <p>Expertise en gestion des organismes publics et optimisation des services administratifs.</p>
            </div>
            
            <div className="expertise-card">
              <div className="expertise-icon">
                <FaBalanceScale />
              </div>
              <h3>Politiques Publiques</h3>
              <p>Analyse, développement et évaluation des politiques publiques pour maximiser leur impact social.</p>
            </div>
            
            <div className="expertise-card">
              <div className="expertise-icon">
                <FaCity />
              </div>
              <h3>Gouvernance des Affaires Publiques Locales</h3>
              <p>Accompagnement des collectivités territoriales pour une gestion efficiente et participative.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="clients-section">
        <div className="section-content">
          <div className="clients-content">
            <h2 className="section-title">Nos clients</h2>
            <p className="section-text">
              MAG Consulting est fière de collaborer avec un large éventail d'organisations prestigieuses:
            </p>
            
            <div className="clients-grid">
              <div className="client-category">
                <h3>Secteur public</h3>
                <ul className="client-list">
                  <li>Ministères</li>
                  <li>Collectivités territoriales</li>
                  <li>Établissements publics administratifs</li>
                  <li>Entreprises publiques</li>
                  <li>Agences nationales</li>
                  <li>Autorités indépendantes</li>
                  <li>Institutions constitutionnelles</li>
                  <li>Services déconcentrés de l’État</li>
                  <li>Universités et établissements d’enseignement</li>
                </ul>
              </div>
              
              <div className="client-category">
                <h3>Secteur privé</h3>
                <ul className="client-list">
                  <li>Très Petites Entreprises (TPE)</li>
                  <li>Petites et Moyennes Entreprises (PME)</li>
                  <li>Grandes entreprises</li>
                  <li>Groupes multinationaux</li>
                  <li>Startups</li>
                  <li>Cabinets de conseil et prestataires de services</li>
                </ul>
              </div>
              
              <div className="client-category">
                <h3>Organisations de Coopération internationale</h3>
                <ul className="client-list">
                  <li>Agences de coopération internationale</li>
                  <li>Organisations intergouvernementales</li>
                  <li>Partenaires techniques et financiers</li>
                  <li>Réseaux régionaux de coopération</li>
                  <li>Agences de développement bilatérales</li>
                </ul>
              </div>
              
              <div className="client-category">
                <h3>Associations</h3>
                <ul className="client-list">
                  <li>Fondations</li>
                  <li>Associations d’intérêt général</li>
                  <li>Fédérations et unions d’associations</li>
                  <li>Organisations non gouvernementales</li>
                  <li>Organisations de la société civile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="clients-section trusted-section">
        <div className="section-content">
          <h2 className="section-title">Ils nous ont fait confiance</h2>
          <div className={`swiper-container ${!swiperLoaded ? 'swiper-fallback' : ''}`}>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="client-logo">
                  <div className="logo-image-wrapper">
                    <img src={logoGiz} alt="GIZ logo" className="logo-image" />
                  </div>
                  <p className="logo-title">GIZ</p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="client-logo">
                  <div className="logo-image-wrapper">
                    <img src={heinrich} alt="Heinrich logo" className="logo-image" />
                  </div>
                  <p className="logo-title">Heinrich Böll Stiftung</p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="client-logo">
                  <div className="logo-image-wrapper">
                    <img src={cilg} alt="CILG logo" className="logo-image" />
                  </div>
                  <p className="logo-title">CILG VNG International</p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="client-logo">
                  <div className="logo-image-wrapper">
                    <img src={expertiseFrance} alt="Expertise France logo" className="logo-image" />
                  </div>
                  <p className="logo-title">Expertise France</p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="client-logo">
                  <div className="logo-image-wrapper">
                    <img src={unionEuropeenne} alt="Union Européenne logo" className="logo-image" />
                  </div>
                  <p className="logo-title">Union Européenne</p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="client-logo">
                  <div className="logo-image-wrapper">
                    <img src={conservatoireLittoral} alt="Conservatoire du Littoral logo" className="logo-image" />
                  </div>
                  <p className="logo-title">Conservatoire du Littoral</p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="client-logo">
                  <div className="logo-image-wrapper">
                    <img src={youthTunisianImpact} alt="Youth Tunisian Impact logo" className="logo-image" />
                  </div>
                  <p className="logo-title">Youth Tunisian Impact</p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="client-logo">
                  <div className="logo-image-wrapper">
                    <img src={adfr} alt="ADFR logo" className="logo-image" />
                  </div>
                  <p className="logo-title">ADFR</p>
                </div>
              </div>
            </div>
            {/* Add navigation buttons */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Prêt à concrétiser votre projet?</h2>
          <p className="cta-text">Contactez-nous pour découvrir comment MAG Consulting peut vous accompagner vers le succès.</p>
          <div className="cta-buttons">
            <Link to="/contact">
              <button className="cta-button primary">Demander un devis</button>
            </Link>
          </div>
          <p className="cta-contact-info">
            Ou appelez-nous directement au <strong> (+216) 99727827 /  (+216) 74431511</strong>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;