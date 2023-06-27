import Link from 'next/link';

import { cn } from '@/lib/classnames';
import { ROUTES } from '@/constants/routes';
import { buttonVariants } from '@/components/ui/Button';
import { EN } from '@/locale/en';
import SignIn from '@/components/module/SignIn';

const classname = {
  container: 'absolute inset-0',
  content:
    'h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20',
  link: [buttonVariants({ variant: 'ghost' }), 'self-start', '-mt-20'],
};

const SignInPage = () => {
  return (
    <section className={cn(classname.container)}>
      <div className={cn(classname.content)}>
        <Link href={ROUTES.home.href} className={cn(classname.link)}>
          {EN.routes.home}
        </Link>
        <SignIn />
      </div>
    </section>
  );
};

export default SignInPage;
