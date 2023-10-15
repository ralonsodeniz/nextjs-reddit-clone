import { z } from 'zod';

export const formSchema = z.object({
  title: z
    .string({
      invalid_type_error: 'Title is required',
      required_error: 'Title is required',
    })
    .trim()
    .min(3, 'Title must be at least 3 chars')
    .max(128, 'Title must be 255 chars maximum'),
});

export const contentSchema = z.object({
  content: z
    .record(z.any(), {
      invalid_type_error: 'Post content is required',
      required_error: 'Post content is required',
    })
    .array()
    .nonempty('Post content is required'),
});

export const postSubmitSchema = formSchema.merge(contentSchema).extend({
  community: z.string({
    invalid_type_error: 'Community is required',
    required_error: 'Community is required',
  }),
});

export type TPostForm = z.infer<typeof formSchema>;

export type TPostSubmit = z.infer<typeof postSubmitSchema>;
