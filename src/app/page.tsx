import Link from 'next/link';

import { EN } from '@/locale/en';
import { getAuthSession } from '@/lib/auth';
import { cn } from '@/lib/classnames';
import { HomeIcon } from 'lucide-react';
import { buttonVariants } from '@/components/ui/Button/styles';
import { ROUTES } from '@/constants/routes';

const classname = {
  title: 'font-bold text-3xl md:text-4xl',
  grid: 'grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 py-6',
  info: 'overflow-hidden h-fit rounded-lg border border-gray-200 order-first md:order-last',
  infoText: 'font-semibold px-6 py-7 flex items-center gap-1.5 bg-gray-300',
  homeIcon: 'w-4 h-4',
  leadText:
    '-my-3 divide-y divide-gray-100 px-6 py-7 text-sm leading-6 flex justify-between gap-x-4 text-zinc-500',
  createLink: buttonVariants({ className: 'mt-4 mb-6 mx-7 w-[calc(100%-3.5rem)] cursor-pointer' }),
};

const HomePage = async () => {
  const session = await getAuthSession();
  const title = session
    ? EN.home.welcome(session?.user.name ?? EN.common.userName)
    : EN.home.notSignedIn;

  return (
    <>
      <h1 className={cn(classname.title)}>{title}</h1>
      <section className={cn(classname.grid)}>
        <article className={cn(classname.info)}>
          <p className={cn(classname.infoText)}>
            <HomeIcon className={cn(classname.homeIcon)} />
            {EN.home.communityInfo.home}
          </p>
          <p className={cn(classname.leadText)}>{EN.home.communityInfo.lead}</p>
          <Link href={ROUTES.create.href} className={cn(classname.createLink)}>
            {EN.routes.create}
          </Link>
        </article>
      </section>
    </>
  );
};

export default HomePage;
