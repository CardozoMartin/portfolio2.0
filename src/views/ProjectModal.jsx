// ProjectModal.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{project.title}</h2>
          <button onClick={onClose} className="modal-close">×</button>
        </div>

        <img
          src={project.image}
          alt={project.title}
          className="modal-image"
        />

        <div className="modal-content">
          <p className="modal-description">{project.description}</p>

          <div className="modal-technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>

          <div className="modal-actions">
            {project.demo && (
              <Link to={project.demo} className="modal-button primary">
                Ver Demo
              </Link>
            )}
            {project.info && (
              <Link to={project.info} className="modal-button secondary">
                Más Info
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;