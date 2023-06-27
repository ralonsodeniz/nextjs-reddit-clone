import { cn } from '@/lib';
import Link from 'next/link';
import Image from 'next/image';

import { IMAGES_ROUTES, ROUTES } from '@/constants/routes';
import { buttonVariants } from '@/components/ui/Button';
import { EN } from '@/locale/en';

const classname = {
  header:
    'fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-200 z-10 py-2',
  container:
    'container max-w-7xl h-full flex items-center justify-between gap-2',
  logoLink: 'flex gap-2 items-center',
  logoWrapper: 'relative h-12 w-12 sm:h-10 sm:w-10',
  hiddenText: 'hidden text-zinc-700 text-sm font-medium sm:block',
};

const Navbar = () => {
  return (
    <header className={cn(classname.header)}>
      <div className={cn(classname.container)}>
        <Link href={ROUTES.home.href} className={cn(classname.logoLink)}>
          <div className={cn(classname.logoWrapper)}>
            <Image
              className={cn('object-contain')}
              src={IMAGES_ROUTES.logo}
              fill
              alt="nextlogo"
              sizes="(min-width: 640) 2.5rem, 3rem"
            />
          </div>
          <span className={cn(classname.hiddenText)}>{EN.navBar.title}</span>
        </Link>
        <Link href={ROUTES.signIn.href} className={cn(buttonVariants())}>
          {EN.routes.signIn}
        </Link>
      </div>
    </header>
  );
};
export default Navbar;
