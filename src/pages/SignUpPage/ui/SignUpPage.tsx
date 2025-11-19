import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { usePageTitle } from '@/shared/hooks';

import { DEFAULT_SIGN_UP_DATA } from '../constants';
import { SignUpData } from '../types';

import { EmailForm } from './EmailForm';
import { CodeForm } from './CodeForm';
import { AccountForm } from './AccountForm';

export const SignUpPage = () => {
  const t = useTranslations('translation');

  const [step, setStep] = useState<number>(1);
  const [signUpData, setSignUpData] = useState<SignUpData>(DEFAULT_SIGN_UP_DATA);

  const onNext = () => setStep((prev) => prev + 1);

  usePageTitle(t('auth.title.signUp'));

  return (
    <span>
      {step === 1 && <EmailForm setSignUpData={setSignUpData} onNext={onNext} />}
      {step === 2 && (
        <CodeForm signUpData={signUpData} setSignUpData={setSignUpData} onNext={onNext} />
      )}
      {step === 3 && <AccountForm signUpData={signUpData} />}
    </span>
  );
};
