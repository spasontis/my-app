import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

import { DEFAULT_LOCALE, Locale } from '../constants';

export const routing = defineRouting({
  locales: Object.values(Locale),
  defaultLocale: DEFAULT_LOCALE,
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
