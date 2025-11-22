import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { usePageTitle } from '@/shared/hooks';

import { DEFAULT_NEW_ACCOUNT_DATA } from '../constants';
import { NewAccountData } from '../types';

import { SignUpForm } from './SignUpForm';
import { CodeForm } from './CodeForm';
import { CreateAccountForm } from './CreateAccountForm';

export const SignUpPage = () => {
  const t = useTranslations('translation');

  const [step, setStep] = useState<number>(1);
  const [newAccountData, setNewAccountData] = useState<NewAccountData>(DEFAULT_NEW_ACCOUNT_DATA);

  const onNext = () => setStep((prev) => prev + 1);

  usePageTitle(t('auth.title.signUp'));

  return (
    <span>
      {step === 1 && <SignUpForm setNewAccountData={setNewAccountData} onNext={onNext} />}
      {step === 2 && (
        <CodeForm
          newAccountData={newAccountData}
          setNewAccountData={setNewAccountData}
          onNext={onNext}
        />
      )}
      {step === 3 && <CreateAccountForm newAccountData={newAccountData} />}
    </span>
  );
};
