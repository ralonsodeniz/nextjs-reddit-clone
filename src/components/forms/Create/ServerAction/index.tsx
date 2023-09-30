/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client';

import { useEffect, useRef } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { experimental_useFormState as useFormState } from 'react-dom';

// https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations#error-handling

import { createCommunityAction } from '@/actions/community';
import CommunityLink from '@/components/forms/Create/components/CommunityLink';
import Name from '@/components/forms/Create/ServerAction/components/Name';
import Submit from '@/components/forms/Create/ServerAction/components/Submit';
import { useToast } from '@/components/ui/Toast/hooks/use-toast';

export interface IErrors {
  errors: { name: string[]; server: string } | null;
  success: string | null;
}

const initialState: IErrors = { errors: null, success: null };
const ServerActionForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const [state, formAction] = useFormState(createCommunityAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    console.log('state', state);
    if (state.success) {
      toast({
        action: dismiss => (
          <CommunityLink
            communityName={
              (formRef.current?.['communityName'] as HTMLInputElement)?.value
            }
            onClick={dismiss}
          />
        ),
        title: state.success,
      });
      formRef.current?.reset();
    }
    if (state.errors?.server) {
      toast({
        title: state.errors.server,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <form action={formAction} ref={formRef}>
      <Name error={state.errors?.name} />
      <Submit />
    </form>
  );
};

export default ServerActionForm;
