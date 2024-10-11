import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./translations/en.json";

export const resources = {
  en: enTranslations,
};

i18n.use(initReactI18next).init({
  fallbackLng: "uk",
  resources,
});

export default i18n;
