import React from 'react';
import './Projects.css';
import Footer from './Footer';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">

        <div className="project-card">
          <h3>Nico Portfolio</h3>
          <p>A personal portfolio website built using React, showcasing skills and services.</p>
          <a href="https://github.com/nicomalombe/nico-portfolio" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Expert System</h3>
          <p>A rule-based expert system that uses inference logic to provide intelligent analysis of student transcripts and classify academic performance (e.g., honors).</p>
          <a href="https://github.com/nicomalombe/expert-system" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Diabetes Prediction Model</h3>
          <p>AI/ML model to predict the likelihood of diabetes using patient data and scikit-learn.</p>
          <a href="https://github.com/nicomalombe/diabetes_prediction_model" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Business ERP</h3>
          <p>A full-featured enterprise resource planning system for small to mid-sized businesses.</p>
          <a href="https://github.com/nicomalombe/business_erp" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Kitui Taxi Booking Hub</h3>
          <p>A complete taxi booking and tracking web application for Kitui-based taxi services.</p>
          <a href="https://github.com/nicomalombe/kitui_taxi_booking_hub" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Loan Default Prediction</h3>
          <p>A machine learning project that predicts the likelihood of a loan default based on borrower characteristics, using classification algorithms.</p>
          <a href="https://github.com/nicomalombe/loan-default-prediction" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>AI Supply Chain Optimization</h3>
          <p>A Python-based AI project designed to forecast demand, optimize inventory, and improve delivery routes using synthetic data and machine learning.</p>
          <a href="https://github.com/nicomalombe/ai-supply-chain-optimization" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>

      </div>
      <Footer />
    </section>
  );
};

export default Projects;
