import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/about.css"; // Updated filename to avoid conflicts

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-section-container">
      <div className="about-wrapper">
        <h2 className="about-title" data-aos="fade-up">About Ghanalakshmi</h2>
        <p className="about-subtitle" data-aos="fade-up" data-aos-delay="200">
          At GANALAKSHMI, we are dedicated to innovation, quality, and customer satisfaction. 
          Our expertise spans multiple industries, ensuring tailored solutions for every need.
        </p>

        <div className="about-content-section">
          <div className="about-text-box" data-aos="fade-right">
            <h3>Who We Are</h3>
            <p>
              Established with a vision to transform industries, Ghanalakshmi 
              combines expertise with cutting-edge technology. We value trust, integrity, 
              and customer-first solutions.
            </p>
            <p>
              Our team consists of industry experts, engineers, and innovators working tirelessly 
              to develop solutions that push boundaries and create value for our clients.
            </p>
          </div>

          <div className="about-image-box" data-aos="fade-left">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6OiQv1Da6xK6keIC0QSvmD-OG1DsQk5O1A&s" 
              alt="Ghanalakshmi Office" 
            />
          </div>
        </div>

        <div className="about-values-container">
          <div className="about-value-card" data-aos="zoom-in">
            <h4>Our Mission</h4>
            <p>
              To deliver high-quality solutions that empower businesses and enhance their growth.
            </p>
          </div>

          <div className="about-value-card" data-aos="zoom-in" data-aos-delay="200">
            <h4>Our Vision</h4>
            <p>
              To be the most trusted and innovative company in our field, setting benchmarks of success.
            </p>
          </div>

          <div className="about-value-card" data-aos="zoom-in" data-aos-delay="400">
            <h4>Our Values</h4>
            <p>
              Integrity, Excellence, Innovation, and Customer Satisfaction are at the heart of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
