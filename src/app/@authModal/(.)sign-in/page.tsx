'use client';

import { useRouter } from 'next/navigation';

import SignIn from '@/components/module/SignIn';
import { Dialog, DialogContent } from '@/components/ui/Dialog';
import { cn } from '@/lib/classnames';

const classname = {
  content: cn('flex flex-col justify-center space-y-2 text-center'),
};

const SignInModal = () => {
  const router = useRouter();

  return (
    <Dialog defaultOpen onOpenChange={() => router.back()}>
      <DialogContent className={classname.content}>
        <SignIn />
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
