import Image from 'next/image';

import { IMAGES_ROUTES, ROUTES } from '@/constants/routes';
import { cn } from '@/lib/classnames';
import { EN } from '@/locale/en';

import GoogleAuth from '../../auth/Google';

const classname = {
  image: cn('mx-auto'),
  header: cn('text-2xl font-semibold tracking-tight'),
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
    <h1 className={classname.header}>{EN.signIn.header}</h1>
    <p className={classname.licence}>{EN.signIn.licence}</p>
    <GoogleAuth />
  </>
);

export default SignIn;
