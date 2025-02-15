import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import serviceData from "../data/servicesData";
import "../styles/serviceDetail2.css";

const ServiceDetail2 = () => {
  const { id } = useParams(); // Get the service ID from the URL

  // Convert id to number because useParams() returns it as a string
  const service = serviceData.find((s) => s.id === parseInt(id));

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (!service) {
    return <h2 className="error-message2">Service Not Found</h2>;
  }

  return (
    <div className="service-detail-container2">
      <div className="image-container2" data-aos="fade-right">
        <img src={service.image} alt={service.title} className="service-image2" />
      </div>
      <div className="service-content2" data-aos="fade-left">
        <h2 className="service-title2">{service.title}</h2>
        <p className="service-description2">{service.details}</p>
        <button
          className="back-button2"
          onClick={() => window.history.back()}
          data-aos="fade-up"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail2;

