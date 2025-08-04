import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './HeroSection.css';

const HeroSection = ({ onScrollToSection }) => {
  const heroContentRef = useScrollAnimation('fadeInUp', 0.1, '0px 0px -50px 0px');

  return (
    <section className="hero section" id="home">
      <div className="container">
        <div className="hero-content" ref={heroContentRef}>
          <h1>SEG XXI</h1>
          <p>Segurança do Século XXI - Protegendo seu futuro com tecnologia avançada</p>
          <div className="cta-buttons">
            <a href="#services" className="cta-button" onClick={() => onScrollToSection('services')}>
              Nossos Serviços
            </a>
            <a href="#contact" className="cta-button secondary" onClick={() => onScrollToSection('contact')}>
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
