import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContactItem.css';

const ContactItem = ({ icon, title, lines }) => {
  const itemRef = React.useRef(null);
  const iconDivRef = React.useRef(null);

  React.useEffect(() => {
    const item = itemRef.current;
    const iconDiv = iconDivRef.current;
    if (!item || !iconDiv) return;

    const handleMouseEnter = () => {
      item.style.transform = 'translateX(10px)';
      iconDiv.style.transform = 'scale(1.1) rotate(5deg)';
    };

    const handleMouseLeave = () => {
      item.style.transform = 'translateX(0)';
      iconDiv.style.transform = 'scale(1) rotate(0deg)';
    };

    item.addEventListener('mouseenter', handleMouseEnter);
    item.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      item.removeEventListener('mouseenter', handleMouseEnter);
      item.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="contact-item" ref={itemRef}>
      <div className="contact-icon" ref={iconDivRef}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>
        <strong style={{ fontSize: '1.3rem' }}>{title}</strong><br />
        {lines.map((line, index) => (
          <span key={index} style={{ opacity: 0.9 }}>{line}</span>
        ))}
      </div>
    </div>
  );
};

export default ContactItem;
