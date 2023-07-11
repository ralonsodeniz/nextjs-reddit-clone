'use client';

import { useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { schema } from '@/components/forms/Create/schema';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { EN } from '@/locale/en';
import { cn } from '@/lib/classnames';
import { createCommunity } from '@/components/forms/Create/actions';

const classname = {
  label: 'text-xl font-medium',
  description: (error: boolean) =>
    cn('text-xs pb-2', !error && 'text-zinc-400'),
  nameWrapper: 'relative',
  namePrefix:
    'absolute text-sm left-0 w-8 inset-y-0 grid place-items-center text-zinc-400',
  nameInput: 'pl-7 text-sm',
  button: 'mt-4',
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
              <FormLabel className={cn(classname.label)}>
                {EN.create.form.name.title}
              </FormLabel>
              <FormMessage
                className={cn(classname.description(!!fieldState.error))}
              >
                {EN.create.form.name.description}
              </FormMessage>
              <div className={cn(classname.nameWrapper)}>
                <FormControl>
                  <Input
                    className={cn(classname.nameInput)}
                    placeholder="Community name"
                    {...field}
                  />
                </FormControl>
                <p className={cn(classname.namePrefix)}>k/</p>
              </div>
            </FormItem>
          )}
          name="name"
          control={form.control}
        />
        <Button
          className={cn(classname.button)}
          type="submit"
          disabled={isPending}
        >
          {EN.create.form.button}
        </Button>
      </form>
    </Form>
  );
};

export default CreateForm;
