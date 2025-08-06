import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/CustomPOSSection.css'; // Assuming your CSS file path
import posMockupImage from '../assets/custom.png'; // Path to your image asset

const CustomPOSSection = () => {
  const { t } = useTranslation();

  return (
    <section className="custom-pos-section">
      <div className="pos-image-column">
        <img src={posMockupImage} alt="TapGo POS App Screenshots" className="pos-mockup-image" />
      </div>
      <div className="pos-content-column">
        <h2>{t('custom_pos.title_part1')}<br /><strong>{t('custom_pos.title_part2')}</strong></h2>
        <p>{t('custom_pos.description1')}</p>
        <p><strong>{t('custom_pos.feature_title')}</strong> {t('custom_pos.feature_description')}</p>
        <a href="#" className="learn-more-button">{t('custom_pos.learn_more')} →</a>
      </div>
    </section>
  );
};

export default CustomPOSSection;