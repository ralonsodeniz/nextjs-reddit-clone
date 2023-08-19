import { notFound } from 'next/navigation';

import QuickPost from '@/components/forms/QuickPost';
import { getAuthSession } from '@/lib/auth';
import { getCommunityInfo } from '@/lib/db/community';
import { EN } from '@/locale/en';

interface ICommunityPage {
  params: {
    community: string;
  };
}

const classname = {
  header: 'font-bold text-3xl md:text-4xl h-14',
};

const CommunityPage = async ({ params: { community } }: ICommunityPage) => {
  const session = await getAuthSession();
  const communityInfo = await getCommunityInfo(community);
  if (!communityInfo) notFound();

  return (
    <>
      <h1 className={classname.header}>
        {EN.common.communityPrefix}
        {communityInfo.name}
      </h1>
      <QuickPost session={session} />
    </>
  );
};

export default CommunityPage;
