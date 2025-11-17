import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React, { FC } from 'react';

import { Text } from '@/shared/components/Text';

import styles from './AuthLayout.module.css';
import { AuthLayoutProps } from '../types';

export const AuthLayout: FC<AuthLayoutProps> = ({ title, children }) => {
  const t = useTranslations('translation');

  return (
    <div className={styles.layout}>
      <div className={styles.logo}>
        <Link href={'./'}>
          <Image
            width={254}
            height={52}
            src='/big-logo.png'
            alt='big-logo'
            className={styles.img}
          />
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
