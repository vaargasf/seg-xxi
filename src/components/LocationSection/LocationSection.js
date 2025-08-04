import React from 'react';
import SectionTitle from '../common/SectionTitle/SectionTitle';
import LocationItem from '../LocationItem/LocationItem';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { faMapMarkerAlt, faClock, faCar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LocationSection.css';

const LocationSection = () => {
  const locationInfoRef = useScrollAnimation('animate-left');
  const mapContainerRef = useScrollAnimation('animate-right');

  const openMap = () => {
    const address = "Av. Francisco Silveira Bitencourt, 1359 - Sarandi, Porto Alegre - RS, 91150-010";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/place/SEG-XXI+Seguran%C3%A7a+Privada/@-29.9938541,-51.1193948,17z/data=!3m1!4b1!4m6!3m5!1s0x9519768d42a99f6b:0x3da926dbbf40cc1f!8m2!3d-29.9938588!4d-51.1168199!16s%2Fg%2F1ptwcytr3?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D${encodedAddress}`, '_blank');
  };

  return (
    <section className="location section" id="location">
      <div className="container">
        <SectionTitle>Onde Estamos</SectionTitle>
        <div className="location-content">
          <div className="location-info" ref={locationInfoRef}>
            <h2>Nossa Localização</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--light-gray)', marginBottom: '3rem' }}>Estamos estrategicamente localizados para melhor atendê-lo em toda a região metropolitana.</p>
            
            <LocationItem
              icon={faMapMarkerAlt}
              title="Endereço Principal"
              lines={['Av. Francisco Silveira Bitencourt, 1359 - Sarandi, Porto Alegre - RS, 91150-010']}
            />
            
            <LocationItem
              icon={faClock}
              title="Horário de Funcionamento"
              lines={['Segunda à Sexta: 8h às 18h']}
            />
            
            <LocationItem
              icon={faCar}
              title="Estacionamento"
              lines={['Estacionamento próprio gratuito']}
            />
          </div>
          
          <div className="map-container" ref={mapContainerRef}>
            <h3 style={{ color: 'var(--primary-yellow)', marginBottom: '2rem', fontSize: '1.8rem' }}>Localização no Mapa</h3>
            <div className="map-placeholder" onClick={openMap}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <p style={{ marginTop: '2rem', opacity: 0.8 }}>Clique para abrir no Google Maps</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;