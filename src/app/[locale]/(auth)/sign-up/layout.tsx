import React, { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { AuthCard } from '@/shared/components/AuthCard';

export default function SignUpLayout({ children }: { children: ReactNode }) {
  const t = useTranslations('translation');
  return <AuthCard title={t('auth.title.signUp')}>{children}</AuthCard>;
}
