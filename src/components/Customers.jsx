import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Customers.css';

// Import your logo assets
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
// Add more logos here if you have them for a better carousel effect
// import logo4 from '../assets/logo4.png';
// import logo5 from '../assets/logo5.png';
// import logo6 from '../assets/logo6.png';

const logos = [
    logo1,
    logo2,
    logo3,
    // Add imported logos here, e.g., logo4, logo5, logo6
];

const Customers = () => {
    const { t } = useTranslation();
    const trackRef = useRef(null);
    const intervalRef = useRef(null);
    const scrollAmountPerClick = 250;

    const startAutoScroll = () => {
        const track = trackRef.current;
        if (!track) return;

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            const currentScrollLeft = track.scrollLeft;
            const halfScrollWidth = track.scrollWidth / 2;

            if (currentScrollLeft >= halfScrollWidth - 5) {
                track.scrollLeft = 0;
            } else {
                track.scrollBy({ left: 1, behavior: 'auto' });
            }
        }, 16);
    };

    const stopAutoScroll = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const handleManualScroll = (direction) => {
        const track = trackRef.current;
        if (!track) return;

        stopAutoScroll();

        if (direction === 'left') {
            track.scrollBy({ left: -scrollAmountPerClick, behavior: 'smooth' });
        } else {
            track.scrollBy({ left: scrollAmountPerClick, behavior: 'smooth' });
        }

        setTimeout(startAutoScroll, 1000);
    };

    useEffect(() => {
        startAutoScroll();

        const track = trackRef.current;
        if (track) {
            track.addEventListener('mouseenter', stopAutoScroll);
            track.addEventListener('mouseleave', startAutoScroll);

            return () => {
                stopAutoScroll();
                track.removeEventListener('mouseenter', stopAutoScroll);
                track.removeEventListener('mouseleave', startAutoScroll);
            };
        }
    }, []);

    return (
        <section className="customers">
            <h2>{t('customers.title')}</h2>
            <div className="carousel-container">
                <button
                    className="carousel-button left"
                    aria-label="Previous Slide"
                    onClick={() => handleManualScroll('left')}
                >
                    &#10094;
                </button>
                <div className="carousel-wrapper">
                    <div className="carousel-track" ref={trackRef}>
                        {[...logos, ...logos].map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt={`Customer Logo ${index + 1}`}
                                className="carousel-logo"
                            />
                        ))}
                    </div>
                </div>
                <button
                    className="carousel-button right"
                    aria-label="Next Slide"
                    onClick={() => handleManualScroll('right')}
                >
                    &#10095;
                </button>
            </div>
        </section>
    );
};

export default Customers;