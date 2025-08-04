import React, { useState, useCallback } from 'react';
import './styles/global.css'; 
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import WorkWithUsSection from './components/WorkWithUsSection/WorkWithUsSection';
import JobApplicationModal from './components/JobApplicationModal/JobApplicationModal';
import LocationSection from './components/LocationSection/LocationSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

function App() {
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [currentJobTitle, setCurrentJobTitle] = useState('');

  const openJobApplication = useCallback((jobTitle) => {
    setCurrentJobTitle(jobTitle);
    setIsJobModalOpen(true);
  }, []);

  const closeJobModal = useCallback(() => {
    setIsJobModalOpen(false);
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  return (
    <>
      <Header onScrollToSection={scrollToSection} />
      <main>
        <HeroSection onScrollToSection={scrollToSection} />
        <AboutSection />
        <ServicesSection />
        <WorkWithUsSection onOpenJobApplication={openJobApplication} />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer onScrollToSection={scrollToSection} />
      <JobApplicationModal
        isOpen={isJobModalOpen}
        onClose={closeJobModal}
        jobTitle={currentJobTitle}
      />
    </>
  );
}

export default App;
