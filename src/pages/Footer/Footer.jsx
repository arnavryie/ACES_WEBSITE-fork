import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, GithubIcon } from '../../components/SocialIcons';
import acesLogo from '/aces-logo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="aces-footer">
      <div className="aces-footer-container">

        {/* Brand Section – Logo + Name + Subtitle */}
        <div className="footer-brand">
          <div className="footer-brand-header">
            <img
              src={acesLogo}
              alt="ACES Logo"
              className="footer-logo"
            />
            <span className="footer-brand-name">
              Association of Computer<br />
              Engineering Students
            </span>
          </div>
          <p className="footer-brand-subtitle">
            Dr. D.Y. Patil Institute of Technology, Pimpri, Pune.
          </p>
        </div>

        {/* Socials Column */}
        <div className="footer-column footer-socials-column">
          <h3 className="footer-column-title">Socials</h3>
          <ul className="footer-socials-list flex flex-row md:flex-col justify-center md:justify-start items-center md:items-start gap-3 md:gap-2.5">
            <li>
              <a
                href="https://www.instagram.com/aces.dit/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link flex items-center gap-2"
                aria-label="Instagram"
              >
                <InstagramIcon className="footer-social-icon w-7 h-7 md:w-5 md:h-5" />
                <span className="footer-social-text hidden md:inline text-sm">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/acesdit/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link flex items-center gap-2"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="footer-social-icon w-7 h-7 md:w-5 md:h-5" />
                <span className="footer-social-text hidden md:inline text-sm">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/acesdit"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link flex items-center gap-2"
                aria-label="GitHub"
              >
                <GithubIcon className="footer-social-icon w-7 h-7 md:w-5 md:h-5" />
                <span className="footer-social-text hidden md:inline text-sm">GitHub</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Column */}
        <div className="footer-column">
          <h3 className="footer-column-title">Contact Us</h3>
          <ul>
            <li>
              <a href="mailto:aces.dit@dypvp.edu.in" className="footer-social-link">
                <Mail className="footer-social-icon" style={{ color: '#b22b2f' }} />
                aces.dit@dypvp.edu.in
              </a>
            </li>
          </ul>
        </div>

        {/* Other Links Column */}
        <div className="footer-column">
          <h3 className="footer-column-title">Other Links</h3>
          <ul>

            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Strip */}
      <div className="footer-copyright">
        © {new Date().getFullYear()} Association of Computer Engineering Students, DIT. All rights reserved.
      </div>

      {/* Large ACES Wordmark */}
      <div className="footer-wordmark" aria-hidden="true">
        <span className="footer-wordmark-text">ACES</span>
      </div>
    </footer>
  );
}
