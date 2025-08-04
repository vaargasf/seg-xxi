// src/components/WorkWithUsSection/WorkWithUsSection.js
import React from 'react';
import { faTools, faHandshake, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WorkWithUsSection = ({ onOpenJobApplication }) => {
  const jobsData = [
    {
      icon: faTools,
      title: 'Técnico em Eletrônica',
      type: 'Tempo Integral',
      description: 'Responsável pela instalação, configuração e manutenção de sistemas de segurança eletrônica em residências e empresas.',
      requirements: ['Curso técnico em eletrônica ou áreas afins', 'Experiência com sistemas de CFTV e alarmes', 'Conhecimento em redes e cabeamento', 'CNH categoria B'],
      phone: '+5511999999999'
    },
    {
      icon: faHandshake,
      title: 'Vendedor Técnico',
      type: 'Tempo Integral',
      description: 'Atendimento ao cliente, elaboração de propostas técnicas e acompanhamento de projetos de segurança eletrônica.',
      requirements: ['Ensino médio completo', 'Experiência em vendas técnicas', 'Conhecimento em segurança eletrônica', 'Boa comunicação e relacionamento'],
      phone: '+5511999999999'
    },
    {
      icon: faEye,
      title: 'Zelador',
      type: 'Escala 12x36',
      description: 'Monitoramento de alarmes e câmeras, atendimento de ocorrências e comunicação com clientes e autoridades.',
      requirements: ['Ensino médio completo', 'Disponibilidade para trabalhar em turnos', 'Boa comunicação verbal', 'Capacidade de trabalhar sob pressão'],
      phone: '+5511999999999'
    },
  ];

  const JobCard = ({ jobData }) => (
    <div style={{
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 215, 0, 0.3)',
      borderRadius: '12px',
      padding: '2rem',
      color: 'white',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.6)';
      e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 215, 0, 0.1)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.3)';
      e.currentTarget.style.boxShadow = 'none';
    }}>
      
      <div style={{ 
        color: '#FFD700', 
        fontSize: '2rem', 
        marginBottom: '1rem',
        textAlign: 'center' 
      }}>
        {/* Usando Font Awesome Icons */}
        <div style={{ 
          width: '60px', 
          height: '60px', 
          background: '#FFD700',
          borderRadius: '12px',
          margin: '0 auto 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          color: '#000'
        }}>
          <FontAwesomeIcon icon={jobData.icon} />
        </div>
      </div>
      
      <h3 style={{ 
        color: '#FFD700', 
        marginBottom: '0.5rem',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textAlign: 'center'
      }}>
        {jobData.title}
      </h3>
      
      <p style={{ 
        color: '#FFA500', 
        marginBottom: '1rem',
        textAlign: 'center',
        fontSize: '0.9rem',
        fontWeight: '500'
      }}>
        {jobData.type}
      </p>
      
      <p style={{ 
        color: 'rgba(255, 255, 255, 0.9)', 
        lineHeight: '1.6',
        marginBottom: '1.5rem',
        fontSize: '0.95rem'
      }}>
        {jobData.description}
      </p>
      
      <div style={{ textAlign: 'center' }}>
        <button 
          onClick={() => onOpenJobApplication && onOpenJobApplication(jobData)}
          style={{
            background: 'linear-gradient(135deg, #FFD700, #FFA500)',
            color: '#000',
            border: 'none',
            padding: '0.75rem 2rem',
            borderRadius: '25px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 215, 0, 0.3)';
          }}
        >
          Candidatar-se
        </button>
      </div>
    </div>
  );

  return (
    <section 
      id="work"
      style={{
        background: '#000000',
        color: '#ffffff',
        minHeight: '100vh',
        padding: '80px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decorativo */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 30% 70%, rgba(255, 215, 0, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 70% 30%, rgba(255, 215, 0, 0.05) 0%, transparent 50%)
        `,
        zIndex: 1
      }} />
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: '900',
          marginBottom: '2rem',
          background: 'linear-gradient(135deg, #FFD700, #FFA500)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          Trabalhe Conosco
        </h2>
        
        <p style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          marginBottom: '3rem',
          opacity: 0.9,
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: '1.6'
        }}>
          Faça parte da nossa equipe e construa uma carreira sólida no setor de segurança eletrônica. 
          Oferecemos oportunidades de crescimento, ambiente colaborativo e benefícios competitivos.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {jobsData.map((job, index) => (
            <JobCard
              key={index}
              jobData={job}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WorkWithUsSection;