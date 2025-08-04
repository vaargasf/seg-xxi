import React from 'react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import './SectionTitle.css';

const SectionTitle = ({ children }) => {
  const titleRef = useScrollAnimation('animate-on-scroll');
  return (
    <h2 className="section-title" ref={titleRef}>
      {children}
    </h2>
  );
};

export default SectionTitle;
