
import { Routes, Route, useLocation } from 'react-router-dom'; 
import { useEffect } from 'react';
import { initGA, trackPageView, trackEvent } from '../utils/analytics';
import Home from './components/PetSitters/Home';
import WashingtonHome from './components/PetSitters/Home';
import Navigation from './components/PetSitters/Navigation';
import Footer from './components/PetSitters/Footer';
import GlobalSound from './components/PetSitters/GlobalSound';
import PortfolioSection from './components/PetSitters/PortfolioSection';
import QuestionairePage from './components/PetSitters/QuestionairePage';
import ContactPage from './components/PetSitters/ContactPage';
import ServicesPage from './components/PetSitters/ServicesPage';
import NotFoundPage from './components/PetSitters/NotFoundPage';
import BlogDetails from './components/PetSitters/BlogDetails';
import BlogList from './components/PetSitters/BlogList';
import SuccessReceipt from './components/PetSitters/SuccessReceipt';
import Cancel from './components/PetSitters/Cancel';
import CustomisedRecommendation from './components/PetSitters/CustomisedRecommendation';
import ProjectDetails from './components/PetSitters/PortfolioProjectDetails';
import PlanPaymentCompleted from './components/PetSitters/PlanPaymentCompleted';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    initGA('G-VBQBZ0ZDWQ'); // Replace with your GA4 tracking ID
  }, []);

  useEffect(() => {
    // Track page views on route change
    trackPageView(location.pathname);
  }, [location]);

  return (
    <>
      <GlobalSound />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/washington-pet-website-design" element={<WashingtonHome />} />
        <Route path="/pet-care-web-design-portfolio-northampton" element={<PortfolioSection />} />
        <Route path="/website-design-questionnaire" element={<QuestionairePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pet-care-website-design-northampton" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/recommendations/:id" element={<CustomisedRecommendation />} />
        <Route path="/portfolio/:slug" element={<ProjectDetails />} />
        <Route path="/success/stripe/:sessionId" element={<SuccessReceipt />} />
        <Route path="/pass/stripe/:sessionId" element={<PlanPaymentCompleted />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
