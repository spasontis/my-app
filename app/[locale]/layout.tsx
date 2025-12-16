import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';

import { ClientProviders, ServerProviders } from '@/shared/providers';
import { routing } from '@/shared/configs/i18n';

import '@/shared/theme/index.css';

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
        <ServerProviders locale={locale}>
          <ClientProviders>{children}</ClientProviders>
        </ServerProviders>
      </body>
    </html>
  );
}
