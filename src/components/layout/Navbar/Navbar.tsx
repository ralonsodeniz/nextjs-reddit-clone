import { cn } from '@/lib';
import Link from 'next/link';
import Image from 'next/image';

import { ROUTES } from '@/constants/routes';
import { buttonVariants } from '@/components/ui/Button';

const Navbar = () => {
  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-200 z-10 py-2',
      )}
    >
      <div
        className={cn(
          'container max-w-7xl h-full flex items-center justify-between gap-2',
        )}
      >
        <Link href={ROUTES.home.href} className={cn('flex gap-2 items-center')}>
          <div className={cn('relative h-12 w-12 sm:h-10 sm:w-10')}>
            <Image
              className={cn('object-contain')}
              src="/next.svg"
              fill
              alt="nextlogo"
            />
          </div>
          <span
            className={cn('hidden text-zinc-700 text-sm font-medium sm:block')}
          >
            {ROUTES.home.text}
          </span>
        </Link>
        <Link href={ROUTES.signIn.href} className={cn(buttonVariants())}>
          {ROUTES.signIn.text}
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
