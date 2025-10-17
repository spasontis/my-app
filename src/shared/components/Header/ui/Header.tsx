import { Button } from '@/shared/components/Button';
import { Text } from '@/shared/components/Text';

import { BRAND } from '@/shared/constants';

import { useTranslations } from 'next-intl';

import styles from './Header.module.css';

export const Header = () => {
  const t = useTranslations('translation');

  return (
    <header>
      <div className={styles.header}>
        <Text>{BRAND}</Text>
        <Button size='md'>{t('header.buttons.signIn')}</Button>
      </div>
    </header>
  );
};
