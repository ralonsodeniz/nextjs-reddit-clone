import Link from 'next/link';
import { HomeIcon } from 'lucide-react';

import { buttonVariants } from '@/components/ui/Button/styles';
import { ROUTES } from '@/constants/routes';
import { getAuthSession } from '@/lib/auth';
import { cn } from '@/lib/classnames';
import { EN } from '@/locale/en';

const classname = {
  title: cn('text-3xl font-bold md:text-4xl'),
  grid: cn('grid grid-cols-1 gap-y-4 py-6 md:grid-cols-3 md:gap-x-4'),
  info: cn(
    'order-first h-fit overflow-hidden rounded-lg border border-gray-200 md:order-last',
  ),
  infoText: cn(
    'flex items-center gap-1.5 bg-foreground px-6 py-7 font-semibold text-background',
  ),
  homeIcon: cn('h-4 w-4'),
  leadText: cn(
    '-my-3 flex justify-between gap-x-4 divide-y divide-gray-100 px-6 py-7 text-sm leading-6 text-secondary-foreground',
  ),
  createLink: buttonVariants({
    className: cn('mx-7 mb-6 mt-4 w-[calc(100%-3.5rem)] cursor-pointer'),
  }),
};

const HomePage = async () => {
  const session = await getAuthSession();
  const title = session
    ? EN.home.welcome(session?.user.name ?? EN.common.userName)
    : EN.home.notSignedIn;

  return (
    <>
      <h1 className={classname.title}>{title}</h1>
      <section className={classname.grid}>
        <article className={classname.info}>
          <p className={classname.infoText}>
            <HomeIcon className={classname.homeIcon} />
            {EN.home.communityInfo.home}
          </p>
          <p className={classname.leadText}>{EN.home.communityInfo.lead}</p>
          <Link href={ROUTES.create.href} className={classname.createLink}>
            {EN.routes.create}
          </Link>
        </article>
      </section>
    </>
  );
};

export default HomePage;
