'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

import Button from '@/components/ui/Button';
import { cn } from '@/lib/classnames';
import { classname } from '@/components/forms/Create/styles';
import { EN } from '@/locale/en';

const Submit = () => {
  const { pending } = useFormStatus();

  return (
    <Button className={cn(classname.button)} type="submit" disabled={pending}>
      {EN.create.form.button}
    </Button>
  );
};

export default Submit;
