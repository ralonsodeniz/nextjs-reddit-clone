import { classname } from '@/components/forms/Create/styles';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { EN } from '@/locale/en';

import type { TCreateCommunity } from '@/components/forms/Create/schema';
import type { Control } from 'react-hook-form';

const Name = ({ control }: { control: Control<TCreateCommunity> }) => {
  return (
    <FormField
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel className={classname.label}>
            {EN.components.forms.create.name.title}
          </FormLabel>
          <FormMessage
            className={classname.clientSideDescription(!!fieldState.error)}
          >
            {EN.components.forms.create.name.description}
          </FormMessage>
          <div className={classname.nameWrapper}>
            <FormControl>
              <Input
                className={classname.nameInput}
                placeholder="Community name"
                {...field}
              />
            </FormControl>
            <p className={classname.namePrefix}>k/</p>
          </div>
        </FormItem>
      )}
      name="name"
      control={control}
    />
  );
};

export default Name;
