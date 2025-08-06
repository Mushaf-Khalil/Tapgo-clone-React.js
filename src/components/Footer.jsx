import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Footer.css';
import logoIcon from '../assets/logo.png';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-logo-column">
          <img src={logoIcon} alt="TapGo Logo" className="footer-logo" />
        </div>

        <div className="footer-links-column">
          <div className="footer-link-group">
            <h4 className="footer-heading">{t('footer.quick_links')}</h4>
            <ul>
              <li><a href="/">{t('footer.home')}</a></li>
              <li><a href="/pricing">{t('footer.pricing')}</a></li>
              <li><a href="/kiosk">{t('footer.kiosk')}</a></li>
              <li><a href="/contact">{t('footer.contact')}</a></li>
            </ul>
          </div>

          <div className="footer-link-group">
            <h4 className="footer-heading">{t('footer.terms_heading')}</h4>
            <ul>
              <li><a href="/terms">{t('footer.terms_link')}</a></li>
              <li><a href="/privacy">{t('footer.privacy_policy')}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;