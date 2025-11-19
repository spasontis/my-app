import { z } from 'zod';

export const signUpSchema = z
  .object({
    login: z.string().nonempty({ error: 'auth.placeholder.enterLogin' }),
    password: z
      .string()
      .min(6, 'auth.text.passwordLength')
      .refine((val) => /^[A-Za-z0-9]+$/.test(val), { error: 'auth.text.passwordLatin' })
      .refine((val) => /[A-Z]/.test(val), { error: 'auth.text.passwordUpperCase' })
      .refine((val) => /[a-z]/.test(val), { error: 'auth.text.passwordLowerCase' })
      .refine((val) => /\d/.test(val), { error: 'auth.text.passwordNumber' })
      .nonempty({ error: 'auth.placeholder.enterPassword' }),
    repeatPassword: z.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    error: 'auth.text.passwordMismatch',
    path: ['repeatPassword'],
  });

export const codeSchema = z.object({
  code: z.string().nonempty({ error: 'auth.placeholder.enterCode' }),
});

export const emailSchema = z.object({
  email: z
    .email({ error: 'auth.text.emailWrong' })
    .nonempty({ error: 'auth.placeholder.enterEmail' }),
});
