import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React, { FC } from 'react';

import { Text } from '@/shared/components/Text';
import { BRAND } from '@/shared/constants';

import styles from './AuthCard.module.css';
import { AuthLayoutProps } from '../types';

export const AuthCard: FC<AuthLayoutProps> = ({ title, children }) => {
  const t = useTranslations('translation');

  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Link href={'./'} className={styles.logo}>
          <Image width={64} height={26} src='/logo.png' alt={BRAND} className={styles.img} />
          <Text variant='title3' weight={600} className={styles.brand}>
            {BRAND}
          </Text>
        </Link>
      </div>
      <div className={styles.card}>
        <div className={styles.content}>
          <Text variant='title1' className={styles.title}>
            {title}
          </Text>
          {children}
        </div>
      </div>
      <Text variant='caption' className={styles.agreement}>
        {t.rich('auth.text.agreement', {
          privacy: (chunks) => (
            <Link href='/privacy-policy'>
              <span className={styles.link}>{chunks}</span>
            </Link>
          ),
          cookie: (chunks) => (
            <Link href='/cookie-policy'>
              <span className={styles.link}>{chunks}</span>
            </Link>
          ),
          terms: (chunks) => (
            <Link href='/project-terms'>
              <span className={styles.link}>{chunks}</span>
            </Link>
          ),
        })}
      </Text>
    </div>
  );
};
