'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

import { Text } from '@/shared/components/Text';
import { Button } from '@/shared/components/Button';
import { BRAND } from '@/shared/constants';

import Link from 'next/link';
import Image from 'next/image';

import { Menu } from 'lucide-react';

import styles from './Home.module.css';
import clsx from 'clsx';

export const HomePage = () => {
  const t = useTranslations('translation.home');

  const [active, setActive] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutSide = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutSide);
    return () => document.removeEventListener('mousedown', handleClickOutSide);
  }, []);

  const onClick = () => setActive(true);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.sideNav}>
          <Button variant='transparentWhite' onClick={onClick}>
            <Menu />
          </Button>
          <div ref={navRef} className={clsx(styles.sideNavMenu, active && styles.open)}>
            <Button as='a' size='lg' href={'./blog'} className={styles.sideLink}>
              {t('button.blog')}
            </Button>
            <Button as='a' href={'./for-educators'} size='lg' className={styles.sideLink}>
              {t('button.forEducators')}
            </Button>
            <Button as='a' href={'./for-companies'} size='lg' className={styles.sideLink}>
              {t('button.forCompanies')}
            </Button>
            <div className={styles.sideJoin}>
              <Button as='Link' size='md' fullWidth variant='primary' href={'./sign-up'}>
                {t('button.join')}
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.headerSide}>
          <Link href={'./'} className={styles.logo}>
            <Image src='/logo.png' alt='logo' width={96} height={96} className={styles.icon} />
            <Text variant='title2'>{BRAND}</Text>
          </Link>
          <div className={styles.nav}>
            <Button as='a' href={'./blog'}>
              {t('button.blog')}
            </Button>
            <Button as='a' href={'./for-educators'}>
              {t('button.forEducators')}
            </Button>
            <Button as='a' href={'./for-companies'}>
              {t('button.forCompanies')}
            </Button>
          </div>
        </div>
        <div className={styles.headerSide}>
          <Button as='Link' variant='transparentWhite' href={'./sign-in'} size='sm'>
            {t('button.signIn')}
          </Button>
          <Button as='Link' size='sm' variant='primary' href={'./sign-up'} className={styles.join}>
            {t('button.join')}
          </Button>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.welcome}>
          <div className={styles.label}>
            <div className={styles.text}>
              <Text variant='label' className={styles.gradient}>
                {t('label.achieveMastery')}
              </Text>
            </div>
            <Text variant='label'>{t('label.throughChallenge')}</Text>
          </div>
          <Text variant='title4' className={styles.description}>
            {t.rich('text.description', {
              br: () => <br />,
            })}
          </Text>
          <div>
            <Button
              as='Link'
              size='md'
              variant='primary'
              className={styles.start}
              href={'./sign-up'}
            >
              {t('button.getStarted')}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};
