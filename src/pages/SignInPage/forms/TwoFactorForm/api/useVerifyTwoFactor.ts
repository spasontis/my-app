import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { HttpStatus } from '@/shared/constants';
import { setAuth } from '@/shared/stores/app';

import { SignInFields } from '../types';
import { publicApi } from '@/shared/api';
import { useTranslations } from 'next-intl';
import { showToast } from '@/shared/components/Toast/actions';

export const useSignIn = () => {
  const t = useTranslations('translation.notifications');

  return useMutation({
    mutationFn: (dto: SignInFields) => publicApi.api.authControllerLogin(dto),
    onSuccess: (data) => {
      if ('accessToken' in data) {
        setAuth(data.accessToken);
        showToast({
          variant: 'success',
          title: t('auth.successfulAuth.title'),
          description: t('auth.successfulAuth.description'),
        });
      } else {
        showToast({
          variant: 'success',
          title: t('auth.twoFactorRequired.title'),
          description: t('auth.twoFactorRequired.description'),
        });
      }
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        if (status === HttpStatus.Unauthorized) {
          showToast({
            variant: 'failed',
            title: t('auth.invalidCredentials.title'),
            description: t('auth.invalidCredentials.description'),
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
