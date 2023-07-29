import { classname } from '@/components/forms/Create/styles';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { EN } from '@/locale/en';

const Name = ({ error }: { error: string }) => (
  <>
    <Label htmlFor="name" className={classname.label}>
      {EN.components.forms.create.name.title}
    </Label>
    <p className={classname.description(!!error)}>
      {EN.components.forms.create.name.description}
    </p>
    {!!error && <p className={classname.message}>{error}</p>}
    <div className={classname.nameWrapper}>
      <Input
        className={classname.nameInput}
        id="name"
        name="name"
        placeholder="Community name"
      />
      <p className={classname.namePrefix}>
        {EN.components.forms.create.name.prefix}
      </p>
    </div>
  </>
);

export default Name;