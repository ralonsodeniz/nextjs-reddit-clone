'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { EN } from '@/locale/en';
import { classname as formClassname } from '@/styles/forms/styles';

import { classname } from '../../styles';

import type { TCreateCommunity } from '../../schema';
import type { Control } from 'react-hook-form';

const Name = ({ control }: { control: Control<TCreateCommunity> }) => (
  <FormField
    render={({ field, fieldState, formState }) => (
      <FormItem>
        <FormLabel className={formClassname.label}>
          {EN.pages.create.form.name.title}
        </FormLabel>
        <FormMessage className={formClassname.message(!!fieldState.error)}>
          {EN.pages.create.form.name.description}
        </FormMessage>
        <div className={classname.nameWrapper}>
          <FormControl>
            <Input
              className={classname.nameInput}
              disabled={formState.isSubmitting}
              placeholder="Community name"
              {...field}
            />
          </FormControl>
          <p className={classname.namePrefix}>k/</p>
        </div>
      </FormItem>
    )}
    name="communityName"
    control={control}
  />
);

export default Name;
