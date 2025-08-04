import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from '../../assets/images/LOGO SEGXII.png'

const Header = ({ onScrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    onScrollToSection(sectionId);
    setMobileMenuOpen(false); 
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
      <div className="logo" onClick={() => handleMenuItemClick('home')}>
        <img src={Logo} alt="SEGXII Logo" className="logo-image" />
        <span className="logo-text">SEG XII</span>
</div>
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => handleMenuItemClick('home')}>Início</a></li>
          <li><a href="#about" onClick={() => handleMenuItemClick('about')}>Sobre Nós</a></li>
          <li><a href="#services" onClick={() => handleMenuItemClick('services')}>Serviços</a></li>
          <li><a href="#work" onClick={() => handleMenuItemClick('work')}>Trabalhe Conosco</a></li>
          <li><a href="#location" onClick={() => handleMenuItemClick('location')}>Onde Estamos</a></li>
          <li><a href="#contact" onClick={() => handleMenuItemClick('contact')}>Contato</a></li>
        </ul>
        <div className="mobile-menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
