'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/components/Text';
import { Button } from '@/shared/components/Button';
import { BRAND } from '@/shared/constants';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Home.module.css';
import { Menu } from 'lucide-react';

export const HomePage = () => {
  const t = useTranslations('translation.home');

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.sideNav}>
          <Button variant='transparentWhite' icon={<Menu />}></Button>
        </div>
        <div className={styles.side}>
          <Link href={'./'} className={styles.logo}>
            <Image src='/logo.png' alt='logo' width={96} height={96} className={styles.icon} />
            <Text variant='title2'>{BRAND}</Text>
          </Link>
          <div className={styles.nav}>
            <Button as='Link' href={'./blog'} variant='transparent'>
              {t('button.blog')}
            </Button>
            <Button as='Link' href={'./for-educators'} variant='transparent'>
              {t('button.forEducators')}
            </Button>
            <Button as='Link' href={'./for-companies'} variant='transparent'>
              {t('button.forCompanies')}
            </Button>
          </div>
        </div>
        <div className={styles.side}>
          <Button as='Link' variant='transparentWhite' href={'./sign-in'} size='sm'>
            {t('button.signIn')}
          </Button>
          <Button as='Link' size='sm' variant='primary' href={'./sign-up'} className={styles.join}>
            {t('button.join')}
          </Button>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.welcome}>
          <div className={styles.label}>
            <div className={styles.text}>
              <Text variant='label' className={styles.gradient}>
                {t('label.achieveMastery')}
              </Text>
            </div>
            <Text variant='label'>{t('label.throughChallenge')}</Text>
          </div>
          <Text variant='title4' className={styles.description}>
            {t('description.partOne')}
            <br />
            {t('description.partTwo')}
          </Text>
          <div>
            <Button size='md' className={styles.start} href={'./sign-up'}>
              {t('button.getStarted')}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};
