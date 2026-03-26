import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
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

        document.querySelectorAll('.reveal-up, .reveal-scale, .service-card').forEach(el => {
            revealObserver.observe(el);
        });

        return () => revealObserver.disconnect();
    }, []);

    const toggleFaq = (index) => {
        if (activeFaq === index) {
            setActiveFaq(null); // Close if already open
        } else {
            setActiveFaq(index);
        }
    };

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <h1 className="page-title text-blue">Services</h1>
                <p className="breadcrumbs"><Link to="/">Home</Link> <span>&#8594;</span> <span
                        className="current">Services</span></p>
            </section>

            {/* Services Section */}
            <section className="services-blue-bg">
                <div className="container">
                    <div className="services-header-split reveal-up">
                        <div className="left-col">
                            <h5 className="subtitle-orange">Print Made Easy</h5>
                            <h2 className="section-title-white">Way to<br/><span className="section-title-orange">Create</span> Ideas
                            </h2>
                        </div>
                        <div className="right-col">
                            <p className="desc-text-white">We provide printing services that are fast, reliable, and creative.
                                From business essentials to custom designs, every detail is handled with care.</p>
                        </div>
                    </div>

                    <div className="services-grid-6">
                        {/* Row 1 */}
                        <div className="service-card card-cream reveal-up reveal-stagger-1">
                            <div className="icon">🖨️</div>
                            <h3>SMART PRINTS</h3>
                            <p>Turn bright ideas into bold prints that pop with color and clarity. Every detail is made to
                                stand out.</p>
                            <Link to="/service-detail" className="read-more blue-text">READ MORE</Link>
                        </div>
                        <div className="service-card card-orange reveal-up reveal-stagger-2">
                            <div className="icon">👕</div>
                            <h3>BOLD PRODUCTS</h3>
                            <p>Custom merch and creative goods designed to grab attention fast. Strong colors and sleek
                                designs.</p>
                            <Link to="/service-detail" className="read-more">READ MORE</Link>
                        </div>
                        <div className="service-card card-pink reveal-up reveal-stagger-3">
                            <div className="icon">🎨</div>
                            <h3>COLOR MATCH</h3>
                            <p>We make sure your colors stay sharp, rich, and always true. What you see is exactly what
                                comes to life.</p>
                            <Link to="/service-detail" className="read-more">READ MORE</Link>
                        </div>
                        {/* Row 2 */}
                        <div className="service-card card-purple reveal-up reveal-stagger-4">
                            <div className="icon">T</div>
                            <h3>QUICK EDITS</h3>
                            <p>From small tweaks to major fixes, we sharpen your files with ease. Clean layouts and crisp
                                results.</p>
                            <Link to="/service-detail" className="read-more">READ MORE</Link>
                        </div>
                        <div className="service-card card-green reveal-up reveal-stagger-5">
                            <div className="icon">📄</div>
                            <h3>FLEX SIZES</h3>
                            <p>Prints that fit your needs, whether tiny or tall, wide or slim. We make every size shine.</p>
                            <Link to="/service-detail" className="read-more">READ MORE</Link>
                        </div>
                        <div className="service-card card-orange-dark reveal-up reveal-stagger-6">
                            <div className="icon">☁️</div>
                            <h3>CLOUD PRINTS</h3>
                            <p>Upload anytime, anywhere, and pick up when it's ready for you. Simple steps, fast results.
                            </p>
                            <Link to="/service-detail" className="read-more">READ MORE</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Banner Section */}
            <section className="banner-section">
                <h2 className="banner-text reveal-scale">MAKE YOUR BRAND STAND<br/>OUT WITH <span className="text-pink">PRINTIVA</span></h2>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="faq-header text-center reveal-up">
                    <h5 className="subtitle-orange">FAQs</h5>
                    <h2 className="section-title-white">Have a<br/><span className="text-green">Question?</span></h2>
                </div>
                <div className="accordion-container reveal-up">
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
                            <p>Absolutely. From tiny labels to large banners, we adjust to the exact size you need. Just
                                share your dimensions with us, and our team will guide you in choosing the right paper,
                                finish, and format to ensure your prints look perfect at any scale.</p>
                        </div>
                    </div>
                    <div className={`accordion-item ${activeFaq === 2 ? 'active' : ''}`}>
                        <button className="accordion-button" onClick={() => toggleFaq(2)}>DO YOU HELP WITH DESIGN FILES? <span
                                className="icon-toggle">{activeFaq === 2 ? '↗' : '↙'}</span></button>
                        <div className={`accordion-content ${activeFaq === 2 ? 'open' : ''}`}>
                            <p>Yes, our team can help you prepare your files for the best printing results.</p>
                        </div>
                    </div>
                    <div className={`accordion-item ${activeFaq === 3 ? 'active' : ''}`}>
                        <button className="accordion-button" onClick={() => toggleFaq(3)}>WHAT MAKES PRINTIVA DIFFERENT? <span
                                className="icon-toggle">{activeFaq === 3 ? '↗' : '↙'}</span></button>
                        <div className={`accordion-content ${activeFaq === 3 ? 'open' : ''}`}>
                            <p>Our commitment to vibrant colors, sharp details, and an effortless customer experience.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
