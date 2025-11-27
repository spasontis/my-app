'use client';

import React, { useState } from 'react';

import { Tab, DEFAULT_TAB, tabComponents, Sidebar } from '@/features/Sidebar';
import { Header } from '@/shared/components/Header';
import { Footer } from '@/shared/components/Footer';

import styles from './DashboardPage.module.css';

export const DashboardPage = () => {
  const [tab, setTab] = useState<Tab>(DEFAULT_TAB);

  const Component = tabComponents[tab];

  return (
    <div className={styles.page}>
      <Header login='spasontis' />
      <main className={styles.dashboard}>
        <Sidebar activeTab={tab} onChange={setTab} />
        <div className={styles.content}>
          <Component />
        </div>
      </main>
      <Footer />
    </div>
  );
};
