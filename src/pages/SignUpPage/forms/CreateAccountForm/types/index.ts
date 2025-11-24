import z from 'zod';
import { createAccountSchema } from '../model';

export type CreateAccountFields = z.infer<typeof createAccountSchema>;

export interface CreateAccountData {
  email: string;
  login: string;
  password: string;
  token: string;
}
