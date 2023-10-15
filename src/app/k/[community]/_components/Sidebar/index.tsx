import { notFound } from 'next/navigation';
import { format } from 'date-fns';

import { getAuthSession } from '@/lib/auth';
import { cn } from '@/lib/classnames';
import { getCommunityInfo } from '@/lib/db/community';
import {
  checkIfUserIsSubscribed,
  getSubscriptionsCount,
} from '@/lib/db/subscription';
import { EN } from '@/locale/en';

import Item from './components/Item';
import ToggleSubscription from './components/ToggleSubscription';

interface ISidebar {
  communityName: string;
  isMobile?: boolean;
}

const classname = {
  communityName: cn('py-3 font-semibold'),
  descriptionList: cn(' divide-y divide-accent text-sm leading-6'),
  sidebar: (isMobile: boolean) =>
    cn('h-fit rounded-lg border border-foreground px-6 py-4', {
      'hidden md:flex md:flex-col': !isMobile,
      'md:hidden flex flex-col': isMobile,
    }),
};

const Sidebar = async ({ communityName, isMobile = false }: ISidebar) => {
  const communityInfo = await getCommunityInfo(communityName);
  if (!communityInfo) notFound();
  const session = await getAuthSession();
  const subscribed = session?.user
    ? !!(await checkIfUserIsSubscribed(communityInfo.id, session.user.id))
    : false;
  const subscriptionsCount = await getSubscriptionsCount(communityInfo.name);
  const isUserCreator = communityInfo.creatorId === session?.user?.id;
  const creatorName = isUserCreator
    ? EN.layout.community.sidebar.createdByYou
    : communityInfo.creator.name;
  const buttonLabel = subscribed
    ? EN.layout.community.sidebar.leave
    : EN.layout.community.sidebar.subscribe;

  return (
    <nav className={classname.sidebar(isMobile)}>
      <p className={classname.communityName}>
        {EN.layout.community.about} {EN.common.communityPrefix}
        {communityName}
      </p>
      <dl className={classname.descriptionList}>
        <Item
          content={
            <time dateTime={communityInfo.createdAt.toDateString()}>
              {format(communityInfo.createdAt, 'MMMM dd, yyyy')}
            </time>
          }
          title={EN.layout.community.sidebar.createdAt}
        />
        <Item
          content={subscriptionsCount}
          title={EN.layout.community.sidebar.members}
        />
        <Item
          content={creatorName}
          title={EN.layout.community.sidebar.createdBy}
        />
      </dl>
      {!isUserCreator && (
        <ToggleSubscription
          communityId={communityInfo.id}
          label={buttonLabel}
          subscribed={subscribed}
        />
      )}
    </nav>
  );
};

export default Sidebar;
