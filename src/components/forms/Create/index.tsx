'use client';

import { useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { createCommunity } from '@/components/forms/Create/actions';
import { schema } from '@/components/forms/Create/schema';
import Button from '@/components/ui/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { cn } from '@/lib/classnames';
import { EN } from '@/locale/en';

const classname = {
  label: cn('text-xl font-medium'),
  description: (error: boolean) =>
    cn('pb-2 text-xs', !error && 'text-zinc-400'),
  nameWrapper: cn('relative'),
  namePrefix: cn(
    'absolute inset-y-0 left-0 grid w-8 place-items-center text-sm text-zinc-400',
  ),
  nameInput: cn('pl-7 text-sm'),
  button: cn('mt-4'),
};

const CreateForm = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
    },
  });

  const handleSubmit = async (data: FormData) => {
    const isValid = await form.trigger();
    isValid && startTransition(() => createCommunity(data));
  };

  return (
    <Form {...form}>
      <form action={handleSubmit}>
        <FormField
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className={classname.label}>
                {EN.create.form.name.title}
              </FormLabel>
              <FormMessage
                className={classname.description(!!fieldState.error)}
              >
                {EN.create.form.name.description}
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
          control={form.control}
        />
        <Button className={classname.button} type="submit" disabled={isPending}>
          {EN.create.form.button}
        </Button>
      </form>
    </Form>
  );
};

export default CreateForm;
