import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
    const [isBlue, setIsBlue] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('#fff');

    const toggleColor = () => {
        setIsBlue(!isBlue);
    };

    const generateRandomGrey = () => {
        // Generate a random number between 0 and 255
        const shade = Math.floor(Math.random() * 256);
        return `rgb(${shade}, ${shade}, ${shade})`;
    };

    const changeBackground = () => {
        setBackgroundColor(generateRandomGrey());
    };

    return (
        <div className="cafe-homepage" style={{ backgroundColor }}>
            <h1>Welcome to Webcafe AI</h1>
            <p>Your go-to solution for AI-driven web applications.</p>
            <div className={`cafe-color-box ${isBlue ? 'cafe-blue' : 'cafe-red'}`}></div>
            <button className="cafe-button" onClick={toggleColor}>Change Color</button>
            <button className="cafe-button" onClick={changeBackground}>
                Random Grey Background
            </button>
        </div>
    );
};

export default HomePage;