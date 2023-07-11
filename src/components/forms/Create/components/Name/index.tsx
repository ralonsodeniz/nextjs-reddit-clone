import { Label } from '@/components/ui/Label';
import { cn } from '@/lib/classnames';
import { classname } from '@/components/forms/Create/styles';
import { EN } from '@/locale/en';
import { Input } from '@/components/ui/Input';

const Name = ({ errors }: { errors: Map<string, string> }) => (
  <>
    <Label htmlFor="name" className={cn(classname.label)}>
      {EN.create.form.name.title}
    </Label>
    <p className={classname.description(!!errors.get('name'))}>
      {EN.create.form.name.description}
    </p>
    {!!errors.get('name') && (
      <p className={cn(classname.message)}>{errors.get('name')}</p>
    )}
    <div className={cn(classname.nameWrapper)}>
      <Input
        className={cn(classname.nameInput)}
        id="name"
        name="name"
        placeholder="Community name"
      />
      <p className={cn(classname.namePrefix)}>{EN.create.form.name.prefix}</p>
    </div>
  </>
);

export default Name;
