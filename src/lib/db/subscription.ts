import { db } from '@/lib/db/index';

export const subscribeToCommunity = (communityId: string, userId: string) =>
  db.subscription.create({
    data: {
      communityId,
      userId,
    },
  });

export const unsubscribeFromCommunity = (communityId: string, userId: string) =>
  db.subscription.delete({
    where: {
      userId_communityId: {
        communityId,
        userId,
      },
    },
  });

export const checkIfUserIsSubscribed = (communityId: string, userId: string) =>
  db.subscription.findFirst({
    where: {
      community: {
        id: communityId,
      },
      user: {
        id: userId,
      },
    },
  });

export const getSubscriptionsCount = (communityName: string) =>
  db.subscription.count({
    where: {
      community: {
        name: communityName,
      },
    },
  });
