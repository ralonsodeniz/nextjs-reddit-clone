'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Dialog, DialogContent } from '@/components/ui/Dialog';
import SignIn from '@/components/module/SignIn';

const SignInModal = () => {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onOpenChange={() => router.back()}>
      <DialogContent>
        <SignIn />
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
