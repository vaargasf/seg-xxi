import React, { useState, useEffect } from 'react';
import './LoadingOverlay.css';

const LoadingOverlay = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-overlay ${isLoading ? '' : 'hidden'}`}>
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingOverlay;
