'use client';

import {
  useEffect,
  experimental_useEffectEvent as useEffectEvent,
} from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import CommunityLink from '@/components/forms/Create/components/CommunityLink';
import Errors from '@/components/forms/Create/components/Errors';
import Name from '@/components/forms/Create/components/Name';
import { createCommunitySchema } from '@/components/forms/Create/schema';
import { classname } from '@/components/forms/styles';
import Button from '@/components/ui/Button';
import { ICON_POSITIONS } from '@/components/ui/Button/constants';
import { Form } from '@/components/ui/Form';
import { useToast } from '@/components/ui/Toast/hooks/use-toast';
import { postCommunity } from '@/http/community';
import { HTTPError } from '@/http/utils/error';
import { EN } from '@/locale/en';

import type { TCreateCommunity } from '@/components/forms/Create/schema';

const Create = () => {
  const { toast } = useToast();
  const form = useForm<TCreateCommunity>({
    defaultValues: {
      name: '',
    },
    resolver: zodResolver(createCommunitySchema),
  });
  const {
    control,
    formState: { isSubmitSuccessful, isSubmitting },
    handleSubmit,
    reset,
  } = form;

  const onSubmit = async (values: TCreateCommunity) => {
    try {
      const newCommunity = await postCommunity(values);
      toast({
        action: dismiss => (
          <CommunityLink communityName={newCommunity.name} onClick={dismiss} />
        ),
        title: `${newCommunity.name} created successfully!`,
      });
    } catch (error) {
      if (error instanceof HTTPError)
        toast({
          description: error.errors && <Errors errors={error.errors} />,
          title: error.message,
          variant: 'destructive',
        });
    }
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Name control={control} />
        <Button
          className={classname.button}
          iconPosition={ICON_POSITIONS.RIGHT}
          isLoading={isSubmitting}
          type="submit"
        >
          {EN.components.forms.create.button}
        </Button>
      </form>
    </Form>
  );
};

export default Create;
