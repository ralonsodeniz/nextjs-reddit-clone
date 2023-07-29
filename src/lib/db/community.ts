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
