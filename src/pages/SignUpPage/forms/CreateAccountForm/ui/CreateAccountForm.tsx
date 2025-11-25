import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

import { AuthLayout } from '@/shared/components/AuthLayout';
import { TextInput } from '@/shared/components/TextInput';
import { Text } from '@/shared/components/Text';
import { Button } from '@/shared/components/Button';
import { Stepper } from '@/shared/components/Stepper';

import { SignUpData } from '../../../types';

import { useCreateAccount } from '../api';
import { DEFAULT_CREATE_ACCOUNT_VALUES } from '../constants';
import { createAccountSchema } from '../model';
import { CreateAccountFields } from '../types';

import styles from '../../../ui/SignUpPage.module.css';

export const CreateAccountForm = ({ signUpData }: { signUpData: SignUpData }) => {
  const t = useTranslations('translation');

  const createAccountMutation = useCreateAccount();

  const {
    register,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountFields>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: DEFAULT_CREATE_ACCOUNT_VALUES,
  });

  const onSubmit = handleSubmit((values) => {
    createAccountMutation.mutate({
      login: values.login,
      email: signUpData.email,
      password: values.password,
      token: signUpData.code,
    });
  });

  useEffect(() => setFocus('login'), [setFocus]);

  return (
    <form onSubmit={onSubmit} className={styles.form} noValidate>
      <AuthLayout title={t('auth.title.createAccount')}>
        <TextInput
          label={t('auth.label.login')}
          placeholder={t('auth.placeholder.enterLogin')}
          invalid={!!errors.login}
          hint={errors.login?.message && t(errors.login.message)}
          {...register('login')}
        ></TextInput>
        <Text variant='text2' color='content1' className={styles.container}>
          {t('auth.text.loginRequirements')}
        </Text>
        <TextInput
          label={t('auth.label.password')}
          type='password'
          placeholder={t('auth.placeholder.enterPassword')}
          invalid={!!errors.password}
          hint={errors.password?.message && t(errors.password.message)}
          className={styles.margin}
          {...register('password')}
        ></TextInput>
        <Text variant='text2' color='content1' className={styles.container}>
          {t('auth.text.passwordRequirements')}
        </Text>
        <TextInput
          label={t('auth.label.repeatPassword')}
          type='password'
          placeholder={t('auth.placeholder.enterPassword')}
          invalid={!!errors.repeatPassword}
          hint={errors.repeatPassword?.message && t(errors.repeatPassword.message)}
          className={styles.margin}
          {...register('repeatPassword')}
        ></TextInput>
        <Button
          type='submit'
          size='md'
          variant='primary'
          className={styles.button}
          loading={createAccountMutation.isPending}
          fullWidth
        >
          {t('auth.button.signUp')}
        </Button>
        <Stepper className={styles.stepper} steps={3} current={3}></Stepper>
      </AuthLayout>
    </form>
  );
};
