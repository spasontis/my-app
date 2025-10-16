import { useTranslations as useNextTranslations } from 'next-intl';

export function useTranslations() {
  return useNextTranslations('translation');
}
