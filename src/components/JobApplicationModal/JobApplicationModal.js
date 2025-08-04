// src/components/JobApplicationModal/JobApplicationModal.js
import React, { useState, useEffect } from 'react';
import { faUpload, faSpinner, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './JobApplicationModal.css';

const JobApplicationModal = ({ isOpen, onClose, jobTitle }) => {
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantAge, setApplicantAge] = useState('');
  const [applicantExperience, setApplicantExperience] = useState('');
  const [applicantEducation, setApplicantEducation] = useState('');
  const [applicantMotivation, setApplicantMotivation] = useState('');
  const [applicantResume, setApplicantResume] = useState(null);
  const [resumeFileName, setResumeFileName] = useState('Clique para anexar seu currículo');
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, loading, success, error

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      // Reset form on close
      setApplicantName('');
      setApplicantEmail('');
      setApplicantPhone('');
      setApplicantAge('');
      setApplicantExperience('');
      setApplicantEducation('');
      setApplicantMotivation('');
      setApplicantResume(null);
      setResumeFileName('Clique para anexar seu currículo');
      setSubmitStatus('idle');
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('loading');

    setTimeout(() => {
      setSubmitStatus('success');
      setTimeout(() => {
        alert(`Obrigado, ${applicantName}! Sua solicitação para ${jobTitle} foi enviada com sucesso.`);
        onClose();
      }, 1000);
    }, 2000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setApplicantResume(file);
    if (file) {
      setResumeFileName(`Arquivo selecionado: ${file.name}`);
    } else {
      setResumeFileName('Clique para anexar seu currículo');
    }
  };

  let submitButtonContent;
  let submitButtonClass = 'submit-btn';
  if (submitStatus === 'loading') {
    submitButtonContent = <><FontAwesomeIcon icon={faSpinner} spin /> Enviando...</>;
    submitButtonClass += ' loading';
  } else if (submitStatus === 'success') {
    submitButtonContent = <><FontAwesomeIcon icon={faCheck} /> Candidatura Enviada!</>;
    submitButtonClass += ' success';
  } else {
    submitButtonContent = 'Enviar Candidatura';
  }

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={(e) => e.target.classList.contains('modal-overlay') && onClose()}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h3 id="modalJobTitle">Candidatura para {jobTitle}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="applicantName">Nome Completo *</label>
            <input type="text" id="applicantName" name="applicantName" required value={applicantName} onChange={(e) => setApplicantName(e.target.value)} />
          </div>
          
          <div className="form-group">
            <label htmlFor="applicantEmail">Email *</label>
            <input type="email" id="applicantEmail" name="applicantEmail" required value={applicantEmail} onChange={(e) => setApplicantEmail(e.target.value)} />
          </div>
          
          <div className="form-group">
            <label htmlFor="applicantPhone">Telefone *</label>
            <input type="tel" id="applicantPhone" name="applicantPhone" required value={applicantPhone} onChange={(e) => setApplicantPhone(e.target.value)} />
          </div>
          
          <div className="form-group">
            <label htmlFor="applicantAge">Idade</label>
            <input type="number" id="applicantAge" name="applicantAge" min="18" max="65" value={applicantAge} onChange={(e) => setApplicantAge(e.target.value)} />
          </div>
          
          <div className="form-group">
            <label htmlFor="applicantExperience">Experiência Profissional</label>
            <textarea id="applicantExperience" name="applicantExperience" rows="4" placeholder="Descreva sua experiência relevante para a vaga..." value={applicantExperience} onChange={(e) => setApplicantExperience(e.target.value)}></textarea>
          </div>
          
          <div className="form-group">
            <label htmlFor="applicantEducation">Formação Acadêmica</label>
            <input type="text" id="applicantEducation" name="applicantEducation" placeholder="Ex: Técnico em Eletrônica, Ensino Médio Completo..." value={applicantEducation} onChange={(e) => setApplicantEducation(e.target.value)} />
          </div>
          
          <div className="form-group">
            <label htmlFor="applicantMotivation">Por que deseja trabalhar conosco?</label>
            <textarea id="applicantMotivation" name="applicantMotivation" rows="3" placeholder="Conte-nos sua motivação..." value={applicantMotivation} onChange={(e) => setApplicantMotivation(e.target.value)}></textarea>
          </div>
          
          <div className="form-group">
            <label htmlFor="applicantResume">Currículo (PDF)</label>
            <div className="file-upload">
              <input type="file" id="applicantResume" name="applicantResume" accept=".pdf" onChange={handleFileChange} />
              <div className="file-upload-label">
                <FontAwesomeIcon icon={faUpload} />
                <span style={{ color: applicantResume ? 'var(--success-green)' : '' }}>{resumeFileName}</span>
              </div>
            </div>
          </div>
          
          <button type="submit" className={submitButtonClass} disabled={submitStatus === 'loading'}>
            {submitButtonContent}
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationModal;
