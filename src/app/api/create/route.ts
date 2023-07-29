import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

import { createCommunitySchema } from '@/components/forms/Create/schema';
import { getAuthSession } from '@/lib/auth';
import { checkIfCommunityExists, createCommunity } from '@/lib/db/community';

export const POST = async (req: NextRequest) => {
  try {
    const session = await getAuthSession();
    if (!session?.user)
      return NextResponse.json(
        { message: 'Not Authenticated' },
        { status: 401 },
      );

    const body = await req.json();
    const { name } = createCommunitySchema.parse(body);

    const communityExists = await checkIfCommunityExists(name);
    if (communityExists)
      return NextResponse.json(
        { message: 'Community already exists' },
        { status: 409 },
      );

    const community = await createCommunity(name, session.user.id);
    return NextResponse.json(community, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: 'Validation Error',
          errors: error.issues.map(issue => issue.message),
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
