// src/components/JobCard/JobCard.js
import React from 'react';
import Button from '../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import './JobCard.css';

const JobCard = ({ jobData, onOpenJobApplication }) => {
  return (
    <div className="job-card animate-on-scroll">
      <div className="job-header">
        <div className="job-icon">
          <FontAwesomeIcon icon={jobData.icon} />
        </div>
        <div>
          <h4>{jobData.title}</h4>
          <span className="job-type">{jobData.type}</span>
        </div>
      </div>
      <p className="job-description">{jobData.description}</p>
      <div className="job-requirements">
        <h5>Requisitos:</h5>
        <ul>
          {jobData.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
      <div className="job-actions">
        <Button
          className="apply-btn"
          icon={faPaperPlane}
          onClick={() => onOpenJobApplication(jobData.title)}
        >
          Candidatar-se
        </Button>
        <Button
          className="contact-btn"
          icon={faPhone}
          href={`tel:${jobData.phone}`}
        >
          Ligar
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
