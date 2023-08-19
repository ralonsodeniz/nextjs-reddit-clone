import { PAGINATION_LIMIT } from '@/constants/db';
import { db } from '@/lib/db/index';

export const checkIfCommunityExists = async (name: string) =>
  db.community.findUnique({
    where: { name },
  });

export const createCommunity = async (name: string, creatorId: string) => {
  const community = await db.community.create({
    data: {
      creatorId: creatorId,
      name,
    },
  });
  await db.subscription.create({
    data: {
      communityId: community.id,
      userId: creatorId,
    },
  });

  return community;
};

export const getCommunityInfo = async (name: string) =>
  db.community.findUnique({
    include: {
      posts: {
        include: { Community: true, author: true, comments: true, votes: true },
        take: PAGINATION_LIMIT,
      },
    },
    where: { name },
  });
