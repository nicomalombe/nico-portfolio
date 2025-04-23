import React from 'react';
import './Projects.css';
import Footer from './Footer';

const projectData = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React, showcasing my skills, projects, and experience.',
    link: 'https://your-portfolio-link.com',
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce application with cart, payment integration, and admin panel.',
    link: 'https://your-ecommerce-link.com',
  },
  {
    title: 'AI-Powered Diabetes Predictor',
    description: 'A machine learning app built with Python and Flask that predicts the likelihood of diabetes.',
    link: 'https://your-ai-project-link.com',
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-intro">Here are some of the recent projects I've worked on:</p>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h2 className="project-name">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project →
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
