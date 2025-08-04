// src/components/CompanyShowcase/CompanyShowcase.js
import React from 'react';
import ValueItem from '../ValueItem/ValueItem';
import { faShieldAlt, faRocket, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import './CompanyShowcase.css';

const CompanyShowcase = () => {
  const valuesData = [
    { icon: faShieldAlt, title: 'Segurança Total', description: 'Proteção completa e confiável' },
    { icon: faRocket, title: 'Inovação', description: 'Tecnologia sempre atualizada' },
    { icon: faHeart, title: 'Compromisso', description: 'Dedicação em cada projeto' },
    { icon: faStar, title: 'Excelência', description: 'Qualidade sem compromissos' },
  ];

  return (
    <div className="company-showcase">
      <div className="showcase-content">
        <h3 className="showcase-title">Nossos Valores</h3>
        <p className="showcase-description">Princípios que guiam nossa missão de proteger o que mais importa para você</p>
        
        <div className="company-values">
          {valuesData.map((value, index) => (
            <ValueItem
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyShowcase;
