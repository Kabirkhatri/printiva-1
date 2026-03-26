import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const [dropdowns, setDropdowns] = useState({ services: false, pages: false });
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile nav on route change
    useEffect(() => {
        setNavOpen(false);
        setDropdowns({ services: false, pages: false });
    }, [location]);

    // Handle outside click for dropdowns
    useEffect(() => {
        const handleClick = (e) => {
            if (!e.target.closest('.nav-dropdown')) {
                setDropdowns({ services: false, pages: false });
            }
        };
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    const toggleDropdown = (e, key) => {
        e.preventDefault();
        setDropdowns(prev => ({ 
            services: key === 'services' ? !prev.services : false,
            pages: key === 'pages' ? !prev.pages : false 
        }));
    };

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''} ${navOpen ? 'nav-open' : ''}`}>
            <Link to="/" className="logo">
                <h1 className="logo-text">Printiva</h1>
            </Link>
            <nav>
                <ul>
                    <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                    <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
                    <li className={`nav-dropdown ${dropdowns.services ? 'open' : ''}`}>
                        <button className="dropdown-toggle" onClick={(e) => toggleDropdown(e, 'services')}>
                            Services <span className="drop-icon">⌄</span>
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>All Services</Link></li>
                            <li><Link to="/service-detail" className={location.pathname === '/service-detail' ? 'active' : ''}>Service Detail</Link></li>
                        </ul>
                    </li>
                    <li className={`nav-dropdown ${dropdowns.pages ? 'open' : ''}`}>
                        <button className="dropdown-toggle" onClick={(e) => toggleDropdown(e, 'pages')}>
                            Pages <span className="drop-icon">⌄</span>
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
                            <li><Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>Team</Link></li>
                            <li><Link to="/pricing" className={location.pathname === '/pricing' ? 'active' : ''}>Pricing</Link></li>
                            <li><Link to="/faqs" className={location.pathname === '/faqs' ? 'active' : ''}>FAQs</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/contact-us" className={location.pathname === '/contact-us' ? 'active' : ''}>Contact Us</Link></li>
                </ul>
            </nav>
            <div className="cta">
                <Link to="/contact-us" className="btn btn-blue">ORDER NOW</Link>
            </div>
            <button 
                className={`hamburger ${navOpen ? 'is-open' : ''}`} 
                id="hamburger" 
                aria-label="Open menu" 
                aria-expanded={navOpen}
                onClick={(e) => { e.stopPropagation(); setNavOpen(!navOpen); }}
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
        </header>
    );
};

export default Navbar;
