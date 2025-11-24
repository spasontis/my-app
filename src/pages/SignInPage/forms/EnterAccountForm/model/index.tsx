import { z } from 'zod';

export const signInSchema = z.object({
  login: z
    .string()
    .nonempty({ error: 'auth.placeholder.enterLogin' })
    .regex(/^[A-Za-z0-9]+$/, { error: 'auth.text.loginSymbols' }),
  password: z.string().nonempty({ error: 'auth.placeholder.enterPassword' }),
});
