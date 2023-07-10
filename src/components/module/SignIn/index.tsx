import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/classnames';
import { IMAGES_ROUTES, ROUTES } from '@/constants/routes';
import { EN } from '@/locale/en';
import UserAuth from '@/components/form/UserAuth';

const classname = {
  image: 'mx-auto',
  header: 'text-2xl font-semibold tracking-tight',
  licence: 'text-sm max-w-xs mx-auto',
  singUp: 'px-8 text-center text-sm text-zinc-700',
  link: 'hover:text-zinc-800 text-sm underline underline-offset-4',
};

const SignIn = () => (
  <>
    <Image
      alt={EN.common.logoAlt}
      src={IMAGES_ROUTES.logo}
      className={cn(classname.image)}
      width={24}
      height={24}
    />
    <h1 className={cn(classname.header)}>{EN.signIn.header}</h1>
    <p className={cn(classname.licence)}>{EN.signIn.licence}</p>
    <UserAuth />
  </>
);

export default SignIn;
