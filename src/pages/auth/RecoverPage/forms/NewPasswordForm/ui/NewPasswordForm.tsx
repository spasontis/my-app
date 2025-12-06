'use client';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

import { TextInput } from '@/shared/components/TextInput';
import { Text } from '@/shared/components/Text';
import { Button } from '@/shared/components/Button';
import { Stepper } from '@/shared/components/Stepper';

import { RecoverData } from '../../../types';

import { useNewPassword } from '../api';
import { DEFAULT_NEW_PASSWORD_VALUES } from '../constants';
import { newPasswordSchema } from '../model';
import { NewPasswordFields } from '../types';

import styles from '../../../ui/RecoverPage.module.css';

export const NewPasswordForm = ({ recoverData }: { recoverData: RecoverData }) => {
  const t = useTranslations('translation');

  const newPasswordMutation = useNewPassword();

  const {
    register,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPasswordFields>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: DEFAULT_NEW_PASSWORD_VALUES,
  });

  const onSubmit = handleSubmit((values) => {
    newPasswordMutation.mutate({
      email: recoverData.email,
      password: values.password,
      token: recoverData.token,
    });
  });

  useEffect(() => setFocus('password'), [setFocus]);

  return (
    <form onSubmit={onSubmit}>
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
        //   loading={newPasswordMutation.isPending}
        fullWidth
      >
        {t('auth.button.signUp')}
      </Button>
      <Stepper className={styles.stepper} steps={3} current={3}></Stepper>
    </form>
  );
};
