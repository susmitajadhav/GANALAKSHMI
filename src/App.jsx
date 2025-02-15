import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./components/ProductDetail";  // ✅ Import ProductDetail page
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Carousel from "./components/Carousel";
import Quote from "./components/Quote";
import ServiceDetail from "./components/ServiceDetail";


function App() {
  return (
    <>
      <Navbar />
      <Routes  basename="/GANALAKSHMI">
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetail />} /> {/* ✅ Dynamic Product Detail Route */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Getquote" element={<Quote />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
