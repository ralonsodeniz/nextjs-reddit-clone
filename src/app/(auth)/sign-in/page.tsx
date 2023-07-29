import SignIn from '@/components/SignIn';
import { buttonVariants } from '@/components/ui/Button/styles';
import { cn } from '@/lib/classnames';

const classname = {
  container: cn(
    'm-auto flex flex-col justify-center gap-4 space-y-2 text-center sm:w-[400px]',
  ),
  link: cn([buttonVariants({ variant: 'ghost' }), '-mt-20 self-start']),
};

const SignInPage = () => {
  return (
    <section className={classname.container}>
      <SignIn />
    </section>
  );
};

export default SignInPage;
