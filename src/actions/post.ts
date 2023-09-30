'use server';

import { postSubmitSchema } from '@/components/forms/Post/schema';
import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { checkIfCommunityExists } from '@/lib/db/community';
import { checkIfUserIsSubscribed } from '@/lib/db/subscription';

import type { TPostSubmit } from '@/components/forms/Post/schema';

export const createPostAction = async (data: TPostSubmit) => {
  const session = await getAuthSession();
  if (!session?.user) throw new Error('Not Authenticated');

  const parsedData = postSubmitSchema.safeParse(data);
  if (!parsedData.success)
    throw new Error(
      `${parsedData.error.name}: ${JSON.stringify(parsedData.error)}`,
    );
  const { community, content, title } = parsedData.data;

  const communityExists = await checkIfCommunityExists(community);
  if (!communityExists) throw new Error('Community does not exist');

  const subscriptionExists = await checkIfUserIsSubscribed(
    communityExists.id,
    session.user.id,
  );
  if (!subscriptionExists) throw new Error('You need to subscribe to post');

  await db.post.create({
    data: {
      authorId: session.user.id,
      communityId: communityExists.id,
      content: content,
      title: title,
    },
  });
};
