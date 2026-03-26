import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
    const [activeFaq, setActiveFaq] = useState(1);

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

        document.querySelectorAll('.reveal-up, .reveal-scale, .testi-card').forEach(el => {
            revealObserver.observe(el);
        });

        return () => revealObserver.disconnect();
    }, []);

    const toggleFaq = (index) => {
        if (activeFaq === index) {
            setActiveFaq(null);
        } else {
            setActiveFaq(index);
        }
    };

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <h1 className="page-title text-blue">Service <span className="text-orange">Detail</span></h1>
                <p className="breadcrumbs"><Link to="/">Home</Link> <span>&#8594;</span> <Link
                        to="/services">Services</Link> <span>&#8594;</span> <span className="current">Service Detail</span>
                </p>
            </section>

            {/* Service Detail Content */}
            <section className="service-detail-blue">
                <div className="container">
                    <div className="service-detail-header text-center reveal-up">
                        <h2 className="section-title-white">Smart <span className="text-orange">Prints</span></h2>
                    </div>

                    <div className="service-detail-grid">
                        <div className="service-images reveal-up">
                            <img src="https://templates.casloop.net/printiva/wp-content/uploads/sites/59/2025/08/print-house-worker-controlling-printing-process-qu-2025-03-15-00-25-00-utc.jpg"
                                alt="Printing Process 1" className="large-img" />
                            <div className="small-images">
                                <img src="https://templates.casloop.net/printiva/wp-content/uploads/sites/59/2025/08/graphic-technician-s-hands-silkscreen-printing-wit-2025-04-03-19-22-12-utc-1.jpg"
                                    alt="Printing Process 2" />
                                <img src="https://templates.casloop.net/printiva/wp-content/uploads/sites/59/2025/08/print-quality-controller-2025-03-24-00-50-24-utc.jpg"
                                    alt="Printing Process 3" />
                            </div>
                        </div>

                        <div className="service-content desc-text-white reveal-up">
                            <div className="text-split">
                                <p>Printing made smarter with precision, speed, and creativity. From essentials to custom
                                    designs, every detail delivers results that stand out — with sharp colors and
                                    professional finishing.</p>
                                <p>Printing with us means more than just output — it's about building impact. We keep the
                                    process simple, transparent, and efficient, so you can focus on your ideas while we make
                                    sure they look their best.</p>
                            </div>

                            <h4 className="sub-heading-white">The Print Flow</h4>
                            <p>Our process is designed to keep things clear and efficient. From consultation to design and
                                production, every step is managed with detail and care. We guide you through the choices of
                                material, size, and finish — ensuring your prints are not only accurate but also inspiring.
                            </p>

                            <ul className="features-list-white">
                                <li>Fast turnaround without losing quality</li>
                                <li>File check and design assistance included</li>
                                <li>Flexible formats for every need</li>
                                <li>Premium finishes for a professional touch</li>
                            </ul>

                            <h4 className="sub-heading-white">Have a Questions?</h4>
                            {/* Mini FAQ Accordion */}
                            <div className="accordion-container mini-accordion">
                                <div className={`accordion-item ${activeFaq === 0 ? 'active' : ''}`}>
                                    <button className="accordion-button" onClick={() => toggleFaq(0)}>HOW FAST IS THE PRINTING PROCESS? <span
                                            className="icon-toggle">{activeFaq === 0 ? '↗' : '↙'}</span></button>
                                    <div className={`accordion-content ${activeFaq === 0 ? 'open' : ''}`}>
                                        <p>Usually 2-3 business days depending on order size and complexity.</p>
                                    </div>
                                </div>
                                <div className={`accordion-item ${activeFaq === 1 ? 'active' : ''}`}>
                                    <button className="accordion-button" onClick={() => toggleFaq(1)}>CAN I PRINT IN CUSTOM SIZES? <span
                                            className="icon-toggle">{activeFaq === 1 ? '↗' : '↙'}</span></button>
                                    <div className={`accordion-content ${activeFaq === 1 ? 'open' : ''}`}>
                                        <p>Absolutely. From small labels to large banners, we adjust to the exact size you
                                            need.</p>
                                    </div>
                                </div>
                                <div className={`accordion-item ${activeFaq === 2 ? 'active' : ''}`}>
                                    <button className="accordion-button" onClick={() => toggleFaq(2)}>WHAT MAKES PRINTIVA DIFFERENT? <span
                                            className="icon-toggle">{activeFaq === 2 ? '↗' : '↙'}</span></button>
                                    <div className={`accordion-content ${activeFaq === 2 ? 'open' : ''}`}>
                                        <p>Our commitment to vibrant colors and sharp details.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Banner Section (Purple) */}
            <section className="banner-section">
                <h2 className="banner-text reveal-scale">MAKE YOUR BRAND STAND<br/>OUT WITH <span className="text-pink">PRINTIVA</span></h2>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="testimonials-header reveal-up">
                    <h5 className="subtitle-orange">Testimonials</h5>
                    <h2 className="section-title-white">Stories Worth<br/>Printing <span className="text-orange">Today</span></h2>
                </div>
                <div className="testimonials-grid">
                    <div className="testi-card card-purple reveal-up reveal-stagger-1">
                        <h4>DANIEL MOORE</h4>
                        <p>Printiva makes printing stress-free - the results always look sharp and professional. It feels
                            like they understand exactly what I want.</p>
                        <span className="quote-icon">"</span>
                    </div>
                    <div className="testi-card card-orange reveal-up reveal-stagger-2">
                        <h4>SOFIA RAMIREZ</h4>
                        <p>Every project feels effortless with Printiva, from design to final delivery always. The prints
                            carry both quality and creativity combined.</p>
                        <span className="quote-icon">"</span>
                    </div>
                    <div className="testi-card card-green reveal-up reveal-stagger-3">
                        <h4>JAMES LEE</h4>
                        <p>What I love about Printiva is how fast and reliable everything feels today. The outcome is always
                            consistent, clear, and boldly sharp.</p>
                        <span className="quote-icon">"</span>
                    </div>
                    <div className="testi-card card-pink span-2 reveal-up reveal-stagger-4">
                        <h4>EMILY CARTER</h4>
                        <p>Printiva transforms ideas into visuals that actually stand out with impact. It's more than
                            printing — it's a creative partnership built on trust.</p>
                        <span className="quote-icon">"</span>
                    </div>
                    <div className="testi-card card-orange-dark span-2 reveal-up reveal-stagger-5">
                        <h4>MICHAEL TAN</h4>
                        <p>From the first order, Printiva impressed me with detail and precision every time. Every print
                            feels like it was made with care and consistency.</p>
                        <span className="quote-icon">"</span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetail;
