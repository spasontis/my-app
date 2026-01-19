'use client';

import clsx from 'clsx';

import { Text } from '@/shared/components/Text';

import { UserHeader } from '@/widgets/Header/UserHeader';
import { Breadcrumbs } from '@/widgets/Breadcrumbs';

import styles from './DashboardPage.module.css';

export const DashboardPage = () => {
  return (
    <div className={styles.page}>
      <UserHeader>
        <Breadcrumbs />
      </UserHeader>
      <main className={styles.main}>
        <Text>dashboard_page</Text>
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
