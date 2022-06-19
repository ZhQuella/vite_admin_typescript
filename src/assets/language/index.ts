import { App } from 'vue';
import { createI18n, LocaleSchema } from 'vue-i18n';

import ch from "./ch";
import en from "./en";

const i18n: LocaleSchema = createI18n({
  locale: localStorage.getItem("locale") || 'ch',
  legacy:false,
  messages: { ch, en }
})

export default (app: App) => {
  app.use(i18n);
}; 
