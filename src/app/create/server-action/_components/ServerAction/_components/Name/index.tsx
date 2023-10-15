import { classname } from '@/app/create/_components/Create/styles';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { EN } from '@/locale/en';
import { classname as formClassname } from '@/styles/forms/styles';

const Name = ({ error }: { error?: string[] }) => (
  <>
    <Label htmlFor="communityName" className={formClassname.label}>
      {EN.pages.create.form.name.title}
    </Label>
    <p className={classname.message(!!error)}>
      {error ? error.join(' ') : EN.pages.create.form.name.description}
    </p>
    <div className={classname.nameWrapper}>
      <Input
        className={classname.nameInput}
        id="communityName"
        name="communityName"
        placeholder="Community name"
        required
        minLength={3}
        maxLength={23}
      />
      <p className={classname.namePrefix}>{EN.common.communityPrefix}</p>
    </div>
  </>
);

export default Name;
