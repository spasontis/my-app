'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/components/Text';
import { Button } from '@/shared/components/Button';
import { BRAND } from '@/shared/constants';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Home.module.css';

export const HomePage = () => {
  const t = useTranslations('translation.home');

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.side}>
          <Link href={'./'} className={styles.logo}>
            <Image src='/logo.png' alt='logo' width={96} height={96} className={styles.icon} />
            <Text variant='title2' weight={800}>
              {BRAND}
            </Text>
          </Link>
          <div className={styles.nav}>
            <Link href='./blog'>
              <Text>{t('button.blog')}</Text>
            </Link>
            <Link href='./for-educators'>
              <Text>{t('button.forEducators')}</Text>
            </Link>
            <Link href='./for-companies'>
              <Text>{t('button.forCompanies')}</Text>
            </Link>
          </div>
        </div>
        <div className={styles.side}>
          <Link href={'./sign-in'}>
            <Button variant='transparentWhite' size='sm'>
              {t('button.signIn')}
            </Button>
          </Link>
          <Link href={'./sign-up'}>
            <Button size='sm' className={styles.join}>
              {t('button.join')}
            </Button>
          </Link>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.welcome}>
          <div className={styles.label}>
            <div className={styles.text}>
              <Text variant='label' weight={800} className={styles.gradient}>
                {t('label.achieveMastery')}
              </Text>
            </div>
            <Text variant='label' weight={800}>
              {t('label.throughChallenge')}
            </Text>
          </div>
          <Text variant='title3' className={styles.description}>
            {t('description.partOne')}
            <br />
            {t('description.partTwo')}
          </Text>
          <div>
            <Link href={'./sign-up'}>
              <Button size='md' className={styles.start}>
                <Text variant='title4'>{t('button.getStarted')}</Text>
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};
