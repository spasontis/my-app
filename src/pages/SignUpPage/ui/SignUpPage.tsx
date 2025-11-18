import { useEffect } from 'react';
import { FaGoogle, FaYandex } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/components/Button';
import { TextInput } from '@/shared/components/TextInput';
import { Text } from '@/shared/components/Text';
import { usePageTitle } from '@/shared/hooks';

import { DEFAULT_SIGN_UP_VALUES } from '../constants';
import { signUpSchema } from '../model';
import { SignUpFields } from '../types';

import Link from 'next/link';

import styles from './SignUpPage.module.css';
import { Stepper } from '@/shared/components/Stepper';
import { AuthLayout } from '@/shared/components/AuthLayout';

export const SignUpPage = () => {
  const t = useTranslations('translation');

  const {
    register,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFields>({
    resolver: zodResolver(signUpSchema),
    defaultValues: DEFAULT_SIGN_UP_VALUES,
  });

  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });

  useEffect(() => {
    setFocus('login');
  }, [setFocus]);

  usePageTitle(t('auth.title.signUp'));

  return (
    <form onSubmit={onSubmit} className={styles.form} noValidate>
      <AuthLayout title={t('auth.title.signUp')}>
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
          <Text variant='text2' color='content1'>
            {t('auth.text.passwordRequirements')}
          </Text>
        </div>
        <Button type='submit' size='md' variant='primary' className={styles.button} fullWidth>
          {t('common.continue')}
        </Button>
        <Stepper className={styles.stepper} steps={3} current={1}></Stepper>
        <div className={styles.footer}>
          <Text color='content1'>{t('auth.text.haveAccount')}</Text>
          <Text>
            <Link href={'./sign-in'}>{t('auth.text.signIn')}</Link>
          </Text>
        </div>
      </AuthLayout>
    </form>
  );
};
