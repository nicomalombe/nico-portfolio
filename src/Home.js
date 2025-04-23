import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import profileImage from './assets/nico1.jpg';
import Footer from './Footer';

const Home = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <div className="home-container">
      <div className="intro-box">
        <div className="profile-image-container">
          <img src={profileImage} alt="Nicodemus" className="profile-image" />
        </div>
        <h1 className="greeting">
          Hi, I'm <span className="name">Nicodemus</span> 👋
        </h1>
        <p className="welcome-text">
          Welcome to my professional portfolio. Explore my work, skills, and journey.
        </p>

        <button className="learn-more-btn" onClick={handleLearnMore}>
          Learn more about me
        </button>
        <Footer />
      </div>
      
    </div>
  );
};

export default Home;
