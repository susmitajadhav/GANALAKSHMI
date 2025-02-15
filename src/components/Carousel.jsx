import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/carousel.css";

// Image array
const images = [
  "https://img.freepik.com/free-photo/mechanic-controls-robotic-arm-futuristic-production-line-generated-by-ai_188544-20028.jpg?t=st=1739018546~exp=1739022146~hmac=077267b7c3ccfbcdbc621ebc30f92e39280dd3c0c82dfbe2748dce13ff13e56d&w=740",
  "https://img.freepik.com/premium-photo/worker-hardhat-blue-jumpsuit-sits-control-panel-large-industrial-setting_878635-28768.jpg?w=826",
  "https://img.freepik.com/premium-photo/two-workers-safety-gear-are-looking-tablet-while-standing-field_34152-4092.jpg?w=826"
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      {/* Animated Image Slides */}
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt="Carousel Slide"
          className="carousel-image"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="dots-container">
        {images.map((_, i) => (
          <span key={i} className={`dot ${i === index ? "active" : ""}`} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
