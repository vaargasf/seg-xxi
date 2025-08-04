// src/components/LocationItem/LocationItem.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LocationItem.css';

const LocationItem = ({ icon, title, lines }) => {
  return (
    <div className="location-item">
      <div className="location-icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>
        <strong style={{ fontSize: '1.2rem' }}>{title}</strong><br />
        {lines.map((line, index) => (
          <span key={index} style={{ color: 'var(--light-gray)' }} dangerouslySetInnerHTML={{ __html: line }}></span>
        ))}
      </div>
    </div>
  );
};

export default LocationItem;
