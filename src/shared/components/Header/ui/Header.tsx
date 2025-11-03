import { useTranslations } from 'next-intl';

import { Button } from '@/shared/components/Button';
import { Text } from '@/shared/components/Text';

import Image from 'next/image';

import styles from './Header.module.css';
import Link from 'next/link';

export const Header = () => {
  const t = useTranslations('translation');

  return (
    <header className={styles.header}>
      <div className={styles.side}>
        <div className={styles.title}>
          <Image src='/big-logo.png' alt='logo' width={128} height={36} className={styles.logo} />
        </div>
        <div className={styles.nav}>
          <Link href={'./blog'}>
            <Text>{t('header.buttons.blog')}</Text>
          </Link>
          <Link href={'./for-educators'}>
            <Text>{t('header.buttons.forEducators')}</Text>
          </Link>
          <Link href={'./for-companies'}>
            <Text> {t('header.buttons.forCompanies')}</Text>
          </Link>
        </div>
      </div>
      <div className={styles.side}>
        <Button variant='transparentWhite' size='sm'>
          {t('header.buttons.signIn')}
        </Button>
        <Button size='sm' className={styles.join}>
          {t('header.buttons.join')}
        </Button>
      </div>
    </header>
  );
};
