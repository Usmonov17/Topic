import { createI18n } from "vue-i18n";
import uz from "./locales/uz.json";
import ru from "./locales/ru.json";
import eng from "./locales/eng.json";

const savedLocale = localStorage.getItem("locale") || "uz";

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: "uz",
  messages: {
    uz,
    ru,
    eng,
  },
});

export default i18n;
