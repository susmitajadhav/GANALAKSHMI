import React, { lazy, Suspense } from "react";
import ContactUs from "../components/ContactUs";


const ContactPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading Navbar...</div>}>
      
      </Suspense>

      <ContactUs />

      <Suspense fallback={<div>Loading Footer...</div>}>
    
      </Suspense>
    </div>
  );
};

export default ContactPage;
