import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="footer-cta">
            <h1 className="giant-text">PRINTIVA</h1>

            <div className="footer-bottom">
                <div className="footer-links">
                    <p><strong>Links</strong></p>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/projects">Projects</Link>
                </div>
                <div className="footer-links">
                    <p><strong>Support</strong></p>
                    <Link to="#">Privacy Policy</Link>
                    <Link to="#">Terms &amp; Conditions</Link>
                    <Link to="/faqs">FAQs</Link>
                    <Link to="/contact-us">Contact</Link>
                </div>
                <div className="footer-links">
                    <p><strong>Find Us</strong></p>
                    <p>+62 812 3456 789</p>
                    <p>Printiva Studio, Canggu - Bali</p>
                    <p>hello@printiva.co</p>
                </div>

                <div className="start-project">
                    <div className="arrow">➔</div>
                    <h2>Start Your<br/><span className="text-green">Printing</span> Project</h2>
                    <p>We help brands with standout design & high-quality printing.</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;
