import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Formations from './pages/Formations';
import QualiteEtIso from './pages/QualiteEtIso';
import ManagementLeadership from './pages/ManagementLeadership';
import RhEtCompetences from './pages/RhEtCompetences';
import FinanceComptabiliteGestion from './pages/FinanceComptabiliteGestion';
import ItEtSystemes from './pages/ItEtSystemes';
import CommunicationDeveloppement from './pages/CommunicationDeveloppement';
import MarketingRelationClient from './pages/MarketingRelationClient';
import Etudes from './pages/Etudes';
import ConseilAccompagnement from './pages/ConseilAccompagnement';
import Projects from './pages/Projects';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// ScrollToTop component to reset scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    const handleResize = () => {
      
    };
    window.addEventListener('resize', handleResize);
    // Run once on mount to set initial height
    handleResize();
    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/formations/qualite-et-iso" element={<QualiteEtIso />} />
        <Route path="/formations/management-leadership" element={<ManagementLeadership />} />
        <Route path="/formations/rh-et-competences" element={<RhEtCompetences />} />
        <Route path="/formations/finance-comptabilite-gestion" element={<FinanceComptabiliteGestion />} />
        <Route path="/formations/it-et-systemes" element={<ItEtSystemes />} />
        <Route path="/formations/communication-developpement" element={<CommunicationDeveloppement />} />
        <Route path="/formations/marketing-relation-client" element={<MarketingRelationClient />} />
        <Route path="/etudes" element={<Etudes />} />
        <Route path="/conseil-accompagnement" element={<ConseilAccompagnement />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/partenaires" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;