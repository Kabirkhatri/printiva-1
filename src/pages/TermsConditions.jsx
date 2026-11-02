import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
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
                <h1 className="page-title text-blue">Terms &amp; <span className="text-purple">Conditions</span></h1>
                <p className="breadcrumbs"><Link to="/">Home</Link> <span>&#8594;</span> <span className="current">Terms &amp; Conditions</span></p>
            </section>

            {/* Content Section */}
            <section className="services-section" style={{ paddingTop: '80px', paddingBottom: '80px', maxWidth: '800px', margin: '0 auto' }}>
                <h2 className="section-title-blue" style={{ fontSize: '32px', marginBottom: '20px' }}>1. Acceptance of Terms</h2>
                <p className="service-desc">
                    By accessing and using Printiva's services and website, you accept and agree to be bound by the terms and provision of this agreement. Check returning periodically to review this policy in case of any updates.
                </p>

                <h2 className="section-title-blue" style={{ fontSize: '32px', marginTop: '40px', marginBottom: '20px' }}>2. Use of Site</h2>
                <p className="service-desc">
                    If you use this site, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password.
                </p>

                <h2 className="section-title-blue" style={{ fontSize: '32px', marginTop: '40px', marginBottom: '20px' }}>3. Order Processing &amp; Production</h2>
                <p className="service-desc">
                    All printing estimates and timelines provided are approximate. We strive to provide the highest quality and deliver on time, but due to the complex setup of some printing jobs, we cannot guarantee exact delivery times in standard cases unless an expediting fee is paid upfront. 
                </p>

                <h2 className="section-title-blue" style={{ fontSize: '32px', marginTop: '40px', marginBottom: '20px' }}>4. Intellectual Property</h2>
                <p className="service-desc">
                    All content included on this site, such as text, graphics, logos, button icons, images, and software, is the property of Printiva or its content suppliers and protected by international copyright laws. Any materials you submit for printing must be legally owned by you or you must have appropriate authorization.
                </p>

                <h2 className="section-title-blue" style={{ fontSize: '32px', marginTop: '40px', marginBottom: '20px' }}>5. Contact Us</h2>
                <p className="service-desc">
                    If you have any questions regarding these terms, please contact us at:
                    <br/><br/>
                    <strong>Email:</strong> <a href="mailto:hello@printiva.in" style={{ color: 'var(--accent-purple)', textDecoration: 'none' }}>hello@printiva.in</a><br/>
                    <strong>Phone:</strong> <a href="tel:+919909976962" style={{ color: 'var(--accent-purple)', textDecoration: 'none' }}>+91 99099 76962</a>
                </p>
            </section>
        </>
    );
};

export default TermsConditions;
