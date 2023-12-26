import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import ru from '../public/locales/ru/translation.json';
import en from '../public/locales/en/translation.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translations: ru },
      en: { translations: en },
    },
    lng: localStorage.getItem('i18nextLng') || 'ru',
    fallbackLng: 'ru',
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
    detection: {
      order: ['queryString', 'cookie'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
