'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

import { CodeInput } from '@/shared/components/CodeInput';
import { Button } from '@/shared/components/Button';
import { Stepper } from '@/shared/components/Stepper';

import { RecoverData } from '../../../types';

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

  const [code, setCode] = useState('');
  const [active, setActive] = useState(true);

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

  const { name, ref, onChange, onBlur } = register('token', {
    onChange: (e) => {
      setCode(e.target.value);
    },
    onBlur: () => setActive(false),
  });

  const onFocus = () => setActive(true);

  const onSubmit = handleSubmit((values) => {
    verifyRecoverMutation.mutate(
      { email: recoverData.email, token: values.token },
      {
        onSuccess: () => {
          setRecoverData((prev) => ({ ...prev, token: values.token }));
          onNext();
        },
      },
    );
  });

  useEffect(() => setFocus('token'), [setFocus]);

  return (
    <form onSubmit={onSubmit} className={styles.form} noValidate>
      <CodeInput
        destination='usermail@gmail.com'
        length={6}
        placeholder={t('auth.placeholder.enterCode')}
        invalid={!!errors.token}
        hint={errors.token?.message && t(errors.token.message)}
        name={name}
        value={code}
        active={active}
        inputRef={ref}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
      />
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
