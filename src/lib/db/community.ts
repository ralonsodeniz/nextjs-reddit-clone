import { PAGINATION_LIMIT } from '@/constants/db';
import { db } from '@/lib/db/index';
import { subscribeToCommunity } from '@/lib/db/subscription';

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
  await subscribeToCommunity(community.id, creatorId);

  return community;
};

export const getCommunityInfo = (name: string) =>
  db.community.findUnique({
    include: {
      creator: { select: { name: true } },
      posts: {
        include: { Community: true, author: true, comments: true, votes: true },
        take: PAGINATION_LIMIT,
      },
    },
    where: { name },
  });
