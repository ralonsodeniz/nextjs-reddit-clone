import { z } from 'zod';

export const quickPostSchema = z.object({
  content: z
    .string()
    .trim()
    .min(1, 'Post must be at least 1 char')
    .max(255, 'Post must be 255 chars maximum'),
});

export type TQuickPost = z.infer<typeof quickPostSchema>;
