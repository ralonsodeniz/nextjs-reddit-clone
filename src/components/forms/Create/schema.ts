import * as z from 'zod';

export const schema = z.object({
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be 50 characters maximum'),
});
