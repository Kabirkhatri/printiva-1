import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
    return (
        <main className="thank-you-page">
            <h1 className="thank-you-giant-text reveal-up" style={{ opacity: 1, transform: 'translateY(0)' }}>
                THANK YOU<br/>
                FOR <span className="text-orange">TRUSTING</span>
            </h1>
            <p className="thank-you-description reveal-up reveal-stagger-1" style={{ opacity: 1, transform: 'translateY(0)' }}>
                We've <span>received your request</span> and our team will get back<br/>
                to you shortly. Your vision is one step closer to reality.
            </p>
            <Link to="/" className="btn-home reveal-up reveal-stagger-2" style={{ opacity: 1, transform: 'translateY(0)' }}>BACK TO HOME</Link>
        </main>
    );
};

export default ThankYou;
