'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

import { classname } from '@/components/forms/Create/styles';
import Button from '@/components/ui/Button';
import { ICON_POSITIONS } from '@/components/ui/Button/constants';
import { EN } from '@/locale/en';

const Submit = () => {
  // https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#experimental-useformstatus
  const { pending } = useFormStatus();

  return (
    <Button
      className={classname.button}
      type="submit"
      isLoading={pending}
      iconPosition={ICON_POSITIONS.RIGHT}
    >
      {EN.components.forms.create.button}
    </Button>
  );
};

export default Submit;
