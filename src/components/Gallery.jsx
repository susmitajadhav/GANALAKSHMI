import React from "react";
import { motion } from "framer-motion";
import "./../styles/Gallery.css";

const images = [
  { src: "https://5.imimg.com/data5/SELLER/Default/2024/3/398054588/DP/TD/WH/6973140/three-phase-industrial-pcc-panel-1000x1000.jpeg", alt: "Industrial Panel 1" },
  { src: "https://5.imimg.com/data5/SELLER/Default/2020/9/VK/LV/LM/99457312/industrial-automatic-power-factor-panel-1000x1000.jpg", alt: "Industrial Panel 2" },
  { src: "https://tiimg.tistatic.com/fp/1/005/377/industrial-300-kva-apfc-panels-529.jpg", alt: "Industrial Panel 3" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFZ5qMxbsM5cI0KRjyw5ZxjjjNSD0PUlN-Q&s", alt: "Industrial Panel 4" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgXcSQ44u5jKMJcQiQN5g47Jm0I35anKt5QA&s", alt: "Industrial Panel 5" },
  { src: "https://5.imimg.com/data5/VR/MM/JG/SELLER-10475050/mcc-panels-500x500.jpg", alt: "Industrial Panel 6" }
];

const Gallery = () => {
  return (
    <motion.section 
      className="custom-gallery-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 
        className="custom-gallery-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Project Gallery
      </motion.h1>

      <motion.p
        className="custom-gallery-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Explore our latest industrial panel designs and projects.
      </motion.p>

      <div className="custom-gallery-grid">
        {images.map((image, index) => (
          <motion.div 
            key={index} 
            className="custom-gallery-item"
            whileHover={{ scale: 1.08, rotate: 2 }} 
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <img src={image.src} alt={image.alt} className="custom-gallery-image" />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Gallery;
