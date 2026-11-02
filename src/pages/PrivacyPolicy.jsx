import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    // Scroll reveal logic
    useEffect(() => {
        const initReveals = document.querySelectorAll('.page-header');
        initReveals.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 100);
        });
    }, []);

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <h1 className="page-title text-blue">Privacy <span className="text-purple">Policy</span></h1>
                <p className="breadcrumbs"><Link to="/">Home</Link> <span>&#8594;</span> <span className="current">Privacy Policy</span></p>
            </section>

            {/* Content Section */}
            <section className="services-section" style={{ paddingTop: '80px', paddingBottom: '80px', maxWidth: '800px', margin: '0 auto' }}>
                <h2 className="section-title-blue" style={{ fontSize: '32px', marginBottom: '20px' }}>1. Introduction</h2>
                <p className="service-desc">
                    Welcome to Printiva. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                </p>

                <h2 className="section-title-blue" style={{ fontSize: '32px', marginTop: '40px', marginBottom: '20px' }}>2. The Data We Collect</h2>
                <p className="service-desc">
                    We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                </p>
                <ul style={{ paddingLeft: '20px', marginBottom: '20px', color: 'var(--text-primary)', opacity: '0.8' }}>
                    <li style={{ marginBottom: '10px' }}><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                    <li style={{ marginBottom: '10px' }}><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                    <li style={{ marginBottom: '10px' }}><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
                </ul>

                <h2 className="section-title-blue" style={{ fontSize: '32px', marginTop: '40px', marginBottom: '20px' }}>3. How We Use Your Data</h2>
                <p className="service-desc">
                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul style={{ paddingLeft: '20px', marginBottom: '20px', color: 'var(--text-primary)', opacity: '0.8' }}>
                    <li style={{ marginBottom: '10px' }}>Where we need to perform the contract we are about to enter into or have entered into with you (such as processing printing orders).</li>
                    <li style={{ marginBottom: '10px' }}>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                    <li style={{ marginBottom: '10px' }}>Where we need to comply with a legal or regulatory obligation.</li>
                </ul>

                <h2 className="section-title-blue" style={{ fontSize: '32px', marginTop: '40px', marginBottom: '20px' }}>4. Data Security</h2>
                <p className="service-desc">
                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                </p>

                <h2 className="section-title-blue" style={{ fontSize: '32px', marginTop: '40px', marginBottom: '20px' }}>5. Contact Us</h2>
                <p className="service-desc">
                    If you have any questions about this privacy policy or our privacy practices, please contact us at:
                    <br/><br/>
                    <strong>Email:</strong> <a href="mailto:hello@printiva.in" style={{ color: 'var(--accent-purple)', textDecoration: 'none' }}>hello@printiva.in</a><br/>
                    <strong>Phone:</strong> <a href="tel:+919909976962" style={{ color: 'var(--accent-purple)', textDecoration: 'none' }}>+91 99099 76962</a>
                </p>
            </section>
        </>
    );
};

export default PrivacyPolicy;
