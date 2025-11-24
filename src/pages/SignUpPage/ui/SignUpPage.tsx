import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { usePageTitle } from '@/shared/hooks';

import { CreateAccountForm } from '../forms/CreateAccountForm';
import { SignUpForm } from '../forms/SignUpForm';
import { VerifyEmailForm } from '../forms/VerifyEmailForm';

import { DEFAULT_SIGN_UP_DATA } from '../constants';
import { SignUpData } from '../types';

export const SignUpPage = () => {
  const t = useTranslations('translation');

  const [step, setStep] = useState<number>(1);
  const [signUpData, setSignUpData] = useState<SignUpData>(DEFAULT_SIGN_UP_DATA);

  const onNext = () => setStep((prev) => prev + 1);

  usePageTitle(t('auth.title.signUp'));

  return (
    <>
      {step === 1 && <SignUpForm setSignUpData={setSignUpData} onNext={onNext} />}
      {step === 2 && (
        <VerifyEmailForm signUpData={signUpData} setSignUpData={setSignUpData} onNext={onNext} />
      )}
      {step === 3 && <CreateAccountForm signUpData={signUpData} />}
    </>
  );
};
