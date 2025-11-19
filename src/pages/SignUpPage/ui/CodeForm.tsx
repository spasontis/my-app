import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

import { AuthLayout } from '@/shared/components/AuthLayout';
import { TextInput } from '@/shared/components/TextInput';
import { Button } from '@/shared/components/Button';
import { Text } from '@/shared/components/Text';
import { Stepper } from '@/shared/components/Stepper';

import { DEFAULT_CODE_VALUES } from '../constants';
import { codeSchema } from '../model';
import { CodeFields, SignUpData } from '../types';

import styles from './SignUpPage.module.css';

export const CodeForm = ({
  signUpData,
  setSignUpData,
  onNext,
}: {
  signUpData: SignUpData;
  setSignUpData: React.Dispatch<React.SetStateAction<SignUpData>>;
  onNext: () => void;
}) => {
  const t = useTranslations('translation');

  const {
    register,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<CodeFields>({
    resolver: zodResolver(codeSchema),
    defaultValues: DEFAULT_CODE_VALUES,
  });

  const onCodeSubmit = handleSubmit((values) => {
    console.log({ email: signUpData.email, ...values });
    setSignUpData((prev) => ({ ...prev, code: values.code }));
    onNext();
  });

  useEffect(() => setFocus('code'), [setFocus]);

  return (
    <form onSubmit={onCodeSubmit} className={styles.form} noValidate>
      <AuthLayout title={t('auth.title.verifyEmail')}>
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
        <Button type='submit' size='md' variant='primary' className={styles.button} fullWidth>
          {t('common.accept')}
        </Button>
        <Stepper className={styles.stepper} steps={3} current={2}></Stepper>
      </AuthLayout>
    </form>
  );
};
