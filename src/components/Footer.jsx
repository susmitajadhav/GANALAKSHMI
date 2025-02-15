import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info Section */}
        <div className="footer-section company-info">
          <h3>Company</h3>
          <p>A108 Adam Street</p>
          <p>New York, NY 535022</p>
          <p><strong>Phone:</strong> +1 569 55488 55</p>
          <p><strong>Email:</strong> info@example.com</p>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaLinkedin /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/Product">Product</Link></li>
            <li><Link to="/Gallery">Gallery</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Product Management</li>
            <li>Marketing</li>
            <li>Graphic Design</li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-section newsletter">
          <h3>Our Newsletter</h3>
          <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>© Copyright Company. All Rights Reserved</p>
        <p>Designed by BootstrapMade | Distributed by ThemeWagon</p>
      </div>
    </footer>
  );
};

export default Footer;
