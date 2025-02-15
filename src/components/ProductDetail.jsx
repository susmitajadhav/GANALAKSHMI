import React from "react";
import { useParams } from "react-router-dom";
import "../styles/productDetail.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

// Sample Product Data
const productData = {
  1: {
    name: "12VDC Relay Card1",
    description: "High-quality relay card suitable for industrial automation.",
    image: "https://ennovatechnology.com/IORELAY/15.png",
    price: "$60.00",
    features: ["Reliable performance", "Compact size", "Energy efficient"],
    applications: ["Industrial automation", "Power distribution", "Control systems"],
  },
  2: {
    name: "12VDC Relay Card2",
    description: "Durable and reliable relay card for everyday use.",
    image: "https://ennovatechnology.com/IORELAY/555.png",
    price: "$21.00",
    features: ["Long lifespan", "Heat-resistant", "Optimized for IoT"],
    applications: ["Security systems", "IoT projects", "Home automation"],
  },
  3: {
    name: "12VDC Relay Card3",
    description: "Efficient and compact relay card for automation systems.",
    image: "https://ennovatechnology.com/IORELAY/7.png",
    price: "$41.00",
    features: ["High switching speed", "Robust design", "Low power consumption"],
    applications: ["Automated lighting", "Robotics", "Smart grids"],
  },
  4: {
    name: "24VDC Relay Card",
    description: "Advanced relay card for high-power applications.",
    image: "https://ennovatechnology.com/IORELAY/1.png",
    price: "$75.00",
    features: ["High voltage capacity", "Short-circuit protection", "Stable operation"],
    applications: ["Power plants", "Factory automation", "Energy management"],
  },
  5: {
    name: "5VDC Relay Card",
    description: "Compact relay card designed for embedded systems.",
    image: "https://ennovatechnology.com/IORELAY/2.png",
    price: "$35.00",
    features: ["Compact design", "Minimal heat dissipation", "Plug-and-play"],
    applications: ["Microcontroller projects", "Smart home devices", "Prototyping"],
  },
  6: {
    name: "Multi-Channel Relay Card",
    description: "Supports multiple relays for high-efficiency switching.",
    image: "https://ennovatechnology.com/IORELAY/3.png",
    price: "$120.00",
    features: ["Multiple relay outputs", "Fast response time", "Heavy-duty support"],
    applications: ["Industrial automation", "HVAC systems", "Process control"],
  },
};

const ProductInfo = () => {
  const { id } = useParams();
  const product = productData[id];

  if (!product) {
    return <h2 className="info-not-found">Product not found</h2>;
  }

  return (
    <section className="info-container" data-aos="zoom-in">
      <div className="info-box">
        {/* Left Side - Product Image */}
        <div className="info-image">
          <img src={product.image} alt={product.name} />
        </div>

        {/* Right Side - Product Information */}
        <div className="info-details">
          <h2 className="info-title">{product.name}</h2>
          <p className="info-price">{product.price}</p>
          <p className="info-description">{product.description}</p>

          <h3>Features:</h3>
          <ul className="info-list">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <h3>Applications:</h3>
          <ul className="info-list">
            {product.applications.map((app, index) => (
              <li key={index}>{app}</li>
            ))}
          </ul>

          <button className="buy-now">Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
