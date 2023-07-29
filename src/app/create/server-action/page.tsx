import { classname } from '@/app/create/styles';
import ServerActionForm, {
  errors,
} from '@/components/forms/Create/ServerAction';
import { EN } from '@/locale/en';

const CreatePage = () => {
  const errorText = errors.get('server');

  return (
    <section className={classname.container}>
      <h1 className={classname.title}>
        <span>{EN.pages.create.title}</span>
        {errorText && <span className={classname.error}>{errorText}</span>}
      </h1>
      <hr className={classname.separator} />
      <ServerActionForm />
    </section>
  );
};

export default CreatePage;
