import z from 'zod';
import { twoFactorSchema } from '../model';

export type TwoFactorFields = z.infer<typeof twoFactorSchema>;

export type TwoFactorData = {
  login: string;
  token: string;
};
