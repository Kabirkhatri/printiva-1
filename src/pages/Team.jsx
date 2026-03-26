import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
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

        document.querySelectorAll('.reveal-up, .reveal-scale, .team-card, .stat-item').forEach(el => {
            revealObserver.observe(el);
        });

        return () => revealObserver.disconnect();
    }, []);

    // Counters logic
    useEffect(() => {
        const statItems = document.querySelectorAll('.stat-item h2');
        if (statItems.length === 0) return;

        const animateCounter = (el) => {
            const text = el.getAttribute('data-value') || el.innerHTML;
            if (!el.getAttribute('data-value')) el.setAttribute('data-value', text);
            
            const match = text.match(/^(\d+)/);
            if (!match) return;

            const target = parseInt(match[1]);
            const suffix = text.replace(/^\d+/, '');
            const duration = 1800;
            const startTime = performance.now();

            const step = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.round(eased * target);
                
                el.innerHTML = current + suffix;

                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            };
            requestAnimationFrame(step);
        };

        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statItems.forEach(el => counterObserver.observe(el));

        return () => counterObserver.disconnect();
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
                <h1 className="page-title text-blue">Team</h1>
                <p className="breadcrumbs"><Link to="/">Home</Link> <span>&#8594;</span> <span className="current">Team</span>
                </p>
            </section>

            {/* Team Section */}
            <section className="team-section" style={{ paddingTop: '100px' }}>
                <div className="team-header text-center reveal-up">
                    <h5 className="subtitle-orange">Our Team</h5>
                    <h2 className="section-title-white">Faces Behind<br/><span className="text-green">Print</span> Ideas</h2>
                </div>
                <div className="team-grid">
                    {/* Team Member 1 */}
                    <div className="team-card reveal-up reveal-stagger-1">
                        <img src="https://templates.casloop.net/printiva/wp-content/uploads/sites/59/2025/08/Print-Team-1-800x1000.jpg"
                            alt="Liam Carter" />
                        <div className="team-info bg-blue">
                            <h4>LIAM CARTER</h4>
                            <p>Print Director</p>
                            <div className="socials">
                                <span>f</span><span>t</span><span>in</span>
                            </div>
                        </div>
                    </div>
                    {/* Team Member 2 */}
                    <div className="team-card reveal-up reveal-stagger-2">
                        <img src="https://templates.casloop.net/printiva/wp-content/uploads/sites/59/2025/08/Print-Team-2-800x1000.jpg"
                            alt="Maya Flores" />
                        <div className="team-info bg-blue">
                            <h4>MAYA FLORES</h4>
                            <p>Design Lead</p>
                            <div className="socials">
                                <span>f</span><span>t</span><span>in</span>
                            </div>
                        </div>
                    </div>
                    {/* Team Member 3 */}
                    <div className="team-card reveal-up reveal-stagger-3">
                        <img src="https://templates.casloop.net/printiva/wp-content/uploads/sites/59/2025/08/Print-Team-3-800x1000.jpg"
                            alt="Sofia Turner" />
                        <div className="team-info bg-blue">
                            <h4>SOFIA TURNER</h4>
                            <p>Project Manager</p>
                            <div className="socials">
                                <span>f</span><span>t</span><span>in</span>
                            </div>
                        </div>
                    </div>
                    {/* Team Member 4 */}
                    <div className="team-card reveal-up reveal-stagger-4">
                        <img src="https://templates.casloop.net/printiva/wp-content/uploads/sites/59/2025/08/Print-Team-4-800x1000.jpg"
                            alt="Ethan Brooks" />
                        <div className="team-info bg-blue">
                            <h4>ETHAN BROOKS</h4>
                            <p>Color Specialist</p>
                            <div className="socials">
                                <span>f</span><span>t</span><span>in</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section-blue" style={{ paddingBottom: 0 }}>
                <div className="stats-container">
                    <div className="stats-text-area reveal-up">
                        <h5 className="subtitle-orange">Why Printiva</h5>
                        <h2 className="section-title-white">Bold <span className="text-pink">Printing</span><br/>Concept</h2>
                        <div className="stats-desc">
                            <p>At Printiva, printing is made simple, fast, and reliable every day. We turn your ideas into
                                bold visuals that stand out with clarity, impact, and quality.</p>
                            <p>From everyday needs to creative projects, we handle prints with care and detail. Our focus is
                                consistency, sharp results, and a process that feels effortless — giving you more than
                                prints, but lasting impact.</p>
                        </div>
                    </div>
                    <div className="stats-video reveal-up">
                        <img src="https://templates.casloop.net/printiva/wp-content/uploads/sites/59/2025/08/print-house-worker-controlling-printing-process-qu-2025-03-15-00-25-00-utc-800x532.jpg"
                            alt="Video cover" />
                    </div>
                </div>

                <div className="stats-numbers-blue" style={{ marginBottom: 0, paddingBottom: '60px' }}>
                    <div className="stat-item reveal-up reveal-stagger-1">
                        <h2 dangerouslySetInnerHTML={{__html: '50<span class="dot-orange">.</span>'}}></h2>
                        <p>Years</p>
                    </div>
                    <div className="stat-item reveal-up reveal-stagger-2">
                        <h2 dangerouslySetInnerHTML={{__html: '120<span class="dot-orange">.</span>'}}></h2>
                        <p>Clients</p>
                    </div>
                    <div className="stat-item reveal-up reveal-stagger-3">
                        <h2 dangerouslySetInnerHTML={{__html: '12<span class="dot-pink">.</span>'}}></h2>
                        <p>Awards</p>
                    </div>
                    <div className="stat-item reveal-up reveal-stagger-4">
                        <h2 dangerouslySetInnerHTML={{__html: '37<span class="dot-green">.</span>'}}></h2>
                        <p>Team</p>
                    </div>
                </div>
            </section>

            {/* Banner Section (Purple from Services) */}
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

export default Team;
