import en from '../src/shared/assets/locales/en/en.json';
import ru from '../src/shared/assets/locales/ru/ru.json';

const messagesByLocale: Record<string, any> = { en, ru };

export const messagesMap = {
  en: en,
  ru: ru,
};

export const nextIntl = {
  messagesByLocale,
};
