import { queryClient } from '@/shared/configs/queryClient';
import { jwtDecode } from 'jwt-decode';

import { TokenPayload } from '../types/index';

import { INITIAL_STATE, ONE_SECOND } from '../constants';
import { useAppStore } from '../hooks';
import { mapTokenPayload } from '../mappers';

export const setAuth = (accessToken: string) => {
  const payload = jwtDecode<TokenPayload>(accessToken);
  const mappedPayload = mapTokenPayload(payload);
  const tokenExpiry = payload.exp ? payload.exp * ONE_SECOND : 0;

  useAppStore.setState({
    user: {
      ...mappedPayload,
      accessToken,
      tokenExpiry,
    },
  });
};

export const clearAppStore = () => {
  useAppStore.setState(INITIAL_STATE);
  queryClient.clear();
};
