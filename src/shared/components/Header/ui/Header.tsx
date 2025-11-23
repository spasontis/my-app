import { useTranslations } from 'next-intl';

import { Button } from '@/shared/components/Button';
import { Text } from '@/shared/components/Text';
import { BRAND } from '@/shared/constants';

import Image from 'next/image';
import Link from 'next/link';

import styles from './Header.module.css';

export const Header = () => {
  const t = useTranslations('translation.header');

  return (
    <header className={styles.header}>
      <div className={styles.side}>
        <Link href={'./'} className={styles.logo}>
          <Image src='/logo.png' alt='logo' width={96} height={96} className={styles.img} />
          <Text variant='title2' weight={600} className={styles.brand}>
            {BRAND}
          </Text>
        </Link>
        <div className={styles.nav}>
          <Link href={'./blog'}>
            <Text>{t('buttons.blog')}</Text>
          </Link>
          <Link href={'./for-educators'}>
            <Text>{t('buttons.forEducators')}</Text>
          </Link>
          <Link href={'./for-companies'}>
            <Text> {t('buttons.forCompanies')}</Text>
          </Link>
        </div>
      </div>
      <div className={styles.side}>
        <Link href={'./sign-in'}>
          <Button variant='transparentWhite' size='sm'>
            {t('buttons.signIn')}
          </Button>
        </Link>
        <Link href={'./sign-up'}>
          <Button size='sm' className={styles.join}>
            {t('buttons.join')}
          </Button>{' '}
        </Link>
      </div>
    </header>
  );
};
