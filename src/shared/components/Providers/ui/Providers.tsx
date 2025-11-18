import React, { FC, ReactNode } from 'react';

import { ServerProviders } from './ServerProviders';
import { ClientProviders } from './ClientProviders';

export const Providers: FC<{ locale: string; children: ReactNode }> = ({ locale, children }) => {
  return (
    <ServerProviders locale={locale}>
      <ClientProviders>{children}</ClientProviders>
    </ServerProviders>
  );
};
