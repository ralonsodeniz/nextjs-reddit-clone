'use server';

import { revalidatePath } from 'next/cache';
import { ZodError } from 'zod';

import { createCommunitySchema } from '@/components/forms/Create/schema';
import { errors } from '@/components/forms/Create/ServerAction';
import { ROUTES } from '@/constants/routes';
import { getAuthSession } from '@/lib/auth';
import { checkIfCommunityExists, createCommunity } from '@/lib/db/community';

export const createCommunityAction = async (data: FormData) => {
  try {
    errors.clear();

    const session = await getAuthSession();
    if (!session?.user) {
      errors.set('server', 'Not Authenticated');
      return;
    }

    const dataObject = Object.fromEntries(data.entries());
    const parsedData = createCommunitySchema.parse(dataObject);

    const communityExists = await checkIfCommunityExists(parsedData.name);
    if (communityExists) {
      errors.set('server', 'Community already exists');
      return;
    }

    await createCommunity(parsedData.name, session.user.id);
  } catch (error) {
    if (error instanceof ZodError) {
      error.errors.forEach(error => {
        errors.set(error.path.join(''), error.message);
      });
      return;
    }
    errors.set('server', 'Something went wrong while creating the community');
  } finally {
    revalidatePath(ROUTES.create.href);
  }
};
