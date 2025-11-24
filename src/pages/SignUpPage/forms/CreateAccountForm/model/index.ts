import { z } from 'zod';

export const createAccountSchema = z
  .object({
    login: z
      .string()
      .nonempty({ error: 'auth.placeholder.enterLogin' })
      .min(6, 'auth.text.loginLength')
      .regex(/^[A-Za-z0-9]+$/, { error: 'auth.text.loginSymbols' }),
    password: z
      .string()
      .nonempty({ error: 'auth.placeholder.enterPassword' })
      .min(8, 'auth.text.passwordLength')
      .regex(/^[A-Za-z0-9]+$/, { error: 'auth.text.passwordLatin' })
      .regex(/[A-Z]/, { error: 'auth.text.passwordUpperCase' })
      .regex(/[a-z]/, { error: 'auth.text.passwordLowerCase' })
      .regex(/\d/, { error: 'auth.text.passwordNumber' }),
    repeatPassword: z.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    error: 'auth.text.passwordMismatch',
    path: ['repeatPassword'],
  });
