import { cn } from '@/lib/classnames';

export const classname = {
  button: cn('mt-4'),
  clientSideDescription: (error: boolean) =>
    cn('pb-2 text-xs', !error && 'text-foreground'),
  description: (error: boolean) => cn('pb-2 text-xs', !error && 'pb-8'),
  label: cn('text-xl font-medium'),
  message: cn(' pb-2 text-xs  text-destructive'),
  nameInput: cn('pl-7 text-sm'),
  namePrefix: cn(
    'absolute inset-y-0 left-0 grid w-8 place-items-center text-sm text-muted-foreground',
  ),
  nameWrapper: cn('relative'),
};
