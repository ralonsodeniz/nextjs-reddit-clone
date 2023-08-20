import Link from 'next/link';

import { classname } from '@/app/create/styles';
import Create from '@/components/forms/Create';
import { ROUTES } from '@/constants/routes';
import { EN } from '@/locale/en';

export const metadata = {
  description: 'Create a new community',
  title: 'Create a community',
};

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
    <Create />
  </section>
);

export default CreatePage;
