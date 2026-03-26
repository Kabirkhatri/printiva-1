import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const navigate = useNavigate();

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

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.reveal-up, .reveal-scale, .contact-form-container').forEach(el => {
            revealObserver.observe(el);
        });

        return () => revealObserver.disconnect();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally handle form submission (e.g., API call)
        // Redirect to thank you page
        navigate('/thank-you');
    };

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <h1 className="page-title text-blue">Contact <span className="text-purple">Us</span></h1>
                <p className="breadcrumbs"><Link to="/">Home</Link> <span>&#8594;</span> <span className="current">Contact
                        Us</span></p>
            </section>

            {/* Form Section */}
            <section className="form-section-blue">
                <div className="contact-header text-center reveal-up">
                    <h5 className="subtitle-orange">Contact Us</h5>
                    <h2 className="section-title-white">Let's <span className="text-green">Print</span><br/>Together</h2>
                </div>

                <div className="contact-form-container reveal-up">
                    <form onSubmit={handleSubmit} className="printiva-form">
                        <div className="form-row">
                            <input type="text" name="first_name" placeholder="First Name" required />
                            <input type="text" name="last_name" placeholder="Last Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <input type="text" name="subject" placeholder="Subject" required />
                        </div>
                        <div className="form-group">
                            <textarea name="message" rows="6" placeholder="Message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-orange-submit">SUBMIT</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
