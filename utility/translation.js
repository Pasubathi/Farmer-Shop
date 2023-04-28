import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-community/async-storage';

import en from '@config/translation/en.json';
import ar from '@config/translation/ar.json';
import Languages from '../config/language'

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
  },
});

export const setLocale = async (language, direction) => {
  await AsyncStorage.setItem('language', language);
  i18n.changeLanguage(language);
  if (direction === 'rtl') {
    i18n.dir('rtl');
  } else {
    i18n.dir('ltr');
  }
};

export const setDefaultLocale = async () => {
  const code = await AsyncStorage.getItem('language');
  const l = Languages.find((item) => item.code === code);
  if (l) {
    setLocale(code, l.direction);
  }
};

export const __ = (name, params = {}) => i18n.t(name, params);
