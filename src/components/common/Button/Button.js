import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.css';

const Button = ({ children, className, icon, type = 'button', onClick, href }) => {
  const commonProps = {
    className: `cta-button ${className || ''}`,
    type: type,
    onClick: onClick,
  };

  if (href) {
    return (
      <a href={href} {...commonProps}>
        {icon && <FontAwesomeIcon icon={icon} />}
        {children}
      </a>
    );
  }

  return (
    <button {...commonProps}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
    </button>
  );
};

export default Button;
