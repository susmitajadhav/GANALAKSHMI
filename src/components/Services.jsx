import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/services.css";
import AOS from "aos";
import "aos/dist/aos.css";
import serviceData from "../data/servicesData";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="services">
      <div className="container_services">
        <h2 className="title_services" data-aos="fade-up">Our Services</h2>
        <p className="subtitle_services" data-aos="fade-up">We offer top-notch services to meet your needs.</p>
        <div className="services-grid">
          {serviceData.map((service) => (
            <div className="service-card" key={service.id} data-aos="flip-left">
              <div className="image-container" data-aos="zoom-in">
                <img src={service.image} alt={service.title} className="service-img" />
              </div>
              <h3 data-aos="fade-down">{service.title}</h3>
              <p data-aos="fade-right">{service.description}</p>
              <Link to={`/service/${service.id}`}>
                <button className="animated-button" data-aos="fade-up">Learn More</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
