import { classname } from '@/components/forms/Create/styles';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { EN } from '@/locale/en';

const Name = ({ errors }: { errors: Map<string, string> }) => (
  <>
    <Label htmlFor="name" className={classname.label}>
      {EN.create.form.name.title}
    </Label>
    <p className={classname.description(!!errors.get('name'))}>
      {EN.create.form.name.description}
    </p>
    {!!errors.get('name') && (
      <p className={classname.message}>{errors.get('name')}</p>
    )}
    <div className={classname.nameWrapper}>
      <Input
        className={classname.nameInput}
        id="name"
        name="name"
        placeholder="Community name"
      />
      <p className={classname.namePrefix}>{EN.create.form.name.prefix}</p>
    </div>
  </>
);

export default Name;
