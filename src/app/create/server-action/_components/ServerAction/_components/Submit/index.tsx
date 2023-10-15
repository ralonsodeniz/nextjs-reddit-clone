'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

import Button from '@/components/ui/Button';
import { ICON_POSITIONS } from '@/components/ui/Button/constants';
import { EN } from '@/locale/en';
import { classname } from '@/styles/forms/styles';

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
      {EN.pages.create.form.button}
    </Button>
  );
};

export default Submit;
