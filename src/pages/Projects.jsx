import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
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

        document.querySelectorAll('.reveal-up, .reveal-scale, .showcase-item').forEach(el => {
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
                <h1 className="page-title text-blue">Projects</h1>
                <p className="breadcrumbs"><Link to="/">Home</Link> <span>&#8594;</span> <span
                        className="current">Projects</span></p>
            </section>

            {/* Showcase Section */}
            <section className="showcase">
                <div className="showcase-header reveal-up">
                    <h5 className="subtitle-orange">Print Showcase</h5>
                    <h2 className="section-title-blue">Where Ideas<br/><span className="text-pink">Come</span> Alive</h2>
                </div>

                <div className="showcase-grid projects-grid">
                    <img src="https://templates.casloop.net/printiva/wp-content/uploads/sites/59/2025/08/Project-1-800x576.png"
                        className="showcase-item reveal-up reveal-stagger-1" alt="Shirt" />
                    <img src="https://templates.casloop.net/printiva/wp-content/uploads/sites/59/2025/08/Project-2-800x576.png"
                        className="showcase-item reveal-up reveal-stagger-2" alt="Flyer" />
                    <img src="https://templates.casloop.net/printiva/wp-content/uploads/sites/59/2025/08/Project-3-800x576.png"
                        className="showcase-item reveal-up reveal-stagger-3" alt="Cap" />
                    <img src="https://templates.casloop.net/printiva/wp-content/uploads/sites/59/2025/08/Project-4-800x576.png"
                        className="showcase-item bottom-left reveal-up reveal-stagger-4" alt="Bag" />
                    <img src="https://templates.casloop.net/printiva/wp-content/uploads/sites/59/2025/09/Projectt-5-800x576.png"
                        className="showcase-item bottom-right reveal-up reveal-stagger-5" alt="Stickers" />
                </div>
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

export default Projects;
