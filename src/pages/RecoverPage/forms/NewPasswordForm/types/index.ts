import { z } from 'zod';
import { newPasswordSchema } from '../model';

export type NewPasswordFields = z.infer<typeof newPasswordSchema>;
