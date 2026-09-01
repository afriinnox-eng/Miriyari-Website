import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { MailIcon, PhoneIcon, GlobeIcon, PinIcon } from './icons.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="brand" to="/" aria-label="Miriyari Ltd — home">
              <img src={logo} alt="Miriyari logo" />
              <span className="brand-name">
                MIRIYARI<small>LTD · KIGALI</small>
              </span>
            </Link>
            <p className="promise">
              Fueling Africa&rsquo;s tech-driven business future with capital, intelligence, and purpose-built partnerships.
            </p>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/impact">Impact</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Grant Access</Link></li>
              <li><Link to="/services">Investor Connections</Link></li>
              <li><Link to="/services">Direct Investments</Link></li>
              <li><a href="https://www.injizaa.com" target="_blank" rel="noopener">Injizaa.com</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div className="fcontact">
              <a href="mailto:info@miriyari.com"><MailIcon />info@miriyari.com</a>
              <a href="tel:+250789211684"><PhoneIcon />+250 789 211 684</a>
              <a href="https://www.injizaa.com" target="_blank" rel="noopener"><GlobeIcon />Injizaa.com</a>
              <span><PinIcon />KN 112 St, Kigali, Rwanda</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {year} Miriyari Ltd. All rights reserved.</span>
          <span>Mon&ndash;Fri 8:00&ndash;18:00 CAT &middot; Enquiries answered within 48 hours</span>
        </div>
      </div>
    </footer>
  );
}
