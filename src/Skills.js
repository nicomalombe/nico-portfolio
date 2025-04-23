import React from 'react';
import './Skills.css';
import Footer from './Footer';

const skillsList = [
  'HTML5',
  'CSS3',
  'JavaScript (ES6+)',
  'React.js',
  'Node.js',
  'Express.js',
  'Python',
  'Flask',
  'Java',
  'MySQL',
  'MongoDB',
  'Git & GitHub',
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">Skills</h1>
      <p className="skills-intro">Here are some of the technologies I work with:</p>
      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <div className="skill-badge" key={index}>
            {skill}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
