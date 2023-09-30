'use client';

import { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, SendIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { createPostAction } from '@/actions/post';
import Editor from '@/components/forms/Post/components/Editor';
import Title from '@/components/forms/Post/components/Title';
import { contentSchema, formSchema } from '@/components/forms/Post/schema';
import Button from '@/components/ui/Button';
import { Form, FormMessage } from '@/components/ui/Form';
import { useToast } from '@/components/ui/Toast/hooks/use-toast';
import UserAvatar from '@/components/UserAvatar';
import { cn } from '@/lib/classnames';
import { EN } from '@/locale/en';

import type { TPostForm, TPostSubmit } from '@/components/forms/Post/schema';
import type { OutputData } from '@editorjs/editorjs';
import type { Session } from 'next-auth';
import type { ZodError, ZodIssue } from 'zod';

interface IPost {
  communityName: string;
  session: Session | null;
}

export interface IEditorActions {
  save: () => Promise<OutputData> | undefined;
}

const classname = {
  container: cn(
    'flex flex-col gap-4 rounded-md px-6 pb-2 pt-4 shadow shadow-foreground',
  ),
  editorErrors: cn('text-xs'),
  editorErrorsList: cn('absolute bottom-[0.5rem]'),
  form: cn('relative w-full'),
  formTitle: cn('text-lg font-semibold'),
  loading: cn('animate-spin'),
  row: cn('mb-4 flex items-center gap-x-2'),
};

const Post = ({ communityName, session }: IPost) => {
  const [editorErrors, setEditorErrors] = useState<ZodIssue[]>();
  const editorActionsRef = useRef<IEditorActions>(null);
  const pathname = usePathname();
  const { toast } = useToast();
  const form = useForm<TPostForm>({
    defaultValues: {
      title: '',
    },
    resolver: zodResolver(formSchema),
  });
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = form;

  const onSubmit = async (values: TPostForm) => {
    let editorContent: TPostSubmit['content'] = [{}];
    try {
      const { blocks } = (await editorActionsRef.current?.save()) || {};
      const { content } = contentSchema.parse({
        content: blocks,
      });
      editorContent = content;
    } catch (error) {
      if (error instanceof z.ZodError) setEditorErrors(error.issues);
      return;
    }
    try {
      await createPostAction({
        ...values,
        community: communityName,
        content: editorContent,
      });
      toast({
        title: EN.components.forms.post.success,
      });
    } catch (error) {
      if (error instanceof Error) {
        const isZodError = error.message.startsWith('ZodError:');
        if (isZodError) {
          const zodError = error.message.split('ZodError:')[1];
          const zodErrorJSON = JSON.parse(zodError) as ZodError;
          const zodErrorIssues = zodErrorJSON.issues;
          const zodErrorIssuesMessages = zodErrorIssues.map(
            (issue: ZodIssue) => issue.message,
          );

          toast({
            description: zodErrorIssuesMessages.map((message: string) => (
              <p key={message}>{message}</p>
            )),
            title: EN.components.forms.post.zodError,
            variant: 'destructive',
          });
        } else {
          toast({
            title: error.message,
            variant: 'destructive',
          });
        }
      }
    }
  };

  return (
    <div className={classname.container}>
      {session ? (
        <>
          <div className={classname.row}>
            <UserAvatar user={session?.user || { image: null, name: null }} />
            <p className={classname.formTitle}>
              {EN.components.forms.post.description(pathname)}
            </p>
          </div>
          <Form {...form}>
            <form
              className={classname.form}
              id="post"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Title control={control} />
              <Editor ref={editorActionsRef} />
              <ul className={classname.editorErrorsList}>
                {editorErrors?.map(error => (
                  <li key={error.code}>
                    <FormMessage className={classname.editorErrors}>
                      {error.message}
                    </FormMessage>
                  </li>
                ))}
              </ul>
            </form>
          </Form>
          <Button
            aria-label={EN.components.forms.post.buttonLabel}
            disabled={isSubmitting}
            form="post"
            type="submit"
            size="icon"
            variant="ghost"
          >
            {isSubmitting ? (
              <Loader2 className={classname.loading} />
            ) : (
              <SendIcon />
            )}
          </Button>
        </>
      ) : (
        <p>{EN.components.forms.post.signIn}</p>
      )}
    </div>
  );
};

export default Post;
