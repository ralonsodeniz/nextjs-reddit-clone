import { cn } from '@/lib/classnames';
import { buttonVariants } from '@/components/ui/Button/styles';
import SignIn from '@/components/module/SignIn';

const classname = {
  container:
    'flex flex-col justify-center space-y-2 text-center sm:w-[400px] m-auto',
  link: [buttonVariants({ variant: 'ghost' }), 'self-start', '-mt-20'],
};

const SignInPage = () => {
  return (
    <section className={cn(classname.container)}>
      <SignIn />
    </section>
  );
};

export default SignInPage;
