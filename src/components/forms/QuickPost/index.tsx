'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, SendIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';

import Content from '@/components/forms/QuickPost/components/Content';
import { quickPostSchema } from '@/components/forms/QuickPost/schema';
import Button from '@/components/ui/Button';
import { Form } from '@/components/ui/Form';
import UserAvatar from '@/components/UserAvatar';
import { cn } from '@/lib/classnames';

import type { TQuickPost } from '@/components/forms/QuickPost/schema';
import type { Session } from 'next-auth';

interface IQuickPost {
  session: Session | null;
}

const classname = {
  container: cn('flex gap-4 rounded-md px-6 py-4 shadow shadow-foreground'),
  form: cn('flex-1'),
  loading: cn('animate-spin'),
};

const QuickPost = ({ session }: IQuickPost) => {
  const form = useForm<TQuickPost>({
    defaultValues: {
      content: '',
    },
    resolver: zodResolver(quickPostSchema),
  });
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = form;

  const onSubmit = async (values: TQuickPost) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(values);
  };

  return (
    <section className={classname.container}>
      <div className="flex flex-col gap-y-4">
        <UserAvatar user={session?.user || { image: null, name: null }} />
        <Button
          disabled={isSubmitting}
          form="content"
          type="submit"
          size="sm"
          variant="ghost"
        >
          {isSubmitting ? (
            <Loader2 className={classname.loading} />
          ) : (
            <SendIcon />
          )}
        </Button>
      </div>
      <Form {...form}>
        <form
          className={classname.form}
          id="content"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Content control={control} />
        </form>
      </Form>
    </section>
  );
};

export default QuickPost;