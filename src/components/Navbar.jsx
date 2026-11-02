import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

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
  }, [location]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [navOpen]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''} ${navOpen ? 'nav-open' : ''}`}>
      <Link to="/" className="logo">
        <h1 className="logo-text">Printiva</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>
              Services
            </Link>
          </li>

          <li>
            <Link to="/contact-us" className={location.pathname === '/contact-us' ? 'active' : ''}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      <button
        className={`hamburger ${navOpen ? 'is-open' : ''}`}
        id="hamburger"
        aria-label="Open menu"
        aria-expanded={navOpen}
        onClick={e => {
          e.stopPropagation();
          setNavOpen(!navOpen);
        }}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {navOpen && (
        <div className="nav-backdrop" onClick={() => setNavOpen(false)} aria-hidden="true" />
      )}
    </header>
  );
};

export default Navbar;
