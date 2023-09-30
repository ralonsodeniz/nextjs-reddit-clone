import { classname } from '@/app/create/styles';
import ServerActionForm from '@/components/forms/Create/ServerAction';
import { EN } from '@/locale/en';

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
