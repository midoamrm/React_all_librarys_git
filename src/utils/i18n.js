import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {I18nManager} from 'react-native';

// the translations
// (tip move them in a JSON file and import them)

// load the correct translation file
const resources = {
  en: {
    translation: require('../assets/locales/en.json'),
  },
  ar: {
    translation: require('../assets/locales/ar.json'),
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: I18nManager.isRTL ? 'ar' : 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
