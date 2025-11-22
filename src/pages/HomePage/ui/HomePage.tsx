'use client';

import { Header } from '@/shared/components/Header';
import { Text } from '@/shared/components/Text';

import styles from './Home.module.css';
import { Button } from '@/shared/components/Button';
import { useTranslations } from 'next-intl';

import Link from 'next/link';

export const HomePage = () => {
  const t = useTranslations('translation.home');

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.welcome}>
          <div className={styles.label}>
            <Text variant='label' weight={800} className={styles.gradient}>
              {t('label.achieveMastery')}
            </Text>
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
                <Text className={styles.get_started}>{t('button.getStarted')}</Text>
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
