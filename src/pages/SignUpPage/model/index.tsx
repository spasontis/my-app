import { z } from 'zod';

export const signUpSchema = z.object({
  login: z.string().nonempty({ error: 'auth.placeholder.enterLogin' }),
  password: z
    .string()
    .min(6, 'auth.text.passwordRequirements')
    .nonempty({ error: 'auth.placeholder.enterPassword' }),
});
