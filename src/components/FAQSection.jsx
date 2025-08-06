import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/FAQSection.css'; // Make sure this path is correct

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation();

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  // Get FAQ data directly from the translation file
  const faqData = t('faq_section.items', { returnObjects: true });

  return (
    <section className="faq-section">
      <div className="faq-section-content">
        <div className="faq-container">
          <div className="faq-sidebar">
            <h2 className="faq-sidebar-title">{t('faq_section.title')}</h2>
            <p className="faq-sidebar-subtitle">{t('faq_section.subtitle')}</p>
          </div>
          <div className="faq-content">
            {faqData.map((item, index) => (
              <div className="faq-item" key={index}>
                <button
                  className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => handleToggle(index)}
                >
                  {item.question}
                  <span className="faq-toggle-icon">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>
                <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;