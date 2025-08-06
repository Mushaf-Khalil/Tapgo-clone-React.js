// src/pages/PricingPage.jsx
import React from 'react';
import PricingPlansSection from '../sections/PricingPage'; // The component we just built
import FAQSection from '../components/FAQSection'; // Your existing FAQ component
import ContactFormSection from '../components/ContactFormSection'; 
import '../styles/PricingPage.css'// Your existing ContactForm component
// Import any other sections that are part of your pricing page layout

const PricingPage = () => {
  return (
    <>
      {/* You might have a specific hero section for the pricing page here */}
      <PricingPlansSection />
      {/* Add other sections that are part of the pricing page, e.g., */}
      {/* <IncludedInAllPlansSection /> */}
      {/* <AddOnsSection /> */}
      <FAQSection />
      <ContactFormSection />
      {/* Navbar and Footer are handled in App.js if they're global */}
    </>
  );
};

export default PricingPage;