import { db } from '@/lib/db/index';

export const checkIfCommunityExists = async (name: string) =>
  db.community.findUnique({
    where: { name },
  });

export const createCommunity = async (name: string, creatorId: string) => {
  const community = await db.community.create({
    data: {
      name,
      creatorId: creatorId,
    },
  });
  await db.subscription.create({
    data: {
      userId: creatorId,
      communityId: community.id,
    },
  });

  return community;
};
