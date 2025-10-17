import en from '../src/shared/assets/locales/en.json';
import ru from '../src/shared/assets/locales/ru.json';

const messagesByLocale: Record<string, any> = { en, ru };

export const messagesMap = {
  en: en,
  ru: ru,
};

export const nextIntl = {
  messagesByLocale,
};
