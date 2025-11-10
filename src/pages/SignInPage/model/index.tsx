import { z } from 'zod';

export const signInSchema = z.object({
  login: z.string().nonempty({ error: 'auth.placehlolder.enterLogin' }),
  password: z.string().nonempty({ error: 'auth.placeholder.enterPassword' }),
});
