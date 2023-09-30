'use client';

import { classname } from '@/components/forms/Post/components/styles';
import { classname as formClassname } from '@/components/forms/styles';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { EN } from '@/locale/en';

import type { TPostForm } from '@/components/forms/Post/schema';
import type { Control } from 'react-hook-form';

const Title = ({ control }: { control: Control<TPostForm> }) => {
  return (
    <FormField
      render={({ field, formState }) => (
        <FormItem className={classname.container}>
          <FormControl>
            <Input
              className={formClassname.input}
              disabled={formState.isSubmitting}
              placeholder={EN.components.forms.post.titlePlaceholder}
              {...field}
            />
          </FormControl>
          <FormMessage className={classname.message} />
        </FormItem>
      )}
      name="title"
      control={control}
    />
  );
};

export default Title;
