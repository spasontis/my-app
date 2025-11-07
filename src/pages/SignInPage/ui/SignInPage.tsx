import { TextInput } from '@/shared/components/TextInput';
import { Text } from '@/shared/components/Text';

import { useTranslations } from 'next-intl';

import styles from './SignInPage.module.css';
import Link from 'next/link';
import { Button } from '@/shared/components/Button';

export const SignInPage = () => {
  const t = useTranslations('translation');
  return (
    <form className={styles.form} noValidate>
      <div className={styles.card}>
        <div className={styles.content}>
          <Text variant='title2' className={styles.title}>
            {t('auth.title.signIn')}
          </Text>
          <TextInput
            label={t('auth.label.login')}
            placeholder={t('auth.label.enterLogin')}
          ></TextInput>
          <TextInput
            label={t('auth.label.password')}
            type='password'
            placeholder={t('auth.label.enterPassword')}
            className={styles.input}
          ></TextInput>
          <div className={styles.container}>
            <Text color='primary'>
              <Link href={'./recover'}>{t('auth.text.forgotPassword')}</Link>
            </Text>
          </div>
          <Button type='submit' className={styles.button} fullWidth>
            {t('auth.button.signIn')}
          </Button>
          <div className={styles.footer}>
            <Text color='content1'>{t('auth.text.noAccount')}</Text>
            <Text color='content1'>
              <Link href={'./sign-up'}>{t('auth.text.signUp')}</Link>
            </Text>
          </div>
        </div>
      </div>
      <Text variant='caption' className={styles.agreement}>
        {t('auth.text.agreement')}
      </Text>
    </form>
  );
};
