import Image from 'next/image';

import GoogleAuth from '@/components/auth/Google';
import { IMAGES_ROUTES } from '@/constants/routes';
import { cn } from '@/lib/classnames';
import { EN } from '@/locale/en';

const classname = {
  header: cn('text-2xl font-semibold tracking-tight'),
  image: cn('mx-auto'),
  licence: cn('mx-auto max-w-xs text-sm'),
};

const SignIn = () => (
  <>
    <Image
      alt={EN.common.logoAlt}
      src={IMAGES_ROUTES.logo}
      className={classname.image}
      width={24}
      height={24}
    />
    <h1 className={classname.header}>{EN.components.signIn.header}</h1>
    <p className={classname.licence}>{EN.components.signIn.licence}</p>
    <GoogleAuth />
  </>
);

export default SignIn;
