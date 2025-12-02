import z from 'zod';
import { signUpSchema } from '../model';

export type SignUpFields = z.infer<typeof signUpSchema>;

export type EnterEmailFields = {
  email: string;
};
