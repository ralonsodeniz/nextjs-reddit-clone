import * as z from 'zod';

export const createCommunitySchema = z.object({
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(23, 'Name must be 50 characters maximum'),
});

export type TCreateCommunity = z.infer<typeof createCommunitySchema>;
