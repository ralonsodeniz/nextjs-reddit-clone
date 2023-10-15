import { z } from 'zod';

export const createCommunitySchema = z.object({
  communityName: z
    .string()
    .trim()
    .min(3, 'Name must be at least 3 characters')
    .max(23, 'Name must be 50 characters maximum')
    .transform(value => value.replaceAll(' ', '-')),
});

export type TCreateCommunity = z.infer<typeof createCommunitySchema>;
