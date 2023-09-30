/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client';

import { useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { experimental_useFormState as useFormState } from 'react-dom';

// https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations#error-handling

import { createCommunityAction } from '@/actions/community';
import { classname } from '@/app/create/styles';
import Name from '@/components/forms/Create/ServerAction/components/Name';
import Submit from '@/components/forms/Create/ServerAction/components/Submit';
import { useToast } from '@/components/ui/Toast/hooks/use-toast';
import { EN } from '@/locale/en';

export interface IErrors {
  errors: { name: string[]; server: string } | null;
  success: string | null;
}

const initialState: IErrors = { errors: null, success: null };
const ServerActionForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const [state, formAction] = useFormState(createCommunityAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success) {
      toast({
        title: state.success,
      });
    }
  }, [state, toast]);

  return (
    <>
      <h1 className={classname.title}>
        <span>{EN.pages.create.title}</span>
        {state?.errors?.server && (
          <span className={classname.error}>{state.errors?.server}</span>
        )}
      </h1>
      <hr className={classname.separator} />
      <form action={formAction}>
        <Name error={state.errors?.name ?? ''} />
        <Submit />
      </form>
    </>
  );
};

export default ServerActionForm;
