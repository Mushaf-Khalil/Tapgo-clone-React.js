import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/TestimonialSection.css';
import FrydateLogo from '../assets/frydate.png'; 

const TestimonialsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="testimonial-stats-section">
      <div className="testimonial-section-content">
        <div className="stats">
          <div className="stat-card">
            <h3>+35%</h3>
            <p>{t('testimonials.stat1_text')}</p>
          </div>
          <div className="stat-card">
            <h3>−30%</h3>
            <p>{t('testimonials.stat2_text')}</p>
          </div>
        </div>

        <div className="testimonial-card">
          <img src={FrydateLogo} alt="FRYDATE" className="testimonial-logo" />
          <p className="testimonial-text">
            {t('testimonials.quote')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;