'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ROUTES } from '@/constants/routes';
import { cn } from '@/lib/classnames';
import { buttonVariants } from '@/components/ui/Button/styles';
import { EN } from '@/locale/en';

const classname = {
  disabled: 'opacity-50 pointer-events-none',
};

const SignInLink = () => {
  const pathname = usePathname();
  const disabled = pathname === ROUTES.signIn.href;

  return (
    <Link
      href={ROUTES.signIn.href}
      className={cn(buttonVariants(), disabled && classname.disabled)}
    >
      {EN.routes.signIn}
    </Link>
  );
};

export default SignInLink;
