import { useTranslations } from 'next-intl';

import { Button } from '@/shared/components/Button';
import { Text } from '@/shared/components/Text';

import Image from 'next/image';
import Link from 'next/link';

import styles from './Header.module.css';

export const Header = () => {
  const t = useTranslations('translation.header');

  return (
    <header className={styles.header}>
      <div className={styles.side}>
        <Link href={'./'}>
          <Image src='/big-logo.png' alt='logo' width={460} height={78} className={styles.logo} />
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
