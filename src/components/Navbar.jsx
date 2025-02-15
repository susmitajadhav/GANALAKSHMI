import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/navbar.css";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  // Toggle side menu
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  // Close menu when clicking a link
  const closeMenu = () => {
    setIsSideMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Animated Logo */}
        <motion.div 
          className="company-name"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/">Ganalakshmi Engineers</Link>
        </motion.div>
      </div>

      {/* Navigation Section */}
      <nav className="nav">
        <ul className="nav-links">
          {["Home", "About", "Services", "Product", "Gallery", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to={`/${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </Link>
            </motion.li>
          ))}
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/getquote" className="custom-get-quote-btn">Get a Quote</Link>
          </motion.li>
        </ul>

        {/* Animated Hamburger Menu */}
        <motion.div 
          className={`hamburger ${isSideMenuOpen ? "open" : ""}`} 
          onClick={toggleSideMenu}
          whileTap={{ scale: 0.9 }}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.div>
      </nav>

      {/* Animated Side Menu for Mobile */}
      <AnimatePresence>
        {isSideMenuOpen && (
          <motion.div 
            className="side-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <ul className="side-menu-links">
              {["Home", "About", "Services", "Product", "Gallery", "Contact"].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/${item.toLowerCase()}`} onClick={closeMenu}>
                    {item}
                  </Link>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Link to="/getquote" className="get-quote-btn">Get a Quote</Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
