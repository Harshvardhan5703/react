// Loader.js
import React from 'react';
import './Loader.css';

const Loader = ({ progress }) => (
    <div className="loader">
        <div className="progress-circle">
            <div className="progress-text">{progress}%</div>
        </div>
    </div>
);

export default Loader;
