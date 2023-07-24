import Link from 'next/link';

import CreateForm from '@/components/forms/Create';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/lib/classnames';
import { EN } from '@/locale/en';

const classname = {
  container: cn(
    'mx-auto flex h-full max-w-3xl flex-col justify-between space-y-6 rounded-lg p-4',
  ),
  link: cn('text-sm font-medium md:hover:cursor-pointer md:hover:underline'),
  separator: cn('h-px w-full bg-zinc-500'),
  title: cn(
    'flex flex-col justify-between text-xl font-semibold md:flex-row md:items-end',
  ),
};

const CreatePage = () => (
  <section className={classname.container}>
    <h1 className={classname.title}>
      <span>{EN.create.title}</span>
      <Link
        className={classname.link}
        href={ROUTES.create.subRoutes.serverAction.href}
      >
        {EN.create.link}
      </Link>
    </h1>
    <hr className={classname.separator} />
    <CreateForm />
  </section>
);

export default CreatePage;
