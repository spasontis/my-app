'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

import { Tab, DEFAULT_TAB, tabComponents, Sidebar } from '@/shared/components/Sidebar';
import { Button } from '@/shared/components/Button';
import { Text } from '@/shared/components/Text';
import { BRAND } from '@/shared/constants';

import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './DashboardPage.module.css';

export const DashboardPage = () => {
  const t = useTranslations('translation.dashboard');

  const [tab, setTab] = useState<Tab>(DEFAULT_TAB);

  const Component = tabComponents[tab];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.side}>
          <Link href={'./'} className={styles.logo}>
            <Image src='/logo.png' alt='logo' width={48} height={48} className={styles.icon} />
            <Text variant='title5' weight={700}>
              {BRAND}
            </Text>
          </Link>
          <div className={styles.nav}>
            <Link href='./help'>
              <Text>{t('button.help')}</Text>
            </Link>
          </div>
        </div>
        <div className={styles.side}>
          <Button variant='transparentWhite' size='xs'>
            user
          </Button>
        </div>
      </header>
      <main className={styles.dashboard}>
        <Sidebar activeTab={tab} onChange={setTab} />
        <div className={styles.content}>
          <Component />
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={clsx(styles.part, styles.left)} />
        <div className={styles.badge}>Development version 0.0.1</div>
        <div className={clsx(styles.part, styles.right)} />
      </footer>
    </div>
  );
};
