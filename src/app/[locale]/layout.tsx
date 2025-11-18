import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';

import { Providers } from '@/shared/components/Providers';
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
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}
