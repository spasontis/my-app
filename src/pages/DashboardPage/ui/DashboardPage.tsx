'use client';

import React, { useState } from 'react';

import { Header } from '@/shared/components/Header';
import { Sidebar, Tab, DEFAULT_TAB, tabComponents } from '@/shared/components/Sidebar';
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
