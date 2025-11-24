import { AuthLayout } from '@/shared/components/AuthLayout';
import { Button } from '@/shared/components/Button';
import { TextInput } from '@/shared/components/TextInput';
import { Text } from '@/shared/components/Text';
import { zodResolver } from '@hookform/resolvers/zod';

import { useTranslations } from 'next-intl';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { SignInData } from '@/pages/SignInPage/types';

import { DEFAULT_TWO_FACTOR_VALUES } from '../constants';
import { twoFactorSchema } from '../model';
import { TwoFactorFields } from '../types';

import styles from '../../../ui/SignInPage.module.css';
import { useVerifyEmail } from '../api';

export const TwoFactorForm = ({ signInData }: { signInData: SignInData }) => {
  const t = useTranslations('translation');

  const verifyEmailMutation = useVerifyEmail();

  const {
    register,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<TwoFactorFields>({
    resolver: zodResolver(twoFactorSchema),
    defaultValues: DEFAULT_TWO_FACTOR_VALUES,
  });

  const onSubmit = handleSubmit((values) => {
    verifyEmailMutation.mutate({ login: signInData.login, token: values.code });
  });

  useEffect(() => {
    setFocus('code');
  }, [setFocus]);

  return (
    <form onSubmit={onSubmit} className={styles.form} noValidate>
      <AuthLayout title={t('auth.title.twoFactorAuthentication')}>
        <TextInput
          label={t('auth.label.verificationCode')}
          placeholder={t('auth.placeholder.enterVerificationCode')}
          invalid={!!errors.code}
          hint={errors.code?.message && t(errors.code.message)}
          {...register('code')}
        ></TextInput>
        <Text variant='text2' color='content1' className={styles.container}>
          {t('auth.text.codeRequirements')}
        </Text>

        <Button type='submit' size='md' variant='primary' className={styles.button} fullWidth>
          {t('common.confirm')}
        </Button>
      </AuthLayout>
    </form>
  );
};
