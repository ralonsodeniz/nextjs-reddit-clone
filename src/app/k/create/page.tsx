import { cn } from '@/lib/classnames';
import { EN } from '@/locale/en';
// import CreateForm from '@/components/forms/Create';
import ServerActionForm from '@/components/forms/Create/ServerActionForm';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const classname = {
  container:
    'flex flex-col h-full max-w-3xl mx-auto bg-white p-4 rounded-lg space-y-6 justify-between',
  title: 'text-xl font-semibold',
  separator: 'bg-zinc-500 h-px w-full',
};

const CreatePage = () => {
  return (
    <section className={cn(classname.container)}>
      <h1 className={cn(classname.title)}>{EN.create.title}</h1>
      <hr className={cn(classname.separator)} />
      {/*<CreateForm />*/}
      <ServerActionForm />
    </section>
  );
};

export default CreatePage;
