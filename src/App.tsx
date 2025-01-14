import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import SectorShowcase from './components/SectorShowcase';
import HowItWorks from './components/HowItWorks';
import ContactForm from './components/ContactForm';
import Dashboard from './components/Dashboard';
import Extras from './components/Extras';
import Welcome from './components/Welcome';
import AssetSafetyManagement from './components/AssetSafetyManagement';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
};

const HomePage: React.FC = () => (
  <>
    <Welcome />
    <HowItWorks id="how-it-works" />
    <SectorShowcase id="sectors" />
    <Dashboard id="dashboard" />
    <Extras id="extras" />
    <FAQ id="faq" />
    <ContactForm id="contact" />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/asset-safety" element={<AssetSafetyManagement />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;