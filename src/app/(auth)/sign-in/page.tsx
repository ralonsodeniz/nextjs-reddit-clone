import Link from 'next/link';

import { cn } from '@/lib';
import { ROUTES } from '@/constants/routes';
import { buttonVariants } from '@/components/ui/Button';
import SignIn from '@/components/SignIn';
import { EN } from '@/locale/en';

const classname = {
  mainContainer: 'absolute inset-0',
  innerContainer:
    'h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20',
  link: [buttonVariants({ variant: 'ghost' }), 'self-start', '-mt-20'],
};

const SignInPage = () => {
  return (
    <section className={cn(classname.mainContainer)}>
      <div className={cn(classname.innerContainer)}>
        <Link href={ROUTES.home.href} className={cn(classname.link)}>
          {EN.routes.home}
        </Link>
        <SignIn />
      </div>
    </section>
  );
};

export default SignInPage;
