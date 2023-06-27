import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib';
import { IMAGES_ROUTES, ROUTES } from '@/constants/routes';
import { EN } from '@/locale/en';

const classnames = {
  container:
    'container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]',
  signInContent: 'flex flex-col space-y-2 text-center',
  image: 'mx-auto',
  header: 'text-2xl font-semibold tracking-tight',
  licence: 'text-sm max-w-xs mx-auto',
  singUp: 'px-8 text-center text-sm text-zinc-700',
  link: 'hover:text-zinc-800 text-sm underline underline-offset-4',
};

const SignIn = () => (
  <section className={cn(classnames.container)}>
    <div className={cn(classnames.signInContent)}>
      <Image
        alt="logo"
        src={IMAGES_ROUTES.logo}
        className={cn(classnames.image)}
        width={24}
        height={24}
      />
      <h1 className={cn(classnames.header)}>{EN.signIn.header}</h1>
      <p className={cn(classnames.licence)}>{EN.signIn.licence}</p>
      <p className={cn(classnames.singUp)}>
        {EN.signIn.new}{' '}
        <Link className={cn(classnames.link)} href={ROUTES.signUp.href}>
          {EN.routes.signUp}
        </Link>
      </p>
    </div>
  </section>
);

export default SignIn;
