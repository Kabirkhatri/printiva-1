import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
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

        document.querySelectorAll('.reveal-up, .reveal-scale, .team-card, .testi-card, .stat-item, .sponsor-logos img').forEach(el => {
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

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <h1 className="page-title">About <span className="text-orange">Us</span></h1>
                <p className="breadcrumbs"><Link to="/">Home</Link> <span>&#8594;</span> <span className="current">About
                        Us</span></p>
            </section>

            {/* About Section (Blue Background) */}
            <section className="about-blue-section">
                <div className="container about-flex">
                    <div className="about-text reveal-up">
                        <h5 className="subtitle-orange">About Us</h5>
                        <h2 className="section-title-white">Made To<br/><span className="section-title-orange">Standout</span></h2>
                        <p className="about-desc">We turn your wildest ideas into prints that pop. From sharp details to bold
                            colors, every piece is crafted to stand out and stay remembered. We don't just print on paper —
                            we print on vibes, energy, and creativity that lasts.</p>
                    </div>
                    <div className="about-image reveal-up">
                        <img src="https://templates.casloop.net/printiva/wp-content/uploads/sites/59/2025/08/graphic-technician-s-hands-silkscreen-printing-wit-2025-04-03-19-22-12-utc-1.jpg"
                            alt="Printing Technician" />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section-blue">
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

                <div className="stats-numbers-blue">
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

            {/* Sponsors Section (Blue) */}
            <section className="sponsors-blue">
                <h3 className="sponsors-title-white">Sponsors</h3>
                <div className="sponsor-logos">
                    <img src="https://templates.casloop.net/printiva/wp-content/uploads/sites/59/2025/09/Sponsor-2.png"
                        alt="PhotoCatz" className="reveal-up reveal-stagger-1"/>
                    <img src="https://templates.casloop.net/printiva/wp-content/uploads/sites/59/2025/09/Sponsor-3.png"
                        alt="PhotoDogz" className="reveal-up reveal-stagger-2"/>
                    <img src="https://templates.casloop.net/printiva/wp-content/uploads/sites/59/2025/09/Sponsor-4.png"
                        alt="PhotoPetz" className="reveal-up reveal-stagger-3"/>
                    <img src="https://templates.casloop.net/printiva/wp-content/uploads/sites/59/2025/09/Sponsor-5.png"
                        alt="SeaLight" className="reveal-up reveal-stagger-4"/>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
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

export default About;
