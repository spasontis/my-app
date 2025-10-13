import type { Preview } from "@storybook/nextjs-vite";
import {
  Title,
  Subtitle,
  Description,
  Stories,
} from "@storybook/addon-docs/blocks";
import { NextIntlClientProvider } from "next-intl";

import defaultMessages from "../messages/en.json";
import nextIntl from "./next-intl";

const preview: Preview = {
  decorators: [
    (Story) => (
      <NextIntlClientProvider
        locale="en"
        messages={defaultMessages}
        // ... potentially other config
      >
        <Story />
      </NextIntlClientProvider>
    ),
  ],
  initialGlobals: {
    locale: "en",
    locales: {
      en: "English",
      ru: "Русский",
    },
  },
  parameters: {
    nextIntl,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Stories />
        </>
      ),
    },
  },
};

export default preview;
