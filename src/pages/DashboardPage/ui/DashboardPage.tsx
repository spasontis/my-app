'use client';

import clsx from 'clsx';

import { Header } from '@/widgets/Header/ui/Header';
import { Text } from '@/shared/components/Text';
import styles from './DashboardPage.module.css';

export const DashboardPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Text>Text</Text>
      </main>
      <footer className={styles.footer}>
        <div className={clsx(styles.part, styles.left)} />
        <div className={styles.badge}>
          <Text>Development version 0.0.1</Text>
        </div>
        <div className={clsx(styles.part, styles.right)} />
      </footer>
    </div>
  );
};
