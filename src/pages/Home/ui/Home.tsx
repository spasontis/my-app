import { Header } from '@/shared/components/Header';
import { Text } from '@/shared/components/Text';

import styles from './Home.module.css';
import { Button } from '@/shared/components/Button';
import { useTranslations } from 'next-intl';

export const Home = () => {
  const t = useTranslations('translation.home');

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.content}>
        <div className={styles.welcome}>
          <div className={styles.label}>
            <Text variant='label' className={styles.gradient}>
              {t('label.achieveMastery')}
            </Text>
            <Text variant='label'> {t('label.throughChallenge')}</Text>
          </div>
          <Text variant='title3' className={styles.description}>
            {t('description.partOne')}
            <br />
            {t('description.partTwo')}
          </Text>
          <div>
            <Button size='md' className={styles.start}>
              <Text className={styles.get_started}>{t('button.getStarted')}</Text>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};
