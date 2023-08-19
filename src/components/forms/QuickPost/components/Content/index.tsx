'use client';

import { usePathname } from 'next/navigation';

import { classname } from '@/components/forms/styles';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { EN } from '@/locale/en';

import type { TQuickPost } from '@/components/forms/QuickPost/schema';
import type { Control } from 'react-hook-form';

const Content = ({ control }: { control: Control<TQuickPost> }) => {
  const pathname = usePathname();

  return (
    <FormField
      render={({ field, fieldState, formState }) => (
        <FormItem className="flex h-full w-full flex-col gap-y-4">
          <FormControl>
            <Input
              className={classname.input}
              disabled={formState.isSubmitting}
              placeholder={EN.components.forms.quickPost.placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage className={classname.message(!!fieldState.error)}>
            {EN.components.forms.quickPost.description(pathname)}
          </FormMessage>
        </FormItem>
      )}
      name="content"
      control={control}
    />
  );
};

export default Content;
