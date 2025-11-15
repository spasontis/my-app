import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { HttpStatus } from '@/shared/constants';
import { setAuth } from '@/shared/stores/app';

import { SignInFields } from '../types';
import { publicApi } from '@/shared/api';
import { useTranslations } from 'next-intl';

export const useSignIn = () => {
  const t = useTranslations('translation');

  return useMutation({
    mutationFn: (dto: SignInFields) => publicApi.api.authControllerLogin(dto),
    onSuccess: ({ accessToken }) => {
      setAuth(accessToken);
      console.log(accessToken);
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;

        if (status === HttpStatus.Unauthorized)
          console.log(t('notifications.invalidCredentials'), status);
        if (status === HttpStatus.TooManyRequests)
          console.log(t('notifications.rateLimitExceeded'), status);
        if (status !== undefined && status >= HttpStatus.InternalServerError)
          console.log(t('notifications.internalServer'), status);
        if (status !== HttpStatus.TooManyRequests && status !== HttpStatus.Unauthorized)
          console.log(t('notifications.unknownError'), error.message);
      } else {
        console.log('Unknown error', error);
      }
    },
  });
};
