'use client';

import {
  useEffect,
  experimental_useEffectEvent as useEffectEvent,
} from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { createCommunity } from '@/components/forms/Create/actions';
import { schema } from '@/components/forms/Create/schema';
import { classname } from '@/components/forms/Create/styles';
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
import { EN } from '@/locale/en';

import type { TCreateCommunity } from '@/components/forms/Create/schema';

const CreateForm = () => {
  const form = useForm<TCreateCommunity>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
    },
  });

  const {
    control,
    formState: { isSubmitting, isSubmitSuccessful },
    handleSubmit,
    reset,
    trigger,
  } = form;

  const onSubmit = (values: TCreateCommunity) => createCommunity(values);
  const handleAction = async (data: FormData) => {
    const isValid = await trigger();
    isValid &&
      (await createCommunity(Object.fromEntries(data) as TCreateCommunity));
  };

  // https://react.dev/learn/separating-events-from-effects#declaring-an-effect-event
  const onSubmitSuccess = useEffectEvent(() => {
    reset();
  });

  useEffect(() => {
    onSubmitSuccess();
    // Effect Events are not reactive and must be omitted from dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  return (
    <Form {...form}>
      <form action={handleAction} onSubmit={handleSubmit(onSubmit)}>
        <FormField
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className={classname.label}>
                {EN.create.form.name.title}
              </FormLabel>
              <FormMessage
                className={classname.clientSideDescription(!!fieldState.error)}
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
          control={control}
        />
        <Button
          className={classname.button}
          type="submit"
          disabled={isSubmitting}
        >
          {EN.create.form.button}
        </Button>
      </form>
    </Form>
  );
};

export default CreateForm;
