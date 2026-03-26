import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
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

        document.querySelectorAll('.reveal-up, .reveal-scale, .pricing-card, .testi-card').forEach(el => {
            revealObserver.observe(el);
        });

        return () => revealObserver.disconnect();
    }, []);

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <h1 className="page-title text-blue">Pricing</h1>
                <p className="breadcrumbs"><Link to="/">Home</Link> <span>&#8594;</span> <span
                        className="current">Pricing</span></p>
            </section>

            {/* Pricing Section */}
            <section className="pricing-section-blue">
                <div className="pricing-header reveal-up">
                    <h5 className="subtitle-orange">Our Pricing</h5>
                    <h2 className="section-title-white">Creative<br/><span className="text-pink">Packages</span></h2>
                </div>

                <div className="pricing-grid">
                    {/* Starter Pack */}
                    <div className="pricing-card card-purple reveal-up reveal-stagger-1">
                        <h4>STARTER PACK</h4>
                        <p className="pack-desc">Perfect for quick prints and small creative projects that need a clean finish.
                        </p>
                        <div className="price">
                            <span className="currency">$</span><span className="amount">49</span> <span className="interval">/
                                Pack</span>
                        </div>
                        <ul className="features-list">
                            <li>Business cards</li>
                            <li>Flyers & leaflets</li>
                            <li>Posters (A4)</li>
                            <li>Stickers & labels</li>
                            <li>Simple brochures</li>
                        </ul>
                        <Link to="/contact-us" className="btn btn-cream-purple">GET STARTED</Link>
                    </div>

                    {/* Pro Pack */}
                    <div className="pricing-card card-orange featured-pack reveal-up reveal-stagger-2">
                        <h4>PRO PACK</h4>
                        <p className="pack-desc">Ideal for growing brands who want quality prints with more variety and impact.
                        </p>
                        <div className="price">
                            <span className="currency">$</span><span className="amount">129</span> <span className="interval">/
                                Pack</span>
                        </div>
                        <ul className="features-list">
                            <li>Premium posters</li>
                            <li>Folded brochures</li>
                            <li>Presentation prints</li>
                            <li>Custom packaging</li>
                            <li>Creative booklets</li>
                        </ul>
                        <Link to="/contact-us" className="btn btn-cream-orange">GET STARTED</Link>
                    </div>

                    {/* Elite Pack */}
                    <div className="pricing-card card-green reveal-up reveal-stagger-3">
                        <h4>ELITE PACK</h4>
                        <p className="pack-desc">Made for professionals seeking bold, standout prints with top quality and
                            finish.</p>
                        <div className="price">
                            <span className="currency">$</span><span className="amount">249</span> <span className="interval">/
                                Pack</span>
                        </div>
                        <ul className="features-list">
                            <li>Large format prints</li>
                            <li>Premium catalogs</li>
                            <li>Brand stationery</li>
                            <li>Event materials</li>
                            <li>Custom merchandise</li>
                        </ul>
                        <Link to="/contact-us" className="btn btn-cream-green">GET STARTED</Link>
                    </div>
                </div>
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

export default Pricing;
