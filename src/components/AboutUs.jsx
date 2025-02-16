import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/about.css"; 

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Disable AOS animations on small screens
    if (window.innerWidth < 768) {
      document.querySelectorAll("[data-aos]").forEach(el => el.removeAttribute("data-aos"));
    }
  }, []);

  return (
    <section className="about-section_a">
      <div className="about-wrapper_a">
        <h2 className="about-title_a" data-aos="fade-up">About Ganalakshmi</h2>
        <p className="about-subtitle_a" data-aos="fade-up" data-aos-delay="200">
          At GANALAKSHMI, we are dedicated to innovation, quality, and customer satisfaction. 
          Our expertise spans multiple industries, ensuring tailored solutions for every need.
        </p>

        <div className="about-content_a">
          <div className="about-text_a" data-aos="slide-right">
            <h3>Who We Are</h3>
            <p>
              Established with a vision to transform industries, Ghanalakshmi combines expertise 
              with cutting-edge technology. We value trust, integrity, and customer-first solutions.
            </p>
            <p>
              Our team consists of industry experts, engineers, and innovators working tirelessly 
              to develop solutions that push boundaries and create value for our clients.
            </p>
          </div>

          <div className="about-image_a" data-aos="slide-left">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6OiQv1Da6xK6keIC0QSvmD-OG1DsQk5O1A&s" 
              alt="Ghanalakshmi Office" 
            />
          </div>
        </div>

        <div className="about-values_a">
          <div className="about-value-card_a" data-aos="zoom-in">
            <h4>Our Mission</h4>
            <p>To deliver high-quality solutions that empower businesses and enhance their growth.</p>
          </div>

          <div className="about-value-card_a" data-aos="zoom-in" data-aos-delay="200">
            <h4>Our Vision</h4>
            <p>To be the most trusted and innovative company in our field, setting benchmarks of success.</p>
          </div>

          <div className="about-value-card_a" data-aos="zoom-in" data-aos-delay="400">
            <h4>Our Values</h4>
            <p>Integrity, Excellence, Innovation, and Customer Satisfaction are at the heart of everything we do.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
