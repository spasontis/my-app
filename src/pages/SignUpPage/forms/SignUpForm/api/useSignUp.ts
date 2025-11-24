import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { HttpStatus } from '@/shared/constants';
import { SignUpFields } from '../types';
import { publicApi } from '@/shared/api';
import { useTranslations } from 'next-intl';
import { showToast } from '@/shared/components/Toast/actions';

export const useSignUp = () => {
  const t = useTranslations('translation.notifications');

  return useMutation({
    mutationFn: (dto: SignUpFields) =>
      publicApi.api.authControllerSendRegisterVerificationToken(dto),
    onSuccess: () => {
      showToast({
        variant: 'default',
        title: t('auth.verificationCodeSent.title'),
        description: t('auth.verificationCodeSent.description'),
      });
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        if (status === HttpStatus.Conflict) {
          showToast({
            variant: 'failed',
            title: t('auth.emailExists.title'),
            description: t('auth.emailExists.description'),
          });
        }
      } else {
        showToast({
          variant: 'failed',
          title: t('common.unknownError'),
          description: String(error),
        });
      }
    },
  });
};
