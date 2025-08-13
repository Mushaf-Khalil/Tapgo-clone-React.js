import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/main.css'; 
// un cooment the bellow to use it just for git concepting 
// import Navbar from './components/Navbar';
import RestaurantSection from './components/ResturantSection';
import TailoredSection from './components/TailoredSection';
import Customers from './components/Customers';
import TestimonialsSection from './components/TestimonialSection';
import WhatWeOffer from './components/whatWeoffer';
import CustomPOSSection from './components/CustomPOSSection';
import FAQSection from './components/FAQSection';
import ContactFormSection from './components/ContactFormSection';
import Footer from './components/Footer';

import PricingPage from './sections/PricingPage'; 

function App() {
  return (
    <Router> 
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
    
      </Routes>

      <Footer /> 
    </Router>
  );
}

export default App;