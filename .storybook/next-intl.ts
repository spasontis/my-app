import en from "../messages/en.json";
import ru from "../messages/en.json";

const messagesByLocale: Record<string, any> = { en, ru };

const nextIntl = {
  defaultLocale: "en",
  messagesByLocale,
};

export default nextIntl;
