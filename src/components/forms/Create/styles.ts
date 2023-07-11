import { cn } from '@/lib/classnames';

export const classname = {
  label: 'text-xl font-medium',
  description: (error: boolean) => cn('text-xs pb-2', !error && 'pb-8'),
  message: 'text-xs pb-2 text-destructive',
  nameWrapper: 'relative',
  namePrefix:
    'absolute text-sm left-0 w-8 inset-y-0 grid place-items-center text-zinc-400',
  nameInput: 'pl-7 text-sm',
  button: 'mt-4',
};
