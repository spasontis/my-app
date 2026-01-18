import { Button } from '@/shared/components/Button';
import { Text } from '@/shared/components/Text';
import { BRAND } from '@/shared/constants';

import { Sidebar } from './Sidebar';
import { Breadcrumbs } from './Breadcrumbs';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.side}>
        <Sidebar />
        <Link href={'./'} className={styles.logo}>
          <Image src='/logo.png' alt='logo' width={32} height={32} className={styles.icon} />
          <Text variant='title5' weight={700}>
            {BRAND}
          </Text>
        </Link>
        <Breadcrumbs />
      </div>
      <div className={styles.side}>
        <Button variant='transparentWhite' size='xs'>
          user_account
        </Button>
      </div>
    </header>
  );
};

export default Header;
