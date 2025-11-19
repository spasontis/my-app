import { useEffect, useState } from 'react';
import { FaGoogle, FaYandex } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

import { AuthLayout } from '@/shared/components/AuthLayout';
import { TextInput } from '@/shared/components/TextInput';
import { Button } from '@/shared/components/Button';
import { Text } from '@/shared/components/Text';
import { Stepper } from '@/shared/components/Stepper';
import { usePageTitle } from '@/shared/hooks';

import {
  DEFAULT_CODE_VALUES,
  DEFAULT_EMAIL_VALUES,
  DEFAULT_SIGN_UP_DATA,
  DEFAULT_SIGN_UP_VALUES,
} from '../constants';
import { codeSchema, emailSchema, signUpSchema } from '../model';
import { EmailFields, SignUpData, SignUpFields } from '../types';

import ReCAPTCHA from 'react-google-recaptcha';
import Link from 'next/link';

import styles from './SignUpPage.module.css';

export const SignUpPage = () => {
  const t = useTranslations('translation');

  const [step, setStep] = useState<number>(1);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [recaptchaInvalid, setRecaptchaInvalid] = useState<boolean>(false);
  const [signUpData, setSignUpData] = useState<SignUpData>(DEFAULT_SIGN_UP_DATA);

  const {
    register: emailRegister,
    setFocus: setEmailFocus,
    handleSubmit: handleEmailSubmit,
    formState: { errors: emailErrors },
  } = useForm<EmailFields>({
    resolver: zodResolver(emailSchema),
    defaultValues: DEFAULT_EMAIL_VALUES,
  });

  const {
    register: codeRegister,
    setFocus: setCodeFocus,
    handleSubmit: handleCodeSubmit,
    formState: { errors: codeErrors },
  } = useForm({ resolver: zodResolver(codeSchema), defaultValues: DEFAULT_CODE_VALUES });

  const {
    register,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFields>({
    resolver: zodResolver(signUpSchema),
    defaultValues: DEFAULT_SIGN_UP_VALUES,
  });

  const onEmailSubmit = handleEmailSubmit((values) => {
    if (recaptchaValue) {
      setSignUpData((prev) => ({ ...prev, email: values.email }));
      setStep(2);
      setCodeFocus('code');
    } else {
      setRecaptchaInvalid(true);
    }
  });

  const onCodeSubmit = handleCodeSubmit((values) => {
    setSignUpData((prev) => ({ ...prev, code: values.code }));
    setStep(3);
    setFocus('login');
  });

  const onSubmit = handleSubmit((values) => {
    setSignUpData((prev) => ({ ...prev, login: values.login, password: values.password }));
    console.log(signUpData);
  });

  useEffect(() => {
    setEmailFocus('email');
  }, [setEmailFocus]);

  usePageTitle(t('auth.title.signUp'));

  return (
    <>
      {step === 1 && (
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
              <Text className={styles.or}>{t('auth.text.or')}</Text>
            </div>
            <div className={styles.inputs}>
              <TextInput
                label={t('auth.label.email')}
                placeholder={t('auth.placeholder.enterEmail')}
                invalid={!!emailErrors.email}
                hint={emailErrors.email?.message && t(emailErrors.email.message)}
                {...emailRegister('email')}
              ></TextInput>
            </div>
            <div className={styles.container}>
              <Text variant='text2' color='content1'>
                {t('auth.text.emailRequirements')}
              </Text>
            </div>
            <ReCAPTCHA
              className={styles.captcha}
              sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTHA_SECRET_KEY as string}
              onChange={setRecaptchaValue}
            ></ReCAPTCHA>
            {recaptchaInvalid && (
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
      )}

      {step === 2 && (
        <form onSubmit={onCodeSubmit} className={styles.form} noValidate>
          <AuthLayout title={t('auth.title.verifyEmail')}>
            <div className={styles.inputs}>
              <TextInput
                label={t('auth.label.code')}
                placeholder={t('auth.placeholder.enterCode')}
                invalid={!!codeErrors.code}
                hint={codeErrors.code?.message && t(codeErrors.code?.message)}
                {...codeRegister('code')}
              ></TextInput>
            </div>
            <div className={styles.container}>
              <Text variant='text2' color='content1'>
                {t('auth.text.codeRequirements')}
              </Text>
            </div>
            <Button type='submit' size='md' variant='primary' className={styles.button} fullWidth>
              {t('common.accept')}
            </Button>
            <Stepper className={styles.stepper} steps={3} current={step}></Stepper>
          </AuthLayout>
        </form>
      )}
      {step === 3 && (
        <form onSubmit={onSubmit} className={styles.form} noValidate>
          <AuthLayout title={t('auth.title.account')}>
            <div className={styles.inputs}>
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
                {...register('password')}
              ></TextInput>
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
            <Stepper className={styles.stepper} steps={3} current={step}></Stepper>
          </AuthLayout>
        </form>
      )}
    </>
  );
};
