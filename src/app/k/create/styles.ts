import { cn } from '@/lib/classnames';

export const classname = {
  container: cn(
    'mx-auto flex h-full max-w-3xl flex-col justify-between space-y-6 rounded-lg p-4',
  ),
  error: cn('text-sm font-medium text-red-500'),
  link: cn('text-sm font-medium md:hover:cursor-pointer md:hover:underline'),
  separator: cn('h-px w-full bg-zinc-500'),
  title: cn(
    'flex flex-col justify-between text-xl font-semibold md:flex-row md:items-end',
  ),
};
