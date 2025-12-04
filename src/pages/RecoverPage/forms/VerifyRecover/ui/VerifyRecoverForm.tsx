'use client';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

import { TextInput } from '@/shared/components/TextInput';
import { Button } from '@/shared/components/Button';
import { Text } from '@/shared/components/Text';
import { Stepper } from '@/shared/components/Stepper';
import { RecoverData } from '@/pages/RecoverPage/types';

import { DEFAULT_VERIFY_EMAIL_VALUES } from '../constants';
import { verifyEmailSchema } from '../model';
import { VerifyEmailFields } from '../types';

import styles from '../../../ui/RecoverPage.module.css';
import { useVerifyRecover } from '../api';

export const VerifyRecoverForm = ({
  recoverData,
  setRecoverData,
  onNext,
}: {
  recoverData: RecoverData;
  setRecoverData: React.Dispatch<React.SetStateAction<RecoverData>>;
  onNext: () => void;
}) => {
  const t = useTranslations('translation');

  const verifyRecoverMutation = useVerifyRecover();

  const {
    register,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyEmailFields>({
    resolver: zodResolver(verifyEmailSchema),
    defaultValues: DEFAULT_VERIFY_EMAIL_VALUES,
  });

  const onSubmit = handleSubmit((values) => {
    verifyRecoverMutation.mutate(
      { email: recoverData.email, token: values.code },
      {
        onSuccess: () => {
          setRecoverData((prev) => ({ ...prev, token: values.code }));
          onNext();
        },
      },
    );
  });

  useEffect(() => setFocus('code'), [setFocus]);

  return (
    <form onSubmit={onSubmit} className={styles.form} noValidate>
      <TextInput
        label={t('auth.label.code')}
        placeholder={t('auth.placeholder.enterCode')}
        invalid={!!errors.code}
        hint={errors.code?.message && t(errors.code?.message)}
        {...register('code')}
      ></TextInput>
      <Text variant='text2' color='content1' className={styles.container}>
        {t('auth.text.codeRequirements')}
      </Text>
      <Button
        type='submit'
        size='md'
        variant='primary'
        className={styles.button}
        loading={verifyRecoverMutation.isPending}
        fullWidth
      >
        {t('common.confirm')}
      </Button>
      <Stepper className={styles.stepper} steps={3} current={2}></Stepper>
    </form>
  );
};
