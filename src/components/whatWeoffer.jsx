import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Whatweoffer.css';

// Import your specific card images for use as background images
import posBg from '../assets/Frame-92.png';
import onlineStoreBg from '../assets/Frame-131.png';
import qrSolutionsBg from '../assets/Frame-132.png';
import kioskBg from '../assets/Frame-92.png';
import restaurantPortalBg from '../assets/Frame-86.png';
import kdsBg from '../assets/Frame-91.png';

const cardImages = [posBg, onlineStoreBg, qrSolutionsBg, kioskBg, restaurantPortalBg, kdsBg];

const WhatTapGoOffers = () => {
    const { t } = useTranslation();
    
    // Get card data from the translation file
    const cardData = t('what_we_offer_section.items', { returnObjects: true });

    return (
        <section className="tapgo-offer">
            <div className="tapgo-offer-content">
                <h2><span>{t('what_we_offer_section.title_part1')}</span> <strong>{t('what_we_offer_section.title_part2')}</strong></h2>
                <p className="offer-highlight">
                    {t('what_we_offer_section.subtitle_top')}
                </p>
                <p className="offer-subtext">
                    {t('what_we_offer_section.subtitle_bottom')}
                </p>

                <div className="offer-grid">
                    {cardData.map((card, index) => {
                        return (
                            <div className="offer-card" key={index}>
                                <div
                                    className="offer-card-image-background"
                                    style={{ backgroundImage: `url(${cardImages[index]})` }}
                                ></div>
                                
                                <div className="offer-card-text-content">
                                    <h3 className="card-title">{card.title}</h3>
                                    <p className="card-description">{card.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhatTapGoOffers;