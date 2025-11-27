'use client';

import { ComponentType, FC, useEffect, useState } from 'react';
import { clsx } from 'clsx';

import { ModalCardData } from '@/shared/components/ModalCard';

import { top_controllers, bottom_controllers, tabs } from '../configs';
import { ControllerData, SidebarProps, Tab } from '../types';

import styles from './Sidebar.module.css';

export const Sidebar: FC<SidebarProps> = ({ activeTab, onChange }) => {
  const [selectedTab, setSelectedTab] = useState(activeTab);
  const [selectedModal, setSelectedModal] = useState<Tab | null>(null);

  const handleClick = (id: Tab, isModal: boolean) => {
    if (isModal) {
      setSelectedModal(id);
    } else {
      setSelectedTab(id);
      onChange?.(id);
    }
  };

  const renderItems = (controllers: ControllerData[]) =>
    controllers.map(({ id, icon, modal }) => {
      const IconComponent = icon;
      return (
        <div key={id} className={clsx(styles.button, selectedTab === id && styles.selected)}>
          <button onClick={() => handleClick(id, modal)}>
            <IconComponent
              aria-label={id}
              className={clsx(
                styles.icon,
                (selectedTab === id || selectedModal === id) && styles.white,
              )}
            />
          </button>
        </div>
      );
    });

  useEffect(() => {
    setSelectedTab(activeTab);
  }, [activeTab]);

  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.top}>{renderItems(top_controllers)}</div>
        <div className={styles.bottom}>{renderItems(bottom_controllers)}</div>
      </div>
      {selectedModal &&
        (() => {
          const Modal = tabs[selectedModal].component as ComponentType<ModalCardData>;
          return <Modal isOpen={true} onClose={() => setSelectedModal(null)} />;
        })()}
    </>
  );
};
