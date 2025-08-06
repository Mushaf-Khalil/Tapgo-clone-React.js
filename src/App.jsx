import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/main.css'; // Your main global styles
import Navbar from './components/Navbar';
import RestaurantSection from './components/ResturantSection';
import TailoredSection from './components/TailoredSection';
import Customers from './components/Customers';
import TestimonialsSection from './components/TestimonialSection';
import WhatWeOffer from './components/whatWeoffer';
import CustomPOSSection from './components/CustomPOSSection'; // <-- CORRECTED IMPORT
import FAQSection from './components/FAQSection';
import ContactFormSection from './components/ContactFormSection';
import Footer from './components/Footer';

// IMPORTANT: Choose one of these paths based on where you put PricingPage.jsx
import PricingPage from './sections/PricingPage'; // OR: import PricingPage from './sections/PricingPage';

function App() {
  return (
    <Router> {/* This must wrap everything */}
      <Navbar /> 

      <Routes>
        <Route
          path="/"
          element={
            <>
              <RestaurantSection />
              <TailoredSection />
              <Customers />
              <TestimonialsSection />
              <WhatWeOffer />
              <CustomPOSSection />
              <FAQSection />
              <ContactFormSection />
            </>
          }
        />
        <Route path="/pricing" element={<PricingPage />} />
        {/* Add more routes here, e.g., <Route path="/kiosk" element={<KioskPage />} /> */}
      </Routes>

      <Footer /> 
    </Router>
  );
}

export default App;