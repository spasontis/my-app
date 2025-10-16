import type { Preview } from '@storybook/nextjs-vite';
import { Title, Subtitle, Description, Stories } from '@storybook/addon-docs/blocks';

import { NextIntlClientProvider } from 'next-intl';

import { messagesMap, nextIntl } from './next-intl';

const preview: Preview = {
  decorators: [
    (Story, { globals: { locale = 'en' } }) => (
      <NextIntlClientProvider
        locale={locale}
        messages={messagesMap[locale as keyof typeof messagesMap] || messagesMap['en']}
      >
        <Story />
      </NextIntlClientProvider>
    ),
  ],
  initialGlobals: {
    locale: 'en',
    locales: {
      en: 'English',
      ru: 'Русский',
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
