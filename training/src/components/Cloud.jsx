import React from 'react';
import './CloudAnimation.css';

const CloudAnimation = () => {
  return (
    <div className="cloud-container">
      <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>
      <div className="cloud cloud3"></div>
      <h2 className="matchmaking-text">Searching for opponents...</h2>
    </div>
  );
};

export default CloudAnimation;
