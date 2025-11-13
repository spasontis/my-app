import { TokenPayload } from '../types';

export const mapTokenPayload = (payload: TokenPayload) => {
  const { sub, login, email, role } = payload;

  return {
    isAuthenticated: true as const,
    id: sub,
    login,
    email,
    role,
  };
};
