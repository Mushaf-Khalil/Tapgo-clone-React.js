import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner-content">
        <div className="navbar-container">
          <img src={logo} alt="TapGo Logo" className="navbar-logo" />

          <nav className="navbar-links">
            <a href="/" className="active">{t('navbar.home')}</a>

            <div className="dropdown">
              <span className="dropbtn">{t('navbar.services')}</span>
              <div className="dropdown-content">
                <a href="#">Kiosk</a>
              </div>
            </div>

            <a href="/pricing">{t('navbar.pricing')}</a>

            <div className="dropdown">
              <span className="dropbtn">{i18n.language.toUpperCase()}</span>
              <div className="dropdown-content">
                <a href="#" onClick={() => handleLanguageChange('de')}>DE</a>
                <a href="#" onClick={() => handleLanguageChange('fr')}>FR</a>
                <a href="#" onClick={() => handleLanguageChange('it')}>IT</a>
                <a href="#" onClick={() => handleLanguageChange('en')}>EN</a>
              </div>
            </div>
          </nav>

          <div className="navbar-right">
            <button className="navbar-talk-btn">{t('navbar.talk_to_us')}</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;