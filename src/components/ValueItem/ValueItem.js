// src/components/ValueItem/ValueItem.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ValueItem.css';

const ValueItem = ({ icon, title, description }) => {
  return (
    <div className="value-item">
      <div className="value-icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="value-title">{title}</div>
      <div className="value-description">{description}</div>
    </div>
  );
};

export default ValueItem;
