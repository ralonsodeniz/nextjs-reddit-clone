'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { EN } from '@/locale/en';
import { classname as formClassname } from '@/styles/forms/styles';

import { classname } from '../styles';

import type { TPostForm } from '../../schema';
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
              placeholder={EN.pages.community.form.titlePlaceholder}
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
