// import CreateForm from '@/components/forms/Create';
import ServerActionForm from '@/components/forms/Create/ServerActionForm';
import { cn } from '@/lib/classnames';
import { EN } from '@/locale/en';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const classname = {
  container: cn(
    'mx-auto flex h-full max-w-3xl flex-col justify-between space-y-6 rounded-lg bg-white p-4',
  ),
  title: cn('text-xl font-semibold'),
  separator: cn('h-px w-full bg-zinc-500'),
};

const CreatePage = () => {
  return (
    <section className={classname.container}>
      <h1 className={classname.title}>{EN.create.title}</h1>
      <hr className={classname.separator} />
      {/*<CreateForm />*/}
      <ServerActionForm />
    </section>
  );
};

export default CreatePage;
