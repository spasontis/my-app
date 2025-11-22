import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

import { AuthLayout } from '@/shared/components/AuthLayout';
import { TextInput } from '@/shared/components/TextInput';
import { Text } from '@/shared/components/Text';
import { Button } from '@/shared/components/Button';
import { Stepper } from '@/shared/components/Stepper';

import { DEFAULT_ACCOUNT_VALUES } from '../constants';
import { accountSchema } from '../model';
import { NewAccountData, AccountFields } from '../types';

import styles from './SignUpPage.module.css';

export const CreateAccountForm = ({ newAccountData }: { newAccountData: NewAccountData }) => {
  const t = useTranslations('translation');

  const {
    register,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountFields>({
    resolver: zodResolver(accountSchema),
    defaultValues: DEFAULT_ACCOUNT_VALUES,
  });

  const onSubmit = handleSubmit((values) => {
    console.log({
      login: values.login,
      email: newAccountData.email,
      password: values.password,
      code: newAccountData.code,
    });
  });

  useEffect(() => setFocus('login'), [setFocus]);

  return (
    <form onSubmit={onSubmit} className={styles.form} noValidate>
      <AuthLayout title={t('auth.title.createAccount')}>
        <div className={styles.inputs}>
          <span>
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
          </span>
          <span>
            <TextInput
              label={t('auth.label.password')}
              type='password'
              placeholder={t('auth.placeholder.enterPassword')}
              invalid={!!errors.password}
              hint={errors.password?.message && t(errors.password.message)}
              {...register('password')}
            ></TextInput>
            <Text variant='text2' color='content1' className={styles.container}>
              {t('auth.text.passwordRequirements')}
            </Text>
          </span>
          <TextInput
            label={t('auth.label.repeatPassword')}
            type='password'
            placeholder={t('auth.placeholder.enterPassword')}
            invalid={!!errors.repeatPassword}
            hint={errors.repeatPassword?.message && t(errors.repeatPassword.message)}
            {...register('repeatPassword')}
          ></TextInput>
        </div>
        <Button type='submit' size='md' variant='primary' className={styles.button} fullWidth>
          {t('auth.button.signUp')}
        </Button>
        <Stepper className={styles.stepper} steps={3} current={3}></Stepper>
      </AuthLayout>
    </form>
  );
};
