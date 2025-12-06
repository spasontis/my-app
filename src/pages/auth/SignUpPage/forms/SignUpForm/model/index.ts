import { z } from 'zod';

export const signUpSchema = z.object({
  email: z
    .email({ error: 'auth.text.emailInvalid' })
    .nonempty({ error: 'auth.placeholder.enterEmail' }),
});
