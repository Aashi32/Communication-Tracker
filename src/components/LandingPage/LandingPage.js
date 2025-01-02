import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-header">Welcome to the Communication Tracker</h1>
        <p className="landing-description">
          <strong>Technical Assignment: Calendar Application for Communication Tracking</strong>
        </p>
        <p className="landing-objective">
          <strong>Objective:</strong>
          As a company, we aim to maintain strong professional relationships by keeping accurate records of our interactions with other organizations.
        </p>
        <p className="landing-objective">
          This tool helps track communication, plan future engagements, and ensure timely follow-ups.
        </p>
      </div>
    </div>
  );
}

export default LandingPage;