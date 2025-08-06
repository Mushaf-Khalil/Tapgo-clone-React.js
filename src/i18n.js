import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  // load translations using http (default public/locales/ folder)
  .use(HttpBackend)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    fallbackLng: 'en', // use EN if detected language is not available
    lng: 'en', // default language
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // The directory where your translation files will be
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    }
  });

export default i18n;