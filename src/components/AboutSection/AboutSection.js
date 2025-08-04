// src/components/AboutSection/AboutSection.js
import React from 'react';
import SectionTitle from '../common/SectionTitle/SectionTitle';
import HighlightItem from '../HighlightItem/HighlightItem';
import CompanyShowcase from '../CompanyShowcase/CompanyShowcase';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './AboutSection.css';

const AboutSection = () => {
  const aboutTextRef = useScrollAnimation('animate-left');
  const aboutImageRef = useScrollAnimation('animate-right');

  return (
    <section className="about section" id="about">
      <div className="container">
        <SectionTitle>Sobre Nós</SectionTitle>
        <div className="about-content">
          <div className="about-text" ref={aboutTextRef}>
            <div className="subtitle">Excelência em Segurança</div>
            <h3>Líderes em Tecnologia de Proteção</h3>
            <p>Há mais de 15 anos, a SegXXI revoluciona o mercado de segurança eletrônica, oferecendo soluções inovadoras que combinam tecnologia de ponta com atendimento personalizado.</p>
            <p>Nossa expertise abrange desde residências familiares até complexos corporativos, sempre com o mesmo compromisso: proporcionar tranquilidade através da mais avançada tecnologia de segurança.</p>
            <p>Somos certificados pelos principais fabricantes mundiais e mantemos uma equipe altamente qualificada para garantir a excelência em cada projeto.</p>
            
            <div className="about-highlights">
              <HighlightItem number="1500+" label="Clientes Satisfeitos" />
              <HighlightItem number="15" label="Anos de Experiência" />
              <HighlightItem number="24/7" label="Suporte Disponível" />
              <HighlightItem number="99%" label="Taxa de Satisfação" />
            </div>
          </div>
          
          <div className="about-image" ref={aboutImageRef}>
            <CompanyShowcase />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
