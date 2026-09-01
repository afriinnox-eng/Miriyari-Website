import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { MenuIcon } from './icons.jsx';

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/impact', label: 'Impact' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav">
        <Link className="brand" to="/" aria-label="Miriyari Ltd — home" onClick={close}>
          <img src={logo} alt="Miriyari logo" />
          <span className="brand-name">
            MIRIYARI<small>LTD · KIGALI</small>
          </span>
        </Link>
        <nav className={`nav-links${open ? ' open' : ''}`} aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={close}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-cta">
          <a className="btn btn-outline btn-sm" href="https://www.injizaa.com" target="_blank" rel="noopener">
            Join Injizaa.com
          </a>
          <Link className="btn btn-gold btn-sm" to="/contact" onClick={close}>
            Get Started
          </Link>
        </div>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}
