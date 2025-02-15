import React, { useState, useEffect, useCallback } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userMessage: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLoading(true);

      emailjs
        .send(
          "service_hsx6zkv", // Your EmailJS service ID
          "template_a7twor8", // Your template ID
          {
            from_name: formData.userName,
            from_email: formData.userEmail,
            message: formData.userMessage,
          },
          "0qB6fuI7GqVF0dC8I" // Your EmailJS public key
        )
        .then(
          () => {
            setStatusMessage("Your message has been sent successfully!");
            setFormData({ userName: "", userEmail: "", userMessage: "" });
          },
          () => {
            setStatusMessage("Something went wrong. Please try again.");
          }
        )
        .finally(() => {
          setLoading(false);
        });
    },
    [formData]
  );

  return (
    <section className="contact-section">
      <div className="container">
        <h2>Contact Us</h2>
        <p>Feel free to reach out to us for any inquiries.</p>

        <div className="contact-content">
          {/* Contact Details Section */}
          <div className="contact-details" data-aos="fade-right">
            <h3>Our Contact Details</h3>
            <ul>
              <li><i className="fas fa-phone-alt"></i> <strong>Phone:</strong> 9422225058, 9011731731, 9822760005</li>
              <li><i className="fas fa-envelope"></i> <strong>Email:</strong> info@nrfabricator.com</li>
              <li><i className="fas fa-map-marker-alt"></i> <strong>Office:</strong> G-58, M.I.D.C, Ahmednagar, Maharashtra - 414111</li>
              <li><i className="fas fa-clock"></i> <strong>Working Hours:</strong> Mon - Sat: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left">
            <input type="text" name="userName" value={formData.userName} onChange={handleChange} placeholder="Your Name" required />
            <input type="email" name="userEmail" value={formData.userEmail} onChange={handleChange} placeholder="Your Email" required />
            <textarea name="userMessage" value={formData.userMessage} onChange={handleChange} placeholder="Your Message" required></textarea>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
            {statusMessage && <p className="status-message">{statusMessage}</p>}
          </form>
        </div>

        {/* Google Map Section */}
        <div className="map-container" data-aos="fade-up">
          <h3>Visit Our Office</h3>
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
