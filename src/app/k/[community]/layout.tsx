import { cn } from '@/lib/classnames';

import MobileSidebar from './_components/MobileSidebar';
import Sidebar from './_components/Sidebar';

import type { ReactNode } from 'react';

type CommunityLayoutProps = {
  children: ReactNode;
  params: {
    community: string;
  };
};

const classname = {
  container: cn('grid grid-cols-1 gap-y-4 py-7 md:grid-cols-3 md:gap-x-4'),
  content: cn('col-span-2 flex flex-col space-y-6'),
};

const Layout = ({ children, params: { community } }: CommunityLayoutProps) => {
  return (
    <section id="test" className={classname.container}>
      <article className={classname.content}>{children}</article>
      <Sidebar communityName={community} />
      <MobileSidebar communityName={community} />
    </section>
  );
};

export default Layout;
