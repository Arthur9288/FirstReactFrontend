import React, { useState, useEffect } from 'react';
import './HomePage.css';

const HomePage = () => {
    const [backgroundColor, setBackgroundColor] = useState('#fff');
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const generateRandomGrey = () => {
        // Generate a random number between 0 and 255
        const shade = Math.floor(Math.random() * 256);
        return `rgb(${shade}, ${shade}, ${shade})`;
    };

    const changeBackground = () => {
        setBackgroundColor(generateRandomGrey());
    };

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowScrollToTop(true);
        } else {
            setShowScrollToTop(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <div className="cafe-homepage" style={{ 
            '--dynamic-color': backgroundColor,
            backgroundImage: `linear-gradient(to bottom, #f6f6f4 0%, ${backgroundColor} 20%)`,
            backgroundColor: 'transparent'
        }}>
            <div className="content">
                <h2>Welcome to our Website</h2>
                <p>Try changing the background color!</p>
                <button className="cafe-button" onClick={changeBackground}>
                    Random Grey Background
                </button>
            </div>
            {showScrollToTop && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    ↑
                </button>
            )}
        </div>
    );
};

export default HomePage;