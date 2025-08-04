// src/components/Footer/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../assets/images/LOGO SEGXII.png';
import './Footer.css';

const Footer = ({ onScrollToSection }) => {
  const footerLinksData = [
    { text: 'Início', id: 'home' },
    { text: 'Sobre Nós', id: 'about' },
    { text: 'Serviços', id: 'services' },
    { text: 'Trabalhe Conosco', id: 'work' },
    { text: 'Onde Estamos', id: 'location' },
    { text: 'Contato', id: 'contact' },
  ];

  const socialLinksData = [
    { icon: faFacebookF, href: '#' },
    { icon: faInstagram, href: 'https://www.instagram.com/_segxxi_seguranca_patrimonial/' },
    { icon: faWhatsapp, href: 'https://api.whatsapp.com/send/?phone=5551997689779&text&type=phone_number&app_absent=0' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={Logo} alt="SEGXII Logo" className="footer-logo-image" />
          <span className="footer-logo-text">SEG XII</span>
        </div>
        <div className="footer-links">
          {footerLinksData.map((link, index) => (
            <a key={index} href={`#${link.id}`} onClick={() => onScrollToSection(link.id)}>
              {link.text}
            </a>
          ))}
        </div>
        <div className="social-links">
          {socialLinksData.map((social, index) => (
            <a key={index} href={social.href} className="social-link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>
        <p>
            &copy; Desenvolvido por{' '}
              <a href="https://www.linkedin.com/in/felipe-vargas-129106279/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Felipe Vargas</a>{' '}
               e{' '}
             <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-kusminsky-bel%C3%A9m-001355197/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>João Pedro Belém</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;