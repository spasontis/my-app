import { z } from 'zod';

export const signUpSchema = z.object({
  login: z.string().nonempty({ error: 'auth.placeholder.enterLogin' }),
  password: z
    .string()
    .min(6, 'auth.text.passwordLength')
    .refine((val) => /^[A-Za-z0-9]+$/.test(val), { error: 'auth.text.passwordLatin' })
    .refine((val) => /[A-Z]/.test(val), { error: 'auth.text.passwordUpperCase' })
    .refine((val) => /[a-z]/.test(val), { error: 'auth.text.passwordLowerCase' })
    .refine((val) => /\d/.test(val), { error: 'auth.text.passwordNumber' })
    .nonempty({ error: 'auth.placeholder.enterPassword' }),
});
