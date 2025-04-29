import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Achievements from './pages/Achievements';
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
      document.body.style.height = '100vh';
      window.scrollTo(0, 0);
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
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;