import { cn } from '@/lib/classnames';

export const classname = {
  button: cn('mt-4'),
  input: cn(' text-sm'),
  label: cn('text-xl font-medium'),
  message: (error: boolean) => cn('text-xs', { 'text-foreground': !error }),
};
