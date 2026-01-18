'use client';

import { MenuIcon, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/shared/components/Button';

import clsx from 'clsx';
import Image from 'next/image';

import styles from './MobileSidebar.module.css';

export const MobileSidebar = () => {
  const t = useTranslations('translation');

  const [active, setActive] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const onClick = () => setActive(!active);

  useEffect(() => {
    const handleClickOutSide = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActive(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutSide);
    return () => document.removeEventListener('mousedown', handleClickOutSide);
  }, [active]);

  return (
    <div className={styles.sidebar}>
      <Button variant='transparentWhite' onClick={onClick}>
        <MenuIcon />
      </Button>
      <div ref={navRef} className={clsx(styles.navMenu, active && styles.open)}>
        <div className={styles.label}>
          <Image src='/logo.png' alt='logo' width={32} height={32} className={styles.logo} />
          <Button onClick={onClick} className={styles.close}>
            <X width={24} />
          </Button>
        </div>
        <Button as='Link' href={'./blog'} className={styles.link}>
          {t('home.button.blog')}
        </Button>{' '}
        <span className={styles.divider}></span>
        <Button as='Link' href={'./for-educators'} className={styles.link}>
          {t('home.button.forEducators')}
        </Button>{' '}
        <span className={styles.divider}></span>
        <Button as='Link' href={'./for-companies'} className={styles.link}>
          {t('home.button.forCompanies')}
        </Button>
        <div className={styles.join}>
          <Button as='Link' fullWidth variant='primary' href={'./sign-up'}>
            {t('home.button.join')}
          </Button>
        </div>
      </div>
    </div>
  );
};
