import Image from 'next/image';
import Link from 'next/link';

import SignInLink from '@/components/layout/Navbar/components/SignInLink';
import { ThemeToggle } from '@/components/layout/Navbar/components/ThemeToggle';
import UserMenu from '@/components/layout/Navbar/components/UserMenu';
import { IMAGES_ROUTES, ROUTES } from '@/constants/routes';
import { getAuthSession } from '@/lib/auth';
import { cn } from '@/lib/classnames';
import { EN } from '@/locale/en';

const classname = {
  header: cn(
    'fixed inset-x-0 top-0 z-10 h-fit border-b border-zinc-200 bg-foreground py-2',
  ),
  container: cn(
    'container flex h-full max-w-7xl items-center justify-between gap-2',
  ),
  logoLink: cn('flex items-center gap-2'),
  logoWrapper: cn('relative h-12 w-12 sm:h-10 sm:w-10'),
  hiddenText: cn('hidden text-sm font-medium text-background sm:block'),
  signInContainer: cn('flex items-center gap-2'),
  signInLink: cn('disabled:pointer-events-none disabled:opacity-50'),
};

const Index = async () => {
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
          <span className={classname.hiddenText}>{EN.navBar.title}</span>
        </Link>
        <div className={classname.signInContainer}>
          {!session?.user ? <SignInLink /> : <UserMenu user={session.user} />}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
export default Index;
