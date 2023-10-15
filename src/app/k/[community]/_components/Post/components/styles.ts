import { cn } from '@/lib/classnames';

export const classname = {
  container: cn('relative mb-8'),
  markdown: cn(
    'prose prose-stone resize-none dark:prose-invert',
    'w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  ),
  message: cn('absolute text-xs'),
};
