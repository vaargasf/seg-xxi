
import React, { useState } from 'react';
import ContactItem from '../ContactItem/ContactItem';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { faPhone, faEnvelope, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faSpinner, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContactSection.css';

const ContactSection = () => {
  const contactInfoRef = useScrollAnimation('animate-left');
  const contactFormRef = useScrollAnimation('animate-right');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setTimeout(() => {
      setSubmitStatus('success');
      setTimeout(() => {
        alert(`Obrigado, ${name}! Sua solicitação para ${service} foi enviada com sucesso. Entraremos em contato em breve através do email ${email} ou telefone ${phone}.`);
        setName('');
        setEmail('');
        setPhone('');
        setService('');
        setMessage('');
        setSubmitStatus('idle');
      }, 1000);
    }, 2000);
  };

  let submitButtonContent;
  let submitButtonClass = 'submit-btn';
  if (submitStatus === 'loading') {
    submitButtonContent = <><FontAwesomeIcon icon={faSpinner} spin /> Enviando...</>;
    submitButtonClass += ' loading';
  } else if (submitStatus === 'success') {
    submitButtonContent = <><FontAwesomeIcon icon={faCheck} /> Enviado com Sucesso!</>;
    submitButtonClass += ' success';
  } else {
    submitButtonContent = 'Enviar Solicitação';
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info" ref={contactInfoRef}>
            <h2>Entre em Contato</h2>
            <p style={{ marginBottom: '3rem', opacity: 0.9, fontSize: '1.2rem' }}>Estamos prontos para atender você e criar a solução de segurança perfeita para suas necessidades.</p>
            
            <ContactItem
              icon={faPhone}
              title="Telefone"
              lines={['(51) 3344-0405']}
            />
            
            <ContactItem
              icon={faEnvelope}
              title="Email"
              lines={['comercial@segxxi.com.br']}
            />
            
            <ContactItem
              icon={faWhatsapp}
              title="WhatsApp"
              lines={['(51) 99768-9779']}
            />
          </div>
          
          <div className="contact-form" ref={contactFormRef}>
            <h3>Solicite um Orçamento</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome Completo</label>
                <input type="text" id="name" name="name" placeholder="Seu nome completo" required value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="seu@email.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Telefone</label>
                <input type="tel" id="phone" name="phone" placeholder="(11) 99999-9999" required value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Tipo de Serviço</label>
                <select id="service" name="service" required value={service} onChange={(e) => setService(e.target.value)}>
                  <option value="">Selecione um serviço</option>
                  <option value="alarmes">Alarmes Inteligentes</option>
                  <option value="cftv">CFTV HD/4K</option>
                  <option value="acesso">Controle de Acesso</option>
                  <option value="corporativo">Segurança Corporativa</option>
                  <option value="residencial">Automação Residencial</option>
                  <option value="monitoramento">Monitoramento 24h</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" rows="4" placeholder="Descreva suas necessidades de segurança..." required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
              
              <button type="submit" className={submitButtonClass} disabled={submitStatus === 'loading'}>
                {submitButtonContent}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
