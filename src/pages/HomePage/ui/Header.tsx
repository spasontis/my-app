import { Button } from '@/shared/components/Button';
import { Text } from '@/shared/components/Text';
import { BRAND } from '@/shared/constants';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import { useTranslations } from 'next-intl';
import { MobileSidebar } from './MobileSidebar';

export const HomeHeader = () => {
  const t = useTranslations('translation.home');
  return (
    <header className={styles.header}>
      <div className={styles.side}>
        <MobileSidebar />
        <Link href={'./'} className={styles.logo}>
          <Image src='/logo.png' alt='logo' width={32} height={32} className={styles.icon} />
          <Text variant='title2' className={styles.brand}>
            {BRAND}
          </Text>
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
      <div className={styles.side}>
        <Button as='Link' variant='transparentWhite' href={'./sign-in'} size='sm'>
          {t('button.signIn')}
        </Button>
        <Button as='Link' size='sm' variant='primary' href={'./sign-up'} className={styles.join}>
          {t('button.join')}
        </Button>
      </div>
    </header>
  );
};
