import { useEffect } from 'react';
import { FaGoogle, FaYandex } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

import { AuthLayout } from '@/shared/components/AuthLayout';
import { Button } from '@/shared/components/Button';
import { TextInput } from '@/shared/components/TextInput';
import { Text } from '@/shared/components/Text';
import { usePageTitle } from '@/shared/hooks';

import { DEFAULT_SIGN_IN_VALUES } from '../constants';
import { signInSchema } from '../model';
import { SignInFields } from '../types';
import { useSignIn } from '../api';

import Link from 'next/link';

import styles from './SignInPage.module.css';

export const SignInPage = () => {
  const t = useTranslations('translation');
  const signInMutation = useSignIn();

  const {
    register,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFields>({
    resolver: zodResolver(signInSchema),
    defaultValues: DEFAULT_SIGN_IN_VALUES,
  });

  const onSubmit = handleSubmit((values) => {
    signInMutation.mutate(values);
  });

  useEffect(() => {
    setFocus('login');
  }, [setFocus]);

  usePageTitle(t('auth.title.signIn'));

  return (
    <form onSubmit={onSubmit} className={styles.form} noValidate>
      <AuthLayout title={t('auth.title.signIn')}>
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
            placeholder={t('auth.placeholder.enterLogin')}
            invalid={!!errors.login}
            hint={errors.login?.message && t(errors.login.message)}
            {...register('login')}
          ></TextInput>
          <TextInput
            label={t('auth.label.password')}
            type='password'
            placeholder={t('auth.placeholder.enterPassword')}
            invalid={!!errors.password}
            hint={errors.password?.message && t(errors.password.message)}
            {...register('password')}
          ></TextInput>
        </div>
        <div className={styles.container}>
          <Text color='content1'>
            <Link href={'./recover'}>{t('auth.text.forgotPassword')}</Link>
          </Text>
        </div>
        <Button type='submit' size='md' variant='primary' className={styles.button} fullWidth>
          {t('auth.button.signIn')}
        </Button>
        <div className={styles.footer}>
          <Text color='content1'>{t('auth.text.noAccount')}</Text>
          <Text>
            <Link href={'./sign-up'}>{t('auth.text.signUp')}</Link>
          </Text>
        </div>
      </AuthLayout>
    </form>
  );
};
