import { notFound } from 'next/navigation';

import { getAuthSession } from '@/lib/auth';
import { getCommunityInfo } from '@/lib/db/community';
import { EN } from '@/locale/en';

import Post from './_components/Post';

export const generateMetadata = ({
  params,
}: {
  params: { community: string };
}) => ({
  description: `Welcome to ${EN.common.communityPrefix}${params.community}!`,
  title: `${EN.common.communityPrefix}${params.community}`,
});

interface ICommunityPage {
  params: {
    community: string;
  };
}

const CommunityPage = async ({ params: { community } }: ICommunityPage) => {
  const session = await getAuthSession();
  const communityInfo = await getCommunityInfo(community);
  if (!communityInfo) notFound();

  return (
    <>
      <Post communityName={community} session={session} />
    </>
  );
};

export default CommunityPage;
