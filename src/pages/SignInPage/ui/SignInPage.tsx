import { useTranslations } from 'next-intl';

import { usePageTitle } from '@/shared/hooks';
import { EnterAccountForm } from '../forms/EnterAccountForm';
import { useState } from 'react';
import { DEFAULT_SIGN_IN_DATA } from '../constants';
import { SignInData } from '../types';
import { TwoFactorForm } from '../forms/TwoFactorForm';

export const SignInPage = () => {
  const t = useTranslations('translation');

  const [step, setStep] = useState<number>(1);
  const [signInData, setSignInData] = useState<SignInData>(DEFAULT_SIGN_IN_DATA);

  const onNext = () => setStep((prev) => prev + 1);

  usePageTitle(t('auth.title.signIn'));

  return (
    <>
      {step === 1 && <EnterAccountForm onNext={onNext} setSignInData={setSignInData} />}
      {step === 2 && <TwoFactorForm signInData={signInData} />}
    </>
  );
};
