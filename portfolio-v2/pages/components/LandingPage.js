import React from 'react';
import ScrollContent from './ScrollContent';
import './landingPage.module.css';

const LandingPage = () => {
  return (
    <div className="container">
      <div className="hero-text">
        <h1>Large Centred and Left Aligned Text</h1>
        <p>Bio text goes here</p>
      </div>
      <ScrollContent />
    </div>
  );
};

export default LandingPage;
