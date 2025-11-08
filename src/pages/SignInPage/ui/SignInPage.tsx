import { TextInput } from '@/shared/components/TextInput';
import { Text } from '@/shared/components/Text';

import { useTranslations } from 'next-intl';

import styles from './SignInPage.module.css';
import Link from 'next/link';
import { Button } from '@/shared/components/Button';
import { FaGoogle, FaYandex } from 'react-icons/fa';

export const SignInPage = () => {
  const t = useTranslations('translation');

  return (
    <form className={styles.form} noValidate>
      <div className={styles.card}>
        <div className={styles.content}>
          <Text variant='title1' className={styles.title}>
            {t('auth.title.signIn')}
          </Text>
          <div className={styles.socials}>
            <Button icon={<FaGoogle />} variant='transparentWhite' size='sm' fullWidth>
              <Text>Google</Text>
            </Button>
            <Button icon={<FaYandex />} variant='transparentWhite' size='sm' fullWidth>
              <Text>Яндекс</Text>
            </Button>
          </div>
          <div className={styles.line}>
            <Text className={styles.or}>{t('auth.text.or')}</Text>
          </div>
          <div className={styles.inputs}>
            <TextInput
              label={t('auth.label.login')}
              placeholder={t('auth.label.enterLogin')}
            ></TextInput>
            <TextInput
              label={t('auth.label.password')}
              type='password'
              placeholder={t('auth.label.enterPassword')}
            ></TextInput>
          </div>
          <div className={styles.container}>
            <Text color='content1'>
              <Link href={'./recover'}>{t('auth.text.forgotPassword')}</Link>
            </Text>
          </div>
          <Button size='md' variant='primary' type='submit' className={styles.button} fullWidth>
            {t('auth.button.signIn')}
          </Button>
          <div className={styles.footer}>
            <Text color='content1'>{t('auth.text.noAccount')}</Text>
            <Text>
              <Link href={'./sign-up'}>{t('auth.text.signUp')}</Link>
            </Text>
          </div>
        </div>
      </div>
      <Text variant='caption' className={styles.agreement}>
        {t.rich('auth.text.agreement', {
          privacy: (chunks) => (
            <Link href='/privacy-policy'>
              <span className={styles.link}>{chunks}</span>
            </Link>
          ),
          cookie: (chunks) => (
            <Link href='/cookie-policy'>
              <span className={styles.link}>{chunks}</span>
            </Link>
          ),
          terms: (chunks) => (
            <Link href='/project-terms'>
              <span className={styles.link}>{chunks}</span>
            </Link>
          ),
        })}
      </Text>
    </form>
  );
};
