'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { buttonVariants } from '@/components/ui/Button/styles';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/lib/classnames';
import { EN } from '@/locale/en';

const classname = {
  link: (disabled: boolean) =>
    cn(
      buttonVariants({ variant: 'secondary' }),
      disabled && 'pointer-events-none opacity-50',
    ),
};

const SignInLink = () => {
  const pathname = usePathname();
  const disabled = pathname === ROUTES.signIn.href;

  return (
    <Link href={ROUTES.signIn.href} className={classname.link(disabled)}>
      {EN.routes.signIn}
    </Link>
  );
};

export default SignInLink;
