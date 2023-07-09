'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';
import { signIn } from 'next-auth/react';

import { cn } from '@/lib/classnames';
import Button from '@/components/ui/Button';
import { EN } from '@/locale/en';
import { useToast } from '@/components/ui/Toast/hooks/use-toast';

const classname = {
  mailIcon: 'w-4 h-4 mr-2',
};

export const UserAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const onSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn('google', { callbackUrl: '/' });
    } catch (error) {
      toast({
        title: EN.form.signIn.error.title,
        description: EN.form.signIn.error.description,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button size="sm" isLoading={isLoading} onClick={onSignIn}>
      {!isLoading && <Mail className={cn(classname.mailIcon)} />}
      {EN.form.signIn.google}
    </Button>
  );
};

export default UserAuth;
