import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { HttpStatus } from '@/shared/constants';
import { setAuth } from '@/shared/stores/app';

import { SignInFields } from '../types';
import { publicApi } from '@/shared/api';
import { useTranslations } from 'next-intl';
import { showToast } from '@/shared/components/Toast/actions';

export const useSignIn = () => {
  const t = useTranslations('translation');

  return useMutation({
    mutationFn: (dto: SignInFields) => publicApi.api.authControllerLogin(dto),
    onSuccess: ({ accessToken }) => {
      setAuth(accessToken);
      showToast({
        variant: 'success',
        title: t('notifications.successfulAuth.title'),
        description: t('notifications.successfulAuth.description'),
      });
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;

        if (status === HttpStatus.Unauthorized) {
          showToast({
            variant: 'failed',
            title: t('notifications.invalidCredentials.title'),
            description: t('notifications.invalidCredentials.description'),
          });
        } else if (status === HttpStatus.TooManyRequests) {
          showToast({
            variant: 'failed',
            title: t('notifications.rateLimitExceeded'),
            description: t('notifications.tryLater'),
          });
        } else if (status !== undefined && status >= HttpStatus.InternalServerError) {
          showToast({
            variant: 'failed',
            title: t('notifications.internalServer'),
            description: t('notifications.tryLater'),
          });
        } else {
          showToast({
            variant: 'failed',
            title: t('notifications.unknownError'),
            description: error.message,
          });
        }
      } else {
        showToast({
          variant: 'failed',
          title: t('notifications.unknownError'),
          description: String(error),
        });
      }
    },
  });
};
