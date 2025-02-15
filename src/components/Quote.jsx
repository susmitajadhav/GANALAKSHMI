import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/quote.css";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote Request Submitted:", formData);
    alert("Your quote request has been submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="quote-page">
      {/* Animated Heading */}
      <motion.h1
        className="quote-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Request a Quote
      </motion.h1>

      {/* Quote Form */}
      <motion.form
        className="quote-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.05 }}
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.05 }}
        />
        <motion.input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.05 }}
        />
        <motion.input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          whileFocus={{ scale: 1.05 }}
        />
        <motion.select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.05 }}
        >
          <option value="">Select a Service</option>
          <option value="Consultancy">Consultancy</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Electrical & Instrumentation">
            Electrical & Instrumentation
          </option>
          <option value="Industrial Automation">Industrial Automation</option>
          <option value="Machinery & Spares Supply">
            Machinery & Spares Supply
          </option>
        </motion.select>
        <motion.textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.05 }}
        ></motion.textarea>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="quote-submit-btn"
          whileHover={{ scale: 1.1, backgroundColor: "#ff9800" }}
        >
          Get a Quote
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Quote;
