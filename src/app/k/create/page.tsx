import Link from 'next/link';

import { classname } from '@/app/k/create/styles';
import CreateForm from '@/components/forms/Create';
import { ROUTES } from '@/constants/routes';
import { EN } from '@/locale/en';

const CreatePage = () => (
  <section className={classname.container}>
    <h1 className={classname.title}>
      <span>{EN.pages.create.title}</span>
      <Link
        className={classname.link}
        href={ROUTES.create.subRoutes.serverAction.href}
      >
        {EN.pages.create.link}
      </Link>
    </h1>
    <hr className={classname.separator} />
    <CreateForm />
  </section>
);

export default CreatePage;
