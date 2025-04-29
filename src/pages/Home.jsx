import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLeaf, FaProjectDiagram, FaUsers, FaBalanceScale, FaCog, FaGraduationCap } from 'react-icons/fa';
import Banner from '../components/Banner';
import bureau1 from '../assets/bureau1.png';
import bureau2 from '../assets/bureau2.png';
import bureau3 from '../assets/bureau3.png';
import bannera from '../assets/bannera.jpg';
import bannerb from '../assets/bannerb.jpeg';
import './Home.css';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function Home() {
   
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    // Set page title
    document.title = "MAG Consulting - Tunisie";
  }, []);

  return (
    <div className="home-wrapper">
      <Banner />
      
        {/* Company Presentation Section */}
        <motion.section 
          className="presentation-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="section-content">
            <h2 className="section-title">Présentation de MAG Consulting</h2>
            <p className="section-text">
              Fondée en 2019, MAG Consulting est une société spécialisée dans l'étude, le conseil, l'expertise et la formation. 
              Elle s'appuie sur des compétences internes et un réseau d'intervenants extérieurs hautement qualifiés pour répondre 
              aux défis de ses clients.
            </p>
            
            <motion.div 
              className="expertise-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div className="expertise-card" variants={fadeIn}>
                <div className="expertise-icon">
                  <FaBalanceScale />
                </div>
                <h3>Finances publiques</h3>
                <p>Optimisation et gestion des ressources publiques</p>
              </motion.div>
              
              <motion.div className="expertise-card" variants={fadeIn}>
                <div className="expertise-icon">
                  <FaCog />
                </div>
                <h3>Contrôle et audit</h3>
                <p>Surveillance et amélioration des processus organisationnels</p>
              </motion.div>
              
              <motion.div className="expertise-card" variants={fadeIn}>
                <div className="expertise-icon">
                  <FaUsers />
                </div>
                <h3>Gouvernance</h3>
                <p>Stratégies de décentralisation et gouvernance efficace</p>
              </motion.div>
              
              <motion.div className="expertise-card" variants={fadeIn}>
                <div className="expertise-icon">
                  <FaProjectDiagram />
                </div>
                <h3>Gestion de projets</h3>
                <p>Planification, exécution et évaluation de projets</p>
              </motion.div>
              
              <motion.div className="expertise-card" variants={fadeIn}>
                <div className="expertise-icon">
                  <FaLeaf />
                </div>
                <h3>Changement climatique</h3>
                <p>Solutions adaptatives et stratégies d'atténuation</p>
              </motion.div>
              
              <motion.div className="expertise-card" variants={fadeIn}>
                <div className="expertise-icon">
                  <FaGraduationCap />
                </div>
                <h3>Formation</h3>
                <p>Renforcement des capacités et développement des compétences</p>
              </motion.div>
            </motion.div>
            
            <div className="view-more-container">
              <Link to="/services" className="view-more-button">
                Voir tous nos domaines d'expertise
              </Link>
            </div>
          </div>
          
            <div className="image-gallery">
                <motion.img 
                  src={bureau1} 
                  alt="Office view 1" 
                  className="gallery-image"
                  whileHover={{ scale: 1.02 }}
                />
                <motion.img 
                  src={bureau2} 
                  alt="Office view 2" 
                  className="gallery-image"
                  whileHover={{ scale: 1.02 }}
                />
                <motion.img 
                  src={bureau3} 
                  alt="Office view 3" 
                  className="gallery-image"
                  whileHover={{ scale: 1.02 }}
                />
              </div>
        </motion.section>
        
        {/* Intervention Areas Section */}
        <motion.section 
          className="intervention-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          
          
          <div className="section-content">
            <h2 className="section-title">Domaines d'intervention</h2>
            <p className="section-text">
              MAG Consulting est en mesure d'aborder des problématiques complexes dans les secteurs réglementaires, 
              la maîtrise d'ouvrage, et la gestion privée et publique.
            </p>
            
            <motion.div 
              className="intervention-cards"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div className="intervention-card" variants={fadeIn}>
                <h3>Management public</h3>
                <p>Amélioration des processus administratifs et optimisation des ressources publiques</p>
              </motion.div>
              
              <motion.div className="intervention-card" variants={fadeIn}>
                <h3>Collectivités locales</h3>
                <p>Assistance technique, recensement, élaboration de plans et formation du personnel</p>
              </motion.div>
              
              <motion.div className="intervention-card" variants={fadeIn}>
                <h3>ONG et associations</h3>
                <p>Formations spécialisées et accompagnement stratégique pour atteindre vos objectifs</p>
              </motion.div>
            </motion.div>
            
            <div className="view-more-container">
              <Link to="/achievements" className="view-more-button">
                Explorer nos interventions
              </Link>
            </div>
          </div>
 
          <div className="image-gallery">
          <motion.img 
            src={bannera} 
            alt="Intervention area 1" 
            className="gallery-image"
            whileHover={{ scale: 1.02 }}
          />
          <motion.img 
            src={bannerb} 
            alt="Intervention area 2" 
            className="gallery-image"
            whileHover={{ scale: 1.02 }}
          />
        </div> 

        </motion.section>
        
        {/* Clients and Partners Section */}
        <motion.section 
          className="clients-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="section-content ">
          <div className="clients-content">
            <h2 className="section-title">Ils nous font confiance</h2>
            <p className="section-text">
              MAG Consulting est fière de collaborer avec un large éventail d'organisations prestigieuses:
            </p>
            
            <motion.div 
              className="clients-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div className="client-category" variants={fadeIn}>
                <h3>Secteur public</h3>
                <ul className="client-list">
                  <li>Ministères et organismes gouvernementaux</li>
                  <li>Collectivités locales</li>
                  <li>Entreprises publiques</li>
                </ul>
              </motion.div>
              
              <motion.div className="client-category" variants={fadeIn}>
                <h3>Partenaires techniques et financiers</h3>
                <ul className="client-list">
                  <li>Union Européenne</li>
                  <li>Expertise France</li>
                  <li>GIZ</li>
                  <li>CILG VNG</li>
                  <li>Heinrich-Böll-Stiftung</li>
                  <li>Conservatoire du littoral</li>
                </ul>
              </motion.div>
              
              <motion.div className="client-category" variants={fadeIn}>
                <h3>ONG et OSC</h3>
                <ul className="client-list">
                  <li>ADFR</li>
                  <li>TYI</li>
                  <li>Et autres organisations de la société civile</li>
                </ul>
              </motion.div>
            </motion.div>
            
            <div className="testimonial-container">
              <div className="testimonial">
                <blockquote>
                  "MAG Consulting a démontré un professionnalisme exceptionnel et une expertise remarquable lors de notre collaboration. Leur accompagnement a été déterminant dans le succès de notre projet."
                </blockquote>
                <cite>- Directeur de projet, Ministère de l'Environnement</cite>
              </div>
            </div>
          </div>
          </div>
        </motion.section>
            
        {/* Call to Action Section */}
        <motion.section 
          className="cta-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="cta-content">
            <h2 className="cta-title">Prêt à concrétiser votre projet?</h2>
            <p className="cta-text">Contactez-nous pour découvrir comment MAG Consulting peut vous accompagner vers le succès.</p>
            <div className="cta-buttons">
              <Link to="/contact">
                <button className="cta-button primary">Demander un devis</button>
              </Link>
              <Link to="/services">
                <button className="cta-button secondary">Découvrir nos services</button>
              </Link>
            </div>
            <p className="cta-contact-info">
              Ou appelez-nous directement au <strong>+216 96 111 262</strong>
            </p>
          </div>
        </motion.section>
      </div>
  );
}

export default Home;