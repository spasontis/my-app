import React, { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

import { TextInput } from '@/shared/components/TextInput';
import { Button } from '@/shared/components/Button';
import { Text } from '@/shared/components/Text';
import { Stepper } from '@/shared/components/Stepper';

import { SignUpData } from '../../../types';

import { useSignUp } from '../api';
import { DEFAULT_ENTER_EMAIL_VALUES } from '../constants';
import { signUpSchema } from '../model';
import { SignUpFields } from '../types';

import Link from 'next/link';

import styles from '../../../ui/SignUpPage.module.css';

export const SignUpForm = ({
  setSignUpData,
  onNext,
}: {
  setSignUpData: React.Dispatch<React.SetStateAction<SignUpData>>;
  onNext: () => void;
}) => {
  const t = useTranslations('translation');

  const signUpMutation = useSignUp();

  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [recaptchaInvalid, setRecaptchaInvalid] = useState<boolean>(false);

  const {
    register,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFields>({
    resolver: zodResolver(signUpSchema),
    defaultValues: DEFAULT_ENTER_EMAIL_VALUES,
  });

  const onSubmit = handleSubmit((values) => {
    if (recaptchaValue) {
      signUpMutation.mutate(
        { email: values.email },
        {
          onSuccess: () => {
            setSignUpData((prev) => ({ ...prev, email: values.email }));
            onNext();
          },
        },
      );
    } else {
      setRecaptchaInvalid(true);
    }
  });

  useEffect(() => setFocus('email'), [setFocus]);

  return (
    <form onSubmit={onSubmit} className={styles.form} noValidate>
      <TextInput
        label={t('auth.label.email')}
        placeholder={t('auth.placeholder.enterEmail')}
        invalid={!!errors.email}
        hint={errors.email?.message && t(errors.email.message)}
        {...register('email')}
      ></TextInput>
      <Text variant='text2' color='content1' className={styles.container}>
        {t('auth.text.emailRequirements')}
      </Text>
      <ReCAPTCHA
        className={styles.captcha}
        sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTHA_SITE_KEY as string}
        onChange={setRecaptchaValue}
      ></ReCAPTCHA>
      {recaptchaInvalid && !recaptchaValue && (
        <Text variant='text2' color='error' className={styles.captcha}>
          {t('auth.text.captchaInvalid')}
        </Text>
      )}
      <Button
        type='submit'
        size='md'
        variant='primary'
        className={styles.button}
        loading={signUpMutation.isPending}
        fullWidth
      >
        {t('common.continue')}
      </Button>
      <Stepper className={styles.stepper} steps={3} current={1}></Stepper>
      <div className={styles.footer}>
        <Text color='content1'>{t('auth.text.haveAccount')}</Text>
        <Text>
          <Link href={'./sign-in'}>{t('auth.text.signIn')}</Link>
        </Text>
      </div>
    </form>
  );
};
