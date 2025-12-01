import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import GoogleImg from '@/shared/assets/icons/google.png';
import YandexImg from '@/shared/assets/icons/yandex.png';

import { SignInData } from '@/pages/SignInPage/types';
import { Button } from '@/shared/components/Button';
import { TextInput } from '@/shared/components/TextInput';
import { Text } from '@/shared/components/Text';

import { DEFAULT_SIGN_IN_VALUES } from '../constants';
import { signInSchema } from '../model';
import { SignInFields } from '../types';
import { useSignIn } from '../api';

import Image from 'next/image';
import Link from 'next/link';

import styles from '../../../ui/SignInPage.module.css';
import { publicApi } from '@/shared/api';

export const SignInForm = ({
  onNext,
  setSignInData,
}: {
  onNext: () => void;
  setSignInData: React.Dispatch<React.SetStateAction<SignInData>>;
}) => {
  const t = useTranslations('translation');
  const router = useRouter();

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

  const onGoogle = async () => {
    const res = await publicApi.api.authControllerConnect('google');
    if (res?.url) {
      const width = 500;
      const height = 600;
      const left = window.screenX + (window.innerWidth - width) / 2;
      const top = window.screenY + (window.innerHeight - height) / 2;

      const popup = window.open(
        res.url,
        'oauthPopup',
        `width=${width},height=${height},left=${left},top=${top}`,
      );

      const handleMessage = (event: MessageEvent) => {
        if (event.origin !== window.location.origin) return;

        const { accessToken } = event.data;
        if (accessToken) {
          localStorage.setItem('accessToken', accessToken);
          window.removeEventListener('message', handleMessage);
          router.push('/dashboard');
        }
      };
      window.addEventListener('message', handleMessage);

      if (!popup) return;
    }
  };

  const onSubmit = handleSubmit((values) => {
    setSignInData((prev) => ({ ...prev, login: values.login, password: values.password }));
    signInMutation.mutate(
      { login: values.login, password: values.password },
      {
        onSuccess: (data) => {
          if ('accessToken' in data) {
            router.push('/dashboard');
          } else {
            onNext();
          }
        },
      },
    );
  });

  useEffect(() => {
    setFocus('login');
  }, [setFocus]);

  return (
    <form onSubmit={onSubmit} className={styles.form} noValidate>
      <div className={styles.socials}>
        <Button
          type='button'
          onClick={onGoogle}
          icon={<Image src={GoogleImg} alt='Google' width={20} height={20} />}
          variant='transparentWhite'
          size='sm'
          fullWidth
        >
          <Text>Google</Text>
        </Button>
        <Button
          type='button'
          icon={<Image src={YandexImg} alt='Yandex' width={50} height={50} />}
          variant='transparentWhite'
          size='sm'
          fullWidth
        >
          <Text>Яндекс</Text>
        </Button>
      </div>
      <div className={styles.line}>
        <Text className={styles.or}>{t('auth.text.orContinueWith')}</Text>
      </div>

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
        className={styles.margin}
        {...register('password')}
      ></TextInput>

      <div className={styles.container}>
        <Text color='content1'>
          <Link href={'./recover'}>{t('auth.text.forgotPassword')}</Link>
        </Text>
      </div>
      <Button
        type='submit'
        size='md'
        variant='primary'
        className={styles.button}
        loading={signInMutation.isPending}
        fullWidth
      >
        {t('auth.button.signIn')}
      </Button>
      <div className={styles.footer}>
        <Text color='content1'>{t('auth.text.noAccount')}</Text>
        <Text>
          <Link href={'./sign-up'}>{t('auth.text.signUp')}</Link>
        </Text>
      </div>
    </form>
  );
};
