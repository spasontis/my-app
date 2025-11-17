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

import Image from 'next/image';
import Link from 'next/link';

import styles from './SignUpPage.module.css';
import { Stepper } from '@/shared/components/Stepper';

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
    <>
      <form onSubmit={onSubmit} className={styles.form} noValidate>
        <div className={styles.logo}>
          <Link href={'./'}>
            <Image
              width={254}
              height={52}
              src='/big-logo.png'
              alt='big-logo'
              className={styles.img}
            />
          </Link>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <Text variant='title1' className={styles.title}>
              {t('auth.title.signUp')}
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
              <Text color='content1'>{t('auth.text.passwordRequirements')}</Text>
            </div>
            <Stepper className={styles.stepper} steps={3} current={1}></Stepper>
            <Button type='submit' size='md' variant='primary' className={styles.button} fullWidth>
              {t('common.continue')}
            </Button>
            <div className={styles.footer}>
              <Text color='content1'>{t('auth.text.haveAccount')}</Text>
              <Text>
                <Link href={'./sign-in'}>{t('auth.text.signIn')}</Link>
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
    </>
  );
};
