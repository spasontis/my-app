import z from 'zod';
import { signUpSchema, emailSchema, codeSchema } from '../model';

export type SignUpFields = z.infer<typeof signUpSchema>;

export type EmailFields = z.infer<typeof emailSchema>;
export type CodeFields = z.infer<typeof codeSchema>;

export interface SignUpData {
  email: string;
  code: string;
}
