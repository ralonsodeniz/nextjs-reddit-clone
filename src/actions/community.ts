'use server';

import { ZodError } from 'zod';

import { createCommunitySchema } from '@/app/create/_components/Create/schema';
import { getAuthSession } from '@/lib/auth';
import { checkIfCommunityExists, createCommunity } from '@/lib/db/community';

import type { FormState } from '@/app/create/server-action/_components/ServerAction';

// when the action is used together with the new useFormState hook, it will receive the previous state as the first argument and the form data as the second argument
export const createCommunityAction = async (
  prevState: FormState,
  data: FormData,
) => {
  try {
    const session = await getAuthSession();
    if (!session?.user) {
      return { errors: { server: 'Not Authenticated' } };
    }

    const dataObject = Object.fromEntries(data.entries());
    const parsedData = createCommunitySchema.parse(dataObject);

    const communityExists = await checkIfCommunityExists(
      parsedData.communityName,
    );
    if (communityExists) {
      return { errors: { server: 'Community already exists' } };
    }

    await createCommunity(parsedData.communityName, session.user.id);
    return { success: `${parsedData.communityName} created successfully` };
  } catch (error) {
    if (error instanceof ZodError) {
      return { errors: { name: error.errors.map(error => error.message) } };
    }
    return {
      errors: { server: 'Something went wrong while creating the community' },
    };
  }
};
