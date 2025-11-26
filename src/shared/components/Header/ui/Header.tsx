import { useTranslations } from 'next-intl';

import { Button } from '@/shared/components/Button';
import { Text } from '@/shared/components/Text';
import { BRAND } from '@/shared/constants';

import Image from 'next/image';
import Link from 'next/link';

import styles from './Header.module.css';
import clsx from 'clsx';
import { privateNav, publicNav } from '../constants';
import { HeaderProps } from '../types';

export const Header = ({ login }: HeaderProps) => {
  const t = useTranslations('translation.header');

  return (
    <header className={clsx(styles.header, !login && styles.home)}>
      <div className={styles.side}>
        {login ? (
          <Link href={'./'} className={styles.logo}>
            <Image src='/logo.png' alt='logo' width={48} height={48} className={styles.sm} />
            <Text variant='title5' weight={700}>
              {BRAND}
            </Text>
          </Link>
        ) : (
          <Link href={'./'} className={styles.logo}>
            <Image src='/logo.png' alt='logo' width={96} height={96} className={styles.lg} />
            <Text variant='title2' weight={800}>
              {BRAND}
            </Text>
          </Link>
        )}

        <div className={styles.nav}>
          {(login ? privateNav : publicNav).map((nav) => (
            <Link key={nav.id} href={nav.link}>
              <Text>{t(nav.text)}</Text>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.side}>
        {login ? (
          <Button variant='transparentWhite' size='xs'>
            {login}
          </Button>
        ) : (
          <>
            <Link href={'./sign-in'}>
              <Button variant='transparentWhite' size='sm'>
                {t('buttons.signIn')}
              </Button>
            </Link>
            <Link href={'./sign-up'}>
              <Button size='sm' className={styles.join}>
                {t('buttons.join')}
              </Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};
