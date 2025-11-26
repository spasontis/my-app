'use client';

import { Sidebar } from '@/shared/components/Sidebar';
import React, { useState } from 'react';

import styles from './DashboardPage.module.css';
import { Header } from '@/shared/components/Header';
import { Tab } from '@/shared/components/Sidebar';
import { tabContent } from '@/shared/components/Sidebar/constants';

export const DashboardPage = () => {
  const [tab, setTab] = useState<Tab>('menu');

  return (
    <div className={styles.page}>
      <Header login='spasontis' />
      <main className={styles.dashboard}>
        <Sidebar activeTab={tab} onChange={setTab} />
        <div className={styles.content}>{tabContent[tab]}</div>
      </main>
    </div>
  );
};
