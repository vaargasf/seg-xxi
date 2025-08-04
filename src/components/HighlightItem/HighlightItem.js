// src/components/HighlightItem/HighlightItem.js
import React from 'react';
import './HighlightItem.css';

const HighlightItem = ({ number, label }) => {
  return (
    <div className="highlight-item">
      <span className="highlight-number">{number}</span>
      <div className="highlight-label">{label}</div>
    </div>
  );
};

export default HighlightItem;
