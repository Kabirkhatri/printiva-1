import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {


    // Scroll reveal logic
    useEffect(() => {
        const initReveals = document.querySelectorAll('.hero-content');
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

        document.querySelectorAll('.reveal-up, .reveal-scale, .service-card, .showcase-item, .stat-item, .sponsor-logos img').forEach(el => {
            revealObserver.observe(el);
        });

        return () => {
            revealObserver.disconnect();
        };
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

                // Keep the span logic if suffix contains span (since we use dangerouslySetInnerHTML or native DOM here)
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
            {/* Hero Section */}
            <section id="home" className="hero" ref={sectionRef}>
                <div className="hero-content">
                    <div className="hero-images">
                        <img src="https://templates.casloop.net/printiva/wp-content/uploads/sites/59/2025/08/Tote-Bag.png"
                            alt="Tote Bag" className="hero-img-left" />
                    </div>
                    <div className="hero-text-block">
                        <h1 className="title-bold">THE BEST<br />PRINTING MADE <span className="title-orange">FOR YOU</span></h1>
                        <p className="hero-description">Bring your designs, packaging, and marketing ideas to life<br />with
                            Printiva — <strong>fast, colorful, and high-quality solutions</strong><br />that save time and
                            amplify your identity.</p>
                    </div>
                    <div className="hero-images">
                        <img src="https://templates.casloop.net/printiva/wp-content/uploads/sites/59/2025/08/Sticker-4.png"
                            alt="Stickers" className="hero-img-right" />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about">
                <div className="container about-flex">
                    <div className="about-text reveal-up">
                        <h5 className="subtitle-orange">About Us</h5>
                        <h2 className="section-title-white">Made To<br /><span className="section-title-orange">Standout</span></h2>
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

            {/* Services Section */}
            <section className="services">
                <div className="container">
                    <div className="services-header">
                        <div className="services-title reveal-up">
                            <h5 className="subtitle-light">Print Made Easy</h5>
                            <h2 className="section-title-white">Way to<br /><span className="section-title-green">Create</span> Ideas</h2>
                        </div>
                    </div>

                    <div className="services-grid" style={{ flexWrap: 'wrap' }}>
                        <div className="service-card card-green reveal-up reveal-stagger-1" style={{ flex: '1 1 calc(33.333% - 20px)', minWidth: '250px' }}>
                            <div className="icon">🏷️</div>
                            <h3>STICKER/LABEL</h3>
                            <p>Premium custom stickers and labels for your brand packaging, available in all shapes.</p>
                            <Link to="/service-detail" className="read-more">READ MORE</Link>
                        </div>
                        <div className="service-card card-pink reveal-up reveal-stagger-2" style={{ flex: '1 1 calc(33.333% - 20px)', minWidth: '250px' }}>
                            <div className="icon">📦</div>
                            <h3>PACKAGING</h3>
                            <p>Custom packaging solutions to make your products stand out on any shelf or display.</p>
                            <Link to="/service-detail" className="read-more">READ MORE</Link>
                        </div>
                        <div className="service-card card-purple reveal-up reveal-stagger-3" style={{ flex: '1 1 calc(33.333% - 20px)', minWidth: '250px' }}>
                            <div className="icon">📓</div>
                            <h3>STATIONARY</h3>
                            <p>High-quality stationary printing including business cards, letterheads, and envelopes.</p>
                            <Link to="/service-detail" className="read-more">READ MORE</Link>
                        </div>
                        <div className="service-card card-purple reveal-up reveal-stagger-4" style={{ flex: '1 1 calc(50% - 20px)', minWidth: '300px' }}>
                            <div className="icon">📈</div>
                            <h3>MARKETING MATERIALS</h3>
                            <p>Flyers, brochures, and banners that capture attention and drive real engagement.</p>
                            <Link to="/service-detail" className="read-more">READ MORE</Link>
                        </div>
                        <div className="service-card card-purple reveal-up reveal-stagger-5" style={{ flex: '1 1 calc(50% - 20px)', minWidth: '300px' }}>
                            <div className="icon">🏭</div>
                            <h3>INDUSTRIES</h3>
                            <p>Specialized printing services tailored perfectly to match your specific industry needs.</p>
                            <Link to="/service-detail" className="read-more">READ MORE</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Banner Section */}
            <section className="banner-section">
                <h2 className="banner-text reveal-scale">MAKE YOUR BRAND STAND<br />OUT WITH <span className="text-pink">PRINTIVA</span></h2>
            </section>

            {/* Sponsors & Stats */}
            <section className="sponsors-stats">


                <div className="stats-container">
                    <div className="stats-text-area reveal-up">
                        <h5 className="subtitle-orange">Why Printiva</h5>
                        <h2 className="section-title-white">Bold <span className="text-pink">Printing</span><br />Concept</h2>
                        <div className="stats-desc">
                            <p>At Printiva, printing is made simple, fast, and reliable every day. We turn your ideas into
                                bold visuals that stand out.</p>
                            <p>From everyday needs to creative projects, we handle prints with care and detail. Every
                                process feels effortless.</p>
                        </div>
                    </div>
                    <div className="stats-video reveal-up">
                        <img src="https://templates.casloop.net/printiva/wp-content/uploads/sites/59/2025/08/print-house-worker-controlling-printing-process-qu-2025-03-15-00-25-00-utc-800x532.jpg"
                            alt="Video cover" />
                    </div>
                </div>


            </section>

            {/* Showcase Section */}
            <section className="showcase">
                <div className="showcase-header">
                    <h5 className="subtitle-orange">Print Showcase</h5>
                    <h2 className="section-title-blue">Where Ideas<br /><span className="text-pink">Come</span> Alive</h2>
                </div>

                <div className="showcase-grid">
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
        </>
    );
};

export default Home;
