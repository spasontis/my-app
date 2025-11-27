import React from 'react';

import styles from './Footer.module.css';
import clsx from 'clsx';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={clsx(styles.part, styles.left)} />
      <div className={styles.badge}>Development version 0.0.1</div>
      <div className={clsx(styles.part, styles.right)} />
    </footer>
  );
};
