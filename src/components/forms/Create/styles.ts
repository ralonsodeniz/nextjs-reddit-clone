import { cn } from '@/lib/classnames';

export const classname = {
  message: (hasError: boolean) =>
    cn(' mt-2 pb-2 text-xs font-medium', { 'text-destructive': hasError }),
  nameInput: cn('pl-7 text-sm'),
  namePrefix: cn(
    'absolute inset-y-0 left-0 grid w-8 place-items-center text-sm text-muted-foreground',
  ),
  nameWrapper: cn('relative'),
};
