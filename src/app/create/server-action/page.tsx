import { classname } from '@/app/create/styles';
import { EN } from '@/locale/en';

import ServerActionForm from './_components/ServerAction';

const CreatePage = () => {
  return (
    <section className={classname.container}>
      <h1 className={classname.title}>
        <span>{EN.pages.create.title}</span>
      </h1>
      <hr className={classname.separator} />
      <ServerActionForm />
    </section>
  );
};

export default CreatePage;
