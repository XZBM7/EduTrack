import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaComments, FaBookmark } from 'react-icons/fa';
import '../styles/Navbar-footer.css';

const Footer = () => {
  return (
    <footer className="dashboard-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>EduTrack</h3>
          <p>Your complete education management platform</p>
          <div className="social-links">
            <a href="#"><FaEnvelope /></a>
            <a href="#"><FaComments /></a>
            <a href="#"><FaBookmark /></a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/courses">All Courses</Link></li>
            <li><Link to="/calendar">Academic Calendar</Link></li>
            <li><Link to="/resources">Learning Resources</Link></li>
            <li><Link to="/support">Support Center</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>EduTrack</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/faculty">Our Faculty</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to get updates</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EduTrack. All rights reserved.</p>
        <div className="legal-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/cookies">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;