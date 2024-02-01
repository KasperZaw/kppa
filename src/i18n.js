
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../src/translation/en.json';
import plTranslation from '../src/translation/pl.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    pl: { translation: plTranslation },
  },
  lng: 'pl',
  fallbackLng: 'pl',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
