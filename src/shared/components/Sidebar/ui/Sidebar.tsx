'use client';

import { FC, useState } from 'react';
import { clsx } from 'clsx';

import { BOTTOM_ITEMS, TOP_ITEMS } from '../constants';

import styles from './Sidebar.module.css';
import { SidebarProps, Tab } from '../types';

export const Sidebar: FC<SidebarProps> = ({ activeTab }) => {
  const [choice, setChoice] = useState(activeTab || 'menu');

  const handleClick = (id: Tab) => {
    setChoice(id);
  };

  const renderItems = (items: any[]) =>
    items.map(({ id, Icon }) => (
      <div key={id} className={clsx(styles.button, choice === id && styles.selected)}>
        <button onClick={() => handleClick(id)}>
          <Icon className={clsx(styles.icon, choice === id && styles.white)} />
        </button>
      </div>
    ));

  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>{renderItems(TOP_ITEMS)}</div>
      <div className={styles.bottom}>{renderItems(BOTTOM_ITEMS)}</div>
    </div>
  );
};
