//home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/home.css";
import Carousel from "../components/Carousel"; // Animated carousel
import ReviewSection from "./ReviewSection"; // Customer reviews
import LiveBackground from "./LiveBackground"; // Background animation
import {
  FaProjectDiagram,
  FaUserTie,
  FaGraduationCap,
  FaCertificate
} from "react-icons/fa"; // Icons

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // State for animated counters
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [machinery, setMachinery] = useState(0);
  const [electrical, setElectrical] = useState(0);
  useEffect(() => {
    const animateCounter = (setter, target) => {
      let count = 0;
      const interval = setInterval(() => {
        setter((prev) => {
          if (prev >= target) {
            clearInterval(interval);
            return target;
          }
          return prev + 1;
        });
      }, 30);
    };

    animateCounter(setProjects, 150);
    animateCounter(setClients, 200);
    animateCounter(setMachinery, 120);
    animateCounter(setElectrical, 180);
  }, []);


  const products = [
    { id: 1, name: "12VDC Relay Card1", price: "$60.00", image: "https://ennovatechnology.com/IORELAY/15.png" },
    { id: 2, name: "12VDC Relay Card2", price: "$21.00", image: "https://ennovatechnology.com/IORELAY/555.png" },
    { id: 3, name: "12VDC Relay Card3", price: "$41.00", image: "https://ennovatechnology.com/IORELAY/7.png" },
    { id: 4, name: "12VDC Relay Card4", price: "$18.00", image: "/images/product4.jpg" },
    { id: 5, name: "12VDC Relay Card5", price: "$42.00", image: "https://ennovatechnology.com/IORELAY/3.png" },
    { id: 6, name: "12VDC Relay Card6", price: "$39.00", image: "https://ennovatechnology.com/IORELAY/3.png" },
  ];
  // Customer Logos (Replace with actual logos)
  const customers = [
    { id: 1, name: "G.M. Sugars", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVaAvEMoDkNVU9kw5GxmqgwQMGRzwdMz20iA&s" },
    { id: 2, name: "Anvisha Sugars", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsDcwXQ2w9u4FMlEf_MMgtV0UGOblUKItSPQ&s" },
    { id: 3, name: "Deccan Sugars", logo: "https://cdn.pixabay.com/photo/2023/02/01/00/54/company-7759278_1280.png" },
    { id: 4, name: "Rupmata Jaggery", logo: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCIMz4eaUQLPv43QzcuOfC_Ai8z7OA44WaHe3WmVcfYJjA9ZM0qmT434Ks9K5ZxqIM3-4&usqp=CAU   " },
    { id: 5, name: "X-India Pvt. Ltd.", logo: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN1Q3VOJFdLdtyUW-eowuvFSfjMOVctDZbVQ&s   " },

  ];

 

  return (
    <div className="home">
      <LiveBackground /> {/* Live Animation Background */}

      {/* Animated Carousel */}
      <Carousel />

      <section className="projects-handled">
      <h2 data-aos="fade-up">Projects Handled</h2>
      <div className="projects-grid">
        <motion.div className="project-box" whileHover={{ scale: 1.05 }}>
          <FaProjectDiagram className="project-icon yellow" />
          <h3>{projects}+</h3>
          <p>Completed Projects</p>
        </motion.div>
        <motion.div className="project-box" whileHover={{ scale: 1.05 }}>
          <FaUserTie className="project-icon blue" />
          <h3>{clients}+</h3>
          <p>Clients Served</p>
        </motion.div>
        <motion.div className="project-box" whileHover={{ scale: 1.05 }}>
          <FaGraduationCap className="project-icon purple" />
          <h3>{machinery.toLocaleString()}+</h3>
          <p>Custom Machinery</p>
        </motion.div>
        <motion.div className="project-box" whileHover={{ scale: 1.05 }}>
          <FaCertificate className="project-icon gray" />
          <h3>{electrical.toLocaleString()}+</h3>
          <p>Electrical & Instrumentation</p>
        </motion.div>
      </div>
    </section>

      {/* Our Satisfied Customers - Auto Scrolling Section */}
      <section className="satisfied-customers">
            <h2>Our Satisfied Customers</h2>
            <motion.div
                className="customer-slider"
                animate={{ x: ["100%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            >
                {customers.map((customer) => (
                    <div key={customer.id} className="customer-logo">
                        <img src={customer.logo} alt={customer.name} />
                    </div>
                ))}
            </motion.div>
        </section>


        <motion.div 
      className="about-us-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Image Section */}
      <motion.div
        className="about-image"
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 3 }}
      >
        <img
          src="https://modinatheme.com/html/solarglow-html/assets/img/faq.jpg"
          alt="About Us"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="about-title">
          About <span>Ganalakshmi Engineers</span>
        </h2>
        <motion.p 
          className="about-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        > 
          GANALAKSHMI Associate, established in 2024, specializes in **designing,
          manufacturing, erection & commissioning** for Sugar, Power Plant,
          Co-Generation, Distillery & Ethanol, Khandsari & Jaggery industries.
        </motion.p>
        <motion.p 
          className="about-mission"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Our **mission** is to provide **innovative and cost-effective solutions**,
          ensuring maximum efficiency and productivity.
        </motion.p>
        <motion.button
          className="about-btn"
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 10px 30px rgba(0, 123, 255, 0.5)",
          }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </motion.div>

    
      <section className="product-section">
          <h2 className="title" data-aos="fade-down">Our Products</h2>
          <p className="subtitle" data-aos="fade-up">Explore our wide range of high-quality products.</p>
          
          <div className="product-grid">
            {products.map((product, index) => (
              <Link to={`/product/${product.id}`} key={product.id} className="product-card" data-aos="zoom-in" data-aos-delay={index * 200}>
                <div className="image-container">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="price">{product.price}</p>
                  <button className="buy-now">View Details</button>
                </div>
              </Link>
            ))}
          </div>
        </section>



      {/* Why Choose Us - Enhanced Animation & Responsive */}
      <section className="why-choose-us">
        <h2 data-aos="fade-up">Why Choose Us?</h2>
        <motion.div
          className="features"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="feature-box"
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            data-aos="fade-up"
          >
            <h3>High Quality</h3>
            <p>We ensure top-notch quality in all our products and services.</p>
          </motion.div>
          <motion.div
            className="feature-box"
            whileHover={{ scale: 1.1, rotate: -3 }}
            whileTap={{ scale: 0.9 }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>Customer Satisfaction</h3>
            <p>We prioritize customer happiness and trust.</p>
          </motion.div>
          <motion.div
            className="feature-box"
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3>Innovative Solutions</h3>
            <p>We bring creative and advanced solutions to meet your needs.</p>
          </motion.div>
        </motion.div>
      </section>


      {/* Animated Customer Reviews */}
      <ReviewSection />
    </div>
  );
};

export default Home;
