import { cn } from '@/lib/classnames';

export const classname = {
  label: cn('text-xl font-medium'),
  description: (error: boolean) => cn('pb-2 text-xs', !error && 'pb-8'),
  message: cn(' pb-2 text-xs  text-destructive'),
  clientSideDescription: (error: boolean) =>
    cn('pb-2 text-xs', !error && 'text-foreground'),
  nameWrapper: cn('relative'),
  namePrefix: cn(
    'absolute inset-y-0 left-0 grid w-8 place-items-center text-sm text-muted-foreground',
  ),
  nameInput: cn('pl-7 text-sm'),
  button: cn('mt-4'),
};
