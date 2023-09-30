import { classname } from '@/app/create/styles';
import ServerActionForm from '@/components/forms/Create/ServerAction';

const CreatePage = () => {
  return (
    <section className={classname.container}>
      <ServerActionForm />
    </section>
  );
};

export default CreatePage;
