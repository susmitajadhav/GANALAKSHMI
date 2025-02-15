import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/product.css";

const products = [
  { id: 1, name: "12VDC Relay Card1", price: "$60.00", image: "https://ennovatechnology.com/IORELAY/15.png" },
  { id: 2, name: "12VDC Relay Card2", price: "$21.00", image: "https://ennovatechnology.com/IORELAY/555.png" },
  { id: 3, name: "12VDC Relay Card3", price: "$41.00", image: "https://ennovatechnology.com/IORELAY/7.png" },
  { id: 4, name: "12VDC Relay Card4", price: "$18.00", image: "/images/product4.jpg" },
  { id: 5, name: "12VDC Relay Card5", price: "$42.00", image: "https://ennovatechnology.com/IORELAY/3.png" },
  { id: 6, name: "12VDC Relay Card6", price: "$39.00", image: "https://ennovatechnology.com/IORELAY/3.png" },
];

const Product = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
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
  );
};

export default Product;
