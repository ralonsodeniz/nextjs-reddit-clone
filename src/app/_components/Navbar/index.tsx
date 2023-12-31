import Image from 'next/image';
import Link from 'next/link';

import { IMAGES_ROUTES, ROUTES } from '@/constants/routes';
import { getAuthSession } from '@/lib/auth';
import { cn } from '@/lib/classnames';
import { EN } from '@/locale/en';

import SignInLink from './components/SignInLink';
import { ThemeToggle } from './components/ThemeToggle';
import UserMenu from './components/UserMenu';

const classname = {
  container: cn(
    'container flex h-full max-w-7xl items-center justify-between gap-2',
  ),
  header: cn(
    'fixed inset-x-0 top-0 z-10 h-fit border-b border-zinc-200 bg-foreground py-2',
  ),
  hiddenText: cn('hidden text-lg font-bold text-background sm:block'),
  logoLink: cn('flex items-center gap-6'),
  logoWrapper: cn('relative h-12 w-12 sm:h-10 sm:w-10'),
  signInContainer: cn('flex items-center gap-2'),
  signInLink: cn('disabled:pointer-events-none disabled:opacity-50'),
};

const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <header className={classname.header}>
      <div className={classname.container}>
        <Link href={ROUTES.home.href} className={classname.logoLink}>
          <div className={classname.logoWrapper}>
            <Image
              className={'object-contain'}
              src={IMAGES_ROUTES.logo}
              fill
              alt={EN.common.logoAlt}
              sizes="(min-width: 640) 2.5rem, 3rem"
            />
          </div>
          <span className={classname.hiddenText}>
            {EN.layout.root.navbar.title}
          </span>
        </Link>
        <div className={classname.signInContainer}>
          {!session?.user ? <SignInLink /> : <UserMenu user={session.user} />}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
export default Navbar;
