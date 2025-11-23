import z from 'zod';
import { enterEmailSchema } from '../model';

export type EnterEmailFields = z.infer<typeof enterEmailSchema>;
