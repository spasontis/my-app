import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { HttpStatus } from '@/shared/constants';
import { CreateAccountData } from '../types';
import { publicApi } from '@/shared/api';
import { useTranslations } from 'next-intl';
import { showToast } from '@/shared/components/Toast/actions';

export const useCreateAccount = () => {
  const t = useTranslations('translation.notifications');

  return useMutation({
    mutationFn: (dto: CreateAccountData) => publicApi.api.authControllerRegister(dto),
    onSuccess: () => {
      showToast({
        variant: 'success',
        title: t('auth.accountCreated.title'),
        description: t('auth.accountCreated.description'),
      });
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        if (status === HttpStatus.Conflict) {
          showToast({
            variant: 'failed',
            title: t('auth.loginExist.title'),
            description: t('auth.loginExist.description'),
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
