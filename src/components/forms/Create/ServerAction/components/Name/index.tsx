import { classname } from '@/components/forms/Create/styles';
import { classname as formClassname } from '@/components/forms/styles';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { EN } from '@/locale/en';

const Name = ({ error }: { error: string }) => (
  <>
    <Label htmlFor="name" className={formClassname.label}>
      {EN.components.forms.create.name.title}
    </Label>
    {!error ? (
      <p className={classname.serverSideDescription}>
        {EN.components.forms.create.name.description}
      </p>
    ) : (
      <p className={classname.message}>{error}</p>
    )}
    <div className={classname.nameWrapper}>
      <Input
        className={classname.nameInput}
        id="name"
        name="name"
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
