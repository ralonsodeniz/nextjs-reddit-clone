import { cn } from '@/lib/classnames';
import Link from 'next/link';
import Image from 'next/image';

import { IMAGES_ROUTES, ROUTES } from '@/constants/routes';
import { EN } from '@/locale/en';
import { getAuthSession } from '@/lib/auth';
import UserMenu from '@/components/layout/Navbar/components/UserMenu';
import SignInLink from '@/components/layout/Navbar/components/SignInLink';

const classname = {
  header:
    'fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-200 z-10 py-2',
  container:
    'container max-w-7xl h-full flex items-center justify-between gap-2',
  logoLink: 'flex gap-2 items-center',
  logoWrapper: 'relative h-12 w-12 sm:h-10 sm:w-10',
  hiddenText: 'hidden text-zinc-700 text-sm font-medium sm:block',
  signInLink: 'disabled:opacity-50 disabled:pointer-events-none',
};

const Index = async () => {
  const session = await getAuthSession();

  return (
    <header className={cn(classname.header)}>
      <div className={cn(classname.container)}>
        <Link href={ROUTES.home.href} className={cn(classname.logoLink)}>
          <div className={cn(classname.logoWrapper)}>
            <Image
              className={cn('object-contain')}
              src={IMAGES_ROUTES.logo}
              fill
              alt={EN.common.logoAlt}
              sizes="(min-width: 640) 2.5rem, 3rem"
            />
          </div>
          <span className={cn(classname.hiddenText)}>{EN.navBar.title}</span>
        </Link>
        {!session?.user ? <SignInLink /> : <UserMenu user={session.user} />}
      </div>
    </header>
  );
};
export default Index;
