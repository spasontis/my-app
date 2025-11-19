import React, { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaGoogle, FaYandex } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

import { AuthLayout } from '@/shared/components/AuthLayout';
import { TextInput } from '@/shared/components/TextInput';
import { Button } from '@/shared/components/Button';
import { Text } from '@/shared/components/Text';
import { Stepper } from '@/shared/components/Stepper';

import { DEFAULT_EMAIL_VALUES } from '../constants';
import { emailSchema } from '../model';
import { EmailFields, SignUpData } from '../types';

import Link from 'next/link';

import styles from './SignUpPage.module.css';

export const EmailForm = ({
  setSignUpData,
  onNext,
}: {
  setSignUpData: React.Dispatch<React.SetStateAction<SignUpData>>;
  onNext: () => void;
}) => {
  const t = useTranslations('translation');

  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [recaptchaInvalid, setRecaptchaInvalid] = useState<boolean>(false);

  const {
    register,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailFields>({
    resolver: zodResolver(emailSchema),
    defaultValues: DEFAULT_EMAIL_VALUES,
  });

  const onEmailSubmit = handleSubmit((values) => {
    if (recaptchaValue) {
      console.log(values);
      setSignUpData((prev) => ({ ...prev, email: values.email }));
      onNext();
    } else {
      setRecaptchaInvalid(true);
    }
  });

  useEffect(() => setFocus('email'), [setFocus]);

  return (
    <form onSubmit={onEmailSubmit} className={styles.form} noValidate>
      <AuthLayout title={t('auth.title.signUp')}>
        <div className={styles.socials}>
          <Button icon={<FaGoogle />} variant='transparentWhite' size='sm' fullWidth>
            <Text>Google</Text>
          </Button>
          <Button icon={<FaYandex />} variant='transparentWhite' size='sm' fullWidth>
            <Text>Яндекс</Text>
          </Button>
        </div>
        <div className={styles.line}>
          <Text className={styles.or}>{t('auth.text.orContinueWith')}</Text>
        </div>
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
          sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTHA_SECRET_KEY as string}
          onChange={setRecaptchaValue}
        ></ReCAPTCHA>
        {recaptchaInvalid && !recaptchaValue && (
          <Text variant='text2' color='error' className={styles.captcha}>
            {t('auth.text.captchaInvalid')}
          </Text>
        )}
        <Button type='submit' size='md' variant='primary' className={styles.button} fullWidth>
          {t('common.continue')}
        </Button>
        <Stepper className={styles.stepper} steps={3} current={1}></Stepper>
        <div className={styles.footer}>
          <Text color='content1'>{t('auth.text.haveAccount')}</Text>
          <Text>
            <Link href={'./sign-in'}>{t('auth.text.signIn')}</Link>
          </Text>
        </div>
      </AuthLayout>
    </form>
  );
};
