import { notFound } from 'next/navigation';

import { routing } from '@/shared/configs/i18n';

import { hasLocale, NextIntlClientProvider } from 'next-intl';

import '@/shared/theme/index.css';
import { ClientProviders } from '@/shared/components/ClientProviders';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale}>
          <ClientProviders>{children}</ClientProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
