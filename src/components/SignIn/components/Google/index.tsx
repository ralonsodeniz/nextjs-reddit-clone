'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';
import { signIn } from 'next-auth/react';

import Button from '@/components/ui/Button';
import { useToast } from '@/components/ui/Toast/hooks/use-toast';
import { cn } from '@/lib/classnames';
import { EN } from '@/locale/en';

const classname = {
  mailIcon: cn('mr-2 h-4 w-4'),
};

export const GoogleAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const onSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn('google', { callbackUrl: '/' });
    } catch (error) {
      toast({
        description: EN.components.signIn.google.error.description,
        title: EN.components.signIn.google.error.title,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button size="sm" isLoading={isLoading} onClick={onSignIn}>
      {!isLoading && <Mail className={classname.mailIcon} />}
      {EN.components.signIn.google.button}
    </Button>
  );
};

export default GoogleAuth;
