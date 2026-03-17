/* ============================================================
   Printiva – Dynamic Site Script
   Features:
   1. Navbar scroll effect (scrolled class)
   2. Active nav link detection (auto from URL)
   3. Dropdown menus – Services & Pages (click/hover)
   4. Mobile hamburger menu
   5. Animated stat counters (IntersectionObserver)
   6. Scroll reveal animations
   7. FAQ accordion
   8. Contact form redirect to thank-you.html
   9. Smooth scrolling for same-page anchors
============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------------
       1. Navbar Scroll Effect
    ---------------------------------------------------------- */
    const navbar = document.querySelector('.navbar');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run on load in case page is already scrolled


    /* ----------------------------------------------------------
       2. Auto-highlight Active Nav Link based on current page
    ---------------------------------------------------------- */
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a[data-page]');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });


    /* ----------------------------------------------------------
       3. Dropdown Menus (Services & Pages)
    ---------------------------------------------------------- */
    const dropdowns = document.querySelectorAll('.nav-dropdown');

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');

        if (!toggle || !menu) return;

        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const isOpen = dropdown.classList.contains('open');

            // Close all other dropdowns
            dropdowns.forEach(d => d.classList.remove('open'));

            if (!isOpen) {
                dropdown.classList.add('open');
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-dropdown')) {
            dropdowns.forEach(d => d.classList.remove('open'));
        }
    });


    /* ----------------------------------------------------------
       4. Mobile Hamburger Menu
    ---------------------------------------------------------- */
    const hamburger = document.getElementById('hamburger');
    const navEl = document.querySelector('.navbar nav');

    if (hamburger && navEl) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navbar.classList.toggle('nav-open');
            hamburger.classList.toggle('is-open');
            hamburger.setAttribute('aria-expanded',
                navbar.classList.contains('nav-open') ? 'true' : 'false'
            );
        });

        // Close mobile nav when a link is clicked
        navEl.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('nav-open');
                hamburger.classList.remove('is-open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar')) {
                navbar.classList.remove('nav-open');
                hamburger.classList.remove('is-open');
            }
        });
    }


    /* ----------------------------------------------------------
       5. Animated Stat Counters
    ---------------------------------------------------------- */
    const statItems = document.querySelectorAll('.stat-item h2');

    if (statItems.length > 0) {
        const animateCounter = (el) => {
            // Extract numeric value (ignore dot/text markers)
            const text = el.innerHTML;
            // Find the number at the start
            const match = text.match(/^(\d+)/);
            if (!match) return;

            const target = parseInt(match[1]);
            const suffix = text.replace(/^\d+/, ''); // Everything after the number
            const duration = 1800;
            const startTime = performance.now();

            const step = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease-out cubic
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
    }


    /* ----------------------------------------------------------
       6. Scroll Reveal Animations
    ---------------------------------------------------------- */
    // Hero / page header on load
    const initReveals = document.querySelectorAll('.hero-content, .page-header');
    initReveals.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });

    // Add reveal classes
    const addClasses = (selector, classes) => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add(...classes.split(' '));
        });
    };

    addClasses(
        '.about-text, .about-image, .services-header-split, .services-title, ' +
        '.pricing-header, .team-header, .contact-header, .service-detail-header, ' +
        '.stats-text-area, .stats-video',
        'reveal-up'
    );

    addClasses('.banner-text, .start-project h2', 'reveal-scale');

    const gridSelectors = [
        '.service-card', '.team-card', '.pricing-card',
        '.testi-card', '.showcase-item', '.stat-item', '.sponsor-logos img'
    ];
    gridSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach((item, index) => {
            item.classList.add('reveal-up');
            item.classList.add(`reveal-stagger-${(index % 6) + 1}`);
        });
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal-up, .reveal-scale').forEach(el => {
        revealObserver.observe(el);
    });


    /* ----------------------------------------------------------
       7. FAQ Accordion
    ---------------------------------------------------------- */
    const accordions = document.querySelectorAll('.accordion-button');
    accordions.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            const content = button.nextElementSibling;
            const icon = button.querySelector('.icon-toggle');
            const isActive = item.classList.contains('active');

            // Close all
            document.querySelectorAll('.accordion-item').forEach(acc => {
                acc.classList.remove('active');
                acc.querySelector('.accordion-content').classList.remove('open');
                const ic = acc.querySelector('.icon-toggle');
                if (ic) ic.textContent = '↙';
            });

            // Open current if it was closed
            if (!isActive) {
                item.classList.add('active');
                content.classList.add('open');
                if (icon) icon.textContent = '↗';
            }
        });
    });


    /* ----------------------------------------------------------
       8. Contact Form – Redirect to Thank You
    ---------------------------------------------------------- */
    const contactForm = document.querySelector('.printiva-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = contactForm.querySelector('button[type="submit"]');
            if (btn) {
                btn.textContent = 'Sending…';
                btn.disabled = true;
                btn.style.opacity = '0.7';
            }

            setTimeout(() => {
                window.location.href = 'thank-you.html';
            }, 800);
        });
    }


    /* ----------------------------------------------------------
       9. Smooth Scrolling for Same-Page Anchors
    ---------------------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return; // skip bare hashes
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

}); // end DOMContentLoaded
