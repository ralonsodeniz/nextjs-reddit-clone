import { NextResponse } from 'next/server';
import { z } from 'zod';

import { createCommunitySchema } from '@/components/forms/Create/schema';
import { getAuthSession } from '@/lib/auth';
import { checkIfCommunityExists, createCommunity } from '@/lib/db/community';

import type { NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  try {
    const session = await getAuthSession();
    if (!session?.user)
      return NextResponse.json(
        { message: 'Not Authenticated' },
        { status: 401 },
      );

    const body = await req.json();
    const { communityName } = createCommunitySchema.parse(body);

    const communityExists = await checkIfCommunityExists(communityName);
    if (communityExists)
      return NextResponse.json(
        { message: 'Community already exists' },
        { status: 409 },
      );

    const community = await createCommunity(communityName, session.user.id);
    return NextResponse.json(community, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          errors: error.issues.map(issue => issue.message),
          message: 'Validation Error',
        },
        { status: 422 },
      );
    }
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Something went wrong while creating the community';

    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
};
