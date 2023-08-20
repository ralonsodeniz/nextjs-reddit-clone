'use server';

import { revalidatePath } from 'next/cache';

import { getAuthSession } from '@/lib/auth';
import {
  checkIfUserIsSubscribed,
  subscribeToCommunity,
  unsubscribeFromCommunity,
} from '@/lib/db/subscription';

export const toggleSubscriptionAction = async (communityId: string) => {
  const session = await getAuthSession();
  if (!session?.user) return;
  const subscribed = !!(await checkIfUserIsSubscribed(
    communityId,
    session.user.id,
  ));
  if (!subscribed) {
    await subscribeToCommunity(communityId, session.user.id);
  } else {
    await unsubscribeFromCommunity(communityId, session.user.id);
  }

  revalidatePath('/k/[community]');
};
