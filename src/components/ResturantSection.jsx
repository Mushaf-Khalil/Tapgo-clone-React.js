import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/restaurant.css';
import restaurantImage from '../assets/restaurant.png';

function RestaurantSection() {
  const { t } = useTranslation();

  return (
    <section className="restaurant">
      <div className="restaurant-section-content">
        <div className="restaurant-container">
          <div className="restaurant-text">
            <h2>
              {t('restaurant_section.title_part1')} <span style={{ color: '#C9004D' }}><br />{t('restaurant_section.title_part2')}</span>
            </h2>
            <p>
              {t('restaurant_section.description')}
            </p>
            <div className="restaurant-buttons">
              <button className="btn-outline">{t('restaurant_section.learn_more')}</button>
              <button className="btn-filled">{t('restaurant_section.get_started')} &rarr;</button>
            </div>
          </div>
          <div className="restaurant-image">
            <img src={restaurantImage} alt="Restaurant Kiosk" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RestaurantSection;