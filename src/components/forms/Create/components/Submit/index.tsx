'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

import { classname } from '@/components/forms/Create/styles';
import Button from '@/components/ui/Button';
import { EN } from '@/locale/en';

const Submit = () => {
  const { pending } = useFormStatus();

  return (
    <Button className={classname.button} type="submit" disabled={pending}>
      {EN.create.form.button}
    </Button>
  );
};

export default Submit;
