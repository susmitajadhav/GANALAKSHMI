import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./components/ProductDetail"; // ✅ Import ProductDetail page
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Carousel from "./components/Carousel";
import Quote from "./components/Quote";
import ServiceDetail from "./components/ServiceDetail";

function App() {
  return (
    <Router basename="/GANALAKSHMI"> {/* ✅ Ensuring correct routing when deployed */}
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetail />} /> {/* ✅ Dynamic Product Detail Route */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service/:id" element={<ServiceDetail />} /> {/* ✅ Dynamic Service Detail Route */}
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/getquote" element={<Quote />} /> {/* ✅ Fixed route casing */}
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
