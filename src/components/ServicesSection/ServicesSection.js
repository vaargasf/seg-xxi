// src/components/ServicesSection/ServicesSection.js
import React from 'react';
import SectionTitle from '../common/SectionTitle/SectionTitle';
import ServiceCard from '../ServiceCard/ServiceCard';
import { faShieldAlt, faVideo, faKey, faBuilding, faHome, faEye } from '@fortawesome/free-solid-svg-icons';
import './ServicesSection.css';

const ServicesSection = () => {
  const servicesData = [
    { icon: faShieldAlt, title: 'Alarmes Inteligentes', description: 'Sistemas de alarme com tecnologia avançada, detecção de movimento e notificações em tempo real para seu smartphone.' },
    { icon: faVideo, title: 'CFTV HD/4K', description: 'Câmeras de alta resolução com visão noturna, gravação em nuvem e acesso remoto para monitoramento 24 horas.' },
    { icon: faKey, title: 'Controle de Acesso', description: 'Sistemas biométricos, cartões de proximidade e fechaduras eletrônicas para controle total de entrada.' },
    { icon: faBuilding, title: 'Segurança Corporativa', description: 'Soluções completas para empresas com monitoramento integrado, relatórios detalhados e suporte especializado.' },
    { icon: faHome, title: 'Automação Residencial', description: 'Integração de segurança com automação, controle de iluminação, portões e sistemas inteligentes.' },
    { icon: faEye, title: 'Monitoramento 24h', description: 'Central de monitoramento própria com resposta imediata e comunicação direta com forças de segurança.' },
  ];

  return (
    <section className="services section" id="services">
      <div className="container">
        <SectionTitle>Nossos Serviços</SectionTitle>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
