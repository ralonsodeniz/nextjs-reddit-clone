import Link from 'next/link';

import { buttonVariants } from '@/components/ui/Button/styles';
import { ROUTES } from '@/constants/routes';
import { EN } from '@/locale/en';

const CommunityLink = ({
  communityName,
  onClick,
}: {
  communityName: string;
  onClick: () => void;
}) => (
  <Link
    className={buttonVariants({ variant: 'outline' })}
    href={ROUTES.community.href(communityName)}
    onClick={onClick}
  >
    {EN.pages.create.form.toastRedirect}
  </Link>
);

export default CommunityLink;
