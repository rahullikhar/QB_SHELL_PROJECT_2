import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="logo-icon"><span>Q</span></div>
              <div className="logo-text">
                <span className="logo-name">Qualibytes</span>
                <span className="logo-sub">IT Academy Pvt. Ltd.</span>
              </div>
            </Link>
            <p className="footer-tagline">
              Transforming careers through industry-focused tech education. Real skills. Real jobs. Real growth.
            </p>
            <div className="footer-social">
              {['LinkedIn', 'YouTube', 'Instagram', 'Twitter'].map(s => (
                <a key={s} href="#!" className="social-chip">{s}</a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul>
              {[
                { to: '/',         label: 'Home' },
                { to: '/about',    label: 'About Us' },
                { to: '/services', label: 'Our Services' },
                { to: '/contact',  label: 'Contact' },
              ].map(l => (
                <li key={l.to}><Link to={l.to} className="footer-link">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Courses</h4>
            <ul>
              {['DevOps & CI/CD', 'Cloud (AWS/Azure)', 'Linux & Shell Scripting', 'Full Stack Development', 'Python & Django', 'Docker & Kubernetes'].map(c => (
                <li key={c}><Link to="/services" className="footer-link">{c}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-icon">📍</span>
                <span>Noida, Uttar Pradesh, India</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <a href="tel:+911234567890" className="footer-link">+91 12345 67890</a>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <a href="mailto:info@qualibytes.in" className="footer-link">info@qualibytes.in</a>
              </li>
              <li>
                <span className="contact-icon">🕐</span>
                <span>Mon–Sat, 9:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Qualibytes IT Academy Pvt. Limited. All rights reserved.</p>
          <p className="footer-credit">Built with ❤️ by our students</p>
        </div>
      </div>
    </footer>
  );
}
