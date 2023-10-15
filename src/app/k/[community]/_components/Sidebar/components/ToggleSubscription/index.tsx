'use client';

import { useTransition } from 'react';

import { toggleSubscriptionAction } from '@/actions/subscription';
import Button from '@/components/ui/Button';
import { useToast } from '@/components/ui/Toast/hooks/use-toast';
import { cn } from '@/lib/classnames';
import { EN } from '@/locale/en';

const classname = {
  button: cn('mt-4 self-end'),
};

const ToggleSubscription = ({
  communityId,
  label,
  subscribed,
}: {
  communityId: string;
  label: string;
  subscribed: boolean;
}) => {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleToggleSubscription = () =>
    startTransition(() => {
      toggleSubscriptionAction(communityId)
        .then(() =>
          toast({
            description:
              EN.layout.community.sidebar.subscribeToggle(subscribed),
          }),
        )
        .catch(() =>
          toast({
            description:
              EN.layout.community.sidebar.subscribeToggleError(subscribed),
            variant: 'destructive',
          }),
        );
    });

  return (
    <Button
      className={classname.button}
      isLoading={isPending}
      size="sm"
      onClick={handleToggleSubscription}
    >
      {label}
    </Button>
  );
};

export default ToggleSubscription;
