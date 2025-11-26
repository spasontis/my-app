'use client';

import { FC, useEffect, useState } from 'react';
import { clsx } from 'clsx';

import { TOP_CONTROLLERS, BOTTOM_CONTROLLERS } from '../constants';

import styles from './Sidebar.module.css';
import { ControllerData, SidebarProps, Tab } from '../types';

export const Sidebar: FC<SidebarProps> = ({ activeTab, onChange }) => {
  const [selected, setSelected] = useState(activeTab);

  const handleClick = (id: Tab) => {
    setSelected(id);
    onChange?.(id);
  };

  const renderItems = (controllers: ControllerData[]) =>
    controllers.map(({ id, icon }) => {
      const IconComponent = icon;
      return (
        <div key={id} className={clsx(styles.button, selected === id && styles.selected)}>
          <button onClick={() => handleClick(id)}>
            <IconComponent
              aria-label={id}
              className={clsx(styles.icon, selected === id && styles.white)}
            />
          </button>
        </div>
      );
    });

  useEffect(() => {
    setSelected(activeTab);
  }, [activeTab]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>{renderItems(TOP_CONTROLLERS)}</div>
      <div className={styles.bottom}>{renderItems(BOTTOM_CONTROLLERS)}</div>
    </div>
  );
};
