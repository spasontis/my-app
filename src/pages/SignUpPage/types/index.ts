import z from 'zod';
import { signUpSchema, accountSchema, codeSchema } from '../model';

export type SignUpFields = z.infer<typeof signUpSchema>;
export type CodeFields = z.infer<typeof codeSchema>;
export type AccountFields = z.infer<typeof accountSchema>;

export interface NewAccountData {
  email: string;
  login: string;
  password: string;
  code: string;
}
