import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import lang_en from "./locales/en/translation.json"
import lang_bn from "./locales/bn/translation.json"

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translations: lang_en
    },
    bn: {
      translations: lang_bn
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'bn'];

export default i18n;