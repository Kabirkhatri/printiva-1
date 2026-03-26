import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <main className="error-page">
            <h1 className="error-giant-text reveal-up" style={{ opacity: 1, transform: 'translateY(0)' }}>
                PAGE <span className="text-green">NOT FOUND</span><br/>
                BUT PRINT IS REAL
            </h1>
            <p className="error-description reveal-up reveal-stagger-1" style={{ opacity: 1, transform: 'translateY(0)' }}>
                Oops! The page you're looking for <span>doesn't exist.</span><br/>
                But don't worry, let's get you back on track.
            </p>
            <Link to="/" className="btn-home reveal-up reveal-stagger-2" style={{ opacity: 1, transform: 'translateY(0)' }}>BACK TO HOME</Link>
        </main>
    );
};

export default NotFound;
