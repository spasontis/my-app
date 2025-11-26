import { UserRole } from '@/shared/constants';

export type GuestStatus = 'guest';

export interface TokenPayload {
  sub: number;
  login: string;
  email: string;
  role: UserRole;
  exp: number;
}

export type Guest = {
  isAuthenticated: false;
  status: GuestStatus;
};

export type AuthenticatedUser = {
  isAuthenticated: true;
  id: number;
  login: string;
  email: string;
  role: UserRole;
  accessToken: string;
  tokenExpiry: number;
};

export type User = AuthenticatedUser | Guest;

export interface AppState {
  user: User;
}
